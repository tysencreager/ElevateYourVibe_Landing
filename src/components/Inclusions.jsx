import React from 'react';
import {
  Video,
  Heart,
  Users,
  MessageCircleHeart,
  Map,
  Headphones,
  Sparkles,
  Gift,
  ArrowRight,
} from 'lucide-react';
import Blob from './Blob.jsx';

const items = [
  { icon: <Video />, text: "Daily 'Lives for Vibes'", bg: 'bg-gradient-to-br from-pink to-magenta text-white' },
  { icon: <Heart />, text: 'Cheerleader in your pocket', bg: 'bg-gradient-to-br from-sun to-gold/70 text-magenta' },
  { icon: <Users />, text: 'Monthly Group Call', bg: 'bg-gradient-to-br from-magenta to-[#6a0e33] text-white' },
  { icon: <MessageCircleHeart />, text: 'Private Facebook Community', bg: 'bg-gradient-to-br from-gold to-orange text-white' },
  { icon: <Map />, text: 'The EYV Method + Roadmap', bg: 'bg-gradient-to-br from-orange to-pink text-white' },
  { icon: <Headphones />, text: 'Podcasts, Meditations & Spotify Playlist', bg: 'bg-gradient-to-br from-pink via-orange to-gold text-white' },
  { icon: <Sparkles />, text: 'Affirmations & Vibe Checks', bg: 'bg-gradient-to-br from-sun to-orange/60 text-magenta' },
  {
    icon: <Gift />,
    text: 'Personalized Welcome Gift in the Mail',
    bg: 'bg-animated-warm text-white',
  },
];

export default function Inclusions() {
  return (
    <section className="relative z-10 py-28 px-6 bg-soft-ember overflow-hidden">
      <Blob tone="pink" size="lg" className="-top-20 right-10" opacity={12} slow />
      <Blob tone="gold" size="md" className="bottom-40 -left-20" opacity={18} />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display mb-6 text-gray-900">
            Everything inside your membership.
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Tools for developing yourself, a community that roots for you, and little touches that remind you you’re not alone.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
          {items.map((item, i) => (
            <div
              key={i}
              className={`bento-card p-6 flex flex-col items-center justify-center text-center gap-4 aspect-square ${item.bg} border-none`}
            >
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm transition-transform hover:scale-110 hover:rotate-6 duration-300">
                {React.cloneElement(item.icon, { size: 32 })}
              </div>
              <span className="font-bold text-base md:text-lg leading-tight">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bento-card glass border border-gold/30 p-8 flex gap-6 items-center">
            <img
              src="/assets/self-care-kit.png"
              alt="Self care kit"
              className="w-28 h-28 rounded-2xl object-cover shadow-md shrink-0"
            />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-orange mb-2">
                A Personal Touch
              </p>
              <h3 className="font-display text-2xl text-gray-900 mb-1">Tools you can hold.</h3>
              <p className="text-gray-600 font-medium">
                Every member receives a personalized gift in the mail — because this community is truly personal.
              </p>
            </div>
          </div>

          <div className="bento-card glass border border-pink/20 p-8 flex gap-6 items-center">
            <div className="w-28 h-28 rounded-2xl bg-brand-gradient flex items-center justify-center shrink-0 shadow-md">
              <Sparkles size={44} className="text-white" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-pink mb-2">
                Tailored To You
              </p>
              <h3 className="font-display text-2xl text-gray-900 mb-1">
                Opt-in inspiration, made for you.
              </h3>
              <p className="text-gray-600 font-medium">
                Choose the motivational communications that actually speak to where you are.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <a
            href="#pricing"
            className="bg-brand-gradient text-white py-5 px-12 rounded-full font-bold uppercase tracking-widest text-lg shadow-[0_10px_30px_rgba(242,107,56,0.4)] hover:shadow-[0_15px_40px_rgba(242,107,56,0.6)] transition-all hover:-translate-y-1 flex items-center gap-3"
          >
            Secure Your Membership <ArrowRight size={20} />
          </a>
          <p className="mt-6 text-pink font-bold text-base bg-pink/10 px-6 py-2 rounded-full">
            🔥 Launch pricing available now — first 50 members only.
          </p>
        </div>
      </div>
    </section>
  );
}
