const sizes = {
  sm: 'w-48 h-48',
  md: 'w-72 h-72',
  lg: 'w-[28rem] h-[28rem]',
  xl: 'w-[40rem] h-[40rem]',
};

const tones = {
  pink: 'bg-pink',
  magenta: 'bg-magenta',
  orange: 'bg-orange',
  gold: 'bg-gold',
  sun: 'bg-sun',
};

export default function Blob({
  tone = 'pink',
  size = 'lg',
  opacity = 25,
  blur = 100,
  slow = false,
  className = '',
  style = {},
}) {
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-full pointer-events-none mix-blend-multiply ${sizes[size]} ${tones[tone]} ${slow ? 'blob-drift-slow' : 'blob-drift'} ${className}`}
      style={{
        filter: `blur(${blur}px)`,
        opacity: opacity / 100,
        ...style,
      }}
    />
  );
}
