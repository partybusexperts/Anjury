import { brandInfo } from "@/data/site-content";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={brandInfo.phoneLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-2xl transition hover:scale-110"
      aria-label="WhatsApp WOW Dulce"
    >
      💬
    </a>
  );
}
