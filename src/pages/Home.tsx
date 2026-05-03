import { Hero } from "../components/sections/Hero";
import { Philosophy } from "../components/sections/Philosophy";
import { ServiceCard } from "../components/sections/ServiceCard";
import { RABCalculator } from "../components/sections/RABCalculator";
import { WhyUs } from "../components/sections/WhyUs";
import { CTA } from "../components/sections/CTA";
import { Link } from "react-router-dom";
import { PROJECTS } from "../constants/projects";

export const Home = () => {
  return (
    <>
      <Hero />
      <section className="py-32 bg-white">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 border-b border-zinc-100 pb-12">
            <div className="max-w-xl">
              <span className="micro-label mb-4 block text-emerald-accent">PORTOFOLIO KAMI</span>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-zinc-900">PRESISI <br />KONSTRUKSI</h2>
            </div>
            <div className="max-w-xs text-right">
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                Dari lapangan privat eksklusif hingga fasilitas olahraga komersial berskala besar dengan standar internasional.
              </p>
              <Link to="/portfolio" className="inline-block text-emerald-accent font-display font-medium text-xs hover:tracking-widest transition-all">
                LIHAT SEMUA PROYEK →
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project, index) => (
              <ServiceCard 
                key={project.id}
                category={project.category} 
                title={project.title} 
                number={(index + 1).toString().padStart(2, '0')} 
                imageAlt={project.title}
                link={`/portfolio/${project.id}`}
              />
            ))}
          </div>
        </div>
      </section>
      <WhyUs />
      <RABCalculator />
      <Philosophy />
      <CTA />
    </>
  );
};
