import { MessageCircle, Mail } from "lucide-react";

const WHATSAPP = "918602475603";
const EMAIL = "builderhouse.work@gmail.com";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-cta-glow" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Ready to Build Something <span className="text-gradient">Great?</span>
        </h2>
        <p className="mx-auto mt-4 sm:mt-5 max-w-xl text-base sm:text-lg text-muted-foreground">
          Let's talk about your project. No pressure, just a conversation.
        </p>
        <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-4">
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[var(--shadow-glow)] sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          >
            <MessageCircle className="h-5 w-5 shrink-0" />
            WhatsApp: +91 86024 75603
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary break-all text-center"
          >
            <Mail className="h-4 w-4 shrink-0" />
            {EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
