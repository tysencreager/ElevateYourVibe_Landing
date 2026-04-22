import Blob from '../components/Blob.jsx';

export default function LegalLayout({ title, effective, children }) {
  return (
    <>
      <section className="relative pt-32 pb-10 md:pt-44 md:pb-14 px-5 md:px-6 bg-gradient-to-br from-sun via-gold/40 to-orange/60 overflow-hidden">
        <Blob tone="pink" size="lg" className="-top-20 -left-20" opacity={15} slow />
        <Blob tone="magenta" size="md" className="-bottom-20 right-10" opacity={12} />
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-magenta mb-4">
            Good to know
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-magenta leading-tight mb-4">
            {title}
          </h1>
          {effective && (
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-magenta/80">
              Effective {effective}
            </p>
          )}
        </div>
      </section>

      <section className="relative py-16 md:py-20 px-5 md:px-6 bg-bg">
        <article className="max-w-3xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed font-medium space-y-5 legal-article">
          {children}
        </article>
      </section>
    </>
  );
}
