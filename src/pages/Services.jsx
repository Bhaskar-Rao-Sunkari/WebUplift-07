import SEO from "../components/SEO.jsx";
import CTASection from "../components/CTASection.jsx";
import { Code2, Zap, Target, Sparkles, Check } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP = "918602475603";

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
    waMessage: "Hi! I'm interested in Website Development services from WebUplift.",
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
    waMessage: "Hi! I'm interested in AI & Automation services from WebUplift.",
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
    waMessage: "Hi! I'm interested in AI Marketing services from WebUplift.",
  },
];

const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "WebUplift Services",
  "url": "https://builderhouse.co.in/services",
  "itemListElement": services.map((s, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": s.title,
    "description": s.description,
  })),
};

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services — WebUplift"
        description="Web development, AI automation, and AI marketing services from WebUplift. Custom websites, chatbots, workflow automation, and lead generation."
        canonical="/services"
        structuredData={servicesStructuredData}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero py-20 md:py-24">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <span className="label-eyebrow">What We Offer</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground">
            Three core services, one mission: help your business grow faster online with modern, AI-powered systems.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 md:py-24" aria-label="Services List">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, description, bullets, waMessage }) => (
            <article key={title} className="glass glass-hover rounded-2xl p-6 sm:p-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary" aria-hidden="true">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-xl sm:text-2xl font-semibold">{title}</h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">{description}</p>
              <ul className="mt-6 space-y-3" aria-label={`${title} features`}>
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-foreground/90">{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/40 px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                Get Started →
              </a>
            </article>
          ))}

          {/* Coming Soon card */}
          <article className="glass relative rounded-2xl border-dashed p-6 sm:p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary" aria-hidden="true">
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Coming Soon
            </div>
            <h2 className="mt-3 text-xl sm:text-2xl font-semibold">More Coming Soon</h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              We're always expanding. New services are in development to help your business scale even further.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/40 px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary/10"
            >
              Get Notified
            </Link>
          </article>
        </div>
      </section>

      <CTASection />
    </>
  );
}
