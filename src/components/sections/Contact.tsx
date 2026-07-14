import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '../ui/Button';

const Contact: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData.entries());
    object.access_key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(object)
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
      } else {
        console.error('Web3Forms submission failed:', result);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 md:py-36 px-6 md:px-12 lg:px-16 overflow-hidden"
      style={{ background: '#09090b', borderTop: '1px solid rgba(255,255,255,0.04)' }}
    >
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        {/* Text Side */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="inline-block w-8 h-px" style={{ background: '#b8965a', opacity: 0.6 }} />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em]" style={{ color: '#b8965a', fontFamily: 'Inter, sans-serif' }}>
              Contact
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="leading-[1.05] tracking-tight mb-8"
            style={{
              fontSize: 'clamp(2.5rem, 4vw, 4rem)',
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontWeight: 400,
              color: '#f5f5f4',
            }}
          >
            Let's Get in <em style={{ fontStyle: 'italic', color: '#b8965a' }}>Touch.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg leading-relaxed mb-6"
            style={{ color: 'rgba(245,245,244,0.6)', fontFamily: 'Inter, sans-serif' }}
          >
            Whether you're hiring a developer, launching a startup, improving an existing product, or simply exploring an idea, I'd love to hear about it.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg leading-relaxed mb-10"
            style={{ color: 'rgba(245,245,244,0.6)', fontFamily: 'Inter, sans-serif' }}
          >
            Let's discuss your goals and build something that delivers real value.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="mailto:esratjahanesha808@gmail.com" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-300" style={{ borderColor: 'rgba(184,150,90,0.3)', background: 'rgba(184,150,90,0.05)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#b8965a' }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <span className="text-lg font-medium transition-colors duration-300 group-hover:text-white" style={{ fontFamily: "'Plus Jakarta Sans', Inter, sans-serif", color: '#f5f5f4' }}>
                esratjahanesha808@gmail.com
              </span>
            </a>
          </motion.div>
        </div>

        {/* Form Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1"
        >
          {isSuccess ? (
            <div className="h-full flex flex-col items-center justify-center p-12 text-center rounded-2xl border" style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(184,150,90,0.2)' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: 'rgba(184,150,90,0.1)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b8965a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium mb-3" style={{ fontFamily: "'Instrument Serif', Georgia, serif", color: '#f5f5f4' }}>Message Sent</h3>
              <p style={{ color: 'rgba(245,245,244,0.5)', fontFamily: 'Inter, sans-serif' }}>Thank you for reaching out. I'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Web3Forms Access Key is now handled in the fetch request */}
              <input type="hidden" name="subject" value="New contact form submission from your Portfolio" />
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[11px] uppercase tracking-wider font-medium" style={{ color: 'rgba(245,245,244,0.4)', fontFamily: 'Inter, sans-serif' }}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-transparent border outline-none transition-all duration-300 focus:border-[rgba(184,150,90,0.5)] focus:bg-[rgba(255,255,255,0.02)]"
                  style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#f5f5f4', fontFamily: 'Inter, sans-serif' }}
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[11px] uppercase tracking-wider font-medium" style={{ color: 'rgba(245,245,244,0.4)', fontFamily: 'Inter, sans-serif' }}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-transparent border outline-none transition-all duration-300 focus:border-[rgba(184,150,90,0.5)] focus:bg-[rgba(255,255,255,0.02)]"
                  style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#f5f5f4', fontFamily: 'Inter, sans-serif' }}
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[11px] uppercase tracking-wider font-medium" style={{ color: 'rgba(245,245,244,0.4)', fontFamily: 'Inter, sans-serif' }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-5 py-4 rounded-xl bg-transparent border outline-none transition-all duration-300 focus:border-[rgba(184,150,90,0.5)] focus:bg-[rgba(255,255,255,0.02)] resize-none"
                  style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#f5f5f4', fontFamily: 'Inter, sans-serif' }}
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button type="submit" variant="primary" size="lg" className="mt-2 w-full flex justify-center" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
