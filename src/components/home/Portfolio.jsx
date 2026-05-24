
const projects = [
  {
    img: "/portfolio/lessons-coaching.jpg",
    name: "Lessons Coaching Institute",
    category: "Education & Coaching",
    tags: ["Website", "Mobile-First", "Lead Gen"],
    desc: "Raipur's premier coaching institute — bold hero, course listings, and WhatsApp-integrated contact flow.",
  },
  {
    img: "/portfolio/pure-natures-chocolate.jpg",
    name: "Pure Natures Chocolate",
    category: "E-Commerce Store",
    tags: ["Shopify", "E-Commerce", "Branding"],
    desc: "A handcrafted chocolate brand with a warm, artisan look, product listings, and a seamless shop experience.",
  },
];

export default function Portfolio() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="label-eyebrow">Our Work</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Real Projects, <span className="text-gradient">Real Results</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-muted-foreground">
            A few of the websites we've built for businesses across India.
          </p>
        </div>

        <div className="mt-12 md:mt-16 space-y-6">
          {/* ArcLine — two images */}
          <article className="glass glass-hover group grid overflow-hidden rounded-2xl md:grid-cols-[1.2fr_1fr]">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-10" />
              <div className="grid grid-cols-2 h-52 sm:h-64 md:h-72">
                <img src="/portfolio/arcline-agency.jpg" alt="ArcLine Agency" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <img src="/portfolio/arcline-agency-2.jpg" alt="ArcLine Agency page 2" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105 border-l border-white/10" loading="lazy" />
              </div>
              <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 rounded-full bg-background/70 backdrop-blur-sm px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400/80" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="ml-1 text-[10px] text-muted-foreground">arclineagency.com</span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Digital Agency Website</p>
              <h3 className="mt-2 text-xl font-bold sm:text-2xl">ArcLine Agency</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">A high-impact performance-first agency site with immersive dark aesthetics and animated visuals.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Design", "Development", "Dark UI"].map((t) => (
                  <span key={t} className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">{t}</span>
                ))}
              </div>
            </div>
          </article>

          {/* Other projects */}
          {projects.map((p, i) => (
            <article
              key={p.name}
              className="glass glass-hover group grid overflow-hidden rounded-2xl md:grid-cols-[1.2fr_1fr]"
              style={{ direction: i % 2 === 0 ? "rtl" : "ltr" }}
            >
              <div className="relative overflow-hidden" style={{ direction: "ltr" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-10" />
                <img src={p.img} alt={p.name} className="h-52 w-full object-cover object-top transition-transform duration-700 group-hover:scale-105 sm:h-64 md:h-72" loading="lazy" />
                <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 rounded-full bg-background/70 backdrop-blur-sm px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-400/80" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="ml-1 text-[10px] text-muted-foreground truncate max-w-[100px]">{p.name.toLowerCase().replace(/\s/g, "") + ".com"}</span>
                </div>
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8" style={{ direction: "ltr" }}>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">{p.category}</p>
                <h3 className="mt-2 text-xl font-bold sm:text-2xl">{p.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
