import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

/** Single-line text input. Pair with <Field> for a label. */
export function Input(props: InputProps): JSX.Element;
