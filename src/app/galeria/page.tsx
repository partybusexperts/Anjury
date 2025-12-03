import type { Metadata } from "next";
import Link from "next/link";
import { galleryItems } from "@/data/site-content";
import { RainbowCta } from "@/components/cta-rainbow";
import { ExpandableImage } from "@/components/expandable-image";
import { InfoModal } from "@/components/info-modal";

export const metadata: Metadata = {
  title: "Galería WOW Dulce",
  description:
    "Explora tortas personalizadas, mesas de postres y dulces típicos creados por Anjury en Táchira.",
};

export default function GaleriaPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-white/85 p-8 shadow">
        <p className="text-xs font-semibold uppercase text-dulce-cacao/60">
          Momentos dulces
        </p>
        <h1 className="mt-2 text-4xl font-bold text-dulce-cacao">
          Galería de tortas y mesas WOW Dulce
        </h1>
        <p className="mt-4 text-base text-dulce-cacao/80">
          Usa estas ideas como inspiración y envíanos tu foto de referencia para
          crear un diseño con la firma colorida de WOW Dulce.
        </p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-dulce-cacao/70">
          {[
            "Cumpleaños",
            "Bodas",
            "Mesas de postres",
            "Dulces típicos",
            "Detalles sorpresa",
          ].map((chip) => (
            <span key={chip} className="rounded-full bg-white/70 px-4 py-2">
              #{chip}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {galleryItems.map((item, index) => (
          <figure key={item.title} className="flex flex-col gap-3 rounded-3xl bg-white/90 p-4 shadow">
            <ExpandableImage
              src={item.image}
              alt={item.description}
              width={720}
              height={900}
              className={`w-full rounded-3xl object-cover ${index % 3 === 0 ? "h-80" : "h-72"}`}
              caption={item.description}
            />
            <figcaption className="text-sm text-dulce-cacao/80">
              {item.description}
            </figcaption>
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              <Link
                href="/contacto"
                className="inline-flex items-center rounded-full bg-dulce-pink px-4 py-2 text-white shadow"
              >
                Pedir similar →
              </Link>
              <InfoModal title="Notas creativas" triggerLabel="Ver detalles" tone="mint">
                <p>{item.description}</p>
                <p>
                  Combínala con toppers personalizados y agrega props según tu evento. Podemos adaptar
                  colores y altura.
                </p>
              </InfoModal>
            </div>
          </figure>
        ))}
      </section>

      <InfoModal title="Cómo armar tu moodboard" triggerLabel="Ver recomendaciones" tone="purple">
        <p>
          Guarda tus fotos favoritas de esta galería y combínalas con tu decoración en Pinterest
          para que definamos paleta, altura y topper.
        </p>
        <p>
          También aceptamos videos cortos de TikTok o Reels: analizamos la textura para replicarla
          con buttercream propio.
        </p>
      </InfoModal>

      <RainbowCta
        title="¿Quieres tu propio momento WOW?"
        description="Compártenos temática, colores y sabores favoritos para maquetar la torta ideal."
      />
    </div>
  );
}
