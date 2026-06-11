import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User, Sparkles, Loader2, AlertCircle } from 'lucide-react';
import { PageHeader } from '../components/shared/PageHeader';
import { Section } from '../components/shared/Section';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { useLanguage } from '../hooks/use-language';
import { trackSiteEvent } from '../components/shared/tracking';

const REQUEST_TIMEOUT_MS = 22_000;

async function fetchChatResponse(message) {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
            signal: controller.signal,
        });
        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
            const error = new Error(data.error || 'Failed to fetch response');
            error.status = response.status;
            throw error;
        }

        return data.response;
    } finally {
        window.clearTimeout(timeoutId);
    }
}

export function MarketResearch() {
    const { t } = useLanguage();
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: t.marketResearch.initialMessage
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const messagesEndRef = useRef(null);
    const isFirstRender = useRef(true);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        // Don't auto-scroll on mount, or the page would load already scrolled
        // down to the chat. Only follow newly added messages.
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
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
        trackSiteEvent('market_research_submit', {
            query_length_bucket: userMessage.length < 80 ? 'short' : userMessage.length < 240 ? 'medium' : 'long',
            message_count_before_submit: messages.length,
        });

        try {
            let responseText;
            try {
                responseText = await fetchChatResponse(userMessage);
            } catch (err) {
                if (err.status === 429 || err.name === 'AbortError') {
                    throw err;
                }
                await new Promise(resolve => window.setTimeout(resolve, 700));
                responseText = await fetchChatResponse(userMessage);
            }

            setMessages(prev => [...prev, { role: 'assistant', content: responseText }]);
            trackSiteEvent('market_research_success', {
                query_length_bucket: userMessage.length < 80 ? 'short' : userMessage.length < 240 ? 'medium' : 'long',
                response_length_bucket: responseText.length < 500 ? 'short' : responseText.length < 1500 ? 'medium' : 'long',
            });
        } catch (err) {
            console.error('Chat error:', err);
            trackSiteEvent('market_research_error', {
                error_type: err.status === 429 ? 'rate_limit' : err.name === 'AbortError' || err.status === 504 ? 'timeout' : 'server',
            });
            // Fallback for local dev without API
            if (window.location.hostname === 'localhost') {
                setTimeout(() => {
                    setMessages(prev => [...prev, {
                        role: 'assistant',
                        content: t.marketResearch.localFallback
                    }]);
                    setIsLoading(false);
                }, 1000);
            } else {
                const errorMessage = err.status === 429
                    ? t.marketResearch.rateLimit
                    : err.name === 'AbortError' || err.status === 504
                        ? t.marketResearch.timeout
                        : t.marketResearch.error;
                setError(errorMessage);
                setIsLoading(false);
            }
        } finally {
            if (window.location.hostname !== 'localhost') {
                setIsLoading(false);
            }
        }
    };

    return (
        <div className="min-h-screen bg-background pb-20">
            <PageHeader
                title={t.marketResearch.title}
                subtitle={t.marketResearch.subtitle}
                backgroundImage="/images/heroes/san-francisco.jpg"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/30 text-primary border border-primary/50 mb-6">
                    <Sparkles size={16} />
                    <span className="text-sm font-medium">{t.marketResearch.poweredBy}</span>
                </div>
            </PageHeader>

            <Section className="max-w-4xl px-3 sm:px-6">
                <Card className="liquid-glass border-white/20 h-[min(680px,calc(100vh-220px))] min-h-[460px] sm:h-[600px] flex flex-col shadow-2xl">
                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-4 sm:space-y-6 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
                        {messages.map((msg, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex items-start gap-3 sm:gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                            >
                                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'assistant'
                                    ? 'bg-primary text-white'
                                    : 'bg-muted text-muted-foreground'
                                    }`}>
                                    {msg.role === 'assistant' ? <Bot size={18} /> : <User size={18} />}
                                </div>
                                <div className={`p-3 sm:p-4 rounded-2xl max-w-[86%] sm:max-w-[80%] ${msg.role === 'assistant'
                                    ? 'bg-card/50 text-foreground border border-border rounded-tl-none'
                                    : 'bg-primary text-white rounded-tr-none'
                                    }`}>
                                    <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                                </div>
                            </motion.div>
                        ))}
                        {isLoading && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-start gap-4"
                            >
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                                    <Bot size={18} />
                                </div>
                                <div className="bg-card/50 p-3 sm:p-4 rounded-2xl rounded-tl-none border border-border flex items-center gap-3">
                                    <Loader2 size={18} className="text-primary animate-spin" />
                                    <span className="text-sm sm:text-base text-muted-foreground">{t.marketResearch.loading}</span>
                                </div>
                            </motion.div>
                        )}
                        {error && (
                            <div className="flex items-start gap-2 p-3 bg-red-900/20 border border-red-900/50 rounded-xl text-red-400 mx-auto max-w-md text-sm">
                                <AlertCircle size={18} className="mt-0.5 shrink-0" />
                                <p className="leading-snug">{error}</p>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-3 sm:p-6 bg-card/50 border-t border-border">
                        <form onSubmit={handleSubmit} className="relative">
                            <label htmlFor="market-research-input" className="sr-only">{t.marketResearch.placeholder}</label>
                            <input
                                id="market-research-input"
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                maxLength={1200}
                                placeholder={t.marketResearch.placeholder}
                                className="w-full pl-4 sm:pl-6 pr-14 sm:pr-16 py-3 sm:py-4 bg-input border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-white placeholder:text-muted-foreground/50 transition-all"
                                disabled={isLoading}
                            />
                            <Button
                                type="submit"
                                disabled={!input.trim() || isLoading}
                                aria-label={t.marketResearch.send}
                                className="absolute right-2 top-2 p-2 bg-primary text-white rounded-xl hover:bg-blue-50 disabled:opacity-50 disabled:hover:bg-primary transition-colors"
                                size="icon"
                            >
                                <Send size={20} />
                            </Button>
                        </form>
                        <p className="text-center text-xs text-muted-foreground mt-4">
                            {t.marketResearch.disclaimer}
                        </p>
                    </div>
                </Card>
            </Section>
        </div>
    );
}
