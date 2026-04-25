import { Star } from "lucide-react";

const testimonials = [
  { quote: "WebUplift transformed our online presence completely. Within 2 weeks of launch, enquiries doubled.", name: "Priya Sharma", role: "Owner · Sharma Boutique" },
  { quote: "Professional, fast, and they actually understood what we needed. Best investment for our business.", name: "Rahul Mehta", role: "Founder · FreshBite Foods" },
  { quote: "The website they built for us looks better than brands 10x our size. Incredible work.", name: "Ananya Patel", role: "Director · Patel Real Estate" },
];

export default function Testimonials() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="label-eyebrow">Client Results</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </div>

        <div className="no-scrollbar mt-16 -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
          {testimonials.map((t) => (
            <figure key={t.name} className="glass glass-hover w-[88%] shrink-0 snap-center rounded-2xl p-7 md:w-auto md:shrink">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mt-5 text-base leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
              <figcaption className="mt-6 border-t border-border/60 pt-4">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
