import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { RainbowCta } from "@/components/cta-rainbow";
import { brandInfo, cities } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Zonas de entrega",
  description:
    "WOW Dulce realiza entregas de tortas y mesas de postres en San Cristóbal, Táriba, Palmira, Rubio, Capacho, Michelena y zonas cercanas.",
};

export default function ZonasPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-white/85 p-8 shadow">
        <p className="text-xs font-semibold uppercase text-dulce-cacao/60">
          Entregas locales
        </p>
        <h1 className="mt-2 text-4xl font-bold text-dulce-cacao">
          Llevamos dulzura a tu ciudad
        </h1>
        <p className="mt-4 text-base text-dulce-cacao/80">
          WOW Dulce realiza entregas en varias zonas del estado Táchira (según
          disponibilidad y agenda). Coordina tu pedido con anticipación para
          asegurar el horario perfecto.
        </p>
        <p className="mt-4 text-sm font-semibold text-dulce-cacao">
          Radios de servicio: {brandInfo.serviceRadius}
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {["/media/anjury8.png", "/media/anjury9.png"].map((src) => (
            <Image
              key={src}
              src={src}
              alt="Entregas de WOW Dulce en ruta"
              width={520}
              height={360}
              className="h-48 w-full rounded-3xl object-cover"
            />
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {cities.map((city) => (
          <article key={city.slug} className="swirl-card flex flex-col rounded-3xl p-6">
            <h2 className="text-xl font-bold text-dulce-cacao">{city.name}</h2>
            <p className="mt-2 text-sm text-dulce-cacao/80">{city.intro}</p>
            <ul className="mt-3 space-y-1 text-xs text-dulce-cacao/70">
              {city.events.slice(0, 3).map((event) => (
                <li key={event}>• {event}</li>
              ))}
            </ul>
            <Link
              href={`/zonas/${city.slug}`}
              className="mt-4 inline-flex text-sm font-semibold text-dulce-pink"
            >
              Ver más →
            </Link>
          </article>
        ))}
      </section>

      <RainbowCta
        title="¿Tu ciudad no aparece?"
        description="Escríbenos por WhatsApp y verificamos si tu zona está dentro del radio de entregas para la fecha que necesitas."
      />
    </div>
  );
}
