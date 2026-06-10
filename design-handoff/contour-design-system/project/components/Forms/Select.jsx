import React from 'react';

/** Select styled to the Contour system, with teal chevron. */
export function Select({ className = '', children, ...rest }) {
  return <select className={['ds-select', className].filter(Boolean).join(' ')} {...rest}>{children}</select>;
}
