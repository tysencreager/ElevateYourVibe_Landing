export default function AlertBanner() {
  return (
    <div className="bg-magenta text-sun py-3 px-4 text-center text-xs md:text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-3">
      <span className="flex h-3 w-3 relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sun opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sun"></span>
      </span>
      <span>Summer Retreat in Southern Utah! Limited spots. Member price extremely discounted.</span>
    </div>
  );
}
