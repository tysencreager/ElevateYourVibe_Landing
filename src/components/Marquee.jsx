import { Sparkles } from 'lucide-react';

const phrases = [
  'Energize your vibe',
  'Empower your energy',
  'Transform your life',
  'Rise together',
];

export default function Marquee() {
  const items = [...phrases, ...phrases];
  return (
    <div className="relative z-20 border-y-4 border-magenta bg-pink py-5 overflow-hidden shadow-xl">
      <div className="flex whitespace-nowrap animate-ticker gap-10 text-lg font-bold tracking-widest uppercase text-sun items-center">
        {items.map((p, i) => (
          <span key={i} className="flex items-center gap-10">
            <span>{p}</span>
            <Sparkles className="text-white" size={20} />
          </span>
        ))}
      </div>
    </div>
  );
}
