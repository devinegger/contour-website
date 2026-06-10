import React from 'react';

/**
 * Field — label-above-input wrapper. Labels are never placeholders.
 */
export function Field({ label, htmlFor, required = false, optional = false, onLight = false, hint, className = '', children }) {
  return (
    <div className={['ds-field', onLight ? 'ds-field--light' : '', className].filter(Boolean).join(' ')}>
      {label ? (
        <label className="ds-label" htmlFor={htmlFor}>
          {label}
          {required ? <span className="req" aria-hidden="true">*</span> : null}
          {optional ? <span className="opt"> (optional)</span> : null}
        </label>
      ) : null}
      {children}
      {hint ? <span className="ds-hint" style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-on-dark-dim)' }}>{hint}</span> : null}
    </div>
  );
}
