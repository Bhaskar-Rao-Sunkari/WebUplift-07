import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail, MessageCircle, MapPin } from "lucide-react";

const EMAIL = "builderhouse.work@gmail.com";
const WHATSAPP_DISPLAY = "+91 86024 75603";
const WHATSAPP = "918602475603";
const LINKEDIN_URL = "#";
const INSTAGRAM_URL = "#";

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 py-12 md:py-16 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <Link to="/" className="text-xl font-bold tracking-tight">
            <span className="text-foreground">Builder</span>
            <span className="text-gradient">House</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Premium websites for businesses that want to look as good as they actually are.
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

        <div className="sm:col-span-2 md:col-span-1">
          <h4 className="label-eyebrow mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-start gap-2 transition-colors hover:text-primary break-all">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary" /> {EMAIL}
              </a>
            </li>
            <li>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-primary">
                <MessageCircle className="h-4 w-4 shrink-0 text-primary" /> {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-primary" /> India · Serving globally
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 sm:px-6 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Builder House. All rights reserved.</p>
          <p>Designed &amp; built in India</p>
        </div>
      </div>
    </footer>
  );
}
