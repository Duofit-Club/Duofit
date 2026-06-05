import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import duofitLogo from "../../assets/duofit-logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background border-t border-white/5">
      <div className="container-editorial py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">

          {/* Brand — full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={duofitLogo} alt="Duofit" className="h-9 md:h-10 w-auto object-contain" />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-sm tracking-widest text-background uppercase">DUOFIT</span>
                <span className="text-[9px] tracking-widest text-background/50 uppercase hidden sm:block">Fitness · Nutrition · Healthy Habits</span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-background/50 leading-relaxed max-w-xs">
              Helping people stay healthy through practical nutrition, movements and healthy habits that fit everyday life.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-5">Navigation</h5>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/reality", label: "Reality Check" },
                { to: "/programs", label: "Programs" },
                // { to: "/results", label: "Results" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Connect" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-xs md:text-sm text-background/60 hover:text-background transition-colors py-1 block">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Channels */}
          <div>
            <h5 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-5">Connect</h5>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/919052853200" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 text-xs md:text-sm text-background/60 hover:text-background transition-colors py-1">
                  <MessageCircle className="h-4 w-4 shrink-0" /> WhatsApp
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 text-xs md:text-sm text-background/60 hover:text-background transition-colors py-1">
                  <Instagram className="h-4 w-4 shrink-0" /> Instagram
                </a>
              </li>
              <li>
                <a href="mailto:support@duofit.club"
                  className="flex items-center gap-2 text-xs md:text-sm text-background/60 hover:text-background transition-colors py-1">
                  <Mail className="h-4 w-4 shrink-0" /> support@duofit.club
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-2 text-[10px] md:text-xs text-background/30">
  <span>© {new Date().getFullYear()} DUOFIT. All rights reserved.</span>
  <div className="flex gap-4">
    <Link to="/privacy" className="hover:text-background/60 transition-colors">Privacy Policy</Link>
    <span>Become Better Everyday</span>
  </div>
</div>
      </div>
    </footer>
  );
}