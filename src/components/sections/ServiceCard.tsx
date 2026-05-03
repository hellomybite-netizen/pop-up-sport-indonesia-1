import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  number: string;
  title: string;
  category: string;
  imageAlt?: string;
  link?: string;
  icon?: LucideIcon;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, category, imageAlt, link, icon: Icon }) => {
  const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1544911835-3305047464c7?q=80&w=1200&auto=format&fit=crop';

  // Helper to get a stable but category-relevant image from Unsplash
  const getCategoryImage = (cat: string) => {
    const images: Record<string, string> = {
      'TENNIS': 'https://images.unsplash.com/photo-1595435064212-36293974023f?q=80&w=1200&auto=format&fit=crop',
      'MULTI-SPORT': 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop',
      'PADEL': 'https://images.unsplash.com/photo-1616149175713-3330691512db?q=80&w=1200&auto=format&fit=crop',
      'AQUATICS': 'https://images.unsplash.com/photo-1518611507436-f9221403cca2?q=80&w=1200&auto=format&fit=crop',
      'RUNNING': 'https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?q=80&w=1200&auto=format&fit=crop',
      'LIGHTING': 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1200&auto=format&fit=crop',
      'JAKARTA': 'https://images.unsplash.com/photo-1502462041340-7a87e5037eb8?q=80&w=1200&auto=format&fit=crop',
      'BALI': 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop',
      'SURABAYA': 'https://images.unsplash.com/photo-1589146129990-2e3eb8fb6788?q=80&w=1200&auto=format&fit=crop',
      'BANDUNG': 'https://images.unsplash.com/photo-1647419816008-01362086df04?q=80&w=1200&auto=format&fit=crop',
      'MAKASSAR': 'https://images.unsplash.com/photo-1612450796333-e7f0152e054a?q=80&w=1200&auto=format&fit=crop',
      'MEDAN': 'https://images.unsplash.com/photo-1582236395982-1279a838527a?q=80&w=1200&auto=format&fit=crop',
    };
    
    const src = images[cat.toUpperCase()];
    return {
      src: src || FALLBACK_IMAGE,
      isPlaceholder: !src
    };
  };

  const { src: imageSrc, isPlaceholder } = getCategoryImage(category);
  const finalAlt = imageAlt || (isPlaceholder ? `Placeholder image for ${category} service` : `Image for ${category} service`);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const CardContent = (
    <>
      {Icon ? (
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-zinc-50 border-zinc-100 group-hover:bg-zinc-100 transition-colors duration-700">
          <div className="relative">
            <Icon className="w-32 h-32 text-zinc-100 group-hover:text-emerald-accent/20 transition-colors duration-1000 scale-150 group-hover:scale-100" strokeWidth={0.5} />
            <Icon className="w-20 h-20 text-zinc-200 group-hover:text-emerald-accent transition-colors duration-700 absolute inset-0 m-auto" strokeWidth={1} />
          </div>
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`card-grid-${number}`} width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#card-grid-${number})`} />
            </svg>
          </div>
        </div>
      ) : (
        <>
          <div className={`absolute inset-0 z-0 grayscale-0 sm:grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-100 group-hover:scale-110 ${imageLoaded ? 'blur-0 opacity-100' : 'blur-xl opacity-0'} bg-zinc-100`}>
            <img 
                src={imageSrc} 
                alt={finalAlt}
                className="w-full h-full object-cover transition-opacity duration-700"
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                referrerPolicy="no-referrer"
              />
          </div>
          <div className="absolute inset-0 bg-white/20 group-hover:bg-white/0 transition-colors duration-700"></div>
        </>
      )}
      
      <div className="absolute top-8 left-8 z-10 font-mono text-zinc-900 border-b border-zinc-900/10 pb-1 text-sm">{number}</div>
      
      <div className="absolute inset-x-8 bottom-8 z-10 p-8 bg-white/90 backdrop-blur-sm border border-zinc-200">
        <span className="micro-label text-emerald-accent mb-2 block">{category}</span>
        <h3 className="text-2xl font-display font-bold mb-4 text-zinc-900">{title}</h3>
        <div className="flex items-center gap-2 group-hover:translate-x-2 transition-all duration-500">
          <span className="micro-label text-zinc-900">LIHAT DETAIL</span>
          <ArrowUpRight className="w-4 h-4 text-emerald-accent" />
        </div>
      </div>
    </>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative h-[600px] overflow-hidden border border-zinc-100 bg-zinc-50"
    >
      {link ? (
        <Link to={link} className="block w-full h-full">
          {CardContent}
        </Link>
      ) : (
        CardContent
      )}
    </motion.div>
  );
};
