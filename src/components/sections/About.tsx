import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const HIGHLIGHTS = [
  'Competitive research before every build',
  'Full-Stack development (Frontend + Backend)',
  'E-commerce, dashboards, SaaS, landing pages, and custom business solutions',
  'Clear communication and fast, reliable delivery',
];

const About: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, type: 'spring' as const, stiffness: 80, damping: 18 },
    }),
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 md:py-36 px-6 md:px-12 lg:px-16 overflow-hidden"
      style={{ background: '#09090b' }}
    >
      {/* Subtle background warmth matching hero */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[50%]"
          style={{
            background: 'radial-gradient(ellipse at 50% 100%, rgba(90,62,25,0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex items-center gap-3 mb-12"
        >
          <span
            className="inline-block w-8 h-px"
            style={{ background: '#b8965a', opacity: 0.6 }}
            aria-hidden="true"
          />
          <span
            className="text-[11px] font-medium uppercase tracking-[0.18em]"
            style={{ color: '#b8965a', fontFamily: 'Inter, sans-serif' }}
          >
            About
          </span>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* LEFT — Main heading + content */}
          <div>
            {/* Section heading */}
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="leading-[1.05] tracking-tight mb-8"
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontWeight: 400,
                color: '#f5f5f4',
              }}
            >
              The Developer
              <br />
              <em
                style={{
                  fontStyle: 'italic',
                  color: '#b8965a',
                }}
              >
                Behind the Build.
              </em>
            </motion.h2>

            {/* Headline */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="mb-6 leading-[1.7]"
              style={{
                fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
                fontWeight: 600,
                color: 'rgba(245,245,244,0.85)',
              }}
            >
              I Build High-Performance Web Applications That Help Businesses Grow.
            </motion.p>

            {/* Body paragraphs */}
            {[
              'Every successful product starts long before writing the first line of code.',
              'Before development begins, I study competitors, analyze successful products, identify weaknesses in existing solutions, and understand what users actually need.',
              'Only then do I choose the right technologies, architecture, and development approach.',
              'Whether it is an e-commerce platform, an internal dashboard, a SaaS product, or a business website, my goal is always the same: build products that are fast, scalable, user-focused, and built for long-term growth.',
            ].map((para, i) => (
              <motion.p
                key={i}
                custom={3 + i}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="mb-4 leading-[1.8]"
                style={{
                  fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  color: 'rgba(245,245,244,0.5)',
                }}
              >
                {para}
              </motion.p>
            ))}

            {/* Bold sign-off */}
            <motion.p
              custom={7}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="mt-6"
              style={{
                fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)',
                color: 'rgba(245,245,244,0.75)',
              }}
            >
              I don't believe in copying designs.{' '}
              <span style={{ color: '#b8965a' }}>I believe in building better products.</span>
            </motion.p>
          </div>

          {/* RIGHT — Stats + highlights */}
          <div className="flex flex-col gap-8">
            {/* Stat cards */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '100%', label: 'Research-First' },
                { value: '∞', label: 'Attention to Detail' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-xl border"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    borderColor: 'rgba(255,255,255,0.06)',
                  }}
                >
                  <div
                    className="mb-1"
                    style={{
                      fontFamily: "'Instrument Serif', Georgia, serif",
                      fontSize: '2rem',
                      fontWeight: 400,
                      color: '#b8965a',
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.75rem',
                      fontWeight: 400,
                      color: 'rgba(245,245,244,0.4)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* What I bring */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="rounded-xl p-6 border"
              style={{
                background: 'rgba(184,150,90,0.04)',
                borderColor: 'rgba(184,150,90,0.12)',
              }}
            >
              <p
                className="mb-5"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  color: '#b8965a',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                }}
              >
                What I bring
              </p>
              <ul className="flex flex-col gap-3">
                {HIGHLIGHTS.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-[5px] shrink-0 w-1 h-1 rounded-full"
                      style={{ background: '#b8965a' }}
                      aria-hidden="true"
                    />
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.9rem',
                        fontWeight: 400,
                        color: 'rgba(245,245,244,0.6)',
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
