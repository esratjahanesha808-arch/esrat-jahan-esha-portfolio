import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '../ui/Button';

const WorkWithMe: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="work-with-me"
      ref={ref}
      className="relative py-28 md:py-36 px-6 md:px-12 lg:px-16 overflow-hidden"
      style={{ background: '#09090b', borderTop: '1px solid rgba(255,255,255,0.04)' }}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          <span className="inline-block w-8 h-px" style={{ background: '#b8965a', opacity: 0.6 }} />
          <span className="text-[11px] font-medium uppercase tracking-[0.18em]" style={{ color: '#b8965a', fontFamily: 'Inter, sans-serif' }}>
            Work With Me
          </span>
          <span className="inline-block w-8 h-px" style={{ background: '#b8965a', opacity: 0.6 }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 md:p-12 rounded-2xl border flex flex-col justify-between"
            style={{
              background: 'rgba(255,255,255,0.02)',
              borderColor: 'rgba(255,255,255,0.06)',
            }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4" style={{ fontFamily: "'Plus Jakarta Sans', Inter, sans-serif", color: '#f5f5f4' }}>
                Hire Me
              </h3>
              <p className="mb-6 italic" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '1.4rem', color: '#b8965a' }}>
                Looking for a developer who thinks before they build?
              </p>
              <p className="mb-4 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(245,245,244,0.5)', fontSize: '0.95rem' }}>
                I'm available for full-time roles, contract work, freelance projects, and agency collaborations.
              </p>
              <p className="mb-8 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(245,245,244,0.5)', fontSize: '0.95rem' }}>
                I bring both technical execution and strategic thinking—so you're not just hiring someone who writes code; you're partnering with someone who genuinely cares about whether the final product succeeds.
              </p>
            </div>
            <Button variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get in Touch
            </Button>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 md:p-12 rounded-2xl border flex flex-col justify-between"
            style={{
              background: 'linear-gradient(135deg, rgba(184,150,90,0.05) 0%, rgba(255,255,255,0.02) 100%)',
              borderColor: 'rgba(184,150,90,0.15)',
            }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4" style={{ fontFamily: "'Plus Jakarta Sans', Inter, sans-serif", color: '#f5f5f4' }}>
                Build Your Project
              </h3>
              <p className="mb-6 italic" style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '1.4rem', color: '#b8965a' }}>
                Have an idea but don't know where to start?
              </p>
              <p className="mb-4 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(245,245,244,0.5)', fontSize: '0.95rem' }}>
                Not sure which technologies to use, how long development will take, or what your product actually needs? That's exactly where I come in.
              </p>
              <p className="mb-8 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(245,245,244,0.5)', fontSize: '0.95rem' }}>
                I'll help you validate your idea, conduct research, choose the right technologies, plan the product architecture, and build everything—from concept to launch. Whether it's an e-commerce platform, dashboard, SaaS application, landing page, or a custom business solution.
              </p>
            </div>
            <Button variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Start a Project
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithMe;
