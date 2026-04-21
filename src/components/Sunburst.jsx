export default function Sunburst({ className = '', strokeColor = 'rgba(255,255,255,0.35)', rays = 24 }) {
  const lines = Array.from({ length: rays }, (_, i) => (i * 360) / rays);
  return (
    <svg
      viewBox="-100 -100 200 200"
      className={`rotate-slow ${className}`}
      aria-hidden="true"
    >
      <circle r="30" fill="none" stroke={strokeColor} strokeWidth="0.5" />
      <circle r="70" fill="none" stroke={strokeColor} strokeWidth="0.3" />
      <circle r="95" fill="none" stroke={strokeColor} strokeWidth="0.25" strokeDasharray="1.2 3" />
      {lines.map((angle, i) => (
        <line
          key={i}
          x1="0"
          y1="35"
          x2="0"
          y2="90"
          stroke={strokeColor}
          strokeWidth={i % 2 === 0 ? 0.8 : 0.3}
          strokeLinecap="round"
          transform={`rotate(${angle})`}
        />
      ))}
    </svg>
  );
}
