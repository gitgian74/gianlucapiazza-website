import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../hooks/use-language';
import { PageHeader } from '../components/shared/PageHeader';
import { Section } from '../components/shared/Section';
import { Button } from '../components/shared/Button';

export function NotFound() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-background pb-20">
            <PageHeader
                title={t.notFound.title}
                subtitle={t.notFound.subtitle}
            />
            <Section className="max-w-3xl text-center">
                <Link to="/">
                    <Button size="lg">
                        <ArrowLeft size={20} />
                        {t.notFound.cta}
                    </Button>
                </Link>
            </Section>
        </div>
    );
}
