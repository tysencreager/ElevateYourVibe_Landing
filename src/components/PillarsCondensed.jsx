import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { pillars, pillarColorClasses } from '../data/pillars.js';

export default function PillarsCondensed() {
  return (
    <section id="pillars" className="relative z-10 py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1.5 bg-sun text-magenta rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            The Framework
          </div>
          <h2 className="text-4xl md:text-6xl font-display mb-6 text-gray-900">
            Built on <i className="text-gradient">7 Pillars.</i>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Real change needs clarity. The 7 Pillars give you clear areas to focus on — so you know what’s going on and where to start.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p) => {
            const c = pillarColorClasses[p.color];
            return (
              <div
                key={p.key}
                className={`bento-card ${c.bg} ${c.text} p-6 flex flex-col justify-between min-h-[200px] border-none`}
              >
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest ${c.accent} mb-2`}>
                    {p.subtitle}
                  </p>
                  <h3 className="font-display text-4xl mb-3">{p.name}</h3>
                </div>
                <p className="text-sm font-medium opacity-95 leading-relaxed">{p.tagline}</p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/about"
            className="inline-flex items-center gap-3 bg-magenta text-white py-4 px-8 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-pink transition-colors shadow-lg"
          >
            Explore the 7 Pillars <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
