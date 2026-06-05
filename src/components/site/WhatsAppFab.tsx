import { MessageCircle } from "lucide-react";

export const WHATSAPP_NUMBER = "+919052853200";
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}`;

export function WhatsAppFab() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-3 pr-4 py-3 shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-105 transition-all"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="text-sm font-medium hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}

export function WhatsAppLink({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
