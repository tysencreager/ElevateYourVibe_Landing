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
  { icon: <Map />, text: 'The Energize Your Vibe Method + Roadmap', bg: 'bg-gradient-to-br from-orange to-pink text-white' },
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
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

        {/* Photo feature row: the room, the call */}
        <div className="grid md:grid-cols-5 gap-5 mb-8">
          <div className="bento-card relative overflow-hidden md:col-span-3 min-h-[280px] border-none group">
            <img
              src="/assets/women-table.png"
              alt="Women gathered around a table in a creative workspace"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-magenta/85 via-magenta/30 to-transparent" />
            <div className="relative z-10 p-8 md:p-10 flex flex-col justify-end h-full min-h-[280px] text-white">
              <Users className="text-sun mb-4" size={32} />
              <h3 className="font-display text-3xl md:text-4xl mb-3 drop-shadow-md">
                A room full of women rooting for you.
              </h3>
              <p className="text-white/95 font-medium text-base md:text-lg max-w-md drop-shadow">
                Connection, creativity, and wellness — shared openly, without comparison.
              </p>
            </div>
          </div>

          <div className="bento-card relative overflow-hidden md:col-span-2 min-h-[280px] border-none group">
            <img
              src="/assets/sisterhood-zoom.png"
              alt="Woman on a video call with the community"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink/85 via-pink/30 to-transparent" />
            <div className="relative z-10 p-8 flex flex-col justify-end h-full min-h-[280px] text-white">
              <Video className="text-sun mb-4" size={28} />
              <h3 className="font-display text-2xl md:text-3xl mb-2 drop-shadow-md">
                Live, together.
              </h3>
              <p className="text-white/95 font-medium drop-shadow">
                Monthly calls + daily lives, wherever you are in the world.
              </p>
            </div>
          </div>
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
