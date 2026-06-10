import React from 'react';

/**
 * Divider — 1px gradient fade with an 8px teal center dot.
 * Reserve for major section transitions.
 */
export function Divider({ className = '', ...rest }) {
  return <hr className={['divider', className].filter(Boolean).join(' ')} {...rest} />;
}
