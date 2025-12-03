import Link from "next/link";
import { brandInfo } from "@/data/site-content";

type RainbowCtaProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  secondaryText?: string;
  primaryHref?: string;
};

export function RainbowCta({
  title,
  description,
  primaryLabel = "Hablar por WhatsApp",
  secondaryText = `o escríbenos a ${brandInfo.email}`,
  primaryHref = brandInfo.phoneLink,
}: RainbowCtaProps) {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-dulce-pink via-dulce-yellow to-dulce-mint p-[1px] shadow-2xl">
      <div className="flex flex-col gap-4 rounded-3xl bg-white/90 px-6 py-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <h2 className="text-2xl font-bold text-dulce-cacao md:text-3xl">{title}</h2>
          <p className="mt-2 text-sm text-dulce-cacao/80 md:text-base">{description}</p>
        </div>
        <div className="flex flex-col items-center gap-2 md:items-end">
          <a
            href={primaryHref}
            target="_blank"
            className="inline-flex items-center justify-center rounded-full bg-dulce-pink px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
            rel="noreferrer"
          >
            {primaryLabel}
          </a>
          <span className="text-[11px] text-dulce-cacao/60">{secondaryText}</span>
          <Link href="/contacto" className="text-xs font-semibold text-dulce-cacao/80 underline">
            Forma de contacto
          </Link>
        </div>
      </div>
    </div>
  );
}
