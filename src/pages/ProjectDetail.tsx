import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/projects';

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[currentIndex];
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#09090b' }}>
        <div className="text-center">
          <p style={{ color: 'rgba(245,245,244,0.4)', fontFamily: 'Inter, sans-serif' }}>Project not found.</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 underline"
            style={{ color: '#b8965a', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem' }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen"
      style={{ background: '#09090b', color: '#f5f5f4' }}
    >
      {/* Atmospheric background */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute -top-20 -left-20 w-[50%] h-[60%]"
          style={{
            background: 'radial-gradient(ellipse at 30% 20%, rgba(110,75,35,0.4) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
        <div
          className="absolute -bottom-20 right-0 w-[40%] h-[50%]"
          style={{
            background: 'radial-gradient(ellipse at 70% 80%, rgba(90,62,25,0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* ── Nav bar ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5"
        style={{ background: 'rgba(9,9,11,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
      >
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest transition-colors duration-200"
          style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(245,245,244,0.5)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#b8965a')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,245,244,0.5)')}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        <span
          className="text-[11px] font-medium uppercase tracking-widest"
          style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(245,245,244,0.25)' }}
        >
          {currentIndex + 1} / {PROJECTS.length}
        </span>
      </nav>

      {/* ── Main content ── */}
      <main className="relative z-10 pt-28 pb-24 px-6 md:px-12 lg:px-16 max-w-5xl mx-auto">

        {/* Category */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="inline-block w-6 h-px" style={{ background: '#b8965a', opacity: 0.6 }} aria-hidden="true" />
          <span className="text-[11px] font-medium uppercase tracking-[0.18em]" style={{ color: '#b8965a', fontFamily: 'Inter, sans-serif' }}>
            {project.category}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="leading-[1.1] tracking-tight mb-10"
          style={{
            fontSize: 'clamp(2rem, 4.5vw, 4rem)',
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontWeight: 400,
            color: '#f5f5f4',
          }}
        >
          {project.title}
        </motion.h1>

        {/* Mockup image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-2xl overflow-hidden mb-14 border"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <img
            src={project.image}
            alt={`${project.title} mockup`}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Action links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center gap-3 mb-14"
        >
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-medium uppercase tracking-wider transition-all duration-200 active:scale-95"
            style={{
              fontFamily: 'Inter, sans-serif',
              background: 'linear-gradient(135deg, #b8965a 0%, #d4b07a 100%)',
              color: '#08080a',
            }}
          >
            <ExternalIcon />
            View Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-medium uppercase tracking-wider border transition-all duration-200 hover:bg-white/5"
            style={{
              fontFamily: 'Inter, sans-serif',
              borderColor: 'rgba(255,255,255,0.12)',
              color: 'rgba(245,245,244,0.6)',
            }}
          >
            <GithubIcon />
            GitHub
          </a>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-14"
        >
          <p
            className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em]"
            style={{ color: 'rgba(245,245,244,0.3)', fontFamily: 'Inter, sans-serif' }}
          >
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-full text-[10px] font-medium uppercase tracking-wide"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  background: 'rgba(184,150,90,0.08)',
                  border: '1px solid rgba(184,150,90,0.18)',
                  color: 'rgba(184,150,90,0.9)',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px mb-14" style={{ background: 'rgba(255,255,255,0.05)' }} />

        {/* Detail bullet points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p
            className="mb-8 text-[10px] font-medium uppercase tracking-[0.18em]"
            style={{ color: 'rgba(245,245,244,0.3)', fontFamily: 'Inter, sans-serif' }}
          >
            What Was Built
          </p>
          <ul className="flex flex-col gap-6">
            {project.details.map((point, i) => (
              <li key={i} className="flex items-start gap-4">
                <span
                  className="shrink-0 mt-[9px] w-1.5 h-1.5 rounded-full"
                  style={{ background: '#b8965a' }}
                  aria-hidden="true"
                />
                <p
                  className="leading-[1.8]"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.95rem',
                    fontWeight: 400,
                    color: 'rgba(245,245,244,0.6)',
                  }}
                >
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ── Prev / Next navigation ── */}
        {(prevProject || nextProject) && (
          <div className="mt-20 pt-10 border-t flex items-center justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
            {prevProject ? (
              <button
                onClick={() => navigate(`/project/${prevProject.slug}`)}
                className="flex items-center gap-3 group"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ color: '#b8965a' }}>
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                <div className="text-left">
                  <p className="text-[9px] uppercase tracking-[0.18em] mb-1" style={{ color: 'rgba(245,245,244,0.3)', fontFamily: 'Inter, sans-serif' }}>Previous</p>
                  <p className="text-sm" style={{ color: 'rgba(245,245,244,0.7)', fontFamily: "'Instrument Serif', Georgia, serif" }}>{prevProject.title}</p>
                </div>
              </button>
            ) : <div />}

            {nextProject ? (
              <button
                onClick={() => navigate(`/project/${nextProject.slug}`)}
                className="flex items-center gap-3 group text-right"
              >
                <div className="text-right">
                  <p className="text-[9px] uppercase tracking-[0.18em] mb-1" style={{ color: 'rgba(245,245,244,0.3)', fontFamily: 'Inter, sans-serif' }}>Next</p>
                  <p className="text-sm" style={{ color: 'rgba(245,245,244,0.7)', fontFamily: "'Instrument Serif', Georgia, serif" }}>{nextProject.title}</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ color: '#b8965a' }}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            ) : <div />}
          </div>
        )}
      </main>
    </div>
  );
};

export default ProjectDetail;
