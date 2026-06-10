import * as React from 'react';

/**
 * Primary call-to-action button in the Contour system.
 * @startingPoint section="Core" subtitle="Teal CTA, ghost, and light variants" viewport="700x150"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual style. Primary = teal fill; ghost = transparent + teal border; light = stone fill for dark surfaces. */
  variant?: 'primary' | 'ghost' | 'light';
  /** Size scale. */
  size?: 'sm' | 'md' | 'lg';
  /** Full-width button. */
  block?: boolean;
  /** Render as a different element (defaults to <a> when href is set, else <button>). */
  as?: keyof JSX.IntrinsicElements;
  /** When set, renders an anchor. */
  href?: string;
  disabled?: boolean;
  /** Optional leading icon node. */
  iconLeft?: React.ReactNode;
  /** Optional trailing icon node. */
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

/** Primary call-to-action button in the Contour system. */
export function Button(props: ButtonProps): JSX.Element;
