export default function ShimmerDivider({ className = '' }) {
  return (
    <div className={`relative flex items-center justify-center py-8 ${className}`} aria-hidden="true">
      <div className="absolute inset-x-0 shimmer-divider" />
      <div className="relative bg-bg px-5">
        <svg width="22" height="22" viewBox="0 0 22 22" className="text-gold">
          <path
            d="M11 0 L12.5 9.5 L22 11 L12.5 12.5 L11 22 L9.5 12.5 L0 11 L9.5 9.5 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
