'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, LoaderCircle, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === 'success' || status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setStatus('sending');
      setErrorMsg(null);
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error(data?.error || 'Request failed');
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Unknown error');
    }
  };

  return (
    <section id="contact" className="section-padding editorial-section contact-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="contact-heading"
        >
          <p className="section-label">06 / Contact</p>
          <h2>
            <span>LET&apos;S MAKE</span>
            <span>SOMETHING</span>
            <span className="contact-heading-accent">USEFUL.</span>
          </h2>
        </motion.div>

        <div className="contact-layout">
          <motion.aside initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="contact-details">
            <p>Have a product, platform, or operational problem to solve? Send the context and I&apos;ll get back to you.</p>
            <a href="mailto:nguyentruongan0919@gmail.com" className="contact-line">
              <span>EMAIL</span><strong>nguyentruongan0919@gmail.com</strong><ArrowUpRight size={16} />
            </a>
            <a href="tel:+84905941752" className="contact-line">
              <span>PHONE</span><strong>+84 905 941 752</strong><ArrowUpRight size={16} />
            </a>
            <div className="contact-line"><span>LOCATION</span><strong>Ho Chi Minh City, Vietnam</strong></div>
            <div className="contact-socials">
              <a href="https://github.com/annguyen1909" target="_blank" rel="noopener noreferrer">GITHUB <ArrowUpRight size={13} /></a>
              <a href="https://www.linkedin.com/in/nguyen-truong-an-1909nta/" target="_blank" rel="noopener noreferrer">LINKEDIN <ArrowUpRight size={13} /></a>
            </div>
          </motion.aside>

          <motion.form initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="contact-form" aria-busy={status === 'sending'}>
            <div aria-live="polite" aria-atomic="true">
              <AnimatePresence mode="wait">
                {(status === 'success' || status === 'error') && (
                  <motion.p
                    key={status}
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                    className={`form-status form-status--${status}`}
                  >
                    {status === 'success' ? 'Thanks — your message was sent.' : errorMsg || 'Something went wrong. Please try again.'}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div className="form-row">
              <label><span>01 / NAME</span><input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" /></label>
              <label><span>02 / EMAIL</span><input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@email.com" /></label>
            </div>
            <label><span>03 / PROJECT TYPE</span><input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Platform, CRM, interactive web..." /></label>
            <label><span>04 / MESSAGE</span><textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Scope, timeline, and useful context" /></label>
            <button type="submit" disabled={status === 'sending'} className="submit-link">
              <span>{status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}</span>
              {status === 'sending' ? <LoaderCircle size={17} className="submit-spinner" aria-hidden="true" /> : <Send size={16} aria-hidden="true" />}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
