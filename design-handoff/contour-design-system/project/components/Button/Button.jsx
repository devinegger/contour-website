import React from 'react';

/**
 * Contour Button — Teal-fill primary, ghost outline, or light fill.
 * 4px radius, no gradients, no shadows. Hover lifts 2px.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  as,
  href,
  disabled = false,
  iconLeft,
  iconRight,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'ds-btn',
    `ds-btn--${variant}`,
    size === 'sm' ? 'ds-btn--sm' : size === 'lg' ? 'ds-btn--lg' : '',
    block ? 'ds-btn--block' : '',
    disabled ? 'is-disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {iconLeft ? <span className="ds-btn__icon" aria-hidden="true">{iconLeft}</span> : null}
      {children}
      {iconRight ? <span className="ds-btn__icon" aria-hidden="true">{iconRight}</span> : null}
    </>
  );

  const Tag = as || (href ? 'a' : 'button');
  const tagProps = Tag === 'a'
    ? { href: disabled ? undefined : href, 'aria-disabled': disabled || undefined, ...rest }
    : { disabled, ...rest };

  return <Tag className={classes} {...tagProps}>{content}</Tag>;
}
