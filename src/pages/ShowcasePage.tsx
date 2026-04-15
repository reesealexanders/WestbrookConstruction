import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, ChevronLeft, Maximize2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

interface Project {
  title: string;
  date: string;
  description: string;
  image: string;
  summary: string;
  gallery: { image: string }[];
}

export default function ShowcasePage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const projectFiles = import.meta.glob('../content/projects/*.json', { eager: true });
    const loadedProjects = Object.values(projectFiles)
      .map((file: any) => file.default as Project)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    setProjects(loadedProjects);
    window.scrollTo(0, 0);
  }, []);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setActiveImageIndex((prev) => (prev + 1) % (selectedProject.gallery.length + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setActiveImageIndex((prev) => (prev - 1 + (selectedProject.gallery.length + 1)) % (selectedProject.gallery.length + 1));
  };

  const allImages = selectedProject ? [selectedProject.image, ...selectedProject.gallery.map(g => g.image)] : [];

  return (
    <main className="min-h-screen bg-neutral-cream">
      <Navbar />
      
      <section className="w-full max-w-[1200px] mx-auto px-6 lg:px-[96px] pt-32 pb-24">
        <div className="mb-12">
          <Link 
            to="/#showcase" 
            className="inline-flex items-center text-neutral-bronze hover:text-primary-dark transition-colors mb-8 group"
          >
            <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          
          <h2 className="text-neutral-bronze uppercase tracking-[0.2em] text-[13px] font-sans font-medium mb-4">Full Portfolio</h2>
          <h1 className="text-[42px] lg:text-[52px] leading-[1.1] font-heading text-primary-dark max-w-[20ch]">
            Historical projects and structural transformations.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group border border-neutral-grey/20 bg-white transition-all duration-300 hover:shadow-xl hover:border-neutral-bronze/30 cursor-pointer flex flex-col h-full"
              onClick={() => openProject(project)}
            >
              <div className="aspect-[4/3] overflow-hidden border-b border-neutral-grey/20 relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[15%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/10 transition-colors duration-300 flex items-center justify-center">
                  <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8" />
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="text-neutral-bronze text-[12px] font-medium uppercase tracking-wider mb-2">
                  {new Date(project.date).getFullYear()}
                </div>
                <h4 className="text-[22px] font-heading text-primary-dark mb-3 group-hover:text-neutral-bronze transition-colors">{project.title}</h4>
                <p className="text-[15px] text-neutral-slate leading-relaxed mb-6">{project.description}</p>
                <div className="mt-auto flex items-center text-[13px] font-medium text-neutral-bronze uppercase tracking-wider">
                  View Case Study
                  <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProject}
              className="absolute inset-0 bg-primary-dark/95 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-[1200px] max-h-[90vh] bg-neutral-cream overflow-hidden flex flex-col lg:flex-row shadow-2xl"
            >
              <button 
                onClick={closeProject}
                className="absolute top-4 right-4 z-10 p-2 bg-primary-dark text-white rounded-full hover:bg-neutral-bronze transition-colors"
              >
                <X size={24} />
              </button>

              <div className="w-full lg:w-2/3 relative bg-neutral-grey/10 flex items-center justify-center overflow-hidden group/gallery">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIndex}
                    src={allImages[activeImageIndex]}
                    alt={`${selectedProject.title} - ${activeImageIndex + 1}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                {allImages.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-all opacity-0 group-hover/gallery:opacity-100"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-all opacity-0 group-hover/gallery:opacity-100"
                    >
                      <ChevronRight size={24} />
                    </button>
                    
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                      {allImages.map((_, i) => (
                        <button 
                          key={i}
                          onClick={(e) => { e.stopPropagation(); setActiveImageIndex(i); }}
                          className={cn(
                            "w-2 h-2 rounded-full transition-all",
                            i === activeImageIndex ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"
                          )}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="w-full lg:w-1/3 p-8 md:p-12 overflow-y-auto bg-white border-l border-neutral-grey/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-[20px] h-[1.5px] bg-neutral-bronze" />
                  <span className="text-neutral-bronze uppercase tracking-[0.2em] text-[12px] font-medium">
                    {new Date(selectedProject.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                  </span>
                </div>
                
                <h2 className="text-[32px] font-heading text-primary-dark mb-6 leading-tight">
                  {selectedProject.title}
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h5 className="text-[13px] uppercase tracking-widest text-neutral-slate font-bold mb-2">Project Overview</h5>
                    <p className="text-[16px] text-neutral-slate leading-relaxed italic">
                      {selectedProject.description}
                    </p>
                  </div>
                  
                  <div className="w-full h-[1px] bg-neutral-grey/10" />
                  
                  <div>
                    <h5 className="text-[13px] uppercase tracking-widest text-neutral-slate font-bold mb-3">The Details</h5>
                    <p className="text-[16px] text-neutral-slate leading-relaxed whitespace-pre-wrap">
                      {selectedProject.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-12">
                  <Link to="/#contact" onClick={closeProject}>
                    <Button variant="primary" className="w-full">
                      Inquire About Similar Project
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
