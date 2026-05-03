import { Link } from "react-router-dom";
import { ArrowUpRight, Send } from "lucide-react";
import { useContent } from "../../context/ContentContext";
import { useState, FormEvent } from "react";

export const Footer = () => {
  const { content } = useContent();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleWhatsAppRedirect = (e: FormEvent) => {
    e.preventDefault();
    const phone = "628113198800";
    const text = `Halo Pop Up Sport, saya ${formData.name} (${formData.email}).\n\nPesan: ${formData.message}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <footer className="bg-white border-t border-zinc-100 pt-32 pb-12">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <div className="w-12 h-12 border border-emerald-accent flex items-center justify-center font-display font-bold text-2xl text-emerald-accent mb-8">
              P
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Kontraktor terkemuka di Indonesia untuk konstruksi fasilitas olahraga premium dan arsitektur lingkungan atletik.
            </p>
          </div>
          
          <div>
            <span className="micro-label mb-8 block text-zinc-900 font-bold uppercase tracking-widest text-[10px]">Kantor Pusat</span>
            <div className="space-y-4 text-zinc-500 text-sm font-light">
              <p>{content.contact.address}</p>
              <p>{content.contact.email}</p>
              <p>{content.contact.phone}</p>
            </div>
          </div>

          <div>
            <span className="micro-label mb-8 block text-zinc-900 font-bold uppercase tracking-widest text-[10px]">Navigasi</span>
            <ul className="space-y-4 text-zinc-500 text-sm font-light">
              <li><Link to="/portfolio" className="hover:text-emerald-accent transition-colors">Portfolio Proyek</Link></li>
              <li><Link to="/rab" className="hover:text-emerald-accent transition-colors">Estimasi Biaya RAB</Link></li>
              <li><Link to="/about" className="hover:text-emerald-accent transition-colors">Filosofi Konstruksi</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-accent transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          <div className="lg:pl-8 border-l border-zinc-50">
            <span className="micro-label mb-8 block text-zinc-900 font-bold uppercase tracking-widest text-[10px]">Quick Inquiry</span>
            <form onSubmit={handleWhatsAppRedirect} className="space-y-4">
              <input 
                type="text" 
                placeholder="Nama Lengkap" 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-zinc-50 border-b border-zinc-200 px-4 py-2 text-sm outline-none focus:border-emerald-accent transition-colors" 
              />
              <input 
                type="email" 
                placeholder="Email Aktif" 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-zinc-50 border-b border-zinc-200 px-4 py-2 text-sm outline-none focus:border-emerald-accent transition-colors" 
              />
              <textarea 
                placeholder="Pesan / Rencana Proyek" 
                required
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-zinc-50 border-b border-zinc-200 px-4 py-2 text-sm outline-none focus:border-emerald-accent transition-colors resize-none"
              />
              <button 
                type="submit"
                className="w-full bg-zinc-900 text-white py-3 text-[10px] micro-label font-bold tracking-widest uppercase hover:bg-emerald-accent transition-all flex items-center justify-center gap-2 group"
              >
                Kirim via WhatsApp
                <Send className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-zinc-100 pt-12">
          <span className="micro-label text-zinc-400 text-[8px]">© 2026 POP UP SPORT INDONESIA. SEMUA HAK DILINDUNGI.</span>
          <div className="flex gap-8">
            <Link to="/privacy" className="micro-label text-zinc-400 hover:text-zinc-900 transition-colors">Syarat & Ketentuan</Link>
            <Link to="/standards" className="micro-label text-zinc-400 hover:text-zinc-900 transition-colors">Standard Engineering</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
