import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 lg:px-[96px] py-16 lg:py-24 relative">
      <div className="max-w-[600px] mx-auto relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-[16px] uppercase tracking-widest text-neutral-slate font-sans font-medium mb-4">Start Your Project</h2>
          <h3 className="text-[38px] leading-[1.2] font-heading text-primary-dark">
            Request a consultation.
          </h3>
        </div>

        <div className="border border-neutral-grey/30 bg-neutral-cream p-8 md:p-12 relative overflow-hidden">
          {/* Subtle Geometric Pattern Background (5% opacity) */}
          <div 
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(var(--color-primary-dark) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />
          
          <div className="relative z-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-in fade-in duration-500">
                <CheckCircle2 className="text-primary-light w-10 h-10" />
                <h4 className="text-[22px] font-heading text-primary-dark">Request received.</h4>
                <p className="text-[16px] text-neutral-slate">We’ll follow up within 1–2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[14px] font-medium text-primary-dark">Name</label>
                  <input required type="text" id="name" className="border border-neutral-grey/30 bg-white px-4 py-3 text-[16px] focus:outline-none focus:border-primary-dark transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[14px] font-medium text-primary-dark">Email</label>
                  <input required type="email" id="email" className="border border-neutral-grey/30 bg-white px-4 py-3 text-[16px] focus:outline-none focus:border-primary-dark transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-[14px] font-medium text-primary-dark">Phone (optional)</label>
                  <input type="tel" id="phone" className="border border-neutral-grey/30 bg-white px-4 py-3 text-[16px] focus:outline-none focus:border-primary-dark transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="projectType" className="text-[14px] font-medium text-primary-dark">Project Type</label>
                  <div className="relative">
                    <select required id="projectType" className="w-full border border-neutral-grey/30 bg-white px-4 py-3 text-[16px] focus:outline-none focus:border-primary-dark transition-colors appearance-none rounded-none">
                      <option value="">Select a project type...</option>
                      <option value="kitchen">Kitchen Renovation</option>
                      <option value="bathroom">Bathroom Renovation</option>
                      <option value="main-floor">Main Floor Gut</option>
                      <option value="basement">Basement Development</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-slate">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[14px] font-medium text-primary-dark">Message</label>
                  <textarea required id="message" rows={4} className="border border-neutral-grey/30 bg-white px-4 py-3 text-[16px] focus:outline-none focus:border-primary-dark transition-colors resize-none"></textarea>
                </div>
                <Button type="submit" className="mt-4 w-full">Submit Request</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
