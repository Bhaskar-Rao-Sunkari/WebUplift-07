import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP = "918602475603";

export default function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-hero py-14 sm:py-16 md:min-h-[calc(100vh-5rem)] md:py-20">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            Now booking new projects for July
          </div>

          <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.2rem]">
            Premium websites, <span className="text-gradient">built like it matters</span>
          </h1>

          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg md:text-xl">
            Builder House designs and builds handcrafted websites for businesses that want to look as good as they actually are — fixed pricing, clear timelines, no templates.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 sm:px-7 sm:py-3.5"
            >
              Get a proposal on WhatsApp <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-primary/10 sm:px-7 sm:py-3.5"
            >
              See our work
            </Link>
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            Fixed-price projects<span className="mx-2 text-primary">•</span>Most sites live within 2 weeks<span className="mx-2 text-primary">•</span>Based in India
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
        <div className="glass overflow-hidden rounded-2xl">
          <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <div className="ml-3 flex-1 truncate rounded-md bg-muted px-3 py-1 text-xs text-muted-foreground">
              builderhouse.co.in
            </div>
          </div>
          <div className="space-y-3 p-5">
            <div className="h-3 w-2/3 rounded bg-gradient-to-r from-primary to-primary-glow" />
            <div className="h-2 w-full rounded bg-muted" />
            <div className="h-2 w-5/6 rounded bg-muted" />
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="h-16 rounded-lg bg-primary/10 border border-primary/20" />
              <div className="h-16 rounded-lg bg-muted" />
              <div className="h-16 rounded-lg bg-muted" />
            </div>
            <div className="h-8 w-32 rounded-full bg-primary" />
          </div>
        </div>
      </div>

      <div className="glass absolute -left-4 top-8 rounded-xl p-4 animate-float" style={{ animationDelay: "1s" }}>
        <div className="text-xs text-muted-foreground">Built for</div>
        <div className="mt-1 text-lg font-bold text-gradient">Conversions</div>
      </div>

      <div className="glass absolute bottom-6 right-12 rounded-xl px-4 py-3 animate-float" style={{ animationDelay: "2s" }}>
        <div className="flex items-center gap-2 text-xs">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-foreground/80">Mobile-first · Fast-loading</span>
        </div>
      </div>
    </div>
  );
}
