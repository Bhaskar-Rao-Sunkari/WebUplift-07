import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border/60 bg-background/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        <Link to="/" className="group flex items-center gap-1 text-xl font-bold tracking-tight">
          <span className="text-foreground">Web</span>
          <span className="text-gradient">Uplift</span>
          <span className="ml-1 h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)] transition-transform group-hover:scale-125" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              className={({ isActive }) =>
                `text-sm transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:glow-sm hover:brightness-110"
          >
            Book a Call
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-background/95 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <Link to="/" onClick={() => setOpen(false)} className="text-xl font-bold">
            <span className="text-foreground">Web</span>
            <span className="text-gradient">Uplift</span>
          </Link>
          <button onClick={() => setOpen(false)} className="rounded-md p-2" aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-8 px-6 pt-20">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-2xl font-semibold text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </header>
  );
}
