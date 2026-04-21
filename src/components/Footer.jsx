import { Link } from 'react-router-dom';
import { Mail, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import Sunburst from './Sunburst.jsx';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#3b0a24] via-magenta to-[#7a0e3a] text-white pt-24 pb-10 grain">
      {/* Shimmer top edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" aria-hidden="true" />
      <Sunburst
        className="absolute -right-40 -top-40 w-[600px] h-[600px] opacity-10"
        strokeColor="rgba(253,224,139,0.9)"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Top - Brand + newsletter */}
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 pb-14 border-b border-white/10">
          <div>
            <Link to="/" className="inline-flex items-center gap-4 mb-6 group">
              <img
                src="/logo.png"
                alt="Energize Your Vibe"
                className="w-16 h-16 rounded-full shadow-lg border border-white/30"
              />
              <div className="flex flex-col">
                <span className="font-display text-3xl">Energize Your Vibe</span>
                <span className="text-xs uppercase tracking-[0.3em] text-sun mt-1">
                  Empower your energy · Transform your life
                </span>
              </div>
            </Link>
            <p className="text-white/80 font-medium leading-relaxed max-w-md text-base">
              A transformational global sisterhood rooted in self-love, confidence, and authentic connection. We lead with love. We live with intention. We have fun.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-sun mb-4">
              Stay in the loop
            </p>
            <h3 className="font-display text-2xl mb-5 leading-tight">
              A little inspiration, <i className="text-sun">delivered gently.</i>
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="you@example.com"
                className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:border-sun focus:bg-white/15 backdrop-blur-sm font-medium"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-sun text-magenta font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors shadow-lg"
              >
                Subscribe <ArrowUpRight size={16} strokeWidth={1.75} />
              </button>
            </form>
            <p className="mt-3 text-xs text-white/60 font-medium">
              No spam. Opt-in only. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Middle - Links */}
        <div className="grid sm:grid-cols-3 gap-10 py-12">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-sun mb-5">
              Explore
            </p>
            <ul className="space-y-3 text-white/80 font-medium">
              <li><Link to="/" className="hover:text-sun transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-sun transition-colors">About Jenn</Link></li>
              <li><Link to="/events" className="hover:text-sun transition-colors">Events</Link></li>
              <li><Link to="/#pricing" className="hover:text-sun transition-colors">Membership</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-sun mb-5">
              Connect
            </p>
            <ul className="space-y-3 text-white/80 font-medium">
              <li>
                <a href="mailto:hello@energizeyourvibe.com" className="inline-flex items-center gap-2 hover:text-sun transition-colors">
                  <Mail size={16} strokeWidth={1.5} /> hello@energizeyourvibe.com
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center gap-2 hover:text-sun transition-colors">
                  <Instagram size={16} strokeWidth={1.5} /> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center gap-2 hover:text-sun transition-colors">
                  <Facebook size={16} strokeWidth={1.5} /> Facebook Community
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-sun mb-5">
              Good to know
            </p>
            <ul className="space-y-3 text-white/80 font-medium">
              <li><a href="#" className="hover:text-sun transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-sun transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-sun transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-white/60 font-medium tracking-wide">
            © {year} Energize Your Vibe, LLC. All rights reserved.
          </p>
          <p className="text-white/50 font-medium uppercase tracking-[0.3em]">
            Made with <span className="text-sun">love</span> in Draper, Utah.
          </p>
        </div>
      </div>
    </footer>
  );
}
