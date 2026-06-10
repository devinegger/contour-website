import React from 'react';

/**
 * Eyebrow / kicker — DM Sans 500, 11px, uppercase, 0.18em tracking, teal.
 * Sits above headings to label a section.
 */
export function Eyebrow({ as = 'span', className = '', children, ...rest }) {
  const Tag = as;
  return <Tag className={['eyebrow', className].filter(Boolean).join(' ')} {...rest}>{children}</Tag>;
}
