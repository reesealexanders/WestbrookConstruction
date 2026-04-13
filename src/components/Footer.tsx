export function Footer() {
  return (
    <footer className="w-full bg-primary-dark text-neutral-cream relative overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-neutral-bronze/50 z-20" />

      {/* Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-luminosity"
        style={{
          backgroundImage: 'url(/backgrounds/patternGreen.jpeg)',
          backgroundSize: '200px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[96px] py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="text-[24px] font-heading tracking-wide">WESTBROOK CONSTRUCTION</div>
              <div className="w-[32px] h-[1px] bg-neutral-bronze mt-2" />
            </div>
            <p className="text-[14px] text-neutral-cream/70 max-w-[250px]">
              Structured renovation systems for quality-first homeowners.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-neutral-bronze/80 uppercase tracking-[0.2em] text-[11px] font-medium mb-2">Navigation</h4>
            <a href="#about" className="text-[14px] text-neutral-cream/65 hover:text-neutral-cream transition-colors">About</a>
            <a href="#services" className="text-[14px] text-neutral-cream/65 hover:text-neutral-cream transition-colors">Services</a>
            <a href="#showcase" className="text-[14px] text-neutral-cream/65 hover:text-neutral-cream transition-colors">Showcase</a>
            <a href="#process" className="text-[14px] text-neutral-cream/65 hover:text-neutral-cream transition-colors">Process</a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-neutral-bronze/80 uppercase tracking-[0.2em] text-[11px] font-medium mb-2">Contact</h4>
            <p className="text-[14px] text-neutral-cream/65">info@westbrookconstruction.com</p>
            <p className="text-[14px] text-neutral-cream/65">(555) 123-4567</p>
            <p className="text-[14px] text-neutral-cream/65">Mon - Fri, 8am - 5pm</p>
          </div>

          {/* Service Area */}
          <div className="flex flex-col gap-4">
            <h4 className="text-neutral-bronze/80 uppercase tracking-[0.2em] text-[11px] font-medium mb-2">Service Area</h4>
            <p className="text-[14px] leading-relaxed text-neutral-cream/65">
              Proudly serving Northwest Arkansas.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-neutral-cream/35">
          <p>© {new Date().getFullYear()} Westbrook Construction. All rights reserved.</p>
          <p>| Created By Better Basics</p>
        </div>
      </div>
    </footer>
  );
}
