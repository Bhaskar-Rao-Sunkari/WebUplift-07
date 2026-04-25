import { Code2, Zap, Target } from "lucide-react";

const services = [
  { icon: Code2, title: "Website Development", desc: "Fast, modern websites built to convert visitors into paying customers.", tag: "Custom · Responsive · SEO-Ready" },
  { icon: Zap, title: "AI & Automation", desc: "Chatbots, workflow automation, and AI systems that save time and scale your business.", tag: "Chatbots · Workflows · Integration" },
  { icon: Target, title: "AI Marketing", desc: "Data-driven campaigns and lead generation systems powered by AI.", tag: "Leads · Campaigns · Growth" },
];

export default function ServicesPreview() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="label-eyebrow">What We Do</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Everything You Need to <span className="text-gradient">Dominate Online</span>
          </h2>
        </div>

        <div className="no-scrollbar mt-16 -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
          {services.map(({ icon: Icon, title, desc, tag }) => (
            <article key={title} className="glass glass-hover relative w-[85%] shrink-0 snap-center overflow-hidden rounded-2xl p-7 md:w-auto md:shrink">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
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
