Cards group related content on both dark and light surfaces. Reach for `featured` only to single out one option (e.g. a recommended pricing tier).

```jsx
<Card variant="dark" as="article">
  <span className="ds-badge">Baseline</span>
  <h3>Show up. Look the part.</h3>
</Card>
<Card variant="featured">…recommended tier…</Card>
<Card variant="light" as="article">…on a stone section…</Card>
```

Variants: `dark` (slate-mid + low-opacity teal border), `featured` (teal-dim fill — sparingly), `outline` (transparent, border brightens on hover), `light` (warm off-white, soft shadow on hover). No glassmorphism, no heavy shadows. Default padding is 32px (--space-6).
