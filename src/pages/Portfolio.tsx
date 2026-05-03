import { ServiceCard } from "../components/sections/ServiceCard";
import { CTA } from "../components/sections/CTA";
import { PROJECTS } from "../constants/projects";

export const Portfolio = () => {
  return (
    <>
      <section className="py-32 bg-white">
        <div className="container-wide">
          <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-2xl">
              <span className="micro-label text-emerald-accent mb-4 block">Portofolio Proyek</span>
              <h1 className="text-6xl md:text-8xl font-display font-bold text-zinc-900 tracking-tighter">
                REKAM JEJAK <br /> PRESTASI
              </h1>
            </div>
            <p className="max-w-xs text-zinc-500 text-sm font-light leading-relaxed">
              Kumpulan proyek konstruksi fasilitas olahraga terbaik kami di seluruh wilayah Indonesia. Masing-masing dikerjakan dengan standar kualitas tertinggi.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <ServiceCard 
                 key={project.id}
                 category={project.location} 
                 title={project.title} 
                 number={(index + 1).toString().padStart(2, '0')} 
                 imageAlt={project.title}
                 link={`/portfolio/${project.id}`}
              />
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
};
