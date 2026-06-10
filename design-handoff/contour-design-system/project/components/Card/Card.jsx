import React from 'react';

/**
 * Contour Card — surface container.
 * dark (slate-mid + teal border), featured (teal-dim), outline (border
 * brightens on hover), light (warm off-white on stone). No heavy shadows.
 */
export function Card({ variant = 'dark', as = 'div', className = '', children, ...rest }) {
  const Tag = as;
  const classes = [
    'ds-card',
    variant === 'featured' ? 'ds-card--featured' : '',
    variant === 'outline' ? 'ds-card--outline' : '',
    variant === 'light' ? 'ds-card--light' : '',
    className,
  ].filter(Boolean).join(' ');
  return <Tag className={classes} {...rest}>{children}</Tag>;
}
