import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative z-10 pt-40 pb-24 md:pt-48 md:pb-40 px-6 overflow-hidden bg-sun">
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/eyv-header-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/assets/jenn-headshot-2.png"
        />
        {/* Soft colorwash so the video reads */}
        <div className="absolute inset-0 hero-video-overlay" />
        {/* Dark-to-light radial vignette centered on the text for contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(60,10,30,0.35)_0%,rgba(60,10,30,0.15)_45%,transparent_75%)]" />
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-orange rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-pink rounded-full mix-blend-multiply filter blur-[100px] opacity-25"></div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md text-white font-bold text-[11px] uppercase tracking-[0.3em] mb-8 border border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
          <Sparkles size={14} strokeWidth={1.5} className="text-sun" />
          A Global Sisterhood Rising Together
        </div>

        <h1
          className="text-5xl md:text-[6.5rem] leading-[1.05] mb-8 max-w-5xl font-display font-medium text-white"
          style={{
            textShadow:
              '0 2px 8px rgba(0,0,0,0.45), 0 4px 24px rgba(60,10,30,0.55), 0 1px 2px rgba(0,0,0,0.35)',
          }}
        >
          Empower your energy.
          <span className="block mt-3">
            <span className="relative inline-block italic align-baseline px-4 md:px-6 py-1 md:py-2 rounded-2xl bg-gradient-to-br from-pink via-magenta to-[#6a0e33] shadow-[0_14px_40px_rgba(183,21,86,0.55)] text-white">
              Transform your life.
            </span>
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl leading-relaxed font-medium bg-black/25 backdrop-blur-md rounded-3xl px-6 py-4 border border-white/20 shadow-lg">
          Energize Your Vibe is a transformational global sisterhood rooted in self-love, confidence, and authentic connection.
          <span className="text-sun font-semibold"> We lead with love. We live with intention. We have fun.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <a
            href="#pricing"
            className="w-full sm:w-auto bg-magenta text-white py-5 px-10 rounded-full font-bold uppercase tracking-widest text-lg shadow-[0_10px_30px_rgba(183,21,86,0.5)] hover:shadow-[0_15px_40px_rgba(183,21,86,0.7)] transition-all hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            Reserve Your Spot <ArrowRight size={20} />
          </a>
          <Link
            to="/about"
            className="w-full sm:w-auto bg-white/90 backdrop-blur-sm text-magenta py-5 px-10 rounded-full font-bold uppercase tracking-widest text-lg border-2 border-white/60 hover:bg-white transition-all flex items-center justify-center gap-3 shadow-lg"
          >
            Meet Jenn
          </Link>
        </div>

        <p className="inline-flex items-center gap-3 text-sm md:text-base font-bold text-magenta mt-8 bg-sun/95 backdrop-blur-md px-6 py-3 rounded-full border border-magenta/15 shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
          <span className="inline-block h-2 w-2 rounded-full bg-pink animate-pulse" />
          <span className="uppercase tracking-[0.2em] text-xs">Launch</span>
          <span className="hidden sm:inline text-magenta/40">|</span>
          <span>First 50 members lock in $88/mo for a full year.</span>
        </p>
      </div>
    </section>
  );
}
