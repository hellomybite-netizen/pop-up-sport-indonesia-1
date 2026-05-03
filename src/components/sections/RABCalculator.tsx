import { useState } from "react";
import { motion } from "motion/react";

export const RABCalculator = () => {
  const [sport, setSport] = useState("tennis");
  const [area, setArea] = useState(260); // standard tennis court is 260.8 sqm
  
  const rates: Record<string, number> = {
    tennis: 1200000, // per sqm
    basketball: 950000,
    badminton: 650000,
    padel: 1500000,
  };

  const estimate = area * rates[sport as keyof typeof rates];

  return (
    <section id="rab" className="py-32 bg-white relative overflow-hidden">
      {/* Luminous Decorative Glows */}
      <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-emerald-50/40 blur-[180px] rounded-full -translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-zinc-50 blur-[160px] rounded-full translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[1px] bg-emerald-accent"></span>
                <span className="micro-label text-emerald-accent font-bold tracking-[0.3em]">Cost Intelligence</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 leading-[1.1] text-zinc-900 tracking-tighter">
                TINGKATKAN <br />STANDAR <br /><span className="text-zinc-300">INVESTASI</span>
              </h2>
              <p className="text-zinc-500 font-light leading-relaxed mb-12 text-lg max-w-md">
                Transparansi adalah fondasi dari kualitas konstruksi kami. Simulasi ini dirancang untuk memberikan estimasi awal yang membantu Anda merencanakan visi olahraga dengan presisi finansial.
              </p>
              
              <div className="p-12 bg-white border border-zinc-100 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.03)] relative overflow-hidden group rounded-2xl">
                <div className="absolute top-0 left-0 w-[3px] h-full bg-emerald-accent"></div>
                <div className="relative z-10">
                  <span className="micro-label text-zinc-400 block mb-4 uppercase tracking-widest">Total Estimasi Konstruksi</span>
                  <div className="text-5xl md:text-6xl font-display font-bold text-zinc-900 leading-none mb-6 tracking-tighter">
                    <span className="text-2xl font-medium text-zinc-300 mr-2">Rp</span>
                    {estimate.toLocaleString('id-ID')}
                  </div>
                  <div className="flex items-center gap-3 text-emerald-accent text-[10px] font-mono font-bold tracking-widest bg-emerald-50/50 w-fit px-4 py-2 rounded-full border border-emerald-100/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-accent animate-pulse"></div>
                    REAL-TIME ESTIMATION
                  </div>
                </div>
                {/* Subtle internal luminous glow */}
                <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-emerald-50/30 blur-3xl rounded-full group-hover:bg-emerald-100/40 transition-colors duration-1000"></div>
              </div>
            </motion.div>
          </div>
 
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] rounded-3xl border border-zinc-100 relative group"
            >
              {/* Luminous Border Effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-tr from-emerald-400/20 via-transparent to-zinc-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
              
              <div className="bg-white p-12 lg:p-20 rounded-[1.25rem] relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="space-y-4 group">
                    <label className="micro-label text-zinc-400 group-focus-within:text-emerald-accent transition-colors uppercase tracking-[0.2em] font-bold">Jenis Fasilitas Olahraga</label>
                    <div className="relative">
                      <select 
                        value={sport} 
                        onChange={(e) => setSport(e.target.value)}
                        className="w-full bg-transparent border-b border-zinc-200 px-0 py-5 text-zinc-900 font-display font-bold text-xl focus:border-emerald-accent outline-none transition-all cursor-pointer appearance-none tracking-tight"
                      >
                        <option value="tennis">Tennis Court Premium</option>
                        <option value="basketball">Basketball Performance</option>
                        <option value="badminton">Professional Badminton</option>
                        <option value="padel">Padel Panoramic Edition</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 group-hover:text-zinc-900 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
 
                  <div className="space-y-4 group">
                    <label className="micro-label text-zinc-400 group-focus-within:text-emerald-accent transition-colors uppercase tracking-[0.2em] font-bold">Luas Area (m²)</label>
                    <input 
                      type="number" 
                      value={area} 
                      onChange={(e) => setArea(Number(e.target.value))}
                      className="w-full bg-transparent border-b border-zinc-200 px-0 py-5 text-zinc-900 font-display font-bold text-2xl focus:border-emerald-accent outline-none transition-all tracking-tight"
                      placeholder="260"
                    />
                  </div>
 
                  <div className="md:col-span-2 pt-16 mt-4 grid grid-cols-1 sm:grid-cols-3 gap-12 border-t border-zinc-50">
                     <div className="flex flex-col gap-3">
                        <span className="micro-label text-zinc-300 font-bold uppercase tracking-widest">Surface</span>
                        <span className="font-display font-bold text-zinc-900 text-lg">Olympic Grade</span>
                     </div>
                     <div className="flex flex-col gap-3">
                        <span className="micro-label text-zinc-300 font-bold uppercase tracking-widest">Structural</span>
                        <span className="font-display font-bold text-zinc-900 text-lg">Heavy Reinforced</span>
                     </div>
                     <div className="flex flex-col gap-3">
                        <span className="micro-label text-zinc-300 font-bold uppercase tracking-widest">Standard</span>
                        <span className="font-display font-bold text-zinc-900 text-lg">ISO Certified</span>
                     </div>
                  </div>
 
                  <button className="md:col-span-2 py-7 bg-zinc-900 text-white font-display font-bold tracking-[0.4em] text-xs uppercase hover:bg-emerald-accent transition-all duration-700 mt-12 rounded-full shadow-2xl shadow-zinc-200 hover:shadow-emerald-200/50">
                    DAPATKAN PENAWARAN RESMI
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Engineering Grid Backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="premium-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="black" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#premium-grid)" />
        </svg>
      </div>
    </section>
  );
};
