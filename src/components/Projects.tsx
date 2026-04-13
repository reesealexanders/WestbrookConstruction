const projects = [
  {
    id: 1,
    title: 'Oakridge Kitchen',
    description: 'Complete structural reconfiguration and custom millwork.',
    image: 'https://picsum.photos/seed/kitchen-renovation/800/600'
  },
  {
    id: 2,
    title: 'Maplewood Primary Bath',
    description: 'Expansion and modernization with heated stone flooring.',
    image: 'https://picsum.photos/seed/bathroom-modern/800/600'
  },
  {
    id: 3,
    title: 'Cedar Lane Main Floor',
    description: 'Open-concept integration of living, dining, and entry spaces.',
    image: 'https://picsum.photos/seed/living-space/800/600'
  }
];

export function Projects() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 lg:px-[96px] py-16 lg:py-24">
      <div className="mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-neutral-bronze uppercase tracking-[0.2em] text-[13px] font-sans font-medium mb-4">Showcase</h2>
          <h3 className="text-[38px] leading-[1.2] font-heading text-primary-dark">
            Controlled execution.
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="group border border-neutral-grey/20 bg-neutral-cream transition-colors duration-300 hover:bg-neutral-grey/5 hover:border-neutral-grey/30 cursor-pointer"
          >
            <div className="aspect-[4/3] overflow-hidden border-b border-neutral-grey/20">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale-[15%] transition-opacity duration-500 group-hover:opacity-90"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6">
              <h4 className="text-[20px] font-heading text-primary-dark mb-2">{project.title}</h4>
              <p className="text-[15px] text-neutral-slate leading-relaxed">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
