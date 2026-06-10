import * as React from 'react';

/**
 * Surface container for grouped content — pricing tiers, differentiators, etc.
 * @startingPoint section="Core" subtitle="Dark, featured, outline & light surfaces" viewport="700x240"
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** dark = slate-mid w/ teal border; featured = teal-dim (use sparingly); outline = transparent, border brightens on hover; light = warm off-white on stone. */
  variant?: 'dark' | 'featured' | 'outline' | 'light';
  /** Element to render. Defaults to div; use 'article' for content cards. */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

/** Surface container for grouped content. */
export function Card(props: CardProps): JSX.Element;
