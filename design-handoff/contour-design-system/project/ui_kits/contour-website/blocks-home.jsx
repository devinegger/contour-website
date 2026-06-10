/* Contour website — page blocks. Composes DS primitives + real content. */
const { Button, Card, Badge, Eyebrow, Field, Input, Select, Textarea, Faq, FaqItem, Divider, NavBar, ContourMark } = window.ContourDesignSystem_7f839f;
const D = window.CONTOUR_DATA;

/* ---------- Footer ---------- */
function SiteFooter({ go }) {
  const year = new Date().getFullYear();
  return (
    <footer className="topo-bg" style={{ borderTop: '1px solid var(--border-on-dark-strong)', paddingBlock: '3rem 2rem' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div className="ck-footer-top">
          <a href="#" onClick={(e)=>{e.preventDefault();go('home');}} className="ds-nav__logo" style={{ textDecoration: 'none' }}>
            <ContourMark size={26} />
            <span className="ds-nav__word" style={{ fontSize: 18 }}>Contour<span className="dot">.</span></span>
          </a>
          <ul className="ck-footer-links" role="list">
            {D.nav.map((l) => (
              <li key={l.href}><a href="#" onClick={(e)=>{e.preventDefault();go(l.href);}} style={{ color: 'var(--text-on-dark)', opacity: 0.75, fontSize: '0.9rem' }}>{l.label}</a></li>
            ))}
          </ul>
        </div>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-on-dark)', opacity: 0.6, lineHeight: 1.5 }}>{D.locationShort}</p>
        <div className="ck-footer-bottom">
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-on-dark)', opacity: 0.5 }}>© {year} Contour. All rights reserved.</p>
          <ul className="ck-footer-legal" role="list">
            <li><a href="#" onClick={(e)=>e.preventDefault()} style={{ fontSize: '0.8125rem', color: 'var(--text-on-dark)', opacity: 0.5 }}>Privacy Policy</a></li>
            <li><a href="#" onClick={(e)=>e.preventDefault()} style={{ fontSize: '0.8125rem', color: 'var(--text-on-dark)', opacity: 0.5 }}>Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Hero ---------- */
function Hero({ go }) {
  const h = D.hero;
  return (
    <section className="topo-bg" style={{ paddingBlock: 'clamp(5rem,13vw,9rem)', paddingInline: 'var(--container-padding)', display: 'flex', alignItems: 'center', minHeight: '78vh' }}>
      <div className="container" style={{ width: '100%' }}>
        <div style={{ maxWidth: 820, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <Eyebrow>Web design &amp; local marketing</Eyebrow>
          <h1 style={{ fontSize: 'var(--fs-display)', fontWeight: 700, lineHeight: 'var(--lh-display)', letterSpacing: 'var(--ls-display)', color: 'var(--text-on-dark)' }}>{h.headline}</h1>
          <p style={{ fontSize: 'var(--fs-body-lg)', fontWeight: 300, color: 'var(--text-on-dark)', opacity: 0.82, maxWidth: '58ch', lineHeight: 1.55 }}>{h.subheading}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', marginTop: '0.5rem' }}>
            <Button variant="primary" size="lg" onClick={() => go(h.primary.href)}>{h.primary.label}</Button>
            <Button variant="ghost" size="lg" onClick={() => go(h.secondary.href)}>{h.secondary.label}</Button>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-on-dark)', opacity: 0.55, marginTop: '0.25rem' }}>{h.trust}</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- PageSpeed widget (recreated, sample result) ---------- */
function Gauge({ score, label }) {
  const rating = score >= 90 ? 'good' : score >= 50 ? 'warn' : 'critical';
  const color = rating === 'good' ? 'var(--status-good)' : rating === 'warn' ? 'var(--status-warn)' : 'var(--status-critical)';
  const r = 34, c = 2 * Math.PI * r, off = c * (1 - score / 100);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <div style={{ position: 'relative', width: 84, height: 84 }}>
        <svg width="84" height="84" viewBox="0 0 84 84" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="42" cy="42" r={r} fill="none" style={{ stroke: 'color-mix(in srgb, var(--teal) 18%, transparent)' }} strokeWidth="5" />
          <circle cx="42" cy="42" r={r} fill="none" style={{ stroke: color }} strokeWidth="5" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={off} />
        </svg>
        <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 24, color: 'var(--text-on-dark)' }}>{score}</span>
      </div>
      <span style={{ fontSize: '0.8125rem', color: 'var(--text-on-dark-muted)' }}>{label}</span>
    </div>
  );
}
function PageSpeedWidget() {
  const [url, setUrl] = React.useState('');
  const [shown, setShown] = React.useState(true);
  return (
    <section className="topo-bg" style={{ paddingBlock: 'clamp(3rem,8vw,5rem)', paddingInline: 'var(--container-padding)' }}>
      <div className="container">
        <div style={{ maxWidth: 680, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Eyebrow>Proof, not promises</Eyebrow>
            <h2 style={{ fontSize: 'var(--fs-h2)', color: 'var(--text-on-dark)' }}>How fast is your site?</h2>
            <p style={{ color: 'var(--text-on-dark)', opacity: 0.75 }}>Enter your URL to get a free Google PageSpeed score.</p>
          </div>
          <form className="ck-psi-row" onSubmit={(e) => { e.preventDefault(); setShown(true); }}>
            <Input placeholder="https://yoursite.com" value={url} onChange={(e) => setUrl(e.target.value)} style={{ flex: 1 }} />
            <Button variant="primary" type="submit">See My Score</Button>
          </form>
          {shown && (
            <Card variant="outline" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <Gauge score={99} label="Performance" />
                <Gauge score={100} label="Accessibility" />
                <Gauge score={100} label="Best Practices" />
                <Gauge score={100} label="SEO" />
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-on-dark-muted)' }}>contour-digital.com · measured on mobile</p>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- Differentiators ---------- */
function Differentiators() {
  return (
    <section className="topo-bg">
      <div className="container section">
        <div className="ck-diffs">
          {D.differentiators.map((d) => (
            <div key={d.headline} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>{d.headline}</h3>
              <p style={{ color: 'var(--text-on-dark)', opacity: 0.85, lineHeight: 1.6 }}>{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust signal ---------- */
function TrustSignal() {
  return (
    <section className="topo-bg">
      <div className="container section" style={{ paddingBlock: 'clamp(2.5rem,6vw,4rem)' }}>
        <p style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(1.25rem,2.5vw,1.7rem)', color: 'var(--text-on-dark)', opacity: 0.9, maxWidth: '58ch', margin: '0 auto', textAlign: 'center', lineHeight: 1.5 }}>{D.trust}</p>
      </div>
    </section>
  );
}

/* ---------- CTA strip ---------- */
function CtaStrip({ headline, ctaLabel, go, href = 'contact' }) {
  return (
    <section className="topo-bg" style={{ paddingBlock: 'clamp(3rem,6vw,5rem)', paddingInline: 'var(--container-padding)' }}>
      <div className="container ck-cta">
        <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.25rem)', color: 'var(--text-on-dark)', maxWidth: '24ch' }}>{headline}</h2>
        <Button variant="primary" size="lg" onClick={() => go(href)}>{ctaLabel}</Button>
      </div>
    </section>
  );
}

/* ---------- Services preview (home) ---------- */
function ServicesPreview({ go }) {
  return (
    <section className="topo-bg-light">
      <div className="container section">
        <Eyebrow>Plans</Eyebrow>
        <h2 style={{ fontSize: 'var(--fs-h2)', color: 'var(--text-on-light)', margin: '0.5rem 0 0.25rem' }}>Simple, clear plans</h2>
        <p style={{ color: 'var(--text-on-light-muted)', marginBottom: '2.5rem' }}>Pick the tier that fits where you are. Move up as you grow.</p>
        <div className="ck-tiers">
          {D.tiers.map((t) => (
            <Card key={t.tier} variant="light" as="article" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Badge onLight>{t.tier}</Badge>
              <h3 style={{ fontSize: '1.375rem', color: 'var(--text-on-light)' }}>{t.name}</h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-on-light-muted)', lineHeight: 1.5, flex: 1 }}>{t.tagline}</p>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1.25rem', color: 'var(--text-on-light)' }}>{t.price}</p>
              <Button variant="ghost" size="sm" onClick={() => go('services')} style={{ alignSelf: 'flex-start' }}>Learn more</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

window.ContourBlocks = { SiteFooter, Hero, PageSpeedWidget, Differentiators, TrustSignal, CtaStrip, ServicesPreview };
