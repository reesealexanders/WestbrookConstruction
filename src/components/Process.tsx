import { motion } from 'motion/react';

const steps = [
  {
    id: 'plan-scope',
    number: '01',
    title: 'Plan & Scope',
    description: 'We start with a detailed consultation to understand your vision, assess feasibility, and finalize layouts and materials. You receive a comprehensive blueprint and a locked-in price before any work begins.',
  },
  {
    id: 'prepare-build',
    number: '02',
    title: 'Prepare & Build',
    description: 'While we handle the behind-the-scenes logistics and permitting, our dedicated craftsmen execute the build. You receive weekly progress reports and attend scheduled walkthroughs to see your space transform.',
  },
  {
    id: 'complete',
    number: '03',
    title: 'Complete',
    description: 'We finish with meticulous detailing and quality assurance. After a final walkthrough together, we hand over your newly renovated space, complete with comprehensive warranty documentation.',
  },
];

export function Process() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 lg:px-[96px] py-16 lg:py-24">
      <div className="mb-16">
        <h2 className="text-[16px] uppercase tracking-widest text-neutral-slate font-sans font-medium mb-4">Our Process</h2>
        <h3 className="text-[38px] leading-[1.2] font-heading text-primary-dark max-w-[20ch]">
          A structured system for predictable results.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
        {/* Desktop connecting line */}
        <div className="hidden md:block absolute top-[24px] left-[48px] right-[48px] h-[1px] bg-neutral-grey/20 -z-10" />

        {steps.map((step, index) => (
          <motion.div 
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            className="flex flex-col gap-6 relative"
          >
            <div className="w-12 h-12 rounded-full bg-neutral-cream border border-neutral-bronze/30 flex items-center justify-center text-[15px] font-medium text-neutral-bronze tracking-widest">
              {step.number}
            </div>
            
            <div>
              <h4 className="text-[24px] font-heading text-primary-dark mb-3">{step.title}</h4>
              <p className="text-[16px] text-neutral-slate leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
