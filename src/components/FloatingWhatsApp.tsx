import { useTranslation } from "react-i18next";
import { buildWhatsAppUrl } from "@/lib/contact";

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
    <path d="M19.11 17.29c-.29-.14-1.71-.84-1.97-.94-.27-.1-.46-.14-.65.14-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2-.17-.29-.02-.44.13-.58.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.38 0 1.4 1.02 2.76 1.16 2.95.14.19 2 3.05 4.85 4.27.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.11.55-.08 1.71-.7 1.95-1.37.24-.68.24-1.26.17-1.37-.07-.12-.26-.19-.55-.33zM16.02 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 1.88.49 3.72 1.42 5.33L5 27l5.79-1.52a10.66 10.66 0 0 0 5.22 1.34h.01c5.9 0 10.7-4.8 10.7-10.7 0-2.86-1.11-5.55-3.14-7.57a10.62 10.62 0 0 0-7.56-3.22zm0 19.55h-.01a8.85 8.85 0 0 1-4.51-1.24l-.32-.19-3.44.9.92-3.35-.21-.34a8.86 8.86 0 0 1-1.36-4.72c0-4.9 3.99-8.88 8.9-8.88 2.37 0 4.6.93 6.28 2.6a8.83 8.83 0 0 1 2.6 6.28c0 4.9-3.99 8.88-8.85 8.88z" />
  </svg>
);

const FloatingWhatsApp = () => {
  const { t } = useTranslation();
  return (
    <a
      href={buildWhatsAppUrl(t("whatsapp.defaultMsg"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsapp.float")}
      className="fixed bottom-6 end-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 blur-xl group-hover:opacity-70 transition-opacity" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 hover:scale-110 transition-transform">
        <WhatsAppIcon className="w-7 h-7" />
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
export { WhatsAppIcon };
