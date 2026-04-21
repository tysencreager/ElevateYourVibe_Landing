import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10 text-center border-t-8 border-gold">
      <div className="max-w-4xl mx-auto px-6">
        <img
          src="/logo.png"
          alt="Energize Your Vibe"
          className="w-20 h-20 mx-auto rounded-full shadow-lg mb-8"
        />
        <h3 className="text-3xl font-display mb-4">Energize Your Vibe</h3>
        <p className="text-gray-400 text-sm tracking-widest uppercase mb-10">
          Empower Your Energy, Transform Your Life
        </p>

        <div className="flex flex-wrap justify-center gap-10 mb-12 text-sm font-bold uppercase tracking-widest text-gray-400">
          <Link to="/" className="hover:text-sun transition-colors">Home</Link>
          <Link to="/about" className="hover:text-sun transition-colors">About</Link>
          <Link to="/events" className="hover:text-sun transition-colors">Events</Link>
          <a href="mailto:hello@energizeyourvibe.com" className="hover:text-sun transition-colors">Contact</a>
        </div>

        <p className="text-gray-500 text-sm font-medium">
          © {new Date().getFullYear()} Energize Your Vibe, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
