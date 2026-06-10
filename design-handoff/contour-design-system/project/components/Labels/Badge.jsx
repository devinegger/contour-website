import React from 'react';

/**
 * Badge — small uppercase label. 'text' is a bare teal tier label;
 * 'solid' adds a low-opacity teal chip (4px radius, never a pill).
 */
export function Badge({ variant = 'text', onLight = false, className = '', children, ...rest }) {
  const classes = [
    'ds-badge',
    variant === 'solid' ? 'ds-badge--solid' : '',
    variant === 'solid' && onLight ? 'on-light' : '',
    className,
  ].filter(Boolean).join(' ');
  return <span className={classes} {...rest}>{children}</span>;
}
