import Link from "next/link";
import { locationFacts } from "@/data/site-content";

export function LocationSlider() {
  return (
    <div className="location-slider">
      {locationFacts.map((location) => (
        <article key={location.slug} className="location-slide">
          <div className="text-xs font-semibold uppercase tracking-wide text-dulce-cacao/70">
            {location.travelTime}
          </div>
          <h3 className="mt-2 text-2xl font-bold text-dulce-cacao">
            {location.name}
          </h3>
          <p className="text-sm font-semibold text-dulce-pink">{location.highlight}</p>
          <p className="mt-3 text-sm text-dulce-cacao/80">{location.fact}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-[11px] text-dulce-cacao/60">
            <Link href={`/zonas/${location.slug}`} className="font-semibold text-dulce-pink">
              Ver detalles →
            </Link>
            <a
              href={location.source.url}
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Fuente: {location.source.name}
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
