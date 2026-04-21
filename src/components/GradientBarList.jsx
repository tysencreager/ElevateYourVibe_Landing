import React from 'react';

/**
 * A stacked list of rows with soft horizontal gradient backgrounds
 * and subtle feathered edges — inspired by editorial "highlighter" bars.
 *
 * Each item: { icon?: ReactNode, text: string, accent?: 'sun'|'gold'|'orange'|'pink'|'magenta' }
 */

const gradients = {
  sun:     'linear-gradient(90deg, rgba(253,224,139,0.95) 0%, rgba(248,162,50,0.9) 55%, rgba(242,107,56,0.85) 100%)',
  gold:    'linear-gradient(90deg, rgba(253,224,139,0.9) 0%, rgba(248,162,50,0.95) 55%, rgba(226,46,100,0.85) 100%)',
  orange:  'linear-gradient(90deg, rgba(248,162,50,0.88) 0%, rgba(242,107,56,0.95) 55%, rgba(226,46,100,0.9) 100%)',
  pink:    'linear-gradient(90deg, rgba(242,107,56,0.9) 0%, rgba(226,46,100,0.95) 55%, rgba(183,21,86,0.9) 100%)',
  magenta: 'linear-gradient(90deg, rgba(226,46,100,0.92) 0%, rgba(183,21,86,0.95) 55%, rgba(106,14,51,0.9) 100%)',
};

const defaultCycle = ['sun', 'gold', 'orange', 'pink', 'magenta'];

export default function GradientBarList({ items, className = '', size = 'md' }) {
  const sizes = {
    sm: 'py-3 px-5 md:py-4 md:px-6 text-base md:text-lg',
    md: 'py-4 px-6 md:py-5 md:px-8 text-lg md:text-xl',
    lg: 'py-5 px-7 md:py-6 md:px-10 text-xl md:text-2xl',
  };

  return (
    <ul className={`flex flex-col gap-3 md:gap-4 ${className}`}>
      {items.map((item, i) => {
        const accent = item.accent || defaultCycle[i % defaultCycle.length];
        return (
          <li
            key={i}
            className={`relative rounded-2xl md:rounded-3xl text-white font-display ${sizes[size]}
              shadow-[0_10px_30px_-12px_rgba(226,46,100,0.35)]
              transition-transform duration-300 hover:-translate-y-0.5`}
            style={{
              background: gradients[accent],
              // feather the left/right edges a touch
              WebkitMaskImage:
                'linear-gradient(90deg, transparent 0, black 2%, black 98%, transparent 100%)',
              maskImage:
                'linear-gradient(90deg, transparent 0, black 2%, black 98%, transparent 100%)',
            }}
          >
            <div className="flex items-center gap-4 md:gap-5">
              {item.icon ? (
                <span className="shrink-0 text-white/90">
                  {React.cloneElement(item.icon, {
                    size: 22,
                    strokeWidth: 1.5,
                  })}
                </span>
              ) : (
                <span className="shrink-0 text-white/90">•</span>
              )}
              <span className="leading-snug">{item.text}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
