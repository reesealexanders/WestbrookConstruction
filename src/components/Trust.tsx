export function Trust() {
  return (
    <section className="w-full relative py-16 lg:py-24 overflow-hidden" style={{ backgroundColor: '#0E2F12' }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[96px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="uppercase tracking-[0.2em] text-[13px] font-sans font-medium mb-4" style={{ color: '#B08855' }}>About</h2>
              <h3 className="text-[38px] leading-[1.2] font-heading" style={{ color: '#FCFBF7' }}>
                Built on predictability.
              </h3>
            </div>
            
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-[18px] font-heading font-medium mb-2" style={{ color: '#B08855' }}>Mission</h4>
                <p className="text-[16px] leading-relaxed" style={{ color: 'rgba(252, 251, 247, 0.65)' }}>
                  [Mission statement placeholder...]
                </p>
              </div>
              <div>
                <h4 className="text-[18px] font-heading font-medium mb-2" style={{ color: '#B08855' }}>Vision</h4>
                <p className="text-[16px] leading-relaxed" style={{ color: 'rgba(252, 251, 247, 0.65)' }}>
                  [Vision statement placeholder...]
                </p>
              </div>
              <div>
                <h4 className="text-[18px] font-heading font-medium mb-2" style={{ color: '#B08855' }}>Core Values</h4>
                <ul className="text-[16px] leading-relaxed space-y-2" style={{ color: 'rgba(252, 251, 247, 0.65)' }}>
                  <li><span style={{ color: '#B08855' }}>—</span> [Core value 1]</li>
                  <li><span style={{ color: '#B08855' }}>—</span> [Core value 2]</li>
                  <li><span style={{ color: '#B08855' }}>—</span> [Core value 3]</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-[4/5] w-full bg-neutral-grey/10 border border-neutral-grey/20 overflow-hidden shadow-md">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l z-20" style={{ borderColor: '#B08855' }} />
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r z-20" style={{ borderColor: '#B08855' }} />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l z-20" style={{ borderColor: '#B08855' }} />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r z-20" style={{ borderColor: '#B08855' }} />

            <img 
              src="https://picsum.photos/seed/architecture-clean/800/1000" 
              alt="Architectural detail" 
              className="w-full h-full object-cover opacity-90 grayscale-[10%]"
              referrerPolicy="no-referrer"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 pointer-events-none z-10" style={{ background: 'linear-gradient(to top, rgba(14, 47, 18, 0.5), transparent)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
