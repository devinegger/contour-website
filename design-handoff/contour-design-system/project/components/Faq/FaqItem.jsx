import React from 'react';

/**
 * FaqItem — accessible disclosure row. Fraunces question, chevron rotates
 * on open. Defaults to light-surface styling; pass dark for dark sections.
 */
export function FaqItem({ question, defaultOpen = false, dark = false, children }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const id = React.useId();
  return (
    <div className="ds-faq__item">
      <button
        className="ds-faq__trigger"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        id={`${id}-btn`}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{question}</span>
        <svg className="ds-faq__icon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="ds-faq__panel" id={`${id}-panel`} role="region" aria-labelledby={`${id}-btn`} hidden={!open}>
        {children}
      </div>
    </div>
  );
}

/** Faq — wraps a list of FaqItem rows with the top hairline. */
export function Faq({ dark = false, className = '', children }) {
  return <dl className={['ds-faq', dark ? 'ds-faq--dark' : '', className].filter(Boolean).join(' ')}>{children}</dl>;
}
