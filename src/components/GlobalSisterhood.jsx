import Sunburst from './Sunburst.jsx';

export default function GlobalSisterhood() {
  return (
    <section className="relative z-10 overflow-hidden">
      <div className="relative min-h-[380px] md:min-h-[460px]">
        <img
          src="/assets/online-sisterhood.png"
          alt="Women from around the world connecting online"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-magenta/92 via-magenta/60 to-transparent" />
        <Sunburst
          className="absolute -right-32 -top-32 w-[520px] h-[520px] opacity-15"
          strokeColor="rgba(253,224,139,0.8)"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24 text-white">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-sun mb-4">
              A Global Sisterhood
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight mb-6 drop-shadow-lg">
              Connection <i className="text-sun">without borders.</i>
            </h2>
            <p className="text-lg md:text-xl font-medium leading-relaxed text-white/95 drop-shadow">
              Primarily online — with select in-person moments that bring us together. Wherever you are, there’s a seat for you at this table.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
