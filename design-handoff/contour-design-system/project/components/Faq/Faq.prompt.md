Accessible FAQ accordion. `Faq` draws the top hairline and wraps a list of `FaqItem` disclosure rows.

```jsx
<Faq>
  <FaqItem question="Isn't this expensive?" defaultOpen>
    <p>Baseline is $97/mo, hosting included…</p>
  </FaqItem>
  <FaqItem question="Do I own my site?">
    <p>Yes — the site is yours, and so is your domain.</p>
  </FaqItem>
</Faq>
```

Each row manages its own open state. Pass `dark` on both `Faq` and `FaqItem` when the section is on a dark surface. Questions render in Fraunces; the teal chevron rotates 180° when open.
