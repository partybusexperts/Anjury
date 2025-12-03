import type { Metadata } from "next";
import Link from "next/link";
import { RainbowCta } from "@/components/cta-rainbow";
import { brandInfo, cities, locationFacts } from "@/data/site-content";
import { ExpandableImage } from "@/components/expandable-image";
import { InfoModal } from "@/components/info-modal";
import { LocationSlider } from "@/components/location-slider";

export const metadata: Metadata = {
  title: "Zonas de entrega",
  description:
    "WOW Dulce realiza entregas de tortas y mesas de postres en San Cristóbal, Táriba, Palmira, Rubio, Capacho, Michelena y zonas cercanas.",
};

export default function ZonasPage() {
  return (
    <div className="space-y-14">
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
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            "/media/anjury8.png",
            "/media/anjury9.png",
            "/media/anjury10.png",
            "/media/anjury11.png",
          ].map((src, index) => (
            <ExpandableImage
              key={src}
              src={src}
              alt={`Entregas de WOW Dulce en ruta ${index + 1}`}
              width={360}
              height={260}
              className="h-44 w-full rounded-3xl object-cover"
            />
          ))}
        </div>
        <InfoModal title="Cómo calculamos el tiempo" triggerLabel="Ver logística" tone="purple">
          <p>
            Consideramos tráfico hacia la frontera, disponibilidad de gasolina y protección del
            montaje. Por eso pedimos mínimo 5 días para rutas extendidas.
          </p>
          <p>
            Lleva siempre una mesa firme y sombra si la entrega es al aire libre: así el buttercream
            se mantiene perfecto.
          </p>
        </InfoModal>
      </section>

      <section className="space-y-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-dulce-cacao">Ciudades felices (slider)</h2>
            <p className="text-sm text-dulce-cacao/70">
              Desliza para ver tiempos estimados, highlights y trivia citada de Wikipedia y
              Topologica.
            </p>
          </div>
          <Link href="/galeria" className="text-sm font-semibold text-dulce-pink">
            Ver fotos de entregas →
          </Link>
        </div>
        <LocationSlider />
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
            <InfoModal
              title={`Tips para ${city.name}`}
              triggerLabel="Ver tips"
              tone="mint"
            >
              <p>{city.trivia}</p>
            </InfoModal>
          </article>
        ))}
      </section>

      <section className="rounded-3xl bg-white/90 p-6 shadow">
        <h2 className="text-2xl font-bold text-dulce-cacao">Logística con cariño</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {locationFacts.map((location) => (
            <article key={location.slug} className="rounded-3xl bg-white/95 p-4 shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-dulce-cacao">
                    {location.name}
                  </h3>
                  <p className="text-sm text-dulce-pink">{location.highlight}</p>
                </div>
                <span className="text-xs font-bold uppercase text-dulce-cacao/60">
                  {location.travelTime}
                </span>
              </div>
              <p className="mt-2 text-sm text-dulce-cacao/80">{location.fact}</p>
              <div className="mt-3 flex flex-wrap gap-3 text-[11px] font-semibold text-dulce-cacao/70">
                <Link href={`/zonas/${location.slug}`} className="text-dulce-pink underline">
                  Landing →
                </Link>
                <a href={location.source.url} target="_blank" rel="noreferrer" className="underline">
                  Fuente: {location.source.name}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-white/85 p-6 shadow">
        <h2 className="text-2xl font-bold text-dulce-cacao">Galería de entregas WOW</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {[
            "/media/anjury1.png",
            "/media/anjury2.png",
            "/media/anjury3.png",
            "/media/anjury12.png",
          ].map((src, index) => (
            <ExpandableImage
              key={src}
              src={src}
              alt={`Galería de entregas ${index + 1}`}
              width={360}
              height={260}
              className="h-44 w-full rounded-3xl object-cover"
            />
          ))}
        </div>
      </section>

      <RainbowCta
        title="¿Tu ciudad no aparece?"
        description="Escríbenos por WhatsApp y verificamos si tu zona está dentro del radio de entregas para la fecha que necesitas."
      />
    </div>
  );
}
