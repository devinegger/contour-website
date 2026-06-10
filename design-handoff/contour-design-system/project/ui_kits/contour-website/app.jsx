/* Contour website — page composition + tiny hash router. */
(function () {
  const { NavBar } = window.ContourDesignSystem_7f839f;
  const B = window.ContourBlocks;

  function Page({ route, go }) {
    if (route === 'services') {
      return (
        <>
          <B.RichText heading="Three levels of presence. One honest question: where are you right now?" body="Not every business needs the same thing. Some need to get found. Some need to get leads. Some are ready to run the market. We’ll tell you which fits — and if none of them do, we’ll tell you that too." dark />
          <B.ServicesFull go={go} />
          <B.CostComparison />
          <B.SecondaryServices go={go} />
          <B.FaqSection />
          <B.CtaStrip headline="Not sure which fits?" ctaLabel="Get a Free Site Review" go={go} />
        </>
      );
    }
    if (route === 'about') {
      return (
        <>
          <B.AboutStory go={go} />
          <B.CtaStrip headline="Ready when you are." ctaLabel="Book a Call" go={go} />
        </>
      );
    }
    if (route === 'contact') {
      return <B.ContactForm />;
    }
    return (
      <>
        <B.Hero go={go} />
        <B.ServicesPreview go={go} />
        <B.PageSpeedWidget />
        <B.Differentiators />
        <B.TrustSignal />
        <B.CtaStrip headline="Ready when you are." ctaLabel="Book a Call" go={go} />
      </>
    );
  }

  function App() {
    const [route, setRoute] = React.useState(() => (location.hash.replace('#', '') || 'home'));
    const go = React.useCallback((r) => {
      setRoute(r);
      location.hash = r;
      const main = document.getElementById('ck-main');
      if (main) main.scrollIntoView ? window.scrollTo(0, 0) : null;
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);
    React.useEffect(() => {
      const onHash = () => setRoute(location.hash.replace('#', '') || 'home');
      window.addEventListener('hashchange', onHash);
      return () => window.removeEventListener('hashchange', onHash);
    }, []);
    return (
      <div data-screen-label={route}>
        <NavBar current={route} links={window.CONTOUR_DATA.nav} ctaLabel="Book a Call" ctaHref="contact" onNavigate={go} />
        <main id="ck-main"><Page route={route} go={go} /></main>
        <B.SiteFooter go={go} />
      </div>
    );
  }

  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
})();
