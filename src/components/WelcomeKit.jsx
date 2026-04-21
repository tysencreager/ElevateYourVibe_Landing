import { Gift, Heart, Mail, Sparkle } from 'lucide-react';

const perks = [
  { icon: Gift, label: 'A hand-picked gift' },
  { icon: Heart, label: 'Chosen with you in mind' },
  { icon: Mail, label: 'Shipped to your door' },
  { icon: Sparkle, label: 'A tangible welcome' },
];

export default function WelcomeKit() {
  return (
    <section className="relative z-10 py-24 md:py-28 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-sun/40 via-orange/20 to-pink/30 blur-2xl" aria-hidden="true" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/60 aspect-[4/3]">
              <img
                src="/assets/self-care-kit.png"
                alt="A personalized self-care welcome kit"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 md:-bottom-6 md:-right-6 bg-white rounded-2xl shadow-xl px-5 py-3 border border-gold/30">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-pink mb-0.5">Welcome Kit</p>
              <p className="font-display text-xl text-magenta">Included with every membership</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-orange mb-4">
              A personal touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-gray-900 mb-6">
              The welcome kit <i className="text-gradient">designed for you.</i>
            </h2>
            <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8">
              When you join, we don’t just send a confirmation email. A personalized gift makes its way to your door — a small, tangible reminder that this community knows you, roots for you, and truly cares.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3 mb-2">
              {perks.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 bg-bg border border-gold/20 rounded-2xl px-4 py-3"
                >
                  <span className="bg-gradient-to-br from-pink to-orange text-white p-2 rounded-xl">
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <span className="text-gray-800 font-medium">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
