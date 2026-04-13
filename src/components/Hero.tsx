import { motion } from 'motion/react';
import { Button } from './ui/Button';

export function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      }
    }
  };

  const pieceVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: [24, 2, 0],
      transition: { 
        duration: 0.8,
        ease: ["easeOut", "linear"],
        times: [0, 0.85, 1]
      } 
    }
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 lg:px-[96px] pt-12 lg:pt-24 pb-16">
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-[24px] items-center">
        
        {/* Left: Text Content (40-45%) -> 5/12 = 41.6% */}
        <div className="col-span-4 md:col-span-4 lg:col-span-5 flex flex-col gap-6 order-last lg:order-first mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            <div className="w-[20px] h-[1.5px] bg-neutral-bronze" />
            <span className="text-neutral-bronze uppercase tracking-[0.2em] text-[13px] font-medium">Northwest Arkansas</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-[42px] lg:text-[52px] leading-[1.1] font-heading text-primary-dark"
          >
            Home renovations with a clear process from start to finish.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-[17px] leading-relaxed text-neutral-slate max-w-[75ch]"
          >
            Kitchens, bathrooms, and interior spaces completed with structured planning, consistent communication, and quality craftsmanship.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col gap-6 pt-4"
          >
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => scrollTo('contact')} variant="primary">Start Your Project</Button>
              <Button onClick={() => scrollTo('process')} variant="secondary">View Process</Button>
            </div>
          </motion.div>
        </div>

        {/* Right: Logo Animation (55-60%) -> 7/12 = 58.3% */}
        <div className="col-span-4 md:col-span-4 lg:col-span-7 flex justify-center lg:justify-end order-first lg:order-last relative">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 w-full max-w-[500px] aspect-[4/3] overflow-hidden shadow-sm border border-neutral-grey/10 bg-white"
          >
            {[0, 1, 2, 3].map((index) => (
              <motion.div
                key={index}
                variants={pieceVariants}
                className="absolute top-0 bottom-0 border-r border-neutral-cream/10 last:border-r-0"
                style={{
                  left: `${index * 25}%`,
                  width: '25%',
                  backgroundImage: 'url(/logo/main.jpeg)',
                  backgroundSize: '400% 100%',
                  backgroundPosition: `${(index / 3) * 100}% 50%`,
                  backgroundRepeat: 'no-repeat',
                }}
              />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
