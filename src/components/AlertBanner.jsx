export default function AlertBanner() {
  return (
    <div className="relative z-[60] bg-magenta text-sun py-2.5 md:py-3 px-4 text-center text-[10px] md:text-sm font-bold uppercase md:tracking-widest flex items-center justify-center gap-2 md:gap-3 shadow-md whitespace-nowrap">
      <span className="flex h-2.5 w-2.5 md:h-3 md:w-3 relative shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sun opacity-75"></span>
        <span className="relative inline-flex rounded-full h-full w-full bg-sun"></span>
      </span>
      <span className="md:hidden">Fall Retreat 2026 · Southern Utah</span>
      <span className="hidden md:inline">Fall Retreat in Southern Utah! Option to purchase coming soon. Member price extremely discounted.</span>
    </div>
  );
}
