import { motion } from "motion/react";
import { ShieldCheck, Zap, HardHat, Award } from "lucide-react";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Durabilitas Maksimal",
    description: "Material kami dirancang khusus untuk menghadapi iklim tropis Indonesia yang ekstrem, dari panas terik hingga curah hujan tinggi."
  },
  {
    icon: Zap,
    title: "Inovasi Permukaan",
    description: "Teknologi 'Shock Absorption' tercanggih yang mengurangi risiko cedera atlet dan meningkatkan performa permainan."
  },
  {
    icon: HardHat,
    title: "Turnkey Solution",
    description: "Kami menangani seluruh proses: mulai dari desain, perizinan, konstruksi pondasi, hingga instalasi permukaan akhir."
  },
  {
    icon: Award,
    title: "Standar Internasional",
    description: "Seluruh proyek kami mengikuti standar federasi internasional (ITF untuk Tennis, BWF untuk Badminton, FIP untuk Padel)."
  }
];

export const WhyUs = () => {
  return (
    <section className="py-32 bg-zinc-50 overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/3">
            <span className="micro-label text-emerald-accent mb-6 block">KEUNGGULAN KAMI</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 leading-tight mb-8">
              MENGAPA <br />MEMILIH <br />POP UP SPORT?
            </h2>
            <p className="text-zinc-500 font-light leading-relaxed">
              Kami menggabungkan presisi engineering dengan estetika modern untuk menciptakan fasilitas olahraga yang tidak hanya fungsional, tetapi juga menjadi aset properti yang bernilai tinggi.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {REASONS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 bg-white border border-zinc-100 hover:border-emerald-accent/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-zinc-50 flex items-center justify-center mb-8 group-hover:bg-emerald-accent transition-colors">
                  <item.icon className="w-6 h-6 text-zinc-900 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-display font-bold text-zinc-900 mb-4">{item.title}</h4>
                <p className="text-zinc-500 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
