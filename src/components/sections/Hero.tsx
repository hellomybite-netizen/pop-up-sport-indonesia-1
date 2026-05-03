import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState, ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { Image as ImageIcon, Upload, X } from "lucide-react";
import { useContent } from "../../context/ContentContext";

const HERO_OPTIONS = [
  {
    id: "padel",
    url: "https://images.unsplash.com/photo-1626248801379-51a0748a5f96?q=80&w=2600&auto=format&fit=crop",
    label: "Padel Court"
  },
  {
    id: "tennis",
    url: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2600&auto=format&fit=crop",
    label: "Tennis Hardcourt"
  },
  {
    id: "basket",
    url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2600&auto=format&fit=crop",
    label: "Multi-sport Hub"
  }
];

export const Hero = () => {
  const { content, updateContent } = useContent();
  const containerRef = useRef<HTMLElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [bgImage, setBgImage] = useState(content.hero.backgroundImage);
  const [showSelector, setShowSelector] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setBgImage(content.hero.backgroundImage);
  }, [content.hero.backgroundImage]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const url = reader.result as string;
        setBgImage(url);
        updateContent({ hero: { ...content.hero, backgroundImage: url } });
        setImageError(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageChange = (url: string) => {
    setBgImage(url);
    updateContent({ hero: { ...content.hero, backgroundImage: url } });
    setImageError(false);
  };

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-zinc-100">
        <AnimatePresence mode="wait">
          {!imageError ? (
            <motion.img 
              key={bgImage}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src={bgImage} 
              alt="Premium Sports Construction Background"
              className="w-full h-full object-cover"
              width={1920}
              height={1080}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
            />
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full h-full bg-gradient-to-br from-zinc-100 via-zinc-50 to-white"
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10 z-1">
        <div className="absolute top-0 left-0 w-full h-px bg-zinc-900" style={{ top: '25%' }}></div>
        <div className="absolute top-0 left-0 w-full h-px bg-zinc-900" style={{ top: '50%' }}></div>
        <div className="absolute top-0 left-0 w-full h-px bg-zinc-900" style={{ top: '75%' }}></div>
        <div className="absolute top-0 left-0 h-full w-px bg-zinc-900" style={{ left: '15%' }}></div>
        <div className="absolute top-0 left-0 h-full w-px bg-zinc-900" style={{ left: '85%' }}></div>
      </div>

      {/* Hero Content */}
      <div className="container-wide relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ y, opacity }}
        >
          <div className="micro-label mb-8 flex items-center gap-4 uppercase">
            <span className="w-8 h-px bg-emerald-accent"></span>
            {content.hero.badge}
          </div>
          <h1 className="text-[7vw] sm:text-[6vw] lg:text-[5.5vw] font-display font-bold leading-[1.1] tracking-tighter mb-12 text-zinc-900 max-w-5xl">
            {content.hero.title}
          </h1>
          
          <div className="flex flex-col md:flex-row gap-12 items-start md:items-end">
            <p className="max-w-md text-zinc-600 text-lg font-light leading-relaxed">
              {content.hero.subtitle}
            </p>
            <div className="flex gap-4">
              <Link to="/portfolio" className="px-8 py-4 bg-zinc-900 text-white font-display font-bold text-xs tracking-widest uppercase hover:bg-emerald-accent transition-all shadow-xl shadow-zinc-200">
                {content.hero.primaryCta}
              </Link>
              <Link to="/contact" className="px-8 py-4 border border-zinc-200 text-zinc-900 hover:bg-zinc-50 transition-colors font-display font-bold text-xs tracking-widest uppercase text-center">
                {content.hero.secondaryCta}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Selector Overlay */}
      <div className="absolute bottom-8 right-8 z-20 flex flex-col items-end gap-3">
        <AnimatePresence>
          {showSelector && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-white p-4 shadow-2xl border border-zinc-100 flex gap-4 items-center"
            >
              {HERO_OPTIONS.map((opt) => (
                <button 
                  key={opt.id}
                  onClick={() => handleImageChange(opt.url)}
                  className={`relative w-20 h-12 overflow-hidden border-2 transition-all ${bgImage === opt.url ? "border-emerald-accent" : "border-transparent hover:border-zinc-200"}`}
                >
                  <img src={opt.url} alt={opt.label} className="w-full h-full object-cover" />
                </button>
              ))}
              <div className="w-px h-8 bg-zinc-200 mx-2"></div>
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="flex flex-col items-center justify-center gap-1 text-[10px] micro-label text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                <Upload className="w-4 h-4" />
                UPLOAD
              </button>
              <input 
                ref={fileInputRef}
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleFileUpload} 
              />
            </motion.div>
          )}
        </AnimatePresence>
        
        <button 
          onClick={() => setShowSelector(!showSelector)}
          className={`w-12 h-12 flex items-center justify-center transition-all ${showSelector ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900 shadow-lg hover:bg-zinc-50 border border-zinc-100'}`}
        >
          {showSelector ? <X className="w-5 h-5" /> : <ImageIcon className="w-5 h-5" />}
        </button>
      </div>
    </section>
  );
};
