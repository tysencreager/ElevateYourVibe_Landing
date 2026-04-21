import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import { pillars, pillarColorClasses } from '../data/pillars.js';
import Blob from '../components/Blob.jsx';
import Sunburst from '../components/Sunburst.jsx';

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
        <Blob tone="pink" size="xl" className="-top-20 -left-20" opacity={20} slow />
        <Blob tone="magenta" size="lg" className="-bottom-20 right-10" opacity={15} />
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
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-sm w-full shadow-2xl border-4 border-white">
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
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-pink mb-3">
              Founder · Holistic Health Practitioner
            </p>
            <h2 className="text-3xl md:text-5xl font-display text-gray-900 mb-3">
              Jenn <i className="text-pink">Davis.</i>
            </h2>
            <p className="text-lg md:text-xl text-gray-500 font-medium">
              Founder of Energize Your Vibe & Owner of Connected Roots Healing Space in Draper, UT.
            </p>
          </div>
          <div className="space-y-6 text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
            <p>
              Jenn Davis is a certified Holistic Health Practitioner specializing in energy and wellness, trained in the energetics of the body and the subconscious. She is certified in Applied Kinesiology, a Reiki Master, yoga teacher, and an ICF Level 2 Life Coach. Her work blends science-backed coaching with deep emotional and energetic support, helping individuals regulate their nervous system, shift their mindset, and create lasting change from within.
            </p>
            <p>
              Jenn has spent decades committed to personal growth, healing, and understanding what it truly means to live a fulfilling life. She is deeply passionate about supporting people in remembering who they are — that they matter, are seen, heard, and deeply loved. Creating space for others to experience peace, clarity, and genuine joy is not just her work, it is her life’s mission and passion.
            </p>
            <p>
              Her journey has been shaped by both profound love and deep loss. Widowed at the age of 22 and left to raise her young child, Jenn faced one of life’s most defining moments early on. In the midst of grief and uncertainty, she made a choice to keep going. That choice led her into years of self-development, faith, healing work, and deep inner exploration.
            </p>
            <p>
              Throughout her life, Jenn has also experienced the heartbreak of losing two of her childhood best friends to cancer, and has been impacted by the loss of loved ones through suicide. She has walked alongside friends and family members navigating mental health challenges and addiction, giving her a deep, personal understanding of the weight many people carry. These experiences have shaped her perspective, strengthening her compassion and reinforcing her belief in the importance of connection, support, and truly valuing life.
            </p>
            <p>
              Later in life, as unresolved trauma and grief surfaced, Jenn experienced another layer of transformation. What once felt light became heavy. Instead of turning away, she leaned in. Through emotional healing, mindset work, nervous system regulation, and a deep reliance on her faith in God, she found her way back to herself. She didn’t just learn the work — she embodied it, and continues to do so. She values practicing what she preaches, in life and with clients. She won’t tell you what you want to hear; she will share truth, and respects when she is treated the same — even when it can hurt or be confronting. Communication and willingness are key.
            </p>
            <p>
              Today, Jenn lives with a grounded sense of inner peace, love, and alignment. She brings real-life experience, compassion, and clarity into every space she holds. She sees people for who they are and meets them where they are, while also guiding them forward. She thrives using her cheerleading super powers, and experiencing pure joy for herself and witnessing it in others.
            </p>
            <p>
              Jenn is deeply rooted in her relationship with God and her Savior. While this is central to her life, she honors and respects each individual’s beliefs and personal journey. She believes love is the foundation of healing, and values the unique light within every person.
            </p>
            <p>
              She has been married to her sweetheart for 24 years and is the proud mother of three adult children. Originally from Washington State, she has called Utah home for the past 20 years. She loves Utah and its seasons — the mountains, water, and adventure.
            </p>
          </div>

          <div className="mt-12 bg-gradient-to-br from-sun/60 to-orange/30 rounded-3xl p-8 md:p-10 border border-gold/40">
            <p className="text-xs font-bold uppercase tracking-widest text-magenta mb-4">
              The Vision
            </p>
            <div className="space-y-5 text-lg md:text-xl text-gray-800 font-medium leading-relaxed">
              <p>
                Energize Your Vibe was born through inspiration and lived experience. It is more than a program — it is a community and a movement. A space where women can come as they are, be supported, grow, and rise.
              </p>
              <p>
                Jenn’s vision goes beyond online connection. While education and support are foundational, she believes healing and fulfillment also come through shared experiences — gathering, playing, laughing, learning, and truly living life together. Energize Your Vibe is a space where women not only connect, but create meaningful memories and relationships.
              </p>
              <p>
                Her vision is to expand this community across the country by empowering women to step into leadership, creating local spaces where others can gather, feel seen, and know they matter.
              </p>
              <p>
                This community is built on intention. Women are welcome here, and they must come willing. Willing to show up, to grow, to take ownership of their lives. This is not a space for gossip, blame, or staying stuck in a victim mindset. It is a space for support, empowerment, accountability, and real transformation.
              </p>
              <p className="text-magenta font-display italic text-2xl md:text-3xl pt-2">
                “You are welcome here. I love you.”
              </p>
            </div>
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
      <section className="relative py-24 px-6 bg-gradient-to-br from-magenta via-[#8A1249] to-[#3b0a24] text-white overflow-hidden">
        <Sunburst
          className="absolute -right-40 -top-40 w-[600px] h-[600px] opacity-15"
          strokeColor="rgba(253,224,139,0.8)"
        />
        <Blob tone="pink" size="xl" className="-bottom-40 -left-40" opacity={25} slow />
        <div className="max-w-6xl mx-auto relative z-10">
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
