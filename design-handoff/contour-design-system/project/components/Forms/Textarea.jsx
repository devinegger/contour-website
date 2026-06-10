import React from 'react';

/** Multi-line text input styled to the Contour system. */
export function Textarea({ className = '', rows = 5, ...rest }) {
  return <textarea className={['ds-textarea', className].filter(Boolean).join(' ')} rows={rows} {...rest} />;
}
