import * as React from 'react';

export interface NavLink { label: string; href: string; }

/**
 * Sticky site navigation with the Contour wordmark and a primary CTA.
 * @startingPoint section="Layout" subtitle="Sticky nav — wordmark, links, CTA" viewport="1200x68"
 */
export interface NavBarProps {
  links?: NavLink[];
  /** href of the current page — renders that link teal/active. */
  current?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** Intercept link clicks (e.g. for a prototype router). */
  onNavigate?: (href: string) => void;
}

export interface ContourMarkProps {
  size?: number;
  color?: string;
}

/** Sticky site navigation with the Contour wordmark and a primary CTA. */
export function NavBar(props: NavBarProps): JSX.Element;
/** The two-ring open-C brand mark, inline SVG. */
export function ContourMark(props: ContourMarkProps): JSX.Element;
