import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import MagneticButton from '../ui/MagneticButton';
import { useReducedMotion } from '../../hooks/useReducedMotion';

// Typewriter texts — what she builds (supplementary to the main heading)
const ANIMATED_TEXTS = [
  'Full-Stack Web Applications.',
  'AI-Powered Digital Products.',
  'High-Performance E-Commerce.',
  'Scalable SaaS Platforms.',
];

const Typewriter: React.FC<{ texts: string[]; reduced: boolean }> = ({ texts, reduced }) => {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = texts[index];
    const speed = deleting ? 55 : 115;

    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplay(full.substring(0, display.length + 1));
      } else {
        setDisplay(full.substring(0, display.length - 1));
      }
    }, speed);

    if (!deleting && display === full) {
      setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && display === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [display, deleting, index, texts, reduced]);

  return (
    <span>
      {/* Instrument Serif italic — like Slee Automation */}
      <em
        className="not-italic"
        style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontStyle: 'italic',
          color: '#b8965a',
        }}
      >
        {display}
      </em>
      <span
        className="inline-block w-[2px] h-[0.8em] ml-0.5 align-middle"
        style={{ background: '#b8965a', opacity: 0.9, animation: 'pulse 1.1s ease-in-out infinite' }}
        aria-hidden="true"
      />
    </span>
  );
};

const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 85, damping: 18 },
    },
  };

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6 md:px-12 lg:px-16 pt-24"
    >
      {/* ── Slee Automation–style background ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Base — slightly warm near-black, same tint as Slee */}
        <div className="absolute inset-0" style={{ background: '#09090b' }} />

        {/* Top-left corner warm amber glow */}
        <div
          className="absolute"
          style={{
            top: '-10%',
            left: '-10%',
            width: '55%',
            height: '70%',
            background: 'radial-gradient(ellipse at 30% 30%, rgba(120,85,40,0.55) 0%, rgba(80,55,25,0.25) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Bottom-right warm amber glow */}
        <div
          className="absolute"
          style={{
            bottom: '-15%',
            right: '-10%',
            width: '55%',
            height: '70%',
            background: 'radial-gradient(ellipse at 70% 70%, rgba(110,75,35,0.45) 0%, rgba(70,48,20,0.2) 40%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />

        {/* Center subtle warmth — lifts the pure black */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 55%, rgba(50,35,15,0.5) 0%, transparent 65%)',
          }}
        />

        {/* Vignette: edges slightly darker to push focus inward */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.65) 100%)',
          }}
        />
      </div>


      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6 md:gap-7"
      >
        {/* Eyebrow label — minimal, like Slee Automation */}
        <motion.div variants={itemVariants}>
          <span
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em]"
            style={{ color: '#b8965a', fontFamily: 'Inter, sans-serif' }}
          >
            <span
              className="inline-block w-4 h-px"
              style={{ background: '#b8965a', opacity: 0.6 }}
              aria-hidden="true"
            />
            Full-Stack Developer &amp; AI Integration Specialist
            <span
              className="inline-block w-4 h-px"
              style={{ background: '#b8965a', opacity: 0.6 }}
              aria-hidden="true"
            />
          </span>
        </motion.div>

        {/* Main heading — Instrument Serif, like Slee Automation's hero h1 */}
        <motion.h1
          variants={itemVariants}
          className="leading-[1.05] tracking-tight text-center"
          style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 4.8rem)',
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontWeight: 400,
            color: '#f5f5f4',
          }}
        >
          Turning Ideas Into Reality
          <br />
          <em
            style={{
              fontStyle: 'italic',
              color: 'rgba(245,245,244,0.5)',
              fontSize: '0.78em',
            }}
          >
            In Days, Not Months.
          </em>
        </motion.h1>

        {/* Typewriter line — Instrument Serif italic, like Slee Automation */}
        <motion.div
          variants={itemVariants}
          className="text-center leading-snug"
          style={{
            fontSize: 'clamp(1.25rem, 2.4vw, 1.9rem)',
            fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
            fontWeight: 600,
            color: 'rgba(245,245,244,0.55)',
          }}
        >
          I build{' '}
          <Typewriter texts={ANIMATED_TEXTS} reduced={shouldReduceMotion} />
        </motion.div>

        {/* Subheading — exact CONTENT.md */}
        <motion.p
          variants={itemVariants}
          className="max-w-xl leading-[1.75]"
          style={{
            fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            color: 'rgba(245,245,244,0.5)',
          }}
        >
          From research and strategy to design, development, deployment, and AI integration,
          I create fast, scalable digital products that solve real business problems and look good.
        </motion.p>

        {/* CTAs — gold primary + outlined secondary */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 mt-1">
          <MagneticButton strength={0.22}>
            <Button variant="primary" size="lg" onClick={() => handleScrollTo('#projects')}>
              See My Work
            </Button>
          </MagneticButton>
          <MagneticButton strength={0.22}>
            <Button variant="secondary" size="lg" onClick={() => handleScrollTo('#contact')}>
              Work With Me
            </Button>
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-2 mt-4"
          style={{ color: 'rgba(245,245,244,0.25)' }}
        >
          <span
            className="uppercase tracking-widest"
            style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
          >
            Scroll
          </span>
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8"
            style={{ background: 'linear-gradient(to bottom, rgba(184,150,90,0.5), transparent)' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
