/* Contour website — services, about & contact blocks. */
(function () {
  const { Button, Card, Badge, Eyebrow, Field, Input, Select, Textarea, Faq, FaqItem, Divider } = window.ContourDesignSystem_7f839f;
  const D = window.CONTOUR_DATA;
  const Check = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 3 }}>
      <path d="M3 8.5L6.5 12L13 4.5" style={{ stroke: 'var(--accent)' }} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  function RichText({ heading, body, dark }) {
    return (
      <section className={dark ? 'topo-bg' : 'topo-bg-light'}>
        <div className="container section" style={{ paddingBlock: 'clamp(3rem,6vw,4.5rem)' }}>
          <div className="prose" style={{ color: dark ? 'var(--text-on-dark)' : 'var(--text-on-light)' }}>
            {heading && <h2 style={{ fontSize: 'var(--fs-h2)', marginBottom: '0.75rem', maxWidth: '20ch' }}>{heading}</h2>}
            <p style={{ fontSize: 'var(--fs-body-lg)', fontWeight: 300, opacity: 0.85, maxWidth: '60ch' }}>{body}</p>
          </div>
        </div>
      </section>
    );
  }

  function ServicesFull({ go }) {
    return (
      <section className="topo-bg-light">
        <div className="container section">
          <div className="ck-tiers">
            {D.tiers.map((t) => (
              <Card key={t.tier} variant={t.featured ? 'featured' : 'light'} as="article" style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Badge onLight={!t.featured} style={t.featured ? { color: 'var(--stone)' } : null}>{t.tier}</Badge>
                    {t.featured && <span style={{ fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--stone)', opacity: 0.7 }}>Most popular</span>}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', color: t.featured ? 'var(--stone)' : 'var(--text-on-light)' }}>{t.name}</h3>
                  <p style={{ fontSize: '0.9375rem', color: t.featured ? 'color-mix(in srgb,var(--stone) 82%,transparent)' : 'var(--text-on-light-muted)', lineHeight: 1.5 }}>{t.tagline}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.75rem', color: t.featured ? 'var(--stone)' : 'var(--text-on-light)' }}>{t.price}</span>
                  <span style={{ fontSize: '0.875rem', color: t.featured ? 'color-mix(in srgb,var(--stone) 70%,transparent)' : 'var(--text-on-light-muted)' }}>+ {t.setup} setup</span>
                </div>
                <p style={{ fontSize: '0.9375rem', color: t.featured ? 'color-mix(in srgb,var(--stone) 85%,transparent)' : 'var(--text-on-light)', lineHeight: 1.55 }}>{t.description}</p>
                <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', flex: 1 }}>
                  {t.inclusions.map((it, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.9rem', color: t.featured ? 'color-mix(in srgb,var(--stone) 90%,transparent)' : 'var(--text-on-light)', lineHeight: 1.4 }}>
                      <Check />{it}
                    </li>
                  ))}
                </ul>
                <Button variant={t.featured ? 'light' : 'primary'} onClick={() => go('contact')} style={{ alignSelf: 'flex-start', marginTop: 'auto' }}>Get started</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function CostComparison() {
    const c = D.comparison;
    return (
      <section className="topo-bg">
        <div className="container section">
          <Eyebrow>The honest math</Eyebrow>
          <h2 style={{ fontSize: 'var(--fs-h2)', color: 'var(--text-on-dark)', margin: '0.5rem 0 0.75rem' }}>{c.headline}</h2>
          <p style={{ color: 'var(--text-on-dark)', opacity: 0.8, maxWidth: '60ch', marginBottom: '2.5rem', lineHeight: 1.6 }}>{c.intro}</p>
          <div style={{ overflowX: 'auto', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-on-dark)' }}>
            <table className="ck-table">
              <thead>
                <tr>
                  <th>Item</th><th>Typical Agency Stack</th><th className="ck-contour">Contour</th>
                </tr>
              </thead>
              <tbody>
                {c.rows.map((r) => (
                  <tr key={r.label} className={r.total ? 'ck-total' : ''}>
                    <td>{r.label}</td>
                    <td style={{ opacity: 0.85 }}>{r.competitor}</td>
                    <td className="ck-contour">{r.contour}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }

  function SecondaryServices({ go }) {
    return (
      <section className="topo-bg-light">
        <div className="container section" style={{ paddingBlock: 'clamp(2.5rem,5vw,4rem)' }}>
          <div className="ck-secondary">
            {D.secondary.map((s, i) => (
              <Card key={i} variant="light" as="article" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderColor: 'var(--border-on-dark)' }}>
                <h3 style={{ fontSize: '1.375rem', color: 'var(--text-on-light)', lineHeight: 1.3 }}>{s.headline}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-on-light-muted)', lineHeight: 1.55, flex: 1 }}>{s.body}</p>
                {s.price && <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '1.25rem', color: 'var(--text-on-light)' }}>{s.price}</p>}
                <Button variant="ghost" size="sm" onClick={() => go('contact')} style={{ alignSelf: 'flex-start' }}>{s.cta}</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function FaqSection() {
    return (
      <section className="topo-bg-light">
        <div className="container section">
          <Eyebrow>Questions</Eyebrow>
          <h2 style={{ fontSize: 'var(--fs-h2)', color: 'var(--text-on-light)', margin: '0.5rem 0 2rem' }}>Frequently asked questions</h2>
          <div style={{ maxWidth: 760 }}>
            <Faq>
              {D.faqs.map((f, i) => (
                <FaqItem key={i} question={f.q} defaultOpen={i === 0}><p style={{ margin: 0 }}>{f.a}</p></FaqItem>
              ))}
            </Faq>
          </div>
        </div>
      </section>
    );
  }

  function AboutStory({ go }) {
    const a = D.about;
    return (
      <section className="topo-bg-light">
        <div className="container section">
          <div style={{ maxWidth: 720, display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div>
              <Eyebrow>About Contour</Eyebrow>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.375rem,2.5vw,1.875rem)', color: 'var(--text-on-light)', lineHeight: 1.4, marginTop: '0.75rem' }}>{a.opening}</p>
            </div>
            <div className="prose" style={{ color: 'var(--text-on-light)' }}>
              {a.story.map((p, i) => <p key={i} style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.7 }}>{p}</p>)}
            </div>
            <Divider />
            <div className="prose" style={{ color: 'var(--text-on-light)' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>How we work</h2>
              {a.howWeWork.map((p, i) => <p key={i} style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.7 }}>{p}</p>)}
            </div>
            <p style={{ fontStyle: 'italic', color: 'var(--text-on-light-muted)', fontSize: '0.9375rem', lineHeight: 1.55 }}>{D.locationLong}</p>
            <div><Button variant="primary" onClick={() => go('contact')}>Let’s see if we’re a fit.</Button></div>
          </div>
        </div>
      </section>
    );
  }

  function ContactForm() {
    const [sent, setSent] = React.useState(false);
    return (
      <section className="topo-bg">
        <div className="container section">
          <div className="ck-contact">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Eyebrow>Contact</Eyebrow>
              <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--text-on-dark)', lineHeight: 1.1 }}>Let’s talk.</h1>
              <p style={{ color: 'var(--text-on-dark)', opacity: 0.8 }}>Tell us a bit about your situation — we read everything.</p>
              <p style={{ color: 'var(--text-on-dark)', opacity: 0.6, fontSize: '0.9rem', fontStyle: 'italic', lineHeight: 1.5 }}>{D.locationLong}</p>
            </div>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <Field label="Name" htmlFor="cf-name" required><Input id="cf-name" placeholder="Your name" /></Field>
              <Field label="Email or Phone" htmlFor="cf-contact" required><Input id="cf-contact" placeholder="you@email.com or (555) 555-5555" /></Field>
              <Field label="Website URL" htmlFor="cf-url" optional><Input id="cf-url" type="url" placeholder="https://yoursite.com" /></Field>
              <Field label="What are you working with?" htmlFor="cf-sit" optional>
                <Select id="cf-sit" defaultValue="">
                  <option value="">Select one…</option>
                  <option value="no-site">No site yet</option>
                  <option value="wordpress">WordPress</option>
                  <option value="wix">Wix or Squarespace</option>
                  <option value="other">Something else</option>
                </Select>
              </Field>
              <Field label="Tell us about your situation" htmlFor="cf-msg" optional>
                <Textarea id="cf-msg" placeholder="What’s going on with your website? What would a win look like?" />
              </Field>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Button variant="primary" type="submit" style={{ alignSelf: 'flex-start' }}>{sent ? 'Thanks — we’ll be in touch.' : 'Get in Touch'}</Button>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-on-dark)', opacity: 0.6 }}>You’ll hear from us promptly.</p>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }

  Object.assign(window.ContourBlocks, { RichText, ServicesFull, CostComparison, SecondaryServices, FaqSection, AboutStory, ContactForm });
})();
