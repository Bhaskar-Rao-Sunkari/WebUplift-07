import SEO from "../components/SEO.jsx";
import CTASection from "../components/CTASection.jsx";
import { Rocket, Sparkles, Eye, LifeBuoy } from "lucide-react";

// ✏️ Replace with your actual team member names
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

export default function About() {
  return (
    <>
      <SEO
        title="About Us — WebUplift"
        description="WebUplift is a small, ambitious team building premium websites and AI automation for businesses that want to grow without the big-agency price tag."
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero py-24">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="label-eyebrow">About WebUplift</span>
          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
            We're a Small Team with <span className="text-gradient">Big Ambitions</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            WebUplift was built to give small and medium businesses access to the same digital firepower that big brands use — without the big agency price tag.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="glass rounded-2xl border-l-4 border-l-primary p-10 glow-sm">
            <p className="text-2xl font-medium italic leading-snug text-foreground/95 md:text-3xl">
              "Our mission is to make great websites and smart automation accessible to every business."
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="label-eyebrow">The Team</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Built by <span className="text-gradient">Founders</span>, for Founders
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {team.map((m) => (
              <div key={m.name} className="glass glass-hover rounded-2xl p-8 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-xl font-bold text-primary-foreground glow-sm">
                  {m.initials}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{m.name}</h3>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="label-eyebrow">Why Us</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Built Different. <span className="text-gradient">On Purpose.</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {why.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass glass-hover flex gap-5 rounded-2xl p-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
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
