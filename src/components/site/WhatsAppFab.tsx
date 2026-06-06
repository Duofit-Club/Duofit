export const WHATSAPP_NUMBER = "+919052853200";
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}`;

export function WhatsAppFab() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 rounded-full pl-3 pr-4 py-2.5 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
      style={{
        backgroundColor: "#25D366",
        boxShadow: "0 4px 20px rgba(37, 211, 102, 0.35)",
      }}
    >
      {/* Ping animation ring */}
      <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: "#25D366" }} />

      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-5 w-5 shrink-0 fill-white relative z-10"
      >
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.822.736 5.476 2.027 7.782L0 32l8.418-2.007A15.93 15.93 0 0 0 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.77-1.853l-.485-.287-5.003 1.194 1.237-4.863-.317-.5A13.236 13.236 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.273-9.878c-.398-.199-2.354-1.162-2.719-1.294-.364-.133-.63-.199-.895.199-.265.398-1.029 1.294-1.261 1.56-.232.265-.464.298-.862.1-.398-.2-1.681-.62-3.202-1.976-1.183-1.056-1.982-2.361-2.214-2.759-.232-.398-.025-.613.174-.811.179-.178.398-.464.597-.696.199-.232.265-.398.398-.664.133-.265.066-.497-.033-.696-.1-.199-.895-2.157-1.227-2.953-.323-.775-.65-.67-.895-.682l-.762-.013c-.265 0-.696.1-1.061.497-.364.398-1.393 1.361-1.393 3.319s1.426 3.85 1.625 4.115c.199.265 2.806 4.283 6.797 6.007.95.41 1.691.655 2.269.839.953.304 1.821.261 2.507.158.765-.114 2.354-.963 2.686-1.893.332-.93.332-1.727.232-1.893-.099-.166-.364-.265-.762-.464z" />
      </svg>

      <span className="text-sm font-semibold text-white hidden sm:inline relative z-10 tracking-wide">
        Chat on WhatsApp
      </span>
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