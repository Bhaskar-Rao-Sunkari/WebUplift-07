import { Code2, Zap, Target } from "lucide-react";

const services = [
  { icon: Code2, title: "Website Development", desc: "Custom, fast-loading websites designed to turn visitors into customers.", tag: "Custom · Responsive · SEO-Ready" },
  { icon: Zap, title: "AI & Automation", desc: "Chatbots, workflow automation, and lightweight AI systems that save your team time.", tag: "Chatbots · Workflows · Integration" },
  { icon: Target, title: "AI Marketing", desc: "Lead generation and campaign systems built around your actual customers.", tag: "Leads · Campaigns · Growth" },
];

export default function ServicesPreview() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="label-eyebrow">What We Do</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Three services, <span className="text-gradient">done properly</span>
          </h2>
        </div>

        <div className="no-scrollbar mt-12 md:mt-16 -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-3 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {services.map(({ icon: Icon, title, desc, tag }) => (
            <article key={title} className="glass glass-hover relative w-[85%] shrink-0 snap-center overflow-hidden rounded-2xl p-7 md:w-auto md:shrink">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
              <p className="mt-6 text-xs font-medium uppercase tracking-wider text-primary/80">{tag}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
