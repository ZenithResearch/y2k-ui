import * as React from 'react';
import { useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { cn } from './ui/utils';
import { GridPattern } from './ui/grid-pattern';
import { FloatingOrbs, FloatingOrb } from './ui/floating-orbs';
import { TechFrame } from './ui/tech-frame';

export type AnnouncementBannerVariant = 'default' | 'electric' | 'chrome' | 'glow';

export interface AnnouncementBannerProps {
  className?: string;
  title?: React.ReactNode;
  message?: React.ReactNode;
  badge?: React.ReactNode;
  icon?: React.ReactNode;
  action?: {
    label: React.ReactNode;
    onClick?: () => void;
    endIcon?: React.ReactNode;
    className?: string;
  };
  onDismiss?: () => void;
  variant?: AnnouncementBannerVariant;
  /** Controls the subtle pulsing effects of background elements */
  animated?: boolean;
  /** If true, renders a dismiss button */
  dismissible?: boolean;
  /** Override gradient/border classes for the container */
  variantClassName?: string;
  /** Decorative elements */
  showBackground?: boolean;
  gridSize?: number;
  gridLineColor?: string;
  orbs?: FloatingOrb[];
  showFrame?: boolean;
}

const DEFAULT_VARIANT_CLASSES: Record<AnnouncementBannerVariant, string> = {
  default: 'from-y2k-electric-blue/10 to-y2k-cyan/10 border-y2k-electric-blue/20',
  electric: 'from-y2k-electric-blue/20 to-y2k-cyan/20 border-y2k-cyan/30',
  chrome: 'from-y2k-chrome/20 to-y2k-silver/20 border-y2k-chrome/30',
  glow: 'from-y2k-electric-blue/15 to-y2k-cyan/15 border-y2k-glow/40',
};

export function AnnouncementBanner({
  className,
  title,
  message,
  badge,
  icon,
  action,
  onDismiss,
  variant = 'default',
  animated = false,
  dismissible = false,
  variantClassName,
  showBackground = true,
  gridSize = 20,
  gridLineColor = 'rgba(255,255,255,0.2)',
  orbs = [],
  showFrame = true,
}: AnnouncementBannerProps) {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  const handleDismiss = () => {
    setIsDismissed(true);
    onDismiss?.();
  };

  const containerVariant = variantClassName ?? DEFAULT_VARIANT_CLASSES[variant] ?? '';

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl p-6 glass-card transition-all duration-500 hover:scale-[1.02]',
        'bg-gradient-to-r',
        containerVariant,
        animated && 'animate-pulse',
        className,
      )}
    >
      {showBackground && (
        <>
          <GridPattern className="opacity-50" size={gridSize} lineColor={gridLineColor} />
          {orbs.length > 0 && <FloatingOrbs orbs={orbs} animated={animated} />}
        </>
      )}

      <div className="relative z-10 flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center gap-4">
          {icon && (
            <div className="flex-shrink-0">
              <div className="chrome-surface rounded-xl p-3">
                {icon}
              </div>
            </div>
          )}

          <div className="flex-1 space-y-1">
            {(badge || title) && (
              <div className="flex items-center gap-3">
                {badge && (
                  <Badge variant="secondary" className="chrome-surface text-xs font-display">
                    {badge}
                  </Badge>
                )}
                {title && <h3 className="font-display text-lg">{title}</h3>}
              </div>
            )}
            {message && <div className="text-sm leading-relaxed">{message}</div>}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {action && (
            <Button onClick={action.onClick} className={cn('button-3d chrome-surface group', action.className)} variant="ghost">
              <span className="font-display text-sm">{action.label}</span>
              {action.endIcon}
            </Button>
          )}
          {dismissible && (
            <Button onClick={handleDismiss} className="chrome-surface p-2" variant="ghost" size="sm" aria-label="Dismiss">
              <span aria-hidden>×</span>
            </Button>
          )}
        </div>
      </div>

      {showFrame && (
        <TechFrame
          bottomLineClassName="bg-gradient-to-r from-transparent via-y2k-electric-blue/50 to-transparent"
          sideLineClassName="bg-gradient-to-b from-transparent via-y2k-cyan/50 to-transparent"
          cornerClassName="border-y2k-electric-blue/30"
        />
      )}
    </div>
  );
}

export default AnnouncementBanner;


