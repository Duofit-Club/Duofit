import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import duofitLogo from "../../assets/duofit-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/programs", label: "Programs" },
  { to: "/community", label: "Community & Progress" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Connect" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/90 border-b border-border/60">
      <div className="container-editorial flex h-16 md:h-20 items-center justify-between">

        {/* Logo */}
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2 md:gap-3">
          <img src={duofitLogo} alt="Duofit" className="h-9 md:h-12 w-auto" />
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-sm md:text-base tracking-widest text-foreground uppercase">DUOFIT</span>
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
              <span>Fitness</span>
              <span className="text-primary text-[8px]">•</span>
              <span>Nutrition</span>
              <span className="text-primary text-[8px]">•</span>
              <span>Healthy Habits</span>
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <Link key={l.to} to={l.to}
              className="text-xs font-medium uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors py-1"
              activeProps={{ className: "text-xs font-medium uppercase tracking-widest text-foreground border-b-2 border-primary" }}
              activeOptions={{ exact: l.to === "/" }}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
<Link
            to="/contact"
            className="group relative hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-full overflow-hidden transition-all duration-300 hover:brightness-110 hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] active:scale-95"
            style={{ backgroundColor: "var(--color-primary)", color: "#ffffff" }}
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />
            Start Journey
          </Link>
          {/* Hamburger */}
          <button
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-sm hover:bg-muted transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setOpen(v => !v)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-editorial py-4 flex flex-col">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
                className="text-sm font-medium uppercase tracking-widest text-foreground/70 hover:text-foreground py-4 border-b border-border/50 last:border-0">
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)}
              className="mt-4 flex justify-center rounded-sm bg-foreground text-background px-5 py-4 text-sm font-medium uppercase tracking-widest min-h-[44px] items-center">
              Start Your Journey
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}