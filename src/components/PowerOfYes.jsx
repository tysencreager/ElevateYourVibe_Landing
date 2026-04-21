import { Zap, Heart, Map, Users } from 'lucide-react';
import Blob from './Blob.jsx';
import Reveal from './Reveal.jsx';

export default function PowerOfYes() {
  return (
    <section className="relative z-10 py-28 px-6 bg-soft-rose overflow-hidden">
      <Blob tone="pink" size="xl" className="-top-40 -left-40" opacity={15} slow />
      <Blob tone="gold" size="lg" className="top-1/3 -right-40" opacity={18} />
      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-4xl md:text-6xl font-display text-gray-900 leading-tight">
            What happens when you <br />
            <span className="font-serif italic text-pink font-semibold">say YES to yourself:</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-md font-medium leading-relaxed">
            Leave survival mode behind. This is everything you stand to gain when you finally prioritize your own energy.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
          <Reveal delay={80} className="bento-card p-10 md:col-span-2 bg-gradient-to-br from-magenta via-pink to-orange text-white relative overflow-hidden flex flex-col justify-end group border-none grain">
            <div className="flex items-center gap-4 mb-3">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/15 border border-white/25 backdrop-blur-sm shrink-0 transition-transform duration-500 group-hover:scale-110">
                <Zap size={22} strokeWidth={1.75} className="text-sun" />
              </span>
              <h3 className="text-3xl font-display">Sustainable Thriving</h3>
            </div>
            <p className="text-white/90 text-lg font-medium leading-relaxed">
              Transitioning from survival mode and burnout into true, vibrant, sustainable thriving.
            </p>
          </Reveal>

          <Reveal delay={160} className="bento-card p-10 bg-gradient-to-br from-sun via-sun to-gold/60 text-magenta flex flex-col justify-end group border-none">
            <div className="flex items-center gap-4 mb-3">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/60 border border-pink/20 shrink-0 transition-transform duration-500 group-hover:scale-110">
                <Heart size={20} strokeWidth={1.75} className="text-pink" />
              </span>
              <h3 className="text-2xl font-display">Fill Your Cup</h3>
            </div>
            <p className="text-magenta/80 font-medium">
              Supported unconditionally by women who truly see and celebrate you.
            </p>
          </Reveal>

          <Reveal delay={240} className="bento-card p-10 bg-gradient-to-br from-gold via-orange to-pink text-white flex flex-col justify-end group border-none">
            <div className="flex items-center gap-4 mb-3">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/20 border border-white/30 backdrop-blur-sm shrink-0 transition-transform duration-500 group-hover:scale-110">
                <Map size={20} strokeWidth={1.75} className="text-white" />
              </span>
              <h3 className="text-2xl font-display">Expand Dreams</h3>
            </div>
            <p className="text-white/90 font-medium">
              Finding the vibrant energy, clarity, and roadmap to actually pursue them.
            </p>
          </Reveal>

          <Reveal delay={320} className="bento-card p-10 md:col-span-2 bg-orange text-white flex flex-col justify-end group border-none overflow-hidden relative min-h-[280px]">
            <img
              src="/assets/women-laughing.png"
              alt="Women in a sisterhood community"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-orange/80 via-orange/40 to-transparent" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-3">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/15 border border-white/30 backdrop-blur-sm shrink-0 shadow-md transition-transform duration-500 group-hover:scale-110">
                  <Users size={22} strokeWidth={1.75} className="text-sun" />
                </span>
                <h3 className="text-3xl font-display drop-shadow-md">A Sisterhood That Changes Everything</h3>
              </div>
              <p className="text-white text-lg font-medium leading-relaxed drop-shadow-md">
                Reclaim your joy, confidence, and purpose through deep connection and proven tools.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
