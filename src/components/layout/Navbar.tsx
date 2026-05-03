import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
      <div className="container-wide h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="w-10 h-10 border border-emerald-accent flex items-center justify-center font-display font-bold text-xl text-emerald-accent group-hover:bg-emerald-accent group-hover:text-white transition-all">
            P
          </div>
          <div className="hidden md:block">
            <span className="font-display font-semibold tracking-[0.3em] text-sm uppercase text-zinc-900">Pop Up Sport</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-12 text-zinc-900">
          <Link to="/services" className="micro-label hover:text-emerald-accent transition-colors">Services</Link>
          <Link to="/portfolio" className="micro-label hover:text-emerald-accent transition-colors">Portfolio</Link>
          <Link to="/rab" className="micro-label hover:text-emerald-accent transition-colors">RAB</Link>
          <Link to="/about" className="micro-label hover:text-emerald-accent transition-colors">About</Link>
        </div>

        <Link to="/contact" className="flex items-center gap-2 group">
          <span className="micro-label text-zinc-900 group-hover:text-emerald-accent transition-colors">Enquire</span>
          <ArrowUpRight className="w-4 h-4 text-emerald-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </nav>
  );
};
