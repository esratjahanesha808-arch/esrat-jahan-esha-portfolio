import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../../data/projects';

// ── Icon helpers ──────────────────────────────────────────────
const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

// ── Single project card ───────────────────────────────────────
const ProjectCard: React.FC<{
  project: (typeof PROJECTS)[0];
  index: number;
}> = ({ project, index }) => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl overflow-hidden border"
      style={{
        background: 'rgba(255,255,255,0.02)',
        borderColor: 'rgba(255,255,255,0.06)',
        transition: 'border-color 0.3s ease',
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(184,150,90,0.2)')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.06)')}
    >
      {/* Inner layout: meta LEFT, image RIGHT */}
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] min-h-[420px] lg:min-h-[480px]">

        {/* LEFT — metadata */}
        <div className="flex flex-col justify-between p-8 lg:p-10 border-b lg:border-b-0 lg:border-r" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <div>
            {/* Category */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-[10px] font-medium uppercase tracking-[0.18em]"
                style={{ color: '#b8965a', fontFamily: 'Inter, sans-serif' }}
              >
                {project.category}
              </span>
            </div>

            {/* Project title */}
            <h3
              className="mb-5 leading-[1.2]"
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: 'clamp(1.4rem, 2vw, 2rem)',
                fontWeight: 400,
                color: '#f5f5f4',
              }}
            >
              {project.title}
            </h3>

            {/* Summary */}
            <p
              className="mb-8 leading-[1.7]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 400,
                color: 'rgba(245,245,244,0.45)',
                display: '-webkit-box',
                WebkitLineClamp: 4,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {project.summary}
            </p>

            {/* Tech stack tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wide"
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
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => navigate(`/project/${project.slug}`)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-medium uppercase tracking-wider transition-all duration-200 active:scale-95"
              style={{
                fontFamily: 'Inter, sans-serif',
                background: 'linear-gradient(135deg, #b8965a 0%, #d4b07a 100%)',
                color: '#08080a',
              }}
            >
              View Details
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[11px] font-medium uppercase tracking-wider border transition-all duration-200 hover:bg-white/5"
              style={{
                fontFamily: 'Inter, sans-serif',
                borderColor: 'rgba(255,255,255,0.1)',
                color: 'rgba(245,245,244,0.6)',
              }}
            >
              <ExternalIcon />
              Live
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[11px] font-medium uppercase tracking-wider border transition-all duration-200 hover:bg-white/5"
              style={{
                fontFamily: 'Inter, sans-serif',
                borderColor: 'rgba(255,255,255,0.1)',
                color: 'rgba(245,245,244,0.6)',
              }}
            >
              <GithubIcon />
              GitHub
            </a>
          </div>
        </div>

        {/* RIGHT — mockup image */}
        <div className="relative overflow-hidden bg-black/20 flex items-center justify-center min-h-[280px] lg:min-h-0">
          <img
            src={project.image}
            alt={`${project.title} mockup`}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
          />
          {/* Gradient overlay on image */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(9,9,11,0.4) 0%, transparent 50%)',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

// ── Projects section ──────────────────────────────────────────
const Projects: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-28 md:py-36 px-6 md:px-12 lg:px-16 overflow-hidden"
      style={{ background: '#09090b', borderTop: '1px solid rgba(255,255,255,0.04)' }}
    >
      {/* Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-0 right-0 w-[50%] h-[60%]"
          style={{
            background: 'radial-gradient(ellipse at 80% 10%, rgba(90,62,25,0.15) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="inline-block w-8 h-px" style={{ background: '#b8965a', opacity: 0.6 }} aria-hidden="true" />
          <span className="text-[11px] font-medium uppercase tracking-[0.18em]" style={{ color: '#b8965a', fontFamily: 'Inter, sans-serif' }}>
            Selected Work
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="leading-[1.05] tracking-tight mb-16"
          style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontWeight: 400,
            color: '#f5f5f4',
          }}
        >
          Projects That{' '}
          <em style={{ fontStyle: 'italic', color: '#b8965a' }}>Ship.</em>
        </motion.h2>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
