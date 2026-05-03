import { motion } from "motion/react";
import { Activity, ShieldCheck } from "lucide-react";

export const Philosophy = () => {
  return (
    <section id="philosophy" className="py-32 relative overflow-hidden bg-white">
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="micro-label mb-6 block text-emerald-accent">FILOSOFI DESAIN</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-12 leading-[0.9] text-zinc-900">
                FORM <br /> 
                FOLLOWS <br /> 
                <span className="text-emerald-accent italic">FUNCTION</span>
              </h2>
              <div className="space-y-8 text-zinc-600 font-light leading-relaxed text-lg">
                <p>
                  Di Pop Up Sport, kami tidak hanya membangun lapangan; kami merekayasa ekosistem atletik. Setiap milimeter spesifikasi permukaan dihitung untuk meningkatkan potensi performa manusia.
                </p>
                <p>
                  Kombinasi material premium dengan teknik konstruksi yang presisi memastikan setiap proyek kami tahan lama dalam cuaca tropis Indonesia.
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="premium-card p-10 flex flex-col justify-between h-80">
              <Activity className="w-8 h-8 text-emerald-accent" />
              <div>
                <h4 className="text-xl font-display font-bold mb-4">Presisi Metrik</h4>
                <p className="text-zinc-500 text-sm">Permukaan diuji terhadap pantulan, gesekan, dan dampak sesuai standar federasi olahraga internasional.</p>
              </div>
            </div>
            <div className="premium-card p-10 flex flex-col justify-between h-80 md:mt-12">
              <ShieldCheck className="w-8 h-8 text-emerald-accent" />
              <div>
                <h4 className="text-xl font-display font-bold mb-4">Resiliensi Tropis</h4>
                <p className="text-zinc-500 text-sm">Material khusus yang tahan terhadap kelembaban tinggi dan paparan sinar UV ekstrem di Indonesia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
