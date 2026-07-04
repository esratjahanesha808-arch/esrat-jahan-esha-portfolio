import React from 'react';
const SOCIALS = [
  { name: 'GitHub', url: 'https://github.com/esratjahanesha808-arch', icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/esrat-jahan-esha-169a31416', icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> },
  { name: 'Instagram', url: 'https://www.instagram.com/_esha7_7?igsh=MTE5YXN4bnN5cHIxMg==', icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> },
  { name: 'Facebook', url: 'https://www.facebook.com/share/1BVRnN6HDU/', icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
];

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const Footer: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-10 px-6 md:px-12 lg:px-16" style={{ background: '#09090b', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-b border-white/5 pb-16">
        
        {/* Left Quote */}
        <div className="lg:col-span-2">
          <h2 
            className="text-2xl md:text-3xl leading-snug italic font-serif"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif", color: '#f5f5f4' }}
          >
            Scale your business<br />
            with <span style={{ color: '#b8965a' }}>high-performance web applications.</span>
          </h2>
        </div>

        {/* Navigate Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xs uppercase tracking-widest font-bold" style={{ color: 'rgba(245,245,244,0.4)', fontFamily: 'Inter, sans-serif' }}>
            Navigate
          </h3>
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <button 
                  onClick={() => handleScrollTo(link.href)}
                  className="text-sm font-medium transition-colors hover:text-[#b8965a] text-left"
                  style={{ color: '#f5f5f4', fontFamily: 'Inter, sans-serif' }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xs uppercase tracking-widest font-bold" style={{ color: 'rgba(245,245,244,0.4)', fontFamily: 'Inter, sans-serif' }}>
            Connect
          </h3>
          <ul className="flex flex-col gap-4">
            {SOCIALS.map(social => {
              const Icon = social.icon;
              return (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-medium transition-colors hover:text-[#b8965a]"
                    style={{ color: '#f5f5f4', fontFamily: 'Inter, sans-serif' }}
                  >
                    <Icon />
                    {social.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright */}
        <div className="text-xs font-medium" style={{ color: 'rgba(245,245,244,0.3)', fontFamily: 'Inter, sans-serif' }}>
          &copy; {new Date().getFullYear()} Esrat Jahan Esha. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
