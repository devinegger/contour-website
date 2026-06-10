import React from 'react';

/** Text input styled to the Contour system. */
export function Input({ className = '', ...rest }) {
  return <input className={['ds-input', className].filter(Boolean).join(' ')} {...rest} />;
}
