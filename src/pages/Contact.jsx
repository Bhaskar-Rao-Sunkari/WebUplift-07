import SEO from "../components/SEO.jsx";
import { Mail, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

const EMAIL = "builderhouse.work@gmail.com";
const WHATSAPP_DISPLAY = "+91 86024 75603";
const WHATSAPP = "918602475603";
const FORMSPREE_ID = "YOUR_FORMSPREE_ID";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) { setSubmitted(true); form.reset(); }
    } catch {
      setSubmitted(true);
      form.reset();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact WebUplift — Let's Build Together"
        description="Tell us about your project. We respond within 24 hours. Email, WhatsApp, or use the form to start your website or AI automation project."
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero py-20 md:py-24">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <span className="label-eyebrow">Get In Touch</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Let's <span className="text-gradient">Talk</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-muted-foreground">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr]">

          {/* Left: direct contact */}
          <div>
            <h2 className="text-xl font-semibold sm:text-2xl">Reach us directly</h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground">Prefer email or WhatsApp? We're available across channels.</p>
            <ul className="mt-6 sm:mt-8 space-y-4">
              <li>
                <a href={`mailto:${EMAIL}`} className="glass flex items-center gap-4 rounded-xl p-4 sm:p-5 transition-colors hover:border-primary/40">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                    <div className="truncate text-sm font-medium">{EMAIL}</div>
                  </div>
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="glass flex items-center gap-4 rounded-xl p-4 sm:p-5 transition-colors hover:border-primary/40">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                    <div className="text-sm font-medium">{WHATSAPP_DISPLAY}</div>
                  </div>
                </a>
              </li>
              <li className="glass flex items-center gap-4 rounded-xl p-4 sm:p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Based in</div>
                  <div className="text-sm font-medium">India · Serving globally</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: form */}
          <div className="glass rounded-2xl p-6 sm:p-8 glow-sm">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-3xl">✓</div>
                <h3 className="mt-6 text-2xl font-semibold text-gradient">Thanks!</h3>
                <p className="mt-2 text-muted-foreground">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5">
                <Field label="Full Name" name="name" required>
                  <input name="name" required type="text" className="form-input" placeholder="Your name" />
                </Field>
                <Field label="Email Address" name="email" required>
                  <input name="email" required type="email" className="form-input" placeholder="you@company.com" />
                </Field>
                <Field label="Service Interested In" name="service">
                  <select name="service" className="form-input" defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option>Website Development</option>
                    <option>AI Automation</option>
                    <option>AI Marketing</option>
                    <option>Not Sure Yet</option>
                  </select>
                </Field>
                <Field label="Budget Range" name="budget">
                  <select name="budget" className="form-input" defaultValue="">
                    <option value="" disabled>Select a budget</option>
                    <option>Under ₹15,000</option>
                    <option>₹15,000–₹50,000</option>
                    <option>₹50,000+</option>
                    <option>Let's Discuss</option>
                  </select>
                </Field>
                <Field label="Message" name="message" required>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="form-input resize-none"
                    placeholder="Tell us about your project..."
                  />
                </Field>
                <button
                  type="submit"
                  disabled={submitting}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:glow-sm hover:brightness-110 disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send Message"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, required, children }) {
  return (
    <label htmlFor={name} className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}
