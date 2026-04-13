import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled ? "bg-primary-dark/97 backdrop-blur-sm border-neutral-cream/10 py-4" : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[96px] flex items-center justify-between">
        <div 
          className={cn(
            "text-[22px] font-heading font-bold tracking-wide cursor-pointer transition-colors",
            isScrolled ? "text-neutral-cream" : "text-primary-dark"
          )}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          WESTBROOK
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('about')} className={cn("text-[15px] font-medium transition-colors", isScrolled ? "text-neutral-cream/70 hover:text-neutral-cream" : "text-neutral-slate hover:text-primary-dark")}>About</button>
          <button onClick={() => scrollTo('services')} className={cn("text-[15px] font-medium transition-colors", isScrolled ? "text-neutral-cream/70 hover:text-neutral-cream" : "text-neutral-slate hover:text-primary-dark")}>Services</button>
          <button onClick={() => scrollTo('showcase')} className={cn("text-[15px] font-medium transition-colors", isScrolled ? "text-neutral-cream/70 hover:text-neutral-cream" : "text-neutral-slate hover:text-primary-dark")}>Showcase</button>
          <button onClick={() => scrollTo('process')} className={cn("text-[15px] font-medium transition-colors", isScrolled ? "text-neutral-cream/70 hover:text-neutral-cream" : "text-neutral-slate hover:text-primary-dark")}>Process</button>
          <Button 
            onClick={() => scrollTo('contact')} 
            variant="primary" 
            className={cn(
              "py-[8px] px-[16px] text-[14px]",
              isScrolled && "bg-neutral-bronze text-white hover:bg-neutral-bronze/90"
            )}
          >
            Start Project
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={cn("md:hidden transition-colors", isScrolled ? "text-neutral-cream" : "text-primary-dark")}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-primary-dark border-b border-neutral-cream/10 shadow-lg flex flex-col px-6 py-6 gap-6">
          <button onClick={() => scrollTo('about')} className="text-left text-[18px] font-medium text-neutral-cream/70 hover:text-neutral-cream">About</button>
          <button onClick={() => scrollTo('services')} className="text-left text-[18px] font-medium text-neutral-cream/70 hover:text-neutral-cream">Services</button>
          <button onClick={() => scrollTo('showcase')} className="text-left text-[18px] font-medium text-neutral-cream/70 hover:text-neutral-cream">Showcase</button>
          <button onClick={() => scrollTo('process')} className="text-left text-[18px] font-medium text-neutral-cream/70 hover:text-neutral-cream">Process</button>
          <Button onClick={() => scrollTo('contact')} variant="primary" className="w-full mt-2 bg-neutral-bronze text-white hover:bg-neutral-bronze/90">Start Project</Button>
        </div>
      )}
    </header>
  );
}
