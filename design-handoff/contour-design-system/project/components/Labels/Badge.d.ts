import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** text = bare teal label (tier names); solid = low-opacity teal chip. */
  variant?: 'text' | 'solid';
  /** Tune the solid chip fill for light surfaces. */
  onLight?: boolean;
  children?: React.ReactNode;
}

/** Small uppercase label for service tiers, statuses, and metadata. */
export function Badge(props: BadgeProps): JSX.Element;
