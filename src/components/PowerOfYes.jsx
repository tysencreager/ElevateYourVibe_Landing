import { Zap, Heart, Map, Users } from 'lucide-react';

export default function PowerOfYes() {
  return (
    <section className="relative z-10 py-28 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <h2 className="text-4xl md:text-6xl font-display text-gray-900 mb-6">
            What happens when you <br />
            <i className="text-pink">say YES to yourself:</i>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl font-medium">
            Leave survival mode behind. This is everything you stand to gain when you finally prioritize your own energy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
          <div className="bento-card p-10 md:col-span-2 bg-gradient-to-br from-magenta to-pink text-white relative overflow-hidden flex flex-col justify-end group border-none">
            <Zap className="text-sun mb-8 h-12 w-12 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-3xl font-display mb-3">Sustainable Thriving</h3>
            <p className="text-white/90 text-lg font-medium leading-relaxed">
              Transitioning from survival mode and burnout into true, vibrant, sustainable thriving.
            </p>
          </div>

          <div className="bento-card p-10 bg-sun text-magenta flex flex-col justify-end group border-none">
            <Heart className="text-pink mb-8 h-12 w-12 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-2xl font-display mb-3">Fill Your Cup</h3>
            <p className="text-magenta/80 font-medium">
              Supported unconditionally by women who truly see and celebrate you.
            </p>
          </div>

          <div className="bento-card p-10 bg-gold text-white flex flex-col justify-end group border-none">
            <Map className="text-magenta mb-8 h-12 w-12 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-2xl font-display mb-3">Expand Dreams</h3>
            <p className="text-white/90 font-medium">
              Finding the vibrant energy, clarity, and roadmap to actually pursue them.
            </p>
          </div>

          <div className="bento-card p-10 md:col-span-2 bg-orange text-white flex flex-col justify-end group border-none overflow-hidden relative">
            <img
              src="/assets/women-laughing.png"
              alt="Women in a sisterhood community"
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
            />
            <div className="relative">
              <Users className="text-sun mb-8 h-12 w-12 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-3xl font-display mb-3">A Sisterhood That Changes Everything</h3>
              <p className="text-white/95 text-lg font-medium leading-relaxed">
                Reclaim your joy, confidence, and purpose through deep connection and proven tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
