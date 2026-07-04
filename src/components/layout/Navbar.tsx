import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoE from '../../assets/logo/logo-e.png';
import logoFull from '../../assets/logo/logo-full.png';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (isHome && href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-brand-bg-primary/85 backdrop-blur-xl border-b border-brand-border shadow-premium'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between h-16 md:h-[72px]">

          {/* Logo — monogram + full name */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="Esrat Jahan Esha — Home"
          >
            {/* E monogram circle */}
            <div className="w-9 h-9 rounded-full overflow-hidden bg-brand-bg-surface border border-brand-border-light group-hover:border-brand-accent/50 transition-colors duration-300 shrink-0">
              <img
                src={logoE}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            {/* Full name script logo — visible on sm+ */}
            <img
              src={logoFull}
              alt="Esrat Jahan Esha"
              className="hidden sm:block w-auto object-contain opacity-92 group-hover:opacity-100 transition-opacity duration-300"
              style={{ height: '48px', filter: 'brightness(1.1)' }}
              loading="eager"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            {navLinks.map((link) => (
              isHome ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-200 cursor-pointer focus-visible:outline-none"
                  style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(245,245,244,0.55)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#b8965a')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,245,244,0.55)')}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={`/${link.href}`}
                  className="text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-200 focus-visible:outline-none"
                  style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(245,245,244,0.55)' }}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <a
              href="mailto:esratjahanesha808@gmail.com"
              className="hidden md:inline-flex items-center px-5 py-2 text-[11px] font-display font-semibold uppercase tracking-[0.14em] rounded-full bg-gradient-to-r from-brand-accent to-brand-accent-light text-brand-bg-primary hover:brightness-110 hover:shadow-glow-accent active:scale-95 transition-all duration-200"
              aria-label="Get in touch via email"
            >
              Get in Touch
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus-visible:outline-2 focus-visible:outline-brand-accent rounded-md"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span className={`block w-5 h-[1.5px] bg-brand-text-primary transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-brand-text-primary transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-brand-text-primary transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-brand-bg-primary/70 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            <motion.nav
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-brand-bg-surface border-l border-brand-border flex flex-col pt-20 pb-10 px-8 md:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-6 mt-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                  >
                    {isHome ? (
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="text-xl font-display font-bold uppercase tracking-wider text-brand-text-primary hover:text-brand-accent transition-colors duration-200 text-left w-full"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        to={`/${link.href}`}
                        className="text-xl font-display font-bold uppercase tracking-wider text-brand-text-primary hover:text-brand-accent transition-colors duration-200 block"
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto">
                <a
                  href="mailto:esratjahanesha808@gmail.com"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-6 py-3 text-[11px] font-display font-semibold uppercase tracking-[0.14em] rounded-full bg-gradient-to-r from-brand-accent to-brand-accent-light text-brand-bg-primary hover:brightness-110 active:scale-95 transition-all duration-200"
                >
                  Get in Touch
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
