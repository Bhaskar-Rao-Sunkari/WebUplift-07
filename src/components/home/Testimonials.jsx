import { ShieldCheck, Clock, BadgeIndianRupee } from "lucide-react";

const points = [
  {
    icon: ShieldCheck,
    title: "Direct access to the people building your site",
    desc: "No account managers, no outsourcing. You work directly with the founders who design and build your project.",
  },
  {
    icon: Clock,
    title: "Fixed timelines, in writing",
    desc: "You'll know exactly when your site goes live before we start — and we'll tell you immediately if anything changes.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Early-client pricing",
    desc: "We're a growing studio, so current projects get priority attention and pricing that reflects that — not inflated 'agency' rates.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28" aria-label="Why work with Builder House">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="label-eyebrow">Why Builder House</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Built by founders, <span className="text-gradient">not a sales team</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            We're upfront that we're an early-stage studio. Here's what that actually means for you.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid gap-5 sm:grid-cols-3">
          {points.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass glass-hover rounded-2xl p-6 sm:p-7">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold sm:text-lg">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
