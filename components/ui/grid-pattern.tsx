import * as React from 'react';
import { cn } from './utils';

export interface GridPatternProps {
  className?: string;
  /** Size of the grid cell in pixels */
  size?: number;
  /** CSS color for grid lines (e.g., rgba(255,255,255,0.2)) */
  lineColor?: string;
  /** Optional inline styles applied to the wrapper */
  style?: React.CSSProperties;
}

/**
 * Decorative grid background. Renders a square grid via CSS gradients.
 * Non-interactive and positioned absolutely by default.
 */
export function GridPattern({
  className,
  size = 20,
  lineColor = 'rgba(255,255,255,0.2)',
  style,
}: GridPatternProps) {
  return (
    <div className={cn('absolute inset-0 pointer-events-none', className)} aria-hidden style={style}>
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `linear-gradient(${lineColor} 1px, transparent 1px), linear-gradient(90deg, ${lineColor} 1px, transparent 1px)`,
          backgroundSize: `${size}px ${size}px`,
        }}
      />
    </div>
  );
}

export default GridPattern;


