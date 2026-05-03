import { Philosophy } from "../components/sections/Philosophy";
import { CTA } from "../components/sections/CTA";

export const About = () => {
  return (
    <>
      <section className="py-32 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <span className="micro-label text-emerald-accent mb-6 block">Tentang Pop Up Sport</span>
              <h1 className="text-6xl md:text-7xl font-display font-bold text-zinc-900 leading-none tracking-tighter mb-8">
                MEMBANGUN MASA DEPAN <br /> OLAHRAGA INDONESIA
              </h1>
              <p className="text-zinc-600 text-lg font-light leading-relaxed mb-8">
                Berdiri sejak 2018, Pop Up Sport telah menjadi standar emas dalam konstruksi fasilitas olahraga di Indonesia. Kami menggabungkan inovasi material global dengan keahlian teknik lokal untuk menciptakan infrastruktur yang luar biasa.
              </p>
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-zinc-100">
                <div>
                  <div className="text-4xl font-display font-bold text-emerald-accent mb-2">250+</div>
                  <div className="micro-label">Proyek Selesai</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-emerald-accent mb-2">15+</div>
                  <div className="micro-label">Kota Terjangkau</div>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-zinc-100 border border-zinc-200 overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2000&auto=format&fit=crop" 
                alt="Pop Up Sport Team" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
          </div>
        </div>
      </section>
      <Philosophy />
      <CTA />
    </>
  );
};
