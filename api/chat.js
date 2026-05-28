import { GoogleGenerativeAI } from '@google/generative-ai';
import { z } from 'zod';
import { enforceJsonBody, getClientId, isRateLimited } from './_security.js';

const chatSchema = z.object({
    message: z.string().trim().min(3).max(1_200),
});

const RATE_LIMIT = {
    limit: 10,
    windowMs: 15 * 60 * 1000,
};

const GEMINI_MODELS = [
    process.env.GEMINI_MODEL || 'gemini-2.5-flash',
    'gemini-2.0-flash',
].filter((model, index, models) => model && models.indexOf(model) === index);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const limited = isRateLimited(`chat:${getClientId(req)}`, RATE_LIMIT);
    if (limited) {
        return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }

    const { body, error } = enforceJsonBody(req, 3_000);
    if (error) {
        return res.status(error.status).json({ error: error.message });
    }

    const parsed = chatSchema.safeParse(body);
    if (!parsed.success) {
        return res.status(400).json({ error: 'Invalid message' });
    }

    if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ error: 'GEMINI_API_KEY not configured' });
    }

    try {
        const prompt = `You are an expert Market Research Assistant for Gianluca Piazza, an Internationalization Manager. 
    Your goal is to help users understand market trends, international expansion strategies, and business opportunities.
    Keep your answers professional, concise, and insightful.
    Do not ask for confidential, sensitive, or personal data.
    
    User Question: ${parsed.data.message}`;

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        let lastError;

        for (const modelName of GEMINI_MODELS) {
            try {
                const model = genAI.getGenerativeModel({ model: modelName });
                const result = await model.generateContent(prompt);
                const response = await result.response;
                const text = response.text();

                return res.status(200).json({ response: text });
            } catch (error) {
                lastError = error;
                const retryable = error?.status === 429 || error?.status === 503;
                if (!retryable) {
                    throw error;
                }
                console.warn(`Gemini model ${modelName} unavailable, trying fallback`, error?.status);
            }
        }

        throw lastError;
    } catch (error) {
        console.error('Gemini API Error:', error);
        return res.status(500).json({ error: 'Failed to generate response' });
    }
}
