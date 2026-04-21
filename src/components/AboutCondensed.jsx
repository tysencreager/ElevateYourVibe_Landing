import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Blob from './Blob.jsx';

export default function AboutCondensed() {
  return (
    <section id="about" className="relative z-10 py-28 px-6 bg-gradient-to-br from-orange via-pink to-magenta overflow-hidden">
      <Blob tone="sun" size="xl" className="-top-32 -right-20" opacity={35} slow />
      <Blob tone="magenta" size="lg" className="bottom-0 -left-32" opacity={20} />
      <div className="max-w-6xl mx-auto bento-card p-8 md:p-16 bg-white shadow-2xl relative border-none z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center z-10 relative">
          <div className="w-full md:w-5/12">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border-4 border-sun">
              <img
                src="/assets/jenn-headshot.png"
                alt="Jenn — Founder of Energize Your Vibe"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-pink text-white px-6 py-3 rounded-xl font-display text-2xl shadow-lg">
                Meet Jenn
              </div>
            </div>
          </div>
          <div className="w-full md:w-7/12">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-orange mb-5 inline-flex items-center gap-3">
              <span className="section-numeral not-italic">06</span>
              <span className="h-px w-8 bg-gold/60" />
              Meet the Founder
            </p>
            <h2 className="text-3xl md:text-5xl font-display leading-tight text-gray-900 mb-8">
              “I want what’s introduced to <span className="font-serif italic text-orange font-semibold">speak to the soul.”</span>
            </h2>
            <div className="space-y-5 text-gray-700 text-lg md:text-xl font-medium leading-relaxed">
              <p>
                Jenn built Energize Your Vibe as a community for women — not networking. A place to be yourself and come as you are. For those who want more: consistent love, real growth, and the tools to support them in the basics of life.
              </p>
              <p>
                This isn’t about fixing everything. It’s about meeting you where you are and offering tools that empower you to become your best self.
              </p>
              <div className="bg-sun/40 p-6 rounded-2xl border border-gold/30 mt-6">
                <p className="font-bold text-magenta italic">
                  “The differentiator is that this is truly personal. We genuinely root for you — because we care.”
                </p>
              </div>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-3 bg-magenta text-white py-4 px-8 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-pink transition-colors shadow-lg"
            >
              Read Jenn’s Full Story <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
