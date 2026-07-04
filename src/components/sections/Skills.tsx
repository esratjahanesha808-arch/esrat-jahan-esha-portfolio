import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SKILL_CATEGORIES = [
  {
    title: 'Core',
    items: ['JavaScript', 'TypeScript', 'Java', 'Python', 'HTML', 'CSS', 'Typography Pairing', 'Mobile-First Design'],
  },
  {
    title: 'Frameworks & UI',
    items: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS', 'Framer Motion', 'Glassmorphism', 'CSS Layers'],
  },
  {
    title: 'Databases & ORMs',
    items: ['PostgreSQL', 'MongoDB', 'Prisma ORM', 'Redis'],
  },
  {
    title: 'AI Integration',
    items: ['OpenAI API', 'LangChain', 'LLMs', 'AI Workflows'],
  },
  {
    title: 'SEO & Performance',
    items: ['Technical SEO', 'Core Web Vitals', 'Performance Optimization'],
  },
  {
    title: 'Strategy & UX',
    items: ['Conversion Optimization', 'UX Analysis', 'Competitive Research'],
  },
];

const Skills: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-28 md:py-36 px-6 md:px-12 lg:px-16 overflow-hidden"
      style={{ background: '#09090b', borderTop: '1px solid rgba(255,255,255,0.04)' }}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-8 h-px" style={{ background: '#b8965a', opacity: 0.6 }} />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em]" style={{ color: '#b8965a', fontFamily: 'Inter, sans-serif' }}>
              Skills & Expertise
            </span>
            <span className="inline-block w-8 h-px" style={{ background: '#b8965a', opacity: 0.6 }} />
          </div>

          <h2
            className="leading-[1.05] tracking-tight mb-6"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontWeight: 400,
              color: '#f5f5f4',
            }}
          >
            The Tools <em style={{ fontStyle: 'italic', color: '#b8965a' }}>I Use.</em>
          </h2>
          <p className="max-w-xl text-base md:text-lg leading-relaxed" style={{ color: 'rgba(245,245,244,0.5)', fontFamily: 'Inter, sans-serif' }}>
            A comprehensive stack built for performance, scalability, and premium user experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="p-8 rounded-2xl border flex flex-col h-full"
              style={{
                background: 'rgba(255,255,255,0.02)',
                borderColor: 'rgba(255,255,255,0.05)',
              }}
            >
              <h3 className="text-xl font-semibold mb-6 pb-4 border-b" style={{ fontFamily: "'Plus Jakarta Sans', Inter, sans-serif", color: '#f5f5f4', borderColor: 'rgba(255,255,255,0.05)' }}>
                {category.title}
              </h3>
              <ul className="flex flex-col gap-3 flex-grow">
                {category.items.map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#b8965a' }} />
                    <span className="text-sm font-medium tracking-wide" style={{ color: 'rgba(245,245,244,0.7)', fontFamily: 'Inter, sans-serif' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
