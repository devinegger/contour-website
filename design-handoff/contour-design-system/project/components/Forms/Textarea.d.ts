import * as React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

/** Multi-line text input. Pair with <Field> for a label. */
export function Textarea(props: TextareaProps): JSX.Element;
