The sticky top navigation. The wordmark is "Contour." in Fraunces 700 — the period is always present and always teal. Ships with the inline `ContourMark` so it's self-contained.

```jsx
<NavBar
  current="/services"
  links={[
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]}
  ctaLabel="Book a Call"
  onNavigate={(href) => router.push(href)}
/>
```

The active link (matching `current`) renders teal. Pass `onNavigate` to intercept clicks in a prototype. `ContourMark` is exported separately for favicons, footers, and loading states — `<ContourMark size={48} />`.
