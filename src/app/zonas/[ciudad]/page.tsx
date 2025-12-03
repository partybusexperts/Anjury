import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RainbowCta } from "@/components/cta-rainbow";
import { brandInfo, cities } from "@/data/site-content";
import { ExpandableImage } from "@/components/expandable-image";
import { InfoModal } from "@/components/info-modal";

const cityMap = Object.fromEntries(cities.map((city) => [city.slug, city]));

const cityImages: Record<string, string> = {
  "san-cristobal": "/media/anjury1.png",
  tariba: "/media/anjury2.png",
  rubio: "/media/anjury3.png",
  palmira: "/media/anjury4.png",
  "la-grita": "/media/anjury5.png",
  michelena: "/media/anjury6.png",
  "san-antonio": "/media/anjury7.png",
  "capacho-viejo": "/media/anjury8.png",
  "capacho-nuevo": "/media/anjury9.png",
};

type CityPageProps = {
  params: { ciudad: string };
};

export function generateStaticParams() {
  return cities.map((city) => ({ ciudad: city.slug }));
}

export function generateMetadata({ params }: CityPageProps): Metadata {
  const city = cityMap[params.ciudad];
  if (!city) return {};
  return {
    title: city.heroTitle,
    description: city.intro,
    alternates: {
      canonical: `/zonas/${city.slug}`,
    },
  };
}

export default function CiudadPage({ params }: CityPageProps) {
  const city = cityMap[params.ciudad];
  if (!city) {
    notFound();
  }

  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-white/90 p-8 shadow">
        <p className="text-xs font-semibold uppercase text-dulce-cacao/60">
          Entregas WOW Dulce
        </p>
        <h1 className="mt-2 text-4xl font-bold text-dulce-cacao">{city.heroTitle}</h1>
        <p className="mt-4 text-base text-dulce-cacao/80">{city.intro}</p>
        <p className="mt-4 text-sm text-dulce-cacao/70">
          Coordinamos entregas dentro de {brandInfo.location}. Agenda con 5-7 días de
          anticipación para asegurar tu horario ideal.
        </p>
        <div className="mt-6">
          <ExpandableImage
            src={cityImages[city.slug] ?? "/media/anjury10.png"}
            alt={`Torta WOW Dulce para ${city.name}`}
            width={960}
            height={600}
            className="h-64 w-full rounded-3xl object-cover"
          />
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl bg-white/80 p-6 shadow">
          <h2 className="text-2xl font-semibold text-dulce-cacao">
            Eventos más comunes en {city.name}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-dulce-cacao/80">
            {city.events.map((event) => (
              <li key={event} className="rounded-2xl bg-white/90 p-3">
                {event}
              </li>
            ))}
          </ul>
        </article>
        <article className="space-y-4 rounded-3xl bg-white/80 p-6 shadow">
          <div>
            <h3 className="text-lg font-semibold text-dulce-cacao">Idea dulce</h3>
            <p className="text-sm text-dulce-cacao/80">{city.idea}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-dulce-cacao">Dato curioso</h3>
            <p className="text-sm text-dulce-cacao/80">{city.trivia}</p>
          </div>
          <Link
            href="/servicios"
            className="inline-flex text-sm font-semibold text-dulce-pink"
          >
            Ver catálogos de servicios →
          </Link>
          <InfoModal
            title={`Bonus para ${city.name}`}
            triggerLabel="Ideas extra"
            tone="mint"
          >
            <p>
              Sugerimos coordinar fotos 15 minutos antes de servir para aprovechar la luz local y
              capturar cada swirl.
            </p>
            <p>
              Si tu evento es al aire libre, llevamos un kit de emergencia con espátulas frías para
              retoques express.
            </p>
          </InfoModal>
        </article>
      </section>

      <RainbowCta
        title={city.ctaLabel}
        description="Cuéntanos la fecha del evento, dirección de entrega y referencia de diseño para preparar tu cotización."
      />

      <div className="text-sm text-dulce-cacao/70">
        <Link href="/zonas" className="text-dulce-pink underline">
          ← Volver a todas las zonas
        </Link>
      </div>
    </div>
  );
}
