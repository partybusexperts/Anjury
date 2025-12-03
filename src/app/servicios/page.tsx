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
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {["/media/anjury1.png", "/media/anjury2.png", "/media/anjury3.png", "/media/anjury4.png"].map((src, index) => (
            <ExpandableImage
              key={src}
              src={src}
              alt={`Collage de servicios WOW Dulce ${index + 1}`}
              width={420}
              height={420}
              className="aspect-square w-full rounded-3xl object-cover"
            />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        {serviceDetails.map((service) => (
          <article key={service.title} className="rounded-3xl bg-white/90 p-6 shadow">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase text-dulce-cacao/60">
              <span className="rounded-full bg-dulce-pink/20 px-3 py-1 text-dulce-pink">
                {service.badge}
              </span>
              <span>WOW Dulce</span>
            </div>
            <div className="mt-4 grid gap-6 md:grid-cols-5">
              <div className="space-y-4 md:col-span-2">
                <div>
                  <h2 className="text-2xl font-semibold text-dulce-cacao">{service.title}</h2>
                  <p className="mt-2 text-sm text-dulce-cacao/80">{service.body}</p>
                </div>
                <ul className="space-y-2 text-sm text-dulce-cacao/80">
                  {service.highlights?.map((highlight) => (
                    <li key={highlight} className="rounded-2xl bg-white/95 p-3">
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <InfoModal title={service.modalTitle} triggerLabel="Abrir modal" tone="mint">
                    <ul className="list-disc pl-5">
                      {service.modalBullets?.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </InfoModal>
                  <Link
                    href={service.ctaHref}
                    className="inline-flex items-center rounded-full bg-dulce-pink px-4 py-2 text-xs font-semibold text-white shadow hover:scale-105 transition"
                  >
                    {service.ctaLabel}
                  </Link>
                </div>
              </div>
              <div className="grid gap-3 md:col-span-3 md:grid-cols-3">
                {service.images?.map((image) => (
                  <ExpandableImage
                    key={image}
                    src={image}
                    alt={`${service.title} WOW Dulce`}
                    width={420}
                    height={520}
                    className="aspect-[4/5] w-full rounded-2xl object-cover"
                  />
                ))}
              </div>
            </div>
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

      <section className="grid gap-4 md:grid-cols-4">
        {[
          "/media/anjury6.png",
          "/media/anjury7.png",
          "/media/anjury8.png",
          "/media/anjury12.png",
        ].map((src, index) => (
          <ExpandableImage
            key={src}
            src={src}
            alt={`Servicio estrella WOW Dulce ${index + 1}`}
            width={520}
            height={520}
            className="aspect-square w-full rounded-3xl object-cover"
          />
        ))}
      </section>

      <RainbowCta
        title="¿Mesas de postres, dulces típicos o tortas personalizadas?"
        description="Cuéntanos el tipo de evento, fecha, ciudad y número aproximado de invitados para armar una propuesta dulce."
      />
    </div>
  );
}
