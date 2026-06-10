/* @ds-bundle: {"format":3,"namespace":"ContourDesignSystem_7f839f","components":[{"name":"Button","sourcePath":"components/Button/Button.jsx"},{"name":"Card","sourcePath":"components/Card/Card.jsx"},{"name":"Divider","sourcePath":"components/Divider/Divider.jsx"},{"name":"FaqItem","sourcePath":"components/Faq/FaqItem.jsx"},{"name":"Faq","sourcePath":"components/Faq/FaqItem.jsx"},{"name":"Field","sourcePath":"components/Forms/Field.jsx"},{"name":"Input","sourcePath":"components/Forms/Input.jsx"},{"name":"Select","sourcePath":"components/Forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/Forms/Textarea.jsx"},{"name":"Badge","sourcePath":"components/Labels/Badge.jsx"},{"name":"Eyebrow","sourcePath":"components/Labels/Eyebrow.jsx"},{"name":"ContourMark","sourcePath":"components/Nav/NavBar.jsx"},{"name":"NavBar","sourcePath":"components/Nav/NavBar.jsx"}],"sourceHashes":{"components/Button/Button.jsx":"b9f1e4910eac","components/Card/Card.jsx":"d086b9839d3c","components/Divider/Divider.jsx":"ef342a7f3423","components/Faq/FaqItem.jsx":"761b792a2b06","components/Forms/Field.jsx":"84a945d229b8","components/Forms/Input.jsx":"68142125c99b","components/Forms/Select.jsx":"7ae96fca1a13","components/Forms/Textarea.jsx":"60835ac92f28","components/Labels/Badge.jsx":"42a5a18d28f4","components/Labels/Eyebrow.jsx":"1acd6c75f3ce","components/Nav/NavBar.jsx":"7acdf19d5123","ui_kits/contour-website/app.jsx":"dd4550b93632","ui_kits/contour-website/blocks-home.jsx":"8887e8feb9b1","ui_kits/contour-website/blocks-pages.jsx":"87056b383784","ui_kits/contour-website/data.js":"b6e88b45470b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ContourDesignSystem_7f839f = window.ContourDesignSystem_7f839f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/Button/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Contour Button — Teal-fill primary, ghost outline, or light fill.
 * 4px radius, no gradients, no shadows. Hover lifts 2px.
 */
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  as,
  href,
  disabled = false,
  iconLeft,
  iconRight,
  className = '',
  children,
  ...rest
}) {
  const classes = ['ds-btn', `ds-btn--${variant}`, size === 'sm' ? 'ds-btn--sm' : size === 'lg' ? 'ds-btn--lg' : '', block ? 'ds-btn--block' : '', disabled ? 'is-disabled' : '', className].filter(Boolean).join(' ');
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft ? /*#__PURE__*/React.createElement("span", {
    className: "ds-btn__icon",
    "aria-hidden": "true"
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "ds-btn__icon",
    "aria-hidden": "true"
  }, iconRight) : null);
  const Tag = as || (href ? 'a' : 'button');
  const tagProps = Tag === 'a' ? {
    href: disabled ? undefined : href,
    'aria-disabled': disabled || undefined,
    ...rest
  } : {
    disabled,
    ...rest
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, tagProps), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button/Button.jsx", error: String((e && e.message) || e) }); }

// components/Card/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Contour Card — surface container.
 * dark (slate-mid + teal border), featured (teal-dim), outline (border
 * brightens on hover), light (warm off-white on stone). No heavy shadows.
 */
function Card({
  variant = 'dark',
  as = 'div',
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  const classes = ['ds-card', variant === 'featured' ? 'ds-card--featured' : '', variant === 'outline' ? 'ds-card--outline' : '', variant === 'light' ? 'ds-card--light' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classes
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Card/Card.jsx", error: String((e && e.message) || e) }); }

// components/Divider/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Divider — 1px gradient fade with an 8px teal center dot.
 * Reserve for major section transitions.
 */
function Divider({
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("hr", _extends({
    className: ['divider', className].filter(Boolean).join(' ')
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Divider/Divider.jsx", error: String((e && e.message) || e) }); }

// components/Faq/FaqItem.jsx
try { (() => {
/**
 * FaqItem — accessible disclosure row. Fraunces question, chevron rotates
 * on open. Defaults to light-surface styling; pass dark for dark sections.
 */
function FaqItem({
  question,
  defaultOpen = false,
  dark = false,
  children
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const id = React.useId();
  return /*#__PURE__*/React.createElement("div", {
    className: "ds-faq__item"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ds-faq__trigger",
    "aria-expanded": open,
    "aria-controls": `${id}-panel`,
    id: `${id}-btn`,
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", null, question), /*#__PURE__*/React.createElement("svg", {
    className: "ds-faq__icon",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 7.5L10 12.5L15 7.5",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ds-faq__panel",
    id: `${id}-panel`,
    role: "region",
    "aria-labelledby": `${id}-btn`,
    hidden: !open
  }, children));
}

/** Faq — wraps a list of FaqItem rows with the top hairline. */
function Faq({
  dark = false,
  className = '',
  children
}) {
  return /*#__PURE__*/React.createElement("dl", {
    className: ['ds-faq', dark ? 'ds-faq--dark' : '', className].filter(Boolean).join(' ')
  }, children);
}
Object.assign(__ds_scope, { FaqItem, Faq });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Faq/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/Forms/Field.jsx
try { (() => {
/**
 * Field — label-above-input wrapper. Labels are never placeholders.
 */
function Field({
  label,
  htmlFor,
  required = false,
  optional = false,
  onLight = false,
  hint,
  className = '',
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['ds-field', onLight ? 'ds-field--light' : '', className].filter(Boolean).join(' ')
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "ds-label",
    htmlFor: htmlFor
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "req",
    "aria-hidden": "true"
  }, "*") : null, optional ? /*#__PURE__*/React.createElement("span", {
    className: "opt"
  }, " (optional)") : null) : null, children, hint ? /*#__PURE__*/React.createElement("span", {
    className: "ds-hint",
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-on-dark-dim)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/Forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input styled to the Contour system. */
function Input({
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    className: ['ds-input', className].filter(Boolean).join(' ')
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/Forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Select styled to the Contour system, with teal chevron. */
function Select({
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("select", _extends({
    className: ['ds-select', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/Forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text input styled to the Contour system. */
function Textarea({
  className = '',
  rows = 5,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: ['ds-textarea', className].filter(Boolean).join(' '),
    rows: rows
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/Labels/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small uppercase label. 'text' is a bare teal tier label;
 * 'solid' adds a low-opacity teal chip (4px radius, never a pill).
 */
function Badge({
  variant = 'text',
  onLight = false,
  className = '',
  children,
  ...rest
}) {
  const classes = ['ds-badge', variant === 'solid' ? 'ds-badge--solid' : '', variant === 'solid' && onLight ? 'on-light' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Labels/Badge.jsx", error: String((e && e.message) || e) }); }

// components/Labels/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow / kicker — DM Sans 500, 11px, uppercase, 0.18em tracking, teal.
 * Sits above headings to label a section.
 */
function Eyebrow({
  as = 'span',
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: ['eyebrow', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Labels/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/Nav/NavBar.jsx
try { (() => {
/** The Contour C-mark (two-ring open C, ~300° arc). Inline + self-contained. */
function ContourMark({
  size = 30,
  color = 'var(--teal)'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 32 32",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M26.825 22.25 A12.5 12.5 0 1 1 26.825 9.75",
    style: {
      stroke: color
    },
    strokeWidth: "2.4",
    strokeLinecap: "round",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.062 19.5 A7 7 0 1 1 22.062 12.5",
    style: {
      stroke: color
    },
    strokeWidth: "2.4",
    strokeLinecap: "round",
    fill: "none"
  }));
}

/**
 * NavBar — sticky top navigation. "Contour." wordmark (period always teal),
 * nav links, and a primary CTA.
 */
function NavBar({
  links = [{
    label: 'Services',
    href: '/services'
  }, {
    label: 'About',
    href: '/about'
  }, {
    label: 'Contact',
    href: '/contact'
  }],
  current,
  ctaLabel = 'Book a Call',
  ctaHref = '/contact',
  onNavigate
}) {
  const handle = href => e => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "ds-nav"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "ds-nav__inner",
    "aria-label": "Main navigation"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    className: "ds-nav__logo",
    "aria-label": "Contour \u2014 Home",
    onClick: handle('/')
  }, /*#__PURE__*/React.createElement(ContourMark, null), /*#__PURE__*/React.createElement("span", {
    className: "ds-nav__word"
  }, "Contour", /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "."))), /*#__PURE__*/React.createElement("ul", {
    className: "ds-nav__links",
    role: "list"
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.href
  }, /*#__PURE__*/React.createElement("a", {
    className: "ds-nav__link",
    href: l.href,
    "aria-current": current === l.href ? 'page' : undefined,
    onClick: handle(l.href)
  }, l.label)))), /*#__PURE__*/React.createElement("div", {
    className: "ds-nav__actions"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    href: ctaHref,
    onClick: handle(ctaHref)
  }, ctaLabel))));
}
Object.assign(__ds_scope, { ContourMark, NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Nav/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/contour-website/app.jsx
try { (() => {
/* Contour website — page composition + tiny hash router. */
(function () {
  const {
    NavBar
  } = window.ContourDesignSystem_7f839f;
  const B = window.ContourBlocks;
  function Page({
    route,
    go
  }) {
    if (route === 'services') {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(B.RichText, {
        heading: "Three levels of presence. One honest question: where are you right now?",
        body: "Not every business needs the same thing. Some need to get found. Some need to get leads. Some are ready to run the market. We\u2019ll tell you which fits \u2014 and if none of them do, we\u2019ll tell you that too.",
        dark: true
      }), /*#__PURE__*/React.createElement(B.ServicesFull, {
        go: go
      }), /*#__PURE__*/React.createElement(B.CostComparison, null), /*#__PURE__*/React.createElement(B.SecondaryServices, {
        go: go
      }), /*#__PURE__*/React.createElement(B.FaqSection, null), /*#__PURE__*/React.createElement(B.CtaStrip, {
        headline: "Not sure which fits?",
        ctaLabel: "Get a Free Site Review",
        go: go
      }));
    }
    if (route === 'about') {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(B.AboutStory, {
        go: go
      }), /*#__PURE__*/React.createElement(B.CtaStrip, {
        headline: "Ready when you are.",
        ctaLabel: "Book a Call",
        go: go
      }));
    }
    if (route === 'contact') {
      return /*#__PURE__*/React.createElement(B.ContactForm, null);
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(B.Hero, {
      go: go
    }), /*#__PURE__*/React.createElement(B.ServicesPreview, {
      go: go
    }), /*#__PURE__*/React.createElement(B.PageSpeedWidget, null), /*#__PURE__*/React.createElement(B.Differentiators, null), /*#__PURE__*/React.createElement(B.TrustSignal, null), /*#__PURE__*/React.createElement(B.CtaStrip, {
      headline: "Ready when you are.",
      ctaLabel: "Book a Call",
      go: go
    }));
  }
  function App() {
    const [route, setRoute] = React.useState(() => location.hash.replace('#', '') || 'home');
    const go = React.useCallback(r => {
      setRoute(r);
      location.hash = r;
      const main = document.getElementById('ck-main');
      if (main) main.scrollIntoView ? window.scrollTo(0, 0) : null;
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      });
    }, []);
    React.useEffect(() => {
      const onHash = () => setRoute(location.hash.replace('#', '') || 'home');
      window.addEventListener('hashchange', onHash);
      return () => window.removeEventListener('hashchange', onHash);
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      "data-screen-label": route
    }, /*#__PURE__*/React.createElement(NavBar, {
      current: route,
      links: window.CONTOUR_DATA.nav,
      ctaLabel: "Book a Call",
      ctaHref: "contact",
      onNavigate: go
    }), /*#__PURE__*/React.createElement("main", {
      id: "ck-main"
    }, /*#__PURE__*/React.createElement(Page, {
      route: route,
      go: go
    })), /*#__PURE__*/React.createElement(B.SiteFooter, {
      go: go
    }));
  }
  ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/contour-website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/contour-website/blocks-home.jsx
try { (() => {
/* Contour website — page blocks. Composes DS primitives + real content. */
const {
  Button,
  Card,
  Badge,
  Eyebrow,
  Field,
  Input,
  Select,
  Textarea,
  Faq,
  FaqItem,
  Divider,
  NavBar,
  ContourMark
} = window.ContourDesignSystem_7f839f;
const D = window.CONTOUR_DATA;

/* ---------- Footer ---------- */
function SiteFooter({
  go
}) {
  const year = new Date().getFullYear();
  return /*#__PURE__*/React.createElement("footer", {
    className: "topo-bg",
    style: {
      borderTop: '1px solid var(--border-on-dark-strong)',
      paddingBlock: '3rem 2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ck-footer-top"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    className: "ds-nav__logo",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(ContourMark, {
    size: 26
  }), /*#__PURE__*/React.createElement("span", {
    className: "ds-nav__word",
    style: {
      fontSize: 18
    }
  }, "Contour", /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "."))), /*#__PURE__*/React.createElement("ul", {
    className: "ck-footer-links",
    role: "list"
  }, D.nav.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.href
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(l.href);
    },
    style: {
      color: 'var(--text-on-dark)',
      opacity: 0.75,
      fontSize: '0.9rem'
    }
  }, l.label))))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.875rem',
      color: 'var(--text-on-dark)',
      opacity: 0.6,
      lineHeight: 1.5
    }
  }, D.locationShort), /*#__PURE__*/React.createElement("div", {
    className: "ck-footer-bottom"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.8125rem',
      color: 'var(--text-on-dark)',
      opacity: 0.5
    }
  }, "\xA9 ", year, " Contour. All rights reserved."), /*#__PURE__*/React.createElement("ul", {
    className: "ck-footer-legal",
    role: "list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: '0.8125rem',
      color: 'var(--text-on-dark)',
      opacity: 0.5
    }
  }, "Privacy Policy")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: '0.8125rem',
      color: 'var(--text-on-dark)',
      opacity: 0.5
    }
  }, "Terms"))))));
}

/* ---------- Hero ---------- */
function Hero({
  go
}) {
  const h = D.hero;
  return /*#__PURE__*/React.createElement("section", {
    className: "topo-bg",
    style: {
      paddingBlock: 'clamp(5rem,13vw,9rem)',
      paddingInline: 'var(--container-padding)',
      display: 'flex',
      alignItems: 'center',
      minHeight: '78vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Web design & local marketing"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-display)',
      fontWeight: 700,
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-on-dark)'
    }
  }, h.headline), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-lg)',
      fontWeight: 300,
      color: 'var(--text-on-dark)',
      opacity: 0.82,
      maxWidth: '58ch',
      lineHeight: 1.55
    }
  }, h.subheading), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.875rem',
      marginTop: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go(h.primary.href)
  }, h.primary.label), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    onClick: () => go(h.secondary.href)
  }, h.secondary.label)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.9rem',
      color: 'var(--text-on-dark)',
      opacity: 0.55,
      marginTop: '0.25rem'
    }
  }, h.trust))));
}

/* ---------- PageSpeed widget (recreated, sample result) ---------- */
function Gauge({
  score,
  label
}) {
  const rating = score >= 90 ? 'good' : score >= 50 ? 'warn' : 'critical';
  const color = rating === 'good' ? 'var(--status-good)' : rating === 'warn' ? 'var(--status-warn)' : 'var(--status-critical)';
  const r = 34,
    c = 2 * Math.PI * r,
    off = c * (1 - score / 100);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 84,
      height: 84
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "84",
    height: "84",
    viewBox: "0 0 84 84",
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "42",
    cy: "42",
    r: r,
    fill: "none",
    style: {
      stroke: 'color-mix(in srgb, var(--teal) 18%, transparent)'
    },
    strokeWidth: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "42",
    cy: "42",
    r: r,
    fill: "none",
    style: {
      stroke: color
    },
    strokeWidth: "5",
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: off
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 24,
      color: 'var(--text-on-dark)'
    }
  }, score)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.8125rem',
      color: 'var(--text-on-dark-muted)'
    }
  }, label));
}
function PageSpeedWidget() {
  const [url, setUrl] = React.useState('');
  const [shown, setShown] = React.useState(true);
  return /*#__PURE__*/React.createElement("section", {
    className: "topo-bg",
    style: {
      paddingBlock: 'clamp(3rem,8vw,5rem)',
      paddingInline: 'var(--container-padding)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680,
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Proof, not promises"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h2)',
      color: 'var(--text-on-dark)'
    }
  }, "How fast is your site?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-dark)',
      opacity: 0.75
    }
  }, "Enter your URL to get a free Google PageSpeed score.")), /*#__PURE__*/React.createElement("form", {
    className: "ck-psi-row",
    onSubmit: e => {
      e.preventDefault();
      setShown(true);
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "https://yoursite.com",
    value: url,
    onChange: e => setUrl(e.target.value),
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit"
  }, "See My Score")), shown && /*#__PURE__*/React.createElement(Card, {
    variant: "outline",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '2rem',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Gauge, {
    score: 99,
    label: "Performance"
  }), /*#__PURE__*/React.createElement(Gauge, {
    score: 100,
    label: "Accessibility"
  }), /*#__PURE__*/React.createElement(Gauge, {
    score: 100,
    label: "Best Practices"
  }), /*#__PURE__*/React.createElement(Gauge, {
    score: 100,
    label: "SEO"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.875rem',
      color: 'var(--text-on-dark-muted)'
    }
  }, "contour-digital.com \xB7 measured on mobile")))));
}

/* ---------- Differentiators ---------- */
function Differentiators() {
  return /*#__PURE__*/React.createElement("section", {
    className: "topo-bg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ck-diffs"
  }, D.differentiators.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.headline,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.5rem',
      color: 'var(--accent)'
    }
  }, d.headline), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-dark)',
      opacity: 0.85,
      lineHeight: 1.6
    }
  }, d.body))))));
}

/* ---------- Trust signal ---------- */
function TrustSignal() {
  return /*#__PURE__*/React.createElement("section", {
    className: "topo-bg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container section",
    style: {
      paddingBlock: 'clamp(2.5rem,6vw,4rem)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontStyle: 'italic',
      fontWeight: 400,
      fontSize: 'clamp(1.25rem,2.5vw,1.7rem)',
      color: 'var(--text-on-dark)',
      opacity: 0.9,
      maxWidth: '58ch',
      margin: '0 auto',
      textAlign: 'center',
      lineHeight: 1.5
    }
  }, D.trust)));
}

/* ---------- CTA strip ---------- */
function CtaStrip({
  headline,
  ctaLabel,
  go,
  href = 'contact'
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "topo-bg",
    style: {
      paddingBlock: 'clamp(3rem,6vw,5rem)',
      paddingInline: 'var(--container-padding)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container ck-cta"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(1.5rem,3vw,2.25rem)',
      color: 'var(--text-on-dark)',
      maxWidth: '24ch'
    }
  }, headline), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go(href)
  }, ctaLabel)));
}

/* ---------- Services preview (home) ---------- */
function ServicesPreview({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "topo-bg-light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container section"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Plans"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h2)',
      color: 'var(--text-on-light)',
      margin: '0.5rem 0 0.25rem'
    }
  }, "Simple, clear plans"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-light-muted)',
      marginBottom: '2.5rem'
    }
  }, "Pick the tier that fits where you are. Move up as you grow."), /*#__PURE__*/React.createElement("div", {
    className: "ck-tiers"
  }, D.tiers.map(t => /*#__PURE__*/React.createElement(Card, {
    key: t.tier,
    variant: "light",
    as: "article",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    onLight: true
  }, t.tier), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: '1.375rem',
      color: 'var(--text-on-light)'
    }
  }, t.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.9375rem',
      color: 'var(--text-on-light-muted)',
      lineHeight: 1.5,
      flex: 1
    }
  }, t.tagline), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 600,
      fontSize: '1.25rem',
      color: 'var(--text-on-light)'
    }
  }, t.price), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => go('services'),
    style: {
      alignSelf: 'flex-start'
    }
  }, "Learn more"))))));
}
window.ContourBlocks = {
  SiteFooter,
  Hero,
  PageSpeedWidget,
  Differentiators,
  TrustSignal,
  CtaStrip,
  ServicesPreview
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/contour-website/blocks-home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/contour-website/blocks-pages.jsx
try { (() => {
/* Contour website — services, about & contact blocks. */
(function () {
  const {
    Button,
    Card,
    Badge,
    Eyebrow,
    Field,
    Input,
    Select,
    Textarea,
    Faq,
    FaqItem,
    Divider
  } = window.ContourDesignSystem_7f839f;
  const D = window.CONTOUR_DATA;
  const Check = () => /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": "true",
    style: {
      flexShrink: 0,
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8.5L6.5 12L13 4.5",
    style: {
      stroke: 'var(--accent)'
    },
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  function RichText({
    heading,
    body,
    dark
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: dark ? 'topo-bg' : 'topo-bg-light'
    }, /*#__PURE__*/React.createElement("div", {
      className: "container section",
      style: {
        paddingBlock: 'clamp(3rem,6vw,4.5rem)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "prose",
      style: {
        color: dark ? 'var(--text-on-dark)' : 'var(--text-on-light)'
      }
    }, heading && /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--fs-h2)',
        marginBottom: '0.75rem',
        maxWidth: '20ch'
      }
    }, heading), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-body-lg)',
        fontWeight: 300,
        opacity: 0.85,
        maxWidth: '60ch'
      }
    }, body))));
  }
  function ServicesFull({
    go
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "topo-bg-light"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ck-tiers"
    }, D.tiers.map(t => /*#__PURE__*/React.createElement(Card, {
      key: t.tier,
      variant: t.featured ? 'featured' : 'light',
      as: "article",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.1rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      onLight: !t.featured,
      style: t.featured ? {
        color: 'var(--stone)'
      } : null
    }, t.tier), t.featured && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '0.7rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--stone)',
        opacity: 0.7
      }
    }, "Most popular")), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '1.5rem',
        color: t.featured ? 'var(--stone)' : 'var(--text-on-light)'
      }
    }, t.name), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '0.9375rem',
        color: t.featured ? 'color-mix(in srgb,var(--stone) 82%,transparent)' : 'var(--text-on-light-muted)',
        lineHeight: 1.5
      }
    }, t.tagline)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: '0.5rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: '1.75rem',
        color: t.featured ? 'var(--stone)' : 'var(--text-on-light)'
      }
    }, t.price), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '0.875rem',
        color: t.featured ? 'color-mix(in srgb,var(--stone) 70%,transparent)' : 'var(--text-on-light-muted)'
      }
    }, "+ ", t.setup, " setup")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '0.9375rem',
        color: t.featured ? 'color-mix(in srgb,var(--stone) 85%,transparent)' : 'var(--text-on-light)',
        lineHeight: 1.55
      }
    }, t.description), /*#__PURE__*/React.createElement("ul", {
      role: "list",
      style: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.55rem',
        flex: 1
      }
    }, t.inclusions.map((it, i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'flex',
        gap: '0.6rem',
        fontSize: '0.9rem',
        color: t.featured ? 'color-mix(in srgb,var(--stone) 90%,transparent)' : 'var(--text-on-light)',
        lineHeight: 1.4
      }
    }, /*#__PURE__*/React.createElement(Check, null), it))), /*#__PURE__*/React.createElement(Button, {
      variant: t.featured ? 'light' : 'primary',
      onClick: () => go('contact'),
      style: {
        alignSelf: 'flex-start',
        marginTop: 'auto'
      }
    }, "Get started"))))));
  }
  function CostComparison() {
    const c = D.comparison;
    return /*#__PURE__*/React.createElement("section", {
      className: "topo-bg"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container section"
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "The honest math"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--fs-h2)',
        color: 'var(--text-on-dark)',
        margin: '0.5rem 0 0.75rem'
      }
    }, c.headline), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-on-dark)',
        opacity: 0.8,
        maxWidth: '60ch',
        marginBottom: '2.5rem',
        lineHeight: 1.6
      }
    }, c.intro), /*#__PURE__*/React.createElement("div", {
      style: {
        overflowX: 'auto',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-on-dark)'
      }
    }, /*#__PURE__*/React.createElement("table", {
      className: "ck-table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Item"), /*#__PURE__*/React.createElement("th", null, "Typical Agency Stack"), /*#__PURE__*/React.createElement("th", {
      className: "ck-contour"
    }, "Contour"))), /*#__PURE__*/React.createElement("tbody", null, c.rows.map(r => /*#__PURE__*/React.createElement("tr", {
      key: r.label,
      className: r.total ? 'ck-total' : ''
    }, /*#__PURE__*/React.createElement("td", null, r.label), /*#__PURE__*/React.createElement("td", {
      style: {
        opacity: 0.85
      }
    }, r.competitor), /*#__PURE__*/React.createElement("td", {
      className: "ck-contour"
    }, r.contour))))))));
  }
  function SecondaryServices({
    go
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "topo-bg-light"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container section",
      style: {
        paddingBlock: 'clamp(2.5rem,5vw,4rem)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ck-secondary"
    }, D.secondary.map((s, i) => /*#__PURE__*/React.createElement(Card, {
      key: i,
      variant: "light",
      as: "article",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        borderColor: 'var(--border-on-dark)'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '1.375rem',
        color: 'var(--text-on-light)',
        lineHeight: 1.3
      }
    }, s.headline), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '0.9375rem',
        color: 'var(--text-on-light-muted)',
        lineHeight: 1.55,
        flex: 1
      }
    }, s.body), s.price && /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: '1.25rem',
        color: 'var(--text-on-light)'
      }
    }, s.price), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: () => go('contact'),
      style: {
        alignSelf: 'flex-start'
      }
    }, s.cta))))));
  }
  function FaqSection() {
    return /*#__PURE__*/React.createElement("section", {
      className: "topo-bg-light"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container section"
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Questions"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--fs-h2)',
        color: 'var(--text-on-light)',
        margin: '0.5rem 0 2rem'
      }
    }, "Frequently asked questions"), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 760
      }
    }, /*#__PURE__*/React.createElement(Faq, null, D.faqs.map((f, i) => /*#__PURE__*/React.createElement(FaqItem, {
      key: i,
      question: f.q,
      defaultOpen: i === 0
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, f.a)))))));
  }
  function AboutStory({
    go
  }) {
    const a = D.about;
    return /*#__PURE__*/React.createElement("section", {
      className: "topo-bg-light"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container section"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 720,
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5rem'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "About Contour"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(1.375rem,2.5vw,1.875rem)',
        color: 'var(--text-on-light)',
        lineHeight: 1.4,
        marginTop: '0.75rem'
      }
    }, a.opening)), /*#__PURE__*/React.createElement("div", {
      className: "prose",
      style: {
        color: 'var(--text-on-light)'
      }
    }, a.story.map((p, i) => /*#__PURE__*/React.createElement("p", {
      key: i,
      style: {
        fontSize: '1.0625rem',
        fontWeight: 300,
        lineHeight: 1.7
      }
    }, p))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
      className: "prose",
      style: {
        color: 'var(--text-on-light)'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: '1.5rem',
        marginBottom: '1rem'
      }
    }, "How we work"), a.howWeWork.map((p, i) => /*#__PURE__*/React.createElement("p", {
      key: i,
      style: {
        fontSize: '1.0625rem',
        fontWeight: 300,
        lineHeight: 1.7
      }
    }, p))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontStyle: 'italic',
        color: 'var(--text-on-light-muted)',
        fontSize: '0.9375rem',
        lineHeight: 1.55
      }
    }, D.locationLong), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => go('contact')
    }, "Let\u2019s see if we\u2019re a fit.")))));
  }
  function ContactForm() {
    const [sent, setSent] = React.useState(false);
    return /*#__PURE__*/React.createElement("section", {
      className: "topo-bg"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "ck-contact"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Contact"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'clamp(2rem,4vw,3rem)',
        color: 'var(--text-on-dark)',
        lineHeight: 1.1
      }
    }, "Let\u2019s talk."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-on-dark)',
        opacity: 0.8
      }
    }, "Tell us a bit about your situation \u2014 we read everything."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-on-dark)',
        opacity: 0.6,
        fontSize: '0.9rem',
        fontStyle: 'italic',
        lineHeight: 1.5
      }
    }, D.locationLong)), /*#__PURE__*/React.createElement("form", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      },
      onSubmit: e => {
        e.preventDefault();
        setSent(true);
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Name",
      htmlFor: "cf-name",
      required: true
    }, /*#__PURE__*/React.createElement(Input, {
      id: "cf-name",
      placeholder: "Your name"
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Email or Phone",
      htmlFor: "cf-contact",
      required: true
    }, /*#__PURE__*/React.createElement(Input, {
      id: "cf-contact",
      placeholder: "you@email.com or (555) 555-5555"
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Website URL",
      htmlFor: "cf-url",
      optional: true
    }, /*#__PURE__*/React.createElement(Input, {
      id: "cf-url",
      type: "url",
      placeholder: "https://yoursite.com"
    })), /*#__PURE__*/React.createElement(Field, {
      label: "What are you working with?",
      htmlFor: "cf-sit",
      optional: true
    }, /*#__PURE__*/React.createElement(Select, {
      id: "cf-sit",
      defaultValue: ""
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Select one\u2026"), /*#__PURE__*/React.createElement("option", {
      value: "no-site"
    }, "No site yet"), /*#__PURE__*/React.createElement("option", {
      value: "wordpress"
    }, "WordPress"), /*#__PURE__*/React.createElement("option", {
      value: "wix"
    }, "Wix or Squarespace"), /*#__PURE__*/React.createElement("option", {
      value: "other"
    }, "Something else"))), /*#__PURE__*/React.createElement(Field, {
      label: "Tell us about your situation",
      htmlFor: "cf-msg",
      optional: true
    }, /*#__PURE__*/React.createElement(Textarea, {
      id: "cf-msg",
      placeholder: "What\u2019s going on with your website? What would a win look like?"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      type: "submit",
      style: {
        alignSelf: 'flex-start'
      }
    }, sent ? 'Thanks — we’ll be in touch.' : 'Get in Touch'), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '0.875rem',
        color: 'var(--text-on-dark)',
        opacity: 0.6
      }
    }, "You\u2019ll hear from us promptly."))))));
  }
  Object.assign(window.ContourBlocks, {
    RichText,
    ServicesFull,
    CostComparison,
    SecondaryServices,
    FaqSection,
    AboutStory,
    ContactForm
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/contour-website/blocks-pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/contour-website/data.js
try { (() => {
/* Contour website content — real copy from the production content/ collection. */
window.CONTOUR_DATA = {
  nav: [{
    label: 'Services',
    href: 'services'
  }, {
    label: 'About',
    href: 'about'
  }, {
    label: 'Contact',
    href: 'contact'
  }],
  locationLong: 'Located in Travelers Rest, SC. Serving the Greenville Area, Upstate South Carolina, Western North Carolina — and anywhere your business is located.',
  locationShort: 'Located in Travelers Rest, SC. Serving the Greenville Area — and anywhere your business is located.',
  hero: {
    headline: 'Your website should work for your business. Not the other way around.',
    subheading: 'Fast, modern websites — built, hosted, and tended for you — for businesses in the Greenville area and beyond.',
    primary: {
      label: 'Get a Free Site Review',
      href: 'contact'
    },
    secondary: {
      label: 'Book a Call',
      href: 'contact'
    },
    trust: 'No pitch, no pressure — just an honest read on where you stand.'
  },
  differentiators: [{
    headline: 'Craftsmanship',
    body: 'We know what it takes to be hired for skill — and we hold our work to that standard.'
  }, {
    headline: 'Local',
    body: 'Based in Travelers Rest, SC — locally owned, working with businesses across the Greenville Area, Upstate South Carolina, and Western North Carolina.'
  }, {
    headline: 'A firm, not a vendor',
    body: 'Firm mindset: “Don’t prescribe before you diagnose.” We survey the situation, build what it actually needs, then get out of the way.'
  }],
  trust: 'Those scores above? This site, live, right now — built on the exact stack we build for clients.',
  tiers: [{
    tier: 'baseline',
    name: 'Baseline',
    tagline: 'Show up. Look the part. Get out of your way.',
    price: '$97/mo',
    setup: '$797',
    featured: false,
    description: 'A site that’s fast, clean, and credible — one that does its job when someone looks you up, and doesn’t need a developer to keep alive.',
    inclusions: ['5–7 pages designed and written for your business', 'Static stack — no WordPress, no plugins, no patches', '90+ PageSpeed score, guaranteed', 'Hosting, SSL, and DNS managed for you', 'Contact form routed to your inbox', 'Analytics + Search Console connected', 'One content update per month', 'A monthly report a human actually wrote']
  }, {
    tier: 'elevated',
    name: 'Elevated',
    tagline: 'Get found. Get calls. Stay ahead.',
    price: '$197/mo',
    setup: '$1,297',
    featured: true,
    description: 'A site alone doesn’t fill the calendar. Elevated adds the local SEO infrastructure that puts you in front of people searching for what you do.',
    inclusions: ['Everything in Baseline', 'Up to 12 pages, including a blog', 'Google Business Profile setup & optimization', 'Citation building — 40+ local directories', 'One SEO-targeted blog post per month', 'Automated review requests + responses', 'Monthly keyword and ranking snapshot', 'Two content updates per month']
  }, {
    tier: 'crest',
    name: 'Crest',
    tagline: 'Run the market, not just compete in it.',
    price: '$497/mo',
    setup: '$2,497',
    featured: false,
    description: 'You’re not trying to show up — you’re trying to own the category. Crest puts the whole machine on top of Elevated.',
    inclusions: ['Everything in Elevated', 'Up to 20 pages', 'A lead magnet — written, designed, deployed', 'Instant SMS response + follow-up sequences', 'Booking integration, active and maintained', 'Multi-platform reputation management', 'Two blog posts per month', 'Monthly strategy call + quarterly roadmap']
  }],
  comparison: {
    headline: 'What does it actually cost?',
    intro: 'A typical WordPress setup — managed hosting, a security plugin, a maintenance retainer, someone handling basic SEO — adds up fast. And it’s still slow, still fragile. Here’s the same list, our way.',
    rows: [{
      label: 'Website hosting',
      competitor: '$20–80/mo',
      contour: 'Included'
    }, {
      label: 'Website maintenance',
      competitor: '$99–299/mo',
      contour: 'Included'
    }, {
      label: 'Security & updates',
      competitor: '$49–149/mo',
      contour: 'Included'
    }, {
      label: 'SEO basics',
      competitor: '$200–500/mo',
      contour: 'Included'
    }, {
      label: 'Total',
      competitor: '$368–1,028/mo',
      contour: 'From $97/mo',
      total: true
    }]
  },
  secondary: [{
    headline: 'Have a WordPress site you’re ready to leave in the dust?',
    body: 'You don’t need to start over — you need to move. We extract your content, redirect every URL so your rankings survive, and land you on a stack that doesn’t need a maintenance plan to stay standing.',
    price: 'From +$497',
    cta: 'Start the move'
  }, {
    headline: 'Don’t have a site yet…?',
    body: 'Starting from zero is actually the cleaner scenario — no tech debt, no redirect headaches, no mystery plugins. We build from the ground up, set up correctly from day one. For most businesses, that’s Baseline.',
    price: '',
    cta: 'Start with Baseline'
  }],
  faqs: [{
    q: 'Isn’t this expensive?',
    a: 'A WordPress site with managed hosting, a security plugin, a page-builder license, and someone to keep it updated typically runs $150–440 a month — before you count your own time. Baseline is $97/mo, hosting included. For most businesses this is a step down in cost, not up.'
  }, {
    q: 'How long does it take?',
    a: 'Build timeline is typically 1–2 weeks from the point we have your content and a clear direction. Discovery and strategy happen first — that’s where we learn enough about your business to build something that actually fits.'
  }, {
    q: 'Will I actually get leads?',
    a: 'We build everything Google looks for when it decides who shows up in the map pack: a fast site, a complete Google Business Profile, consistent citations, reviews, and schema. We can’t promise you a ranking — Google controls that — but we close the gap most businesses leave open.'
  }, {
    q: 'Do I own my site?',
    a: 'Yes — the site is yours, and so is your domain. We build it, you own it. If you ever leave, both go with you: no exit fees, no hostage situations.'
  }, {
    q: 'What if I want to cancel?',
    a: 'Cancel anytime. No long-term contracts. We’d rather earn the relationship month to month than lock you in. If you cancel, we’ll help you migrate your domain.'
  }, {
    q: 'What do you need from me to get started?',
    a: 'A few hours of your time for a discovery conversation — we ask questions, you tell us about your business and your customers. After that, we handle the build.'
  }],
  about: {
    opening: 'We build fast, modern websites and local marketing for businesses in Greenville, SC and beyond. No ticket system — we answer personally.',
    story: ['Contour is a growing business trying to get beyond where it is. That’s the same reason every client comes to us.', 'Devin builds websites. Karen teaches violin. We’re craftspeople in our own rights — we know what it takes to do skilled work for someone, to care about the outcome more than the invoice.', 'That’s what we’re building here: a firm that handles a side of your business — cleanly, reliably, without requiring your attention — so you can stay focused on the work only you can do.'],
    howWeWork: ['We survey before we build. Every engagement starts with a real discovery conversation — we learn your business, your customers, and where you’re trying to go before we touch a line of code.', 'Then we build to that. Not a template dropped on you — a site shaped to your situation.', 'After that, we get out of your way. You own your site and your domain, always. If something needs attention, you call us — not a support queue.']
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/contour-website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.Faq = __ds_scope.Faq;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.ContourMark = __ds_scope.ContourMark;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
