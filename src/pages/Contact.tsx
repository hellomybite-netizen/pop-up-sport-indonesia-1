import { ArrowUpRight, MapPin, Mail, Phone, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export const Contact = () => {
  const whatsappNumber = "628113198800";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Halo%20Pop%20Up%20Sport,%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20proyek%20fasilitas%20olahraga.`;

  return (
    <section className="py-32 bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <span className="micro-label text-emerald-accent mb-6 block">Hubungi Kami</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-zinc-900 tracking-tighter leading-none mb-4">
              MARI MULAI <br />KONSULTASI
            </h1>
            <p className="text-zinc-500 font-light mb-12">
              Tim engineering kami siap membantu Anda mewujudkan fasilitas olahraga impian dengan standar kualitas tertinggi.
            </p>
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 border border-zinc-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-accent" />
                </div>
                <div>
                  <h4 className="micro-label text-zinc-900 mb-2">Kantor Pusat</h4>
                  <p className="text-zinc-500 font-light">Graha Sport Center, Lt 4<br />Sudirman, Jakarta Selatan</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 border border-zinc-200 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-emerald-accent" />
                </div>
                <div>
                  <h4 className="micro-label text-zinc-900 mb-2">Email Admin</h4>
                  <p className="text-zinc-500 font-light">info@popupsport.id<br />sales@popupsport.id</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 border border-zinc-200 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-emerald-accent" />
                </div>
                <div>
                  <h4 className="micro-label text-zinc-900 mb-2">Telepon / WhatsApp</h4>
                  <p className="text-zinc-500 font-light">+62 811-3198-800</p>
                </div>
              </div>
              
              <div className="pt-8">
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full sm:w-fit px-12 py-6 bg-[#25D366] text-white font-display font-bold text-sm tracking-[0.2em] uppercase hover:shadow-[0_20px_40px_rgba(37,211,102,0.3)] transition-all active:scale-[0.98]"
                >
                  <MessageSquare className="w-5 h-5" />
                  Mulai Chat WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-12 bg-zinc-50 border border-zinc-100"
            >
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-3">
                  <label className="micro-label text-zinc-500">Nama Lengkap</label>
                  <input type="text" className="input-field bg-white" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="micro-label text-zinc-500">Alamat Email</label>
                  <input type="email" className="input-field bg-white" placeholder="john@example.com" />
                </div>
                <div className="space-y-3 md:col-span-2">
                  <label className="micro-label text-zinc-500">Subjek Proyek</label>
                  <select className="input-field bg-white">
                    <option>Konsultasi Lapangan Tennis</option>
                    <option>Pembangunan Padel Court</option>
                    <option>Fasilitas Basket / Multi-sport</option>
                    <option>Maintenance & Renovasi</option>
                  </select>
                </div>
                <div className="space-y-3 md:col-span-2">
                  <label className="micro-label text-zinc-500">Pesan Anda</label>
                  <textarea className="input-field bg-white min-h-[160px]" placeholder="Ceritakan detail proyek Anda..."></textarea>
                </div>
                <button className="md:col-span-2 py-5 bg-zinc-900 text-white font-display font-bold tracking-[0.2em] uppercase hover:bg-emerald-accent transition-all duration-500 shadow-xl shadow-zinc-200">
                  KIRIM FORMULIR
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
