import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import duofitLogo from "../../assets/duofit-logo.png";

// ── Exact colors sampled from the Duofit navbar screenshot ───────────────────
const C = {
  navBg:        "#EDE8DC",   // warm linen — the navbar background
  navBorder:    "#D6CFC0",   // subtle warm divider line
  text:         "#3D3B33",   // dark warm-brown — logo title + active link
  textMuted:    "#8A8472",   // grey-brown — inactive nav links + tagline
  dot:          "#5C6B3E",   // muted olive — the bullet dots
  ctaBg:        "#2C3B2D",   // dark forest green — CTA button
  ctaHover:     "#3A4E3B",   // slightly lighter on hover
  ctaText:      "#FFFFFF",
  logoBg:       "#FFFFFF",   // white circle behind logo icon
  mobileDivider:"#D6CFC0",
};

const links = [
  { to: "/",          label: "Home" },
  { to: "/programs",  label: "Programs" },
  { to: "/community", label: "Community & Progress" },
  { to: "/about",     label: "About" },
  { to: "/contact",   label: "Connect" },
] as const;

const navLinkBase: React.CSSProperties = {
  color: C.textMuted,
  fontSize: "11px",
  fontWeight: 500,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  textDecoration: "none",
  paddingBottom: "2px",
  transition: "color 0.15s",
};

const navLinkActive: React.CSSProperties = {
  ...navLinkBase,
  color: C.text,
  borderBottom: `2px solid ${C.ctaBg}`,
};

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        backgroundColor: C.navBg,
        borderBottom: `1px solid ${C.navBorder}`,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {/* ── Main bar ─────────────────────────────────────────────────────────── */}
      <div
        className="container-editorial"
        style={{
          display: "flex",
          height: "72px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}
        >
          <img src={duofitLogo} alt="Duofit" style={{ height: "44px", width: "auto" }} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
            <span style={{
              color: C.text,
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}>
              DUOFIT
            </span>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: C.textMuted,
              fontSize: "10px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginTop: "2px",
            }}>
              <span>Fitness</span>
              <span style={{ color: C.dot, fontSize: "7px" }}>•</span>
              <span>Nutrition</span>
              <span style={{ color: C.dot, fontSize: "7px" }}>•</span>
              <span>Healthy Habits</span>
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "28px" }} className="hidden lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              style={navLinkBase}
              activeProps={{ style: navLinkActive }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* CTA */}
          <Link
            to="/contact"
            className="hidden md:inline-flex"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "10px 22px",
              backgroundColor: C.ctaBg,
              color: C.ctaText,
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "999px",
              transition: "background-color 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = C.ctaHover;
              (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = C.ctaBg;
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            Start Journey
          </Link>

          {/* Hamburger */}
          <button
            aria-label="Toggle menu"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            style={{
              background: "none",
              border: "none",
              padding: "8px",
              cursor: "pointer",
              color: C.text,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "44px",
              minHeight: "44px",
            }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ──────────────────────────────────────────────────────── */}
      {open && (
        <div
          className="lg:hidden"
          style={{
            backgroundColor: C.navBg,
            borderTop: `1px solid ${C.navBorder}`,
          }}
        >
          <div
            className="container-editorial"
            style={{ paddingTop: "16px", paddingBottom: "16px", display: "flex", flexDirection: "column" }}
          >
            {links.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                style={{
                  color: C.textMuted,
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "14px 0",
                  borderBottom: i < links.length - 1 ? `1px solid ${C.mobileDivider}` : "none",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              style={{
                marginTop: "16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: C.ctaBg,
                color: C.ctaText,
                padding: "14px 20px",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "4px",
                minHeight: "44px",
              }}
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}