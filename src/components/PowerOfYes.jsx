import { Zap, Heart, Map, Users } from 'lucide-react';
import Blob from './Blob.jsx';

export default function PowerOfYes() {
  return (
    <section className="relative z-10 py-28 px-6 bg-soft-rose overflow-hidden">
      <Blob tone="pink" size="xl" className="-top-40 -left-40" opacity={15} slow />
      <Blob tone="gold" size="lg" className="top-1/3 -right-40" opacity={18} />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-pink mb-4 flex items-center gap-3">
              <span className="section-numeral not-italic">01</span>
              <span className="h-px w-8 bg-gold/60" />
              The Shift
            </p>
            <h2 className="text-4xl md:text-6xl font-display text-gray-900 leading-tight">
              What happens when you <br />
              <span className="font-serif italic text-pink font-semibold">say YES to yourself:</span>
            </h2>
          </div>
          <p className="text-gray-600 text-lg md:text-xl max-w-md font-medium leading-relaxed">
            Leave survival mode behind. This is everything you stand to gain when you finally prioritize your own energy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
          <div className="bento-card p-10 md:col-span-2 bg-gradient-to-br from-magenta via-pink to-orange text-white relative overflow-hidden flex flex-col justify-end group border-none grain">
            <Zap className="text-sun mb-8 h-12 w-12 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-3xl font-display mb-3">Sustainable Thriving</h3>
            <p className="text-white/90 text-lg font-medium leading-relaxed">
              Transitioning from survival mode and burnout into true, vibrant, sustainable thriving.
            </p>
          </div>

          <div className="bento-card p-10 bg-gradient-to-br from-sun via-sun to-gold/60 text-magenta flex flex-col justify-end group border-none">
            <Heart className="text-pink mb-8 h-12 w-12 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-2xl font-display mb-3">Fill Your Cup</h3>
            <p className="text-magenta/80 font-medium">
              Supported unconditionally by women who truly see and celebrate you.
            </p>
          </div>

          <div className="bento-card p-10 bg-gradient-to-br from-gold via-orange to-pink text-white flex flex-col justify-end group border-none">
            <Map className="text-magenta mb-8 h-12 w-12 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-2xl font-display mb-3">Expand Dreams</h3>
            <p className="text-white/90 font-medium">
              Finding the vibrant energy, clarity, and roadmap to actually pursue them.
            </p>
          </div>

          <div className="bento-card p-10 md:col-span-2 bg-orange text-white flex flex-col justify-end group border-none overflow-hidden relative min-h-[280px]">
            <img
              src="/assets/women-laughing.png"
              alt="Women in a sisterhood community"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-orange/80 via-orange/40 to-transparent" />
            <div className="relative">
              <Users className="text-sun mb-8 h-12 w-12 group-hover:scale-110 transition-transform duration-500 drop-shadow-md" />
              <h3 className="text-3xl font-display mb-3 drop-shadow-md">A Sisterhood That Changes Everything</h3>
              <p className="text-white text-lg font-medium leading-relaxed drop-shadow-md">
                Reclaim your joy, confidence, and purpose through deep connection and proven tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
