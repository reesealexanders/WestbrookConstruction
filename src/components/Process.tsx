import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const steps = [
  {
    id: 'plan',
    title: '1. Plan',
    happens: 'Initial consultation and site evaluation to understand your goals, timeline, and investment level.',
    youDo: 'Share your vision, requirements, and target budget for the renovation.',
    weDo: 'Assess structural feasibility, take preliminary measurements, and provide a rough estimate.',
  },
  {
    id: 'scope',
    title: '2. Scope',
    happens: 'Detailed design phase where layouts are finalized and all materials are selected.',
    youDo: 'Review and approve architectural layouts, fixtures, and finish selections.',
    weDo: 'Develop comprehensive blueprints, finalize engineering, and lock in exact pricing.',
  },
  {
    id: 'prepare',
    title: '3. Prepare',
    happens: 'Behind-the-scenes logistics, permitting, and procurement before breaking ground.',
    youDo: 'Clear personal items from the project area and prepare for construction.',
    weDo: 'Secure all necessary city permits, order long-lead materials, and finalize the build schedule.',
  },
  {
    id: 'build',
    title: '4. Build',
    happens: 'Active construction phase with structured milestones and consistent site management.',
    youDo: 'Review weekly progress reports and attend scheduled site walkthroughs.',
    weDo: 'Execute the work with our dedicated craftsmen, manage inspections, and maintain a clean site.',
  },
  {
    id: 'complete',
    title: '5. Complete',
    happens: 'Final detailing, quality assurance, and official handover of your newly renovated space.',
    youDo: 'Perform the final walkthrough and enjoy your completed project.',
    weDo: 'Address any final touch-ups, provide comprehensive warranty documentation, and clean the space.',
  },
];

export function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 lg:px-[96px] py-16 lg:py-24">
      <div className="mb-12">
        <h2 className="text-[16px] uppercase tracking-widest text-neutral-slate font-sans font-medium mb-4">Our Process</h2>
        <h3 className="text-[38px] leading-[1.2] font-heading text-primary-dark max-w-[20ch]">
          A structured system for predictable results.
        </h3>
      </div>

      {/* Desktop: Horizontal Tabs */}
      <div className="hidden md:block">
        <div className="flex border-b border-neutral-grey/30">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={cn(
                "flex-1 pb-4 text-left text-[17px] font-medium transition-colors duration-200 relative",
                activeStep === index ? "text-primary-dark" : "text-neutral-grey hover:text-primary-dark/70"
              )}
            >
              {step.title}
              {activeStep === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-primary-dark"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="pt-12 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ 
                duration: 0.2, 
                ease: "easeOut",
                exit: { duration: 0.1 } 
              }}
              className="grid grid-cols-3 gap-8"
            >
              <div className="flex flex-col gap-3">
                <h4 className="text-[14px] uppercase tracking-wider text-neutral-slate font-medium">What Happens</h4>
                <p className="text-[17px] text-primary-dark leading-relaxed">{steps[activeStep].happens}</p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-[14px] uppercase tracking-wider text-neutral-slate font-medium">What You Do</h4>
                <p className="text-[17px] text-primary-dark leading-relaxed">{steps[activeStep].youDo}</p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-[14px] uppercase tracking-wider text-neutral-slate font-medium">What We Do</h4>
                <p className="text-[17px] text-primary-dark leading-relaxed">{steps[activeStep].weDo}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile: Vertical Accordion */}
      <div className="md:hidden flex flex-col border-t border-neutral-grey/30">
        {steps.map((step, index) => {
          const isActive = activeStep === index;
          return (
            <div key={step.id} className="border-b border-neutral-grey/30">
              <button
                onClick={() => setActiveStep(index)}
                className="w-full py-6 flex justify-between items-center text-left"
              >
                <span className={cn(
                  "text-[20px] font-heading",
                  isActive ? "text-primary-dark" : "text-neutral-grey"
                )}>
                  {step.title}
                </span>
                <span className="text-neutral-grey text-[24px] font-light leading-none">
                  {isActive ? '−' : '+'}
                </span>
              </button>
              
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 flex flex-col gap-6">
                      <div className="flex flex-col gap-2">
                        <h4 className="text-[13px] uppercase tracking-wider text-neutral-slate font-medium">What Happens</h4>
                        <p className="text-[16px] text-primary-dark leading-relaxed">{step.happens}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h4 className="text-[13px] uppercase tracking-wider text-neutral-slate font-medium">What You Do</h4>
                        <p className="text-[16px] text-primary-dark leading-relaxed">{step.youDo}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h4 className="text-[13px] uppercase tracking-wider text-neutral-slate font-medium">What We Do</h4>
                        <p className="text-[16px] text-primary-dark leading-relaxed">{step.weDo}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
