import { motion } from 'motion/react';
import { Button } from './ui/Button';
import logo from '../assets/westbrook-logo.jpg';

export function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const pieceVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
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
        
        {/* Left: Text Content */}
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

        {/* Right: Logo */}
        <div className="col-span-4 md:col-span-4 lg:col-span-7 flex justify-center lg:justify-end order-first lg:order-last relative">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 w-full max-w-[500px] flex items-center justify-center"
          >
            {/* Invisible placeholder to establish natural height */}
            <img 
              src={logo} 
              alt="Westbrook Construction Logo"
              className="w-full h-auto invisible"
            />

            {/* Slices */}
            {[0, 1, 2, 3].map((index) => (
              <motion.div
                key={index}
                variants={pieceVariants}
                className="absolute inset-0"
                style={{
                  clipPath: `inset(0 ${100 - (index + 1) * 25}% 0 ${index * 25}%)`
                }}
              >
                <img 
                  src={logo} 
                  alt=""
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
