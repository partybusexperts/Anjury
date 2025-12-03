import Link from "next/link";
import { brandInfo, navLinks, testimonials } from "@/data/site-content";

export function SiteFooter() {
  const miniTestimonial = testimonials[0];

  return (
    <footer className="mt-16 border-t border-white/40 bg-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold text-dulce-cacao">{brandInfo.name}</h3>
          <p className="mt-2 text-sm text-dulce-cacao/80">
            Tortas personalizadas, dulces típicos y mesas coloridas hechas en Estado Táchira.
          </p>
          <p className="mt-3 text-sm text-dulce-cacao/70">
            {brandInfo.serviceRadius}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-dulce-cacao/70">
            Navegación
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-dulce-cacao">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-dulce-pink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-dulce-cacao/70">
            Contáctanos
          </h4>
          <ul className="mt-3 space-y-1 text-sm text-dulce-cacao">
            <li>Teléfono / WhatsApp: {brandInfo.phone}</li>
            <li>Email: <a href={`mailto:${brandInfo.email}`} className="hover:text-dulce-pink">{brandInfo.email}</a></li>
            <li>Ubicación: {brandInfo.location}</li>
          </ul>
          {miniTestimonial && (
            <blockquote className="mt-4 rounded-2xl bg-white/80 p-4 text-xs text-dulce-cacao/80 shadow-sm">
              <p className="italic">“{miniTestimonial.quote}”</p>
              <cite className="mt-2 block font-semibold">{miniTestimonial.author} · {miniTestimonial.location}</cite>
            </blockquote>
          )}
        </div>
      </div>
      <div className="border-t border-white/40 bg-white/80 py-3 text-center text-xs text-dulce-cacao/70">
        © {new Date().getFullYear()} {brandInfo.name}. Dulces hechos por Anjury.
      </div>
    </footer>
  );
}
