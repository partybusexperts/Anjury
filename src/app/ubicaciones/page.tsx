import type { Metadata } from "next";
import Link from "next/link";
import { RainbowCta } from "@/components/cta-rainbow";
import { LocationSlider } from "@/components/location-slider";
import { brandInfo, cities, locationFacts } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Ubicaciones WOW Dulce",
  description:
    "Descubre las ciudades dentro de los 45 minutos de entrega de WOW Dulce, con datos curiosos y enlaces directos a cada landing.",
};

const radiusMinutes = 45;

export default function UbicacionesPage() {
  const cityMap = Object.fromEntries(
    cities.map((city) => [city.slug, city])
  ) as Record<string, (typeof cities)[number]>;
  const extraCities = cities.filter(
    (city) => !locationFacts.find((fact) => fact.slug === city.slug)
  );

  return (
    <div className="space-y-14">
      <section className="rounded-3xl bg-white/85 p-8 shadow">
        <p className="text-xs font-semibold uppercase tracking-wide text-dulce-cacao/60">
          Radio de servicio WOW Dulce
        </p>
        <h1 className="mt-2 text-4xl font-bold text-dulce-cacao">
          Ubicaciones dentro de {radiusMinutes} minutos de dulce felicidad
        </h1>
        <p className="mt-4 text-base text-dulce-cacao/80">
          Desde nuestra cocina en {brandInfo.location}, cubrimos ciudades como San
          Cristóbal, Rubio, La Grita, San Antonio y los Capachos. Esta guía recopila
          datos de Wikipedia y Topologica.co para que tu pedido vaya acompañado de
          cultura, trivia y rutas claras.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-dulce-cacao/70">
          <span className="rounded-full bg-dulce-pink/20 px-3 py-1">
            ✔️ Distancia máxima sugerida: {radiusMinutes} min
          </span>
          <span className="rounded-full bg-dulce-mint/30 px-3 py-1">
            ✔️ Entregas sujetas a agenda y clima
          </span>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-dulce-cacao">
              Slider de ciudades WOW (Wikipedia + Topologica)
            </h2>
            <p className="text-sm text-dulce-cacao/70">
              Desliza para leer highlights, tiempos estimados y accede a cada landing
              específica.
            </p>
          </div>
          <Link href="/zonas" className="text-sm font-semibold text-dulce-pink">
            Ver mapa de zonas →
          </Link>
        </div>
        <LocationSlider />
      </section>

      <section className="space-y-4 rounded-3xl bg-white/85 p-6 shadow">
        <h2 className="text-2xl font-bold text-dulce-cacao">
          Guía express de logística y trivia
        </h2>
        <p className="text-sm text-dulce-cacao/70">
          Clic en cada ciudad para ir a la página con ideas de tortas, reseñas y
          formularios.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {locationFacts.map((location) => {
            const city = cityMap[location.slug];
            return (
              <article key={location.slug} className="rounded-3xl bg-white/90 p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-dulce-cacao">
                      {location.name}
                    </h3>
                    <p className="text-sm text-dulce-pink">{location.highlight}</p>
                  </div>
                  <span className="text-xs font-semibold uppercase text-dulce-cacao/60">
                    {location.travelTime}
                  </span>
                </div>
                <p className="mt-3 text-sm text-dulce-cacao/80">{city?.intro ?? location.fact}</p>
                <p className="mt-2 text-xs text-dulce-cacao/60">
                  Trivia: {city?.trivia ?? location.fact}
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold">
                  <Link
                    href={`/zonas/${location.slug}`}
                    className="rounded-full bg-dulce-pink px-3 py-1 text-white shadow"
                  >
                    Abrir landing
                  </Link>
                  <a
                    href={location.source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-dulce-cacao/20 px-3 py-1 text-dulce-cacao/70"
                  >
                    Fuente: {location.source.name}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {extraCities.length > 0 && (
        <section className="space-y-3 rounded-3xl bg-white/80 p-6 shadow">
          <h2 className="text-2xl font-bold text-dulce-cacao">Extra paradas dulces</h2>
          <p className="text-sm text-dulce-cacao/70">
            También entregamos en otras localidades cercanas como:
          </p>
          <ul className="flex flex-wrap gap-3 text-sm font-semibold text-dulce-cacao">
            {extraCities.map((city) => (
              <li key={city.slug}>
                <Link href={`/zonas/${city.slug}`} className="underline">
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="rounded-3xl bg-white/85 p-6 shadow">
        <h2 className="text-2xl font-bold text-dulce-cacao">Checklist de entrega feliz</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            "Confirma dirección precisa y punto de referencia",
            "Indica si hay acceso por escalera o urbanización cerrada",
            "Cuéntanos si la mesa estará en interior, exterior o frontera",
          ].map((tip) => (
            <p key={tip} className="rounded-2xl bg-white/90 p-4 text-sm text-dulce-cacao/80">
              {tip}
            </p>
          ))}
        </div>
      </section>

      <RainbowCta
        title="¿Agendamos tu ciudad WOW?"
        description="Escríbenos por WhatsApp y reserva tu entrega dentro del radio de 45 minutos. Si tu ciudad no aparece, igual lo evaluamos juntas."
      />
    </div>
  );
}
