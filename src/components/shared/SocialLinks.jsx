import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { socialProfiles } from '../../lib/socialLinks';
import { trackSiteEvent } from './tracking';

const icons = {
    facebook: Facebook,
    instagram: Instagram,
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
                        onClick={() => {
                            const placement = showLabels ? 'labeled_social_links' : 'icon_social_links';
                            if (profile.id === 'linkedin') {
                                trackSiteEvent('click_linkedin', {
                                    platform: profile.id,
                                    placement,
                                    destination: profile.url,
                                });
                            }
                            trackSiteEvent('social_click', {
                                platform: profile.id,
                                placement,
                            });
                        }}
                        className={`group inline-flex min-h-11 items-center gap-3 rounded-full border border-border bg-background/45 px-4 py-2 text-muted-foreground transition-colors hover:border-[var(--us-red)]/60 hover:text-[var(--us-red)] ${linkClassName}`}
                    >
                        {Icon && <Icon size={18} aria-hidden="true" className="shrink-0" />}
                        {showLabels && (
                            <span className="flex flex-col leading-tight">
                                <span className="text-sm font-medium">
                                    {profile.label}
                                </span>
                                <span className="max-w-36 truncate text-xs text-muted-foreground transition-colors group-hover:text-[var(--us-red)]/75">
                                    {profile.handle}
                                </span>
                            </span>
                        )}
                    </a>
                );
            })}
        </div>
    );
}
