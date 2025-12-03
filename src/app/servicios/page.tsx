import type { Metadata } from "next";
import Link from "next/link";
import { RainbowCta } from "@/components/cta-rainbow";
import { portionHelper, serviceDetails } from "@/data/site-content";
import { ExpandableImage } from "@/components/expandable-image";
import { InfoModal } from "@/components/info-modal";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Tortas personalizadas, dulces típicos, mesas de postres y detalles dulces de WOW Dulce para eventos en Táchira.",
};

export default function ServiciosPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-white/85 p-8 shadow">
        <p className="text-xs font-semibold uppercase text-dulce-cacao/60">
          Sabores y experiencias
        </p>
        <h1 className="mt-2 text-4xl font-bold text-dulce-cacao">
          Tortas, dulces y mesas que hacen decir “WOW”
        </h1>
        <p className="mt-4 text-base text-dulce-cacao/80">
          Diseñamos tortas de cumpleaños, bodas y aniversarios, mesas de postres
          y detalles dulces con ingredientes frescos y colores vibrantes.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-dulce-pink">
          <Link href="/zonas" className="underline">
            Ver ciudades con entrega
          </Link>
          <span>·</span>
          <Link href="/contacto" className="underline">
            Solicitar cotización rápida
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {["/media/anjury3.png", "/media/anjury4.png", "/media/anjury5.png"].map((src, index) => (
            <ExpandableImage
              key={src}
              src={src}
              alt={`Portafolio de servicios WOW Dulce ${index + 1}`}
              width={420}
              height={320}
              className="h-40 w-full rounded-2xl object-cover"
            />
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {serviceDetails.map((service) => (
          <article key={service.title} className="swirl-card rounded-3xl p-6">
            <h2 className="text-2xl font-semibold text-dulce-cacao">
              {service.title}
            </h2>
            <p className="mt-3 text-sm text-dulce-cacao/80">{service.body}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl bg-white/80 p-6 shadow">
        <h2 className="text-2xl font-semibold text-dulce-cacao">
          Calculador rápido de porciones
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {portionHelper.map((portion) => (
            <div key={portion.label} className="rounded-2xl bg-white/90 p-4 text-center shadow">
              <p className="text-sm font-bold text-dulce-cacao">{portion.label}</p>
              <p className="text-sm text-dulce-cacao/70">{portion.detail}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-dulce-cacao/70">
          Tip: Siempre pide un poquito más… siempre hay alguien que repite 🙈
        </p>
        <InfoModal title="Guía de sabores" triggerLabel="Ver combinaciones" tone="mint">
          <ul className="list-disc pl-5">
            <li>Vainilla + frutos rojos + crema chantilly liviana.</li>
            <li>Chocolate intenso + arequipe + crocante de cacao tachirense.</li>
            <li>Red velvet + queso crema cítrico para bodas elegantes.</li>
          </ul>
          <p>
            Podemos adaptar rellenos sin azúcar o sin gluten previo acuerdo para mantener la
            textura perfecta.
          </p>
        </InfoModal>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        {["/media/anjury11.png", "/media/anjury12.png"].map((src, index) => (
          <ExpandableImage
            key={src}
            src={src}
            alt={`Producción de servicios WOW Dulce ${index + 1}`}
            width={520}
            height={400}
            className="h-52 w-full rounded-3xl object-cover"
          />
        ))}
      </div>

      <RainbowCta
        title="¿Mesas de postres, dulces típicos o tortas personalizadas?"
        description="Cuéntanos el tipo de evento, fecha, ciudad y número aproximado de invitados para armar una propuesta dulce."
      />
    </div>
  );
}
