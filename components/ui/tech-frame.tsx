import * as React from 'react';
import { cn } from './utils';

/** Props for `TechFrame`. */
export interface TechFrameProps {
  className?: string;
  /** Render the thin bottom line */
  showBottomLine?: boolean;
  /** Render the thin side lines */
  showSideLines?: boolean;
  /** Render corner accents */
  showCorners?: boolean;
  /** Class applied to the bottom line element */
  bottomLineClassName?: string;
  /** Class applied to both side line elements */
  sideLineClassName?: string;
  /** Class applied to each corner accent */
  cornerClassName?: string;
}

/**
 * Adds subtle technology-style frame lines and corner accents around the container.
 * Styling (colors/gradients) is provided by the consumer via className props.
 */
/**
 * Adds subtle technology-style frame lines and corner accents around the container.
 * Styling (colors/gradients) is provided by the consumer via className props.
 */
export function TechFrame({
  className,
  showBottomLine = true,
  showSideLines = true,
  showCorners = true,
  bottomLineClassName,
  sideLineClassName,
  cornerClassName,
}: TechFrameProps) {
  return (
    <div className={cn('pointer-events-none absolute inset-0', className)} aria-hidden>
      {showBottomLine && (
        <div className={cn('absolute bottom-0 left-0 right-0 h-px', bottomLineClassName)} />
      )}
      {showSideLines && (
        <>
          <div className={cn('absolute top-0 bottom-0 left-0 w-px', sideLineClassName)} />
          <div className={cn('absolute top-0 bottom-0 right-0 w-px', sideLineClassName)} />
        </>
      )}
      {showCorners && (
        <>
          <div className={cn('absolute top-2 left-2 w-4 h-4 rounded-tl-lg border-l-2 border-t-2', cornerClassName)} />
          <div className={cn('absolute top-2 right-2 w-4 h-4 rounded-tr-lg border-r-2 border-t-2', cornerClassName)} />
          <div className={cn('absolute bottom-2 left-2 w-4 h-4 rounded-bl-lg border-l-2 border-b-2', cornerClassName)} />
          <div className={cn('absolute bottom-2 right-2 w-4 h-4 rounded-br-lg border-r-2 border-b-2', cornerClassName)} />
        </>
      )}
    </div>
  );
}

export default TechFrame;


