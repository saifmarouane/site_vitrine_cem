import { buildWhatsAppUrl } from "@/utils/formSubmission";

const WhatsAppSupport = () => {
  const supportMessage =
    "Bonjour, je souhaite communiquer avec le support ÉnergieCompare.";

  return (
    <a
      href={buildWhatsAppUrl(supportMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter le support sur WhatsApp"
      className="fixed bottom-8 left-6 z-[99] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-[#20bd5a] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 dark:focus:ring-offset-dark md:left-8"
    >
      <svg
        aria-hidden="true"
        className="h-8 w-8"
        viewBox="0 0 32 32"
        fill="currentColor"
      >
        <path d="M16.02 3.2A12.7 12.7 0 0 0 5.28 22.68L3.6 28.8l6.27-1.64A12.65 12.65 0 0 0 16.02 28.73h.01A12.76 12.76 0 0 0 28.8 16.01 12.76 12.76 0 0 0 16.02 3.2Zm7.51 18.16c-.31.88-1.82 1.68-2.55 1.79-.65.1-1.48.14-2.39-.15-.55-.18-1.27-.41-2.18-.8-3.84-1.65-6.35-5.5-6.54-5.76-.18-.26-1.56-2.08-1.56-3.97s.99-2.82 1.34-3.2c.35-.39.77-.49 1.03-.49h.74c.23.01.56-.09.87.67.31.76 1.08 2.65 1.17 2.84.09.19.15.42.03.68-.12.26-.18.42-.36.65-.18.22-.38.5-.54.67-.18.18-.36.38-.15.76.21.39.94 1.55 2.01 2.51 1.38 1.23 2.55 1.61 2.94 1.8.38.19.61.16.83-.1.23-.26.96-1.12 1.22-1.51.26-.39.51-.32.87-.19.35.13 2.23 1.05 2.62 1.24.38.2.64.29.74.45.09.16.09.93-.22 1.81Z" />
      </svg>
    </a>
  );
};

export default WhatsAppSupport;
