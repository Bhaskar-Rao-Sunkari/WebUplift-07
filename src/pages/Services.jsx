import SEO from "../components/SEO.jsx";
import CTASection from "../components/CTASection.jsx";
import { Code2, Zap, Target, Sparkles, Check } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    description: "Conversion-focused websites engineered for speed and growth.",
    bullets: [
      "Custom business websites",
      "E-commerce stores",
      "Landing pages",
      "Mobile-first design",
      "SEO-optimised structure",
    ],
  },
  {
    icon: Zap,
    title: "AI & Automation",
    description: "Smart systems that handle the busywork so your team can focus on growth.",
    bullets: [
      "AI chatbots for customer support",
      "Workflow automation (Zapier / Make)",
      "CRM integration",
      "Lead capture systems",
    ],
  },
  {
    icon: Target,
    title: "AI Marketing",
    description: "Data-driven funnels and campaigns powered by AI.",
    bullets: [
      "AI-driven ad campaigns",
      "Lead generation funnels",
      "Email automation",
      "Analytics and reporting",
    ],
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services — WebUplift"
        description="Web development, AI automation, and AI marketing services from WebUplift. Custom websites, chatbots, workflow automation, and lead generation."
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero py-24">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="label-eyebrow">What We Offer</span>
          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Three core services, one mission: help your business grow faster online with modern, AI-powered systems.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, description, bullets }) => (
            <article key={title} className="glass glass-hover rounded-2xl p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-2xl font-semibold">{title}</h2>
              <p className="mt-2 text-muted-foreground">{description}</p>
              <ul className="mt-6 space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-foreground/90">{b}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/40 px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary/10">
                Learn More
              </button>
            </article>
          ))}

          {/* Coming Soon card */}
          <article className="glass relative rounded-2xl border-dashed p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Coming Soon
            </div>
            <h2 className="mt-3 text-2xl font-semibold">More Coming Soon</h2>
            <p className="mt-2 text-muted-foreground">
              We're always expanding. New services are in development to help your business scale even further.
            </p>
          </article>
        </div>
      </section>

      <CTASection />
    </>
  );
}
