Buttons drive every action in Contour — teal-filled for the primary path, ghost for secondary, light for use on dark photographic/topo surfaces.

```jsx
<Button variant="primary" href="/contact">Book a Call</Button>
<Button variant="ghost">Learn more</Button>
<Button variant="light" size="lg">Get a Free Site Review</Button>
```

Variants: `primary` (teal fill, stone text), `ghost` (transparent, teal border that brightens on hover), `light` (stone fill, slate text). Sizes: `sm` / `md` / `lg`. Pass `block` for full width, `href` to render an anchor, `iconLeft`/`iconRight` for icons. Hover lifts the button 2px — the only expressive motion in the system. Never use pill radius or drop shadows.
