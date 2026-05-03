import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../constants/projects";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowUpRight, MapPin, Calendar, User, Quote, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { CTA } from "../components/sections/CTA";
import { useContent } from "../context/ContentContext";

export const ProjectDetail = () => {
  const { content } = useContent();
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImageIndex(null);
      if (e.key === "ArrowRight") navigateNext();
      if (e.key === "ArrowLeft") navigatePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

  if (!project) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-4xl font-display font-bold">Project Not Found</h1>
        <Link to="/portfolio" className="text-emerald-accent mt-4 inline-block">Back to Portfolio</Link>
      </div>
    );
  }

  const navigateNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! + 1) % project.gallery.length);
    }
  };

  const navigatePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev! - 1 + project.gallery.length) % project.gallery.length);
    }
  };

  return (
    <article className="bg-white">
      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-zinc-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImageIndex(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={() => setSelectedImageIndex(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <button 
                className="absolute left-0 text-white/30 hover:text-white transition-colors p-4"
                onClick={navigatePrev}
              >
                <ChevronLeft className="w-10 h-10" />
              </button>

              <motion.img
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={project.gallery[selectedImageIndex]}
                alt={`${project.title} enlarged`}
                className="max-w-full max-h-full object-contain shadow-2xl"
              />

              <button 
                className="absolute right-0 text-white/30 hover:text-white transition-colors p-4"
                onClick={navigateNext}
              >
                <ChevronRight className="w-10 h-10" />
              </button>
              
              <div className="absolute bottom-0 left-0 w-full flex justify-between items-end p-4 md:p-8">
                <div className="text-white">
                  <span className="micro-label text-emerald-accent mb-2 block">Viewing Image</span>
                  <span className="font-mono text-sm">{selectedImageIndex + 1} / {project.gallery.length}</span>
                </div>
                <div className="text-right hidden md:block">
                  <span className="micro-label text-zinc-500 mb-2 block">Technical Reference</span>
                  <span className="font-mono text-[10px] text-zinc-400">IMG_REF_{project.id.toUpperCase()}_{selectedImageIndex}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        
        <div className="absolute inset-0 container-wide flex flex-col justify-end pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 group transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="micro-label">Back to Portfolio</span>
            </Link>
            <span className="micro-label text-emerald-accent mb-4 block uppercase tracking-widest">{project.category}</span>
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter leading-none">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Info Grid & Narrative */}
      <section className="py-24 border-b border-zinc-100">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Main Content Area */}
            <div className="lg:w-2/3">
              <span className="micro-label text-zinc-400 mb-8 block text-emerald-accent">{content.narrative.label}</span>
              <div className="space-y-12">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 leading-tight tracking-tighter">
                  {content.narrative.headline}
                </h2>
                <div className="text-xl md:text-2xl font-light text-zinc-600 leading-relaxed space-y-8">
                  <p>
                    {project.description || content.narrative.description}
                  </p>
                  <p>
                    {content.narrative.additionalText}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Sticky Sidebar */}
            <div className="lg:w-1/3">
              <aside className="sticky top-32 space-y-12">
                <div className="bg-zinc-50 border border-zinc-100 p-10 space-y-10">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <MapPin className="w-4 h-4" />
                      <span className="micro-label">Location</span>
                    </div>
                    <p className="font-display font-bold text-xl text-zinc-900">{project.location}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Calendar className="w-4 h-4" />
                      <span className="micro-label">Completion Year</span>
                    </div>
                    <p className="font-display font-bold text-xl text-zinc-900">{project.year}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <User className="w-4 h-4" />
                      <span className="micro-label">Client / Partner</span>
                    </div>
                    <p className="font-display font-bold text-xl text-zinc-900">{project.client}</p>
                  </div>
                  
                  <div className="pt-6 border-t border-zinc-200">
                    <button className="w-full py-5 bg-zinc-900 text-white font-display font-bold tracking-widest text-xs uppercase hover:bg-emerald-accent transition-all shadow-xl shadow-zinc-200">
                      Download Tech Spec
                    </button>
                    <p className="text-center micro-label text-zinc-400 mt-4">PDF • 4.2 MB • Indonesian</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-zinc-50">
        <div className="container-wide">
          <div className="flex justify-between items-end mb-12">
            <span className="micro-label text-zinc-400 block">Visual Documentation</span>
            <span className="micro-label text-zinc-400 hidden md:block">Click to enlarge</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.gallery.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`${index === 0 ? "md:col-span-2 lg:col-span-2" : ""} cursor-pointer group`}
                onClick={() => setSelectedImageIndex(index)}
              >
                <div className="aspect-[16/10] overflow-hidden border border-zinc-200 relative">
                  <img 
                    src={img} 
                    alt={`${project.title} gallery ${index}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-emerald-accent/0 group-hover:bg-emerald-accent/10 transition-colors duration-500 flex items-center justify-center">
                    <ArrowUpRight className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {project.testimonial && (
        <section className="py-32 bg-white">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <Quote className="w-12 h-12 text-emerald-accent/20 mx-auto mb-12" />
              <blockquote className="text-3xl md:text-4xl font-display font-light text-zinc-900 leading-relaxed mb-12 italic">
                "{project.testimonial.text}"
              </blockquote>
              <div>
                <cite className="not-italic font-display font-bold text-zinc-900 block text-lg tracking-tight">
                  {project.testimonial.author}
                </cite>
                <span className="micro-label text-zinc-400 uppercase tracking-widest mt-2 block">
                  {project.testimonial.role}
                </span >
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Engineering Blueprint Background (Decorative) */}
      <div className="h-40 bg-zinc-950 flex items-center justify-center relative overflow-hidden">
        <span className="text-[15vw] font-display font-black text-white/[0.03] tracking-tighter absolute">ENGINEERING</span>
        <div className="flex gap-20 relative z-10 translate-y-2">
            <div className="flex flex-col items-center">
                <span className="micro-label text-white/40">Toleransi Level</span>
                <span className="font-mono text-emerald-accent text-sm">± 2mm</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="micro-label text-white/40">Resiliensi UV</span>
                <span className="font-mono text-emerald-accent text-sm">99.8%</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="micro-label text-white/40">Drainase Cap.</span>
                <span className="font-mono text-emerald-accent text-sm">120L/m²/min</span>
            </div>
        </div>
      </div>

      <CTA />
    </article>
  );
};
