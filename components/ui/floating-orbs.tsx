import * as React from 'react';
import { cn } from './utils';

/** Options for a single decorative orb. */
export interface FloatingOrb {
  /** Absolute-positioning utility classes, e.g., "top-2 right-8" */
  positionClassName?: string;
  /** Diameter in pixels */
  size?: number;
  /** Tailwind gradient from-color class, e.g., "from-y2k-electric-blue/30" */
  fromColorClassName?: string;
  /** Tailwind gradient to-color class, e.g., "to-y2k-cyan/30" */
  toColorClassName?: string;
  className?: string;
  style?: React.CSSProperties;
}

/** Props for `FloatingOrbs`. */
export interface FloatingOrbsProps {
  className?: string;
  orbs?: FloatingOrb[];
  animated?: boolean;
}

/**
 * Renders decorative, blurred gradient orbs. Fully styleable via classes.
 */
/**
 * Renders decorative, blurred gradient orbs. Fully styleable via classes.
 */
export function FloatingOrbs({ className, orbs = [], animated = false }: FloatingOrbsProps) {
  return (
    <div className={cn('absolute inset-0 pointer-events-none', className)} aria-hidden>
      {orbs.map((orb, index) => {
        const sizePx = typeof orb.size === 'number' ? orb.size : 24;
        return (
          <div
            key={index}
            className={cn(
              'absolute rounded-full blur-sm bg-gradient-to-br',
              orb.positionClassName,
              orb.fromColorClassName,
              orb.toColorClassName,
              animated && 'animate-pulse',
              orb.className,
            )}
            style={{ width: sizePx, height: sizePx, ...orb.style }}
          />
        );
      })}
    </div>
  );
}

export default FloatingOrbs;


