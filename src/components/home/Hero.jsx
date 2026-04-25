import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-hero">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-primary/15 blur-[140px]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" /> AI-Powered Agency
          </div>

          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            We Build Websites That <span className="text-gradient">Actually Grow</span> Your Business
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            Custom websites, AI automation, and digital systems — built fast, built to convert.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:glow-sm hover:brightness-110"
            >
              Get Started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-primary/10"
            >
              See Our Work
            </Link>
          </div>

          <p className="mt-10 text-xs text-muted-foreground">
            <span className="text-foreground/80">Trusted by 10+ businesses</span>
            <span className="mx-2 text-primary">•</span>Fast delivery
            <span className="mx-2 text-primary">•</span>Results-focused
          </p>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative hidden h-[460px] lg:block">
      <div className="absolute right-0 top-1/2 w-full max-w-[440px] -translate-y-1/2 animate-float">
        <div className="glass overflow-hidden rounded-2xl glow-sm">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <div className="ml-3 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-xs text-muted-foreground">
              webuplift.studio
            </div>
          </div>
          <div className="space-y-3 p-5">
            <div className="h-3 w-2/3 rounded bg-gradient-to-r from-primary to-primary-glow" />
            <div className="h-2 w-full rounded bg-white/10" />
            <div className="h-2 w-5/6 rounded bg-white/10" />
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="h-16 rounded-lg bg-primary/15 border border-primary/20" />
              <div className="h-16 rounded-lg bg-white/5" />
              <div className="h-16 rounded-lg bg-white/5" />
            </div>
            <div className="h-8 w-32 rounded-full bg-primary" />
          </div>
        </div>
      </div>

      <div className="glass absolute -left-4 top-8 rounded-xl p-4 glow-sm animate-float" style={{ animationDelay: "1s" }}>
        <div className="text-xs text-muted-foreground">Conversions</div>
        <div className="mt-1 text-2xl font-bold text-gradient">+312%</div>
      </div>

      <div className="glass absolute bottom-6 right-12 rounded-xl px-4 py-3 animate-float" style={{ animationDelay: "2s" }}>
        <div className="flex items-center gap-2 text-xs">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-foreground/80">Live · Performance 98</span>
        </div>
      </div>
    </div>
  );
}
