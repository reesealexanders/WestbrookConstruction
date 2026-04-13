import { cn } from '../lib/utils';

const spaces = [
  { 
    id: 'kitchen', 
    title: 'Kitchen',
    description: 'Full gut renovations, open-concept integrations, custom millwork.'
  },
  { 
    id: 'bathroom', 
    title: 'Bathroom',
    description: 'Primary and ensuite remodels, wet-room tile, heated flooring.'
  },
  { 
    id: 'laundry', 
    title: 'Laundry',
    description: 'Functional layouts, cabinetry, utility upgrades.'
  },
  { 
    id: 'closet', 
    title: 'Closet',
    description: 'Built-in storage systems and custom millwork.'
  },
  { 
    id: 'mudroom', 
    title: 'Mudroom',
    description: 'Entry organization, benching, locker systems.'
  },
  { 
    id: 'entryway', 
    title: 'Entryway',
    description: 'First-impression architecture, tile, and lighting.'
  },
];

export function Spaces() {
  return (
    <section className="w-full relative py-16 lg:py-24" style={{ backgroundColor: '#F5EDE0' }}>
      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'url(/backgrounds/patternGreen.jpeg)',
          backgroundSize: '200px',
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-[96px] relative z-10">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-neutral-bronze uppercase tracking-[0.2em] text-[13px] font-sans font-medium mb-4">Services</h2>
            <h3 className="text-[38px] leading-[1.2] font-heading text-primary-dark max-w-[20ch]">
              Areas of expertise.
            </h3>
          </div>
          <p className="text-[16px] text-neutral-slate max-w-[35ch] pb-2">
            From single-room refreshes to full main-floor integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] border border-neutral-grey/20 bg-neutral-grey/20">
          {spaces.map((space, index) => (
            <div
              key={space.id}
              className={cn(
                "group relative aspect-[4/3] flex flex-col justify-end p-8",
                "bg-neutral-cream transition-colors duration-300 hover:bg-primary-dark cursor-default overflow-hidden"
              )}
            >
              {/* Bronze top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-neutral-bronze opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Index Number */}
              <div className="absolute top-6 left-8 text-[12px] font-medium tracking-widest text-neutral-grey/40 group-hover:text-neutral-cream/40 transition-colors duration-300">
                {(index + 1).toString().padStart(2, '0')}
              </div>

              <div className="relative z-10">
                <h4 className="text-[26px] font-heading text-primary-dark group-hover:text-neutral-cream transition-colors duration-300 mb-2">
                  {space.title}
                </h4>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
                  <p className="overflow-hidden text-[15px] text-neutral-cream/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {space.description}
                  </p>
                </div>
              </div>
              
              {/* Corner accent mark */}
              <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-neutral-bronze opacity-30 group-hover:opacity-80 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
