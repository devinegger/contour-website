import * as React from 'react';

/**
 * Disclosure row for FAQ sections; expands on click, chevron rotates.
 * @startingPoint section="Content" subtitle="Accessible FAQ accordion" viewport="700x300"
 */
export interface FaqItemProps {
  /** The question text (rendered in Fraunces). */
  question: string;
  defaultOpen?: boolean;
  /** Style for a dark surface instead of the default light one. */
  dark?: boolean;
  /** The answer content. */
  children?: React.ReactNode;
}

export interface FaqProps {
  dark?: boolean;
  className?: string;
  children?: React.ReactNode;
}

/** Disclosure row for FAQ sections. */
export function FaqItem(props: FaqItemProps): JSX.Element;
/** Container that wraps FaqItem rows. */
export function Faq(props: FaqProps): JSX.Element;
