import type { Metadata } from "next";
import Image from "next/image";
import { galleryItems } from "@/data/site-content";
import { RainbowCta } from "@/components/cta-rainbow";

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
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {galleryItems.map((item) => (
          <figure key={item.title} className="rounded-3xl bg-white/90 p-4 shadow">
            <Image
              src={item.image}
              alt={item.description}
              width={640}
              height={480}
              className="h-56 w-full rounded-2xl object-cover"
            />
            <figcaption className="mt-3 text-sm text-dulce-cacao/80">
              {item.description}
            </figcaption>
          </figure>
        ))}
      </section>

      <RainbowCta
        title="¿Quieres tu propio momento WOW?"
        description="Compártenos temática, colores y sabores favoritos para maquetar la torta ideal."
      />
    </div>
  );
}
