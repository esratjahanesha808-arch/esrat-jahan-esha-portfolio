import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Monitor, Sparkles, TrendingUp, LifeBuoy } from 'lucide-react';

const SERVICES = [
  {
    icon: Monitor,
    title: 'Full-Stack Development',
    desc: 'Develop modern websites, web applications, dashboards, SaaS products, and custom business solutions using modern technologies and best practices.',
  },
  {
    icon: Sparkles,
    title: 'AI Integration',
    desc: 'Integrate AI-powered features into websites and SaaS applications using modern AI APIs and LLMs to automate workflows and increase productivity.',
  },
  {
    icon: TrendingUp,
    title: 'SEO',
    desc: 'Improve website visibility through technical SEO, performance optimization, metadata, structured data, Core Web Vitals, and modern search practices.',
  },
  {
    icon: LifeBuoy,
    title: 'Ongoing Support',
    desc: 'Provide continuous maintenance, updates, bug fixes, feature enhancements, performance improvements, and long-term technical support after delivery.',
  },
];

const Services: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-28 md:py-36 px-6 md:px-12 lg:px-16 overflow-hidden flex flex-col items-center"
      style={{ background: '#09090b', borderTop: '1px solid rgba(255,255,255,0.04)' }}
    >
      <div className="relative z-10 w-full max-w-[1400px]">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="leading-[1.05] tracking-tight mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 4vw, 3.8rem)',
              fontFamily: "'Plus Jakarta Sans', Inter, sans-serif",
              fontWeight: 700,
              color: '#f5f5f4',
            }}
          >
            My Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg max-w-2xl leading-relaxed"
            style={{ color: 'rgba(245,245,244,0.6)', fontFamily: 'Inter, sans-serif' }}
          >
            Tailored Solutions for Your Success, Elevate Your Experience with My Exceptional and Comprehensive Services Today
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="flex flex-col p-8 md:p-10 rounded-2xl border transition-colors group"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  borderColor: 'rgba(255,255,255,0.05)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(184,150,90,0.3)';
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(184,150,90,0.03)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.05)';
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.02)';
                }}
              >
                {/* Icon Circle */}
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-8 transition-transform group-hover:scale-110"
                  style={{ background: 'rgba(184,150,90,0.1)' }}
                >
                  <Icon size={24} color="#b8965a" />
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ fontFamily: "'Plus Jakarta Sans', Inter, sans-serif", color: '#f5f5f4' }}
                >
                  {s.title}
                </h3>

                {/* Description */}
                <p 
                  className="leading-relaxed text-sm mb-8 flex-grow" 
                  style={{ color: 'rgba(245,245,244,0.5)', fontFamily: 'Inter, sans-serif' }}
                >
                  {s.desc}
                </p>


              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
