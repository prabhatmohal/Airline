import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Privacy from './pages/Privacy.jsx';

import Terms from './pages/Terms.jsx';
import './app.css';

const vendorScripts = [
  '/assets/js/jquery-3.7.1.min.js',
  '/assets/js/jquery-ui.js',
  '/assets/js/moment.min.js',
  '/assets/js/popper.min.js',
  '/assets/js/bootstrap.min.js',
  '/assets/js/swiper-bundle.min.js',
  '/assets/js/wow.min.js',
  '/assets/js/jquery.nice-select.min.js',
  '/assets/js/gsap.min.js',
  '/assets/js/ScrollTrigger.min.js',
  '/assets/js/jquery.fancybox.min.js',
  '/assets/js/range-slider.js',
  '/assets/js/helper.js',
  '/assets/js/custom-range-calendar.js',
  '/assets/js/custom-calendar.js',
  '/assets/js/leaflet.js',
];

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-atlas-script="${src}"]`);
    if (existing) return resolve();
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.dataset.atlasScript = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

async function initializeLegacyInteractions() {
  for (const src of vendorScripts) {
    try { await loadScript(src); } catch (error) { console.warn(`AtlasTrip optional script failed: ${src}`, error); }
  }

  // custom.js is intentionally re-run after each React route render because the
  // original template initializes its jQuery handlers against the current DOM.
  const oldCustomScripts = document.querySelectorAll('script[data-atlas-custom]');
  oldCustomScripts.forEach((script) => script.remove());
  try {
    await new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `/assets/js/custom.js?route=${Date.now()}`;
      script.async = false;
      script.dataset.atlasCustom = 'true';
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  } catch (error) {
    console.warn('AtlasTrip custom.js failed', error);
  }

  if (window.WOW) {
    try { new window.WOW().init(); } catch (error) { console.warn('WOW initialization failed', error); }
  }
}

function AppShell() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.body.className = 'tt-magic-cursor';

    const titles = {
      '/': 'My Ticket Expert',
      '/about': 'About Us - My Ticket Expert',
      '/contact': 'Contact Us - My Ticket Expert',
    };
    document.title = titles[location.pathname] || 'AtlasTrip';

    let cancelled = false;
    const timer = window.setTimeout(() => {
      if (!cancelled) initializeLegacyInteractions();
    }, 0);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [location.pathname]);

  // Convert only the original site's three internal pages to SPA navigation.
  useEffect(() => {
    const handleInternalLinks = (event) => {
      const anchor = event.target.closest?.('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

      const normalized = href.split('#')[0].replace(/^\.\//, '');
      const routes = {
        'index.html': '/',
        '/index.html': '/',
        'about.html': '/about',
        '/about.html': '/about',
        'contact.html': '/contact',
        '/contact.html': '/contact',
        
        '/': '/',
        '/about': '/about',
        '/contact': '/contact',
      };

      if (routes[normalized]) {
        event.preventDefault();
        navigate(routes[normalized]);
      }
    };

    document.addEventListener('click', handleInternalLinks);
    return () => document.removeEventListener('click', handleInternalLinks);
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="terms" element={<Terms />} />
       <Route path="Privacy" element={<Privacy />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  </React.StrictMode>,
);
