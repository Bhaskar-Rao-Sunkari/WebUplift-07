const steps = [
  { n: "01", title: "Discovery", desc: "We understand your business, goals, and target audience." },
  { n: "02", title: "Build", desc: "We design and develop your website using modern AI-powered tools." },
  { n: "03", title: "Review", desc: "You review, we refine. No surprises, full transparency." },
  { n: "04", title: "Launch", desc: "We deploy, set up SEO, and hand everything over to you." },
];

export default function Process() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="label-eyebrow">How It Works</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            From Brief to <span className="text-gradient">Live in Days</span>
          </h2>
        </div>

        <div className="no-scrollbar relative mt-20 -mx-6 flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0 md:pb-0">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
          {steps.map((s) => (
            <div key={s.n} className="relative w-[70%] shrink-0 snap-center text-center md:w-auto md:shrink">
              <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-background text-sm font-bold text-primary glow-sm">
                {s.n}
              </div>
              <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
