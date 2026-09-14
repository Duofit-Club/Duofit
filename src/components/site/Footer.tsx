import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import duofitLogo from "../../assets/duofit-logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background border-t border-white/5">
      <div className="container-editorial py-9 md:py-12">

        <div className="grid grid-cols-2 md:grid-cols-3 gap-7 md:gap-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={duofitLogo}
                alt="Duofit"
                className="h-8 md:h-9 w-auto object-contain"
              />

              <div className="flex flex-col leading-tight">
                <span className="font-bold text-sm tracking-widest text-background uppercase">
                  DUOFIT
                </span>

                <span className="text-[9px] tracking-widest text-background/50 uppercase hidden sm:block">
                  Fitness · Nutrition · Healthy Habits
                </span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-background/50 leading-relaxed max-w-xs">
              Helping people build healthier lives through practical nutrition,
              sustainable movement and habits that last.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Navigation
            </h5>

            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/programs", label: "Programs" },
                { to: "/community", label: "Community & Progress" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Connect" },
                { to: "/forms", label: "Forms" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-xs md:text-sm text-background/60 hover:text-background transition-colors block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h5 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Connect
            </h5>

            <ul className="space-y-2">
              <li>
                <a
                  href="https://wa.me/919052853200"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs md:text-sm text-background/60 hover:text-background transition-colors"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  WhatsApp
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/duofit.club"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs md:text-sm text-background/60 hover:text-background transition-colors"
                >
                  <Instagram className="h-4 w-4 shrink-0" />
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="mailto:support@duofit.club"
                  className="flex items-center gap-2 text-xs md:text-sm text-background/60 hover:text-background transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  support@duofit.club
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-5 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-2 text-[10px] md:text-xs text-background/30">
          <span>
            © {new Date().getFullYear()} DUOFIT. All rights reserved.
          </span>

          <div className="flex gap-4">
            <Link
              to="/privacy"
              className="hover:text-background/60 transition-colors"
            >
              Privacy Policy
            </Link>

            <span>Become Better Everyday</span>
          </div>
        </div>

      </div>
    </footer>
  );
}