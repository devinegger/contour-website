import * as React from 'react';

export interface EyebrowProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

/** Uppercase teal kicker that labels a section above its heading. */
export function Eyebrow(props: EyebrowProps): JSX.Element;
