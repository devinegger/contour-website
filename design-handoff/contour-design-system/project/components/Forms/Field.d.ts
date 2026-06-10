import * as React from 'react';

export interface FieldProps {
  /** Label text shown above the control. */
  label?: string;
  htmlFor?: string;
  required?: boolean;
  optional?: boolean;
  /** Style label/controls for a light (stone) surface. */
  onLight?: boolean;
  hint?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

/** Wraps a control with a label above it — the canon form pattern. */
export function Field(props: FieldProps): JSX.Element;
