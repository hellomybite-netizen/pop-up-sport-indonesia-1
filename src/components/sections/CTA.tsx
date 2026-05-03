import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="py-40 bg-zinc-950 relative overflow-hidden text-center">
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="micro-label text-emerald-accent mb-8 block uppercase tracking-[0.4em]">Siap Untuk Mulai?</span>
          <h2 className="text-[8vw] lg:text-[6vw] font-display font-bold leading-none mb-16 tracking-tighter text-white">
            BANGUN PROYEK <br /> PRESTIGE ANDA
          </h2>
          <Link to="/contact" className="inline-block group relative overflow-hidden px-16 py-8 bg-emerald-accent text-white font-display font-bold text-xl transition-all duration-300 hover:pr-20">
            KONSULTASI SEKARANG
            <ArrowUpRight className="absolute right-8 top-1/2 -translate-y-1/2 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all" />
          </Link>
        </motion.div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.03]">
         <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {[...Array(144)].map((_, i) => (
               <div key={i} className="border-[0.5px] border-white ring-1 ring-white/10"></div>
            ))}
         </div>
      </div>
    </section>
  );
};
