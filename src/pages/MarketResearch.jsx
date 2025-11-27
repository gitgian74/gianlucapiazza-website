import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../hooks/use-language';
import { Send, Bot, User, Sparkles, Loader2, AlertCircle } from 'lucide-react';
import { PageHeader } from '../components/shared/PageHeader';
import { Section } from '../components/shared/Section';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';

export function MarketResearch() {
    const { t } = useLanguage();
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: "Hello! I'm your AI Market Research Assistant. I can help you analyze market trends, identify opportunities, or answer questions about international expansion. How can I assist you today?"
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch response');
            }

            const data = await response.json();
            setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
        } catch (err) {
            console.error('Chat error:', err);
            // Fallback for local dev without API
            if (window.location.hostname === 'localhost') {
                setTimeout(() => {
                    setMessages(prev => [...prev, {
                        role: 'assistant',
                        content: "I'm currently in local development mode and the API is not connected. In production, I will use Gemini 1.5 Pro to answer your market research questions accurately."
                    }]);
                    setIsLoading(false);
                }, 1000);
                return;
            }
            setError("I'm having trouble connecting right now. Please try again later.");
        } finally {
            if (window.location.hostname !== 'localhost') {
                setIsLoading(false);
            }
        }
    };

    return (
        <div className="min-h-screen bg-background pb-20">
            <PageHeader
                title="AI Market Research"
                subtitle="Ask me anything about global markets, expansion strategies, or industry trends."
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/30 text-primary border border-primary/50 mb-6">
                    <Sparkles size={16} />
                    <span className="text-sm font-medium">Powered by Gemini 1.5 Pro</span>
                </div>
            </PageHeader>

            <Section className="max-w-4xl">
                <Card className="h-[600px] flex flex-col shadow-2xl">
                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
                        {messages.map((msg, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                            >
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'assistant'
                                    ? 'bg-primary text-white'
                                    : 'bg-muted text-muted-foreground'
                                    }`}>
                                    {msg.role === 'assistant' ? <Bot size={20} /> : <User size={20} />}
                                </div>
                                <div className={`p-4 rounded-2xl max-w-[80%] ${msg.role === 'assistant'
                                    ? 'bg-card/50 text-foreground border border-border rounded-tl-none'
                                    : 'bg-primary text-white rounded-tr-none'
                                    }`}>
                                    <p className="leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                                </div>
                            </motion.div>
                        ))}
                        {isLoading && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-start gap-4"
                            >
                                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                                    <Bot size={20} />
                                </div>
                                <div className="bg-card/50 p-4 rounded-2xl rounded-tl-none border border-border flex items-center gap-3">
                                    <Loader2 size={20} className="text-primary animate-spin" />
                                    <span className="text-muted-foreground">Analyzing market data...</span>
                                </div>
                            </motion.div>
                        )}
                        {error && (
                            <div className="flex items-center gap-3 p-4 bg-red-900/20 border border-red-900/50 rounded-xl text-red-400 mx-auto max-w-md">
                                <AlertCircle size={20} />
                                <p>{error}</p>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-6 bg-card/50 border-t border-border">
                        <form onSubmit={handleSubmit} className="relative">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about a market (e.g., 'What are the trends in Italian coffee market?')"
                                className="w-full pl-6 pr-16 py-4 bg-input border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-white placeholder:text-muted-foreground/50 transition-all"
                                disabled={isLoading}
                            />
                            <Button
                                type="submit"
                                disabled={!input.trim() || isLoading}
                                className="absolute right-2 top-2 p-2 bg-primary text-white rounded-xl hover:bg-blue-50 disabled:opacity-50 disabled:hover:bg-primary transition-colors"
                                size="icon"
                            >
                                <Send size={20} />
                            </Button>
                        </form>
                        <p className="text-center text-xs text-slate-600 mt-4">
                            AI can make mistakes. Please verify important information.
                        </p>
                    </div>
                </Card>
            </Section>
        </div>
    );
}
