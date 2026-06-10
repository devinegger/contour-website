import * as React from 'react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children?: React.ReactNode;
}

/** Dropdown select with the brand teal chevron. Pair with <Field>. */
export function Select(props: SelectProps): JSX.Element;
