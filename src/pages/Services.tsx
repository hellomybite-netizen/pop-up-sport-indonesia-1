import { ServiceCard } from "../components/sections/ServiceCard";
import { CTA } from "../components/sections/CTA";
import { Trophy, LayoutGrid, Shield, Waves, Timer, Lightbulb } from "lucide-react";

export const Services = () => {
  return (
    <>
      <section className="py-32 bg-white">
        <div className="container-wide">
          <header className="mb-24">
            <span className="micro-label text-emerald-accent mb-4 block">Layanan Kami</span>
            <h1 className="text-6xl md:text-8xl font-display font-bold text-zinc-900 tracking-tighter mb-12">
              ENGINEERING <br /> EXCELLENCE
            </h1>
            <p className="max-w-2xl text-zinc-600 text-xl font-light leading-relaxed">
              Kami menyediakan solusi turnkey untuk fasilitas olahraga modern. Dari konsultasi desain awal hingga pemeliharaan jangka panjang, keahlian kami memastikan investasi Anda memberikan performa terbaik.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              category="TENNIS" 
              title="Grand Slam Hardcourt" 
              number="01" 
              icon={Trophy}
            />
            <ServiceCard 
              category="MULTI-SPORT" 
              title="Futsal & Basketball Hub" 
              number="02" 
              icon={LayoutGrid}
            />
            <ServiceCard 
              category="PADEL" 
              title="Panoramic Padel Court" 
              number="03" 
              icon={Shield}
            />
            <ServiceCard 
              category="AQUATICS" 
              title="Olympic Swimming Pool" 
              number="04" 
              icon={Waves}
            />
            <ServiceCard 
              category="RUNNING" 
              title="IAAF Standard Track" 
              number="05" 
              icon={Timer}
            />
            <ServiceCard 
              category="LIGHTING" 
              title="Smart Floodlight Systems" 
              number="06" 
              icon={Lightbulb}
            />
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
};
