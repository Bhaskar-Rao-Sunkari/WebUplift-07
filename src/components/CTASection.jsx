import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

// ✏️ Replace with your WhatsApp number (digits only, with country code)
const WHATSAPP = "919999999999";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-cta-glow" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Ready to Build Something <span className="text-gradient">Great?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          Let's talk about your project. No pressure, just a conversation.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground glow-sm transition-all hover:glow-lg hover:brightness-110"
          >
            Book a Free Call <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <MessageCircle className="h-4 w-4" /> Or reach us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
