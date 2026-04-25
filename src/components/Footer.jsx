import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail, MessageCircle, MapPin } from "lucide-react";

// ✏️ Fill in your actual details here
const EMAIL = "hello@webuplift.studio";
const WHATSAPP = "+91 XXXXXXXXXX";
const LINKEDIN_URL = "#";
const INSTAGRAM_URL = "#";

export default function Footer() {
  return (
    <footer className="relative border-t border-primary/30 bg-[oklch(0.1_0_0)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <Link to="/" className="text-xl font-bold tracking-tight">
            <span className="text-foreground">Web</span>
            <span className="text-gradient">Uplift</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            AI-powered websites & automation built to grow your business.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={LINKEDIN_URL} aria-label="LinkedIn" className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={INSTAGRAM_URL} aria-label="Instagram" className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="label-eyebrow mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="label-eyebrow mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> {EMAIL}</li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-primary" /> {WHATSAPP}</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> India · Serving globally</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© 2025 WebUplift. All rights reserved.</p>
          <p>Built with AI</p>
        </div>
      </div>
    </footer>
  );
}
