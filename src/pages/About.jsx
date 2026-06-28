import SEO from "../components/SEO.jsx";
import CTASection from "../components/CTASection.jsx";
import { Rocket, Sparkles, Eye, LifeBuoy } from "lucide-react";

const team = [
  { name: "Bhaskar Rao Sunkari", role: "Founder & Strategist", initials: "BR" },
  { name: "Divyansh Agrawal", role: "Technical Head", initials: "DA" },
  { name: "Jay Lakhotiya", role: "Outreach", initials: "JL" },
];

const why = [
  { icon: Rocket, title: "Fast Delivery", desc: "Most projects live within 2 weeks." },
  { icon: Sparkles, title: "AI-Powered", desc: "We use cutting-edge AI tools to build faster and smarter." },
  { icon: Eye, title: "Transparent", desc: "Fixed pricing, clear timelines, no surprises." },
  { icon: LifeBuoy, title: "Ongoing Support", desc: "We don't disappear after launch." },
];

const aboutStructuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Builder House",
  "url": "https://builderhouse.co.in/about",
  "description": "Builder House is a small, ambitious team building premium websites and AI automation for businesses that want to grow without the big-agency price tag."
};

export default function About() {
  return (
    <>
      <SEO
        title="About Us — Builder House"
        description="Builder House is a small, ambitious team building premium websites and AI automation for businesses that want to grow without the big-agency price tag."
        canonical="/about"
        structuredData={aboutStructuredData}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero py-20 md:py-24">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <span className="label-eyebrow">About Builder House</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            We're a Small Team with <span className="text-gradient">Big Ambitions</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground">
            Builder House was built to give small and medium businesses access to the same digital firepower that big brands use — without the big agency price tag.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24" aria-label="Our Mission">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="glass rounded-2xl border-l-4 border-l-primary p-6 sm:p-10 glow-sm">
            <p className="text-xl font-medium italic leading-snug text-foreground/95 sm:text-2xl md:text-3xl">
              "Our mission is to make great websites and smart automation accessible to every business."
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="pb-16 md:pb-24" aria-label="Our Team">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="label-eyebrow">The Team</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Built by <span className="text-gradient">Founders</span>, for Founders
            </h2>
          </div>
          <div className="mt-10 md:mt-14 grid gap-5 sm:grid-cols-3">
            {team.map((m) => (
              <div key={m.name} className="glass glass-hover rounded-2xl p-6 sm:p-8 text-center">
                <div
                  className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-lg sm:text-xl font-bold text-primary-foreground glow-sm"
                  aria-hidden="true"
                >
                  {m.initials}
                </div>
                <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold">{m.name}</h3>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="pb-16 md:pb-24" aria-label="Why Choose Builder House">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <span className="label-eyebrow">Why Us</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Built Different. <span className="text-gradient">On Purpose.</span>
            </h2>
          </div>
          <div className="mt-10 md:mt-14 grid gap-5 sm:grid-cols-2">
            {why.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass glass-hover flex gap-4 sm:gap-5 rounded-2xl p-5 sm:p-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary" aria-hidden="true">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
