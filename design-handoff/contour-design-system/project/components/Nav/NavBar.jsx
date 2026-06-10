import React from 'react';
import { Button } from '../Button/Button.jsx';

/** The Contour C-mark (two-ring open C, ~300° arc). Inline + self-contained. */
export function ContourMark({ size = 30, color = 'var(--teal)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M26.825 22.25 A12.5 12.5 0 1 1 26.825 9.75" style={{ stroke: color }} strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M22.062 19.5 A7 7 0 1 1 22.062 12.5" style={{ stroke: color }} strokeWidth="2.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/**
 * NavBar — sticky top navigation. "Contour." wordmark (period always teal),
 * nav links, and a primary CTA.
 */
export function NavBar({
  links = [{ label: 'Services', href: '/services' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }],
  current,
  ctaLabel = 'Book a Call',
  ctaHref = '/contact',
  onNavigate,
}) {
  const handle = (href) => (e) => { if (onNavigate) { e.preventDefault(); onNavigate(href); } };
  return (
    <header className="ds-nav">
      <nav className="ds-nav__inner" aria-label="Main navigation">
        <a href="/" className="ds-nav__logo" aria-label="Contour — Home" onClick={handle('/')}>
          <ContourMark />
          <span className="ds-nav__word">Contour<span className="dot">.</span></span>
        </a>
        <ul className="ds-nav__links" role="list">
          {links.map((l) => (
            <li key={l.href}>
              <a
                className="ds-nav__link"
                href={l.href}
                aria-current={current === l.href ? 'page' : undefined}
                onClick={handle(l.href)}
              >{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="ds-nav__actions">
          <Button variant="primary" size="sm" href={ctaHref} onClick={handle(ctaHref)}>{ctaLabel}</Button>
        </div>
      </nav>
    </header>
  );
}
