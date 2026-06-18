import { Calendar } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/duofit-support/new-meeting";

export function BookCallFab() {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book a consultation call"
      className="fixed bottom-20 right-5 z-50 inline-flex items-center gap-2.5 rounded-full pl-3 pr-4 py-2.5 transition-all duration-300 hover:scale-105 hover:shadow-2xl group overflow-hidden"
      style={{
        backgroundColor: "#C89B5A",
        boxShadow: "0 4px 20px rgba(200, 155, 90, 0.35)",
      }}
    >
      {/* Ping animation */}
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-20"
        
        style={{ backgroundColor: "#C89B5A" }}
      />
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

      {/* Calendar Icon */}
      <Calendar className="h-5 w-5 shrink-0 text-white relative z-10" />

      <span className="text-sm font-semibold text-white hidden sm:inline relative z-10 tracking-wide">
        Book a Call
      </span>
    </a>
  );
}