import { Linkedin } from 'lucide-react';
import { socialProfiles } from '../../lib/socialLinks';

const icons = {
    linkedin: Linkedin,
};

export function SocialLinks({ showLabels = false, className = '', linkClassName = '' }) {
    return (
        <div className={`flex flex-wrap items-center gap-3 ${className}`}>
            {socialProfiles.map((profile) => {
                const Icon = icons[profile.id];

                return (
                    <a
                        key={profile.id}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow GP & Partners on ${profile.label}`}
                        className={`inline-flex min-h-11 items-center gap-3 rounded-full border border-border bg-background/45 px-4 py-2 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary ${linkClassName}`}
                    >
                        {Icon && <Icon size={18} aria-hidden="true" />}
                        {showLabels && (
                            <span className="text-sm font-medium">
                                {profile.label}
                            </span>
                        )}
                    </a>
                );
            })}
        </div>
    );
}
