import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import { pillars, pillarColorClasses } from '../data/pillars.js';

const quotes = [
  '“I want what’s introduced to speak to the soul.”',
  '“It’s a community for women — not networking. A place where they can be themselves and come as they are.”',
  '“Not about fixing everything. Supporting people where they are and offering tools that empower them to become their best self.”',
  '“The differentiator is that this is truly personal. We genuinely root for you.”',
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 px-6 bg-gradient-to-br from-sun via-gold/40 to-orange/60 overflow-hidden">
        <div className="absolute top-[-15%] left-[-10%] w-[50vw] h-[50vw] bg-pink rounded-full mix-blend-multiply filter blur-[100px] opacity-25"></div>
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="inline-block px-4 py-1.5 bg-magenta text-sun rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
              Meet Jenn
            </div>
            <h1 className="text-5xl md:text-7xl font-display text-magenta leading-tight mb-6">
              The heart behind <i className="text-gradient">Energize Your Vibe.</i>
            </h1>
            <p className="text-lg md:text-xl text-magenta/90 font-medium leading-relaxed mb-6">
              Jenn is the founder of Energize Your Vibe — a transformational global sisterhood rooted in self-love, confidence, and authentic connection. She built this community for women who want more: real tools, real support, and a place to simply be themselves.
            </p>
            <Link
              to="/#pricing"
              className="inline-flex items-center gap-3 bg-magenta text-white py-4 px-8 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-pink transition-colors shadow-lg"
            >
              Join The Sisterhood <ArrowRight size={18} />
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-sm w-full shadow-2xl border-4 border-white rotate-2">
              <img
                src="/assets/jenn-headshot.png"
                alt="Jenn — Founder of Energize Your Vibe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BIO */}
      <section className="relative py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display text-gray-900 mb-10">
            Her <i className="text-pink">story.</i>
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
            {/* PLACEHOLDER BIO — swap with the content of jenn_bio.txt */}
            <p>
              Jenn has spent over two decades walking alongside women in their healing, growth, and
              becoming. She knows what it feels like to hold it all together on the outside while
              feeling disconnected on the inside — and she built Energize Your Vibe so no woman has
              to do that alone.
            </p>
            <p>
              Her work is grounded in both soul and science. She draws from years of lived
              experience, mentorship, and research in wellness to offer tools that meet women
              exactly where they are — not where anyone else thinks they should be.
            </p>
            <p>
              Jenn leads with love. She lives with intention. She believes that real change
              doesn’t come from fixing yourself, but from being fully supported as you reconnect
              with who you already are.
            </p>
            <p className="text-base italic text-gray-500">
              Full bio coming soon — this section will be replaced with the content from{' '}
              <code className="bg-gray-100 px-1.5 py-0.5 rounded">jenn_bio.txt</code>.
            </p>
          </div>
        </div>
      </section>

      {/* QUOTES */}
      <section className="relative py-24 px-6 bg-bg">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display text-gray-900 mb-14 text-center">
            In Jenn’s <i className="text-orange">own words.</i>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {quotes.map((q, i) => (
              <div
                key={i}
                className="bento-card bg-white p-8 border-2 border-gray-100 flex gap-5 items-start"
              >
                <Quote className="text-pink shrink-0 mt-1" size={28} />
                <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed italic">
                  {q}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL 7 PILLARS */}
      <section className="relative py-24 px-6 bg-magenta text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-sun text-magenta rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
              The 7 Pillars
            </div>
            <h2 className="text-4xl md:text-6xl font-display mb-6">
              A framework built for <i className="text-sun">real life.</i>
            </h2>
            <p className="text-white/85 text-lg md:text-xl max-w-3xl mx-auto font-medium">
              Your brain doesn’t respond well to vague goals like “be happier.” It needs structure and intention. The 7 Pillars give you clear areas to focus on so you know what’s going on and where to start.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {pillars.map((p, idx) => {
              const c = pillarColorClasses[p.color];
              return (
                <div
                  key={p.key}
                  className={`bento-card ${c.bg} ${c.text} p-8 border-none flex flex-col gap-4`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-widest ${c.accent} mb-1`}>
                        Pillar {idx + 1} · {p.subtitle}
                      </p>
                      <h3 className="font-display text-4xl md:text-5xl">{p.name}</h3>
                    </div>
                  </div>
                  <p className={`font-bold italic ${c.accent}`}>{p.tagline}</p>
                  <p className="font-medium opacity-95 leading-relaxed">{p.long}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY THE FRAMEWORK */}
      <section className="relative py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display text-gray-900 mb-4">
              Why a <i className="text-pink">framework</i> works.
            </h2>
            <p className="text-gray-600 text-lg md:text-xl font-medium max-w-3xl mx-auto">
              Because everything in life is connected. No area of your life operates on its own — and when one pillar is supported, the others begin to shift too.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="bento-card bg-sun/40 border-2 border-gold/30 p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-magenta mb-3">
                Awareness
              </p>
              <h3 className="font-display text-2xl text-gray-900 mb-3">See it clearly.</h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                Most people feel off but don’t know why. The pillars help you name it — so you can do something about it.
              </p>
            </div>
            <div className="bento-card bg-pink/5 border-2 border-pink/20 p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-pink mb-3">
                Balance
              </p>
              <h3 className="font-display text-2xl text-gray-900 mb-3">Regulate your nervous system.</h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                When your pillars are supported, your body feels safer. That’s why you feel calmer, more focused, and more resilient.
              </p>
            </div>
            <div className="bento-card bg-orange/5 border-2 border-orange/20 p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-orange mb-3">
                Momentum
              </p>
              <h3 className="font-display text-2xl text-gray-900 mb-3">Support one, shift them all.</h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                Poor sleep affects your mood. Relationship stress affects your decisions. Everything is connected — and the pillars move with you.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/#pricing"
              className="inline-flex items-center gap-3 bg-magenta text-white py-5 px-10 rounded-full font-bold uppercase tracking-widest text-base hover:bg-pink transition-colors shadow-lg"
            >
              Reserve Your Spot <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
