import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Events' },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed w-full z-50 px-4 pointer-events-none flex justify-center transition-[top] duration-300 ${
          scrolled ? 'top-3' : 'top-[54px] md:top-[60px]'
        }`}
      >
        <nav
          className={`pointer-events-auto transition-all duration-300 w-full max-w-5xl rounded-full border-2 ${
            scrolled
              ? 'bg-white/95 backdrop-blur-md border-pink/20 shadow-xl py-2.5 px-4 md:py-3 md:px-6'
              : 'bg-white/90 border-transparent py-3 px-4 md:py-4 md:px-6'
          } flex justify-between items-center shadow-lg`}
        >
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
            <img
              src="/logo.png"
              alt="Energize Your Vibe"
              className="w-10 h-10 rounded-full object-cover shadow-sm"
            />
            <span className="font-display font-semibold text-lg md:text-xl tracking-tight text-magenta">
              Energize Your Vibe
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8 bg-sun/30 px-6 py-2.5 rounded-full border border-gold/20">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `font-bold text-sm transition-colors ${
                    isActive ? 'text-orange' : 'text-magenta hover:text-orange'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          <Link
            to="/#pricing"
            className="hidden md:inline-block bg-pink text-white hover:bg-magenta px-6 py-3 rounded-full text-sm font-bold transition-colors shadow-md uppercase tracking-wider"
          >
            Join Us
          </Link>

          <button
            className="md:hidden text-magenta bg-sun p-2 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-magenta text-white pt-32 px-8 flex flex-col gap-8 md:hidden">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-4xl border-b border-white/20 pb-4"
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/#pricing"
            onClick={() => setIsMenuOpen(false)}
            className="bg-sun text-magenta text-center py-5 rounded-full font-bold text-xl mt-4 uppercase tracking-widest shadow-lg"
          >
            Join Us
          </Link>
        </div>
      )}
    </>
  );
}
