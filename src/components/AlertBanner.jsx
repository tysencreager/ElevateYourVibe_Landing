export default function AlertBanner() {
  return (
    <div className="relative z-[60] bg-magenta text-sun py-3 px-4 text-center text-xs md:text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-3 shadow-md">
      <span className="flex h-3 w-3 relative shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sun opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sun"></span>
      </span>
      <span>Fall Retreat in Southern Utah! Option to purchase coming soon. Member price extremely discounted.</span>
    </div>
  );
}
