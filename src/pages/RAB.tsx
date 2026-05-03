import { RABCalculator } from "../components/sections/RABCalculator";
import { CTA } from "../components/sections/CTA";

export const RAB = () => {
  return (
    <>
      <section className="pt-20 bg-zinc-50">
        <div className="container-wide py-20">
          <span className="micro-label text-emerald-accent mb-4 block">Alat Estimasi</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-zinc-900 tracking-tight">Kalkulator RAB</h1>
          <p className="max-w-xl text-zinc-500 mt-6 text-lg">
            Gunakan kalkulator kami untuk mendapatkan perkiraan biaya proyek Anda secara transparan dan akurat dalam hitungan detik.
          </p>
        </div>
      </section>
      <RABCalculator />
      <CTA />
    </>
  );
};
