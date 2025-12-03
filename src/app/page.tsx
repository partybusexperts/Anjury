import Image from "next/image";
import Link from "next/link";
import {
  brandInfo,
  differentiators,
  serviceHighlights,
  galleryItems,
  testimonials,
} from "@/data/site-content";
import { RainbowCta } from "@/components/cta-rainbow";

export default function HomePage() {
  return (
    <>
      <section className="grid items-center gap-10 md:grid-cols-2">
        <div className="space-y-5">
          <p className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-dulce-cacao shadow-sm">
            Táchira · Tortas personalizadas · Dulces típicos
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-dulce-cacao md:text-5xl">
            🎂 WOW Dulce – Tortas y postres que cuentan tu historia
          </h1>
          <p className="text-base text-dulce-cacao/80 md:text-lg">
            Desde Táchira para tu mesa: tortas personalizadas, dulces típicos y
            mesas de postres llenas de color, sabor y cariño.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contacto"
              className="rounded-full bg-dulce-pink px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
            >
              Quiero pedir una torta
            </Link>
            <Link
              href="/servicios"
              className="rounded-full border border-dulce-cacao/20 bg-white/80 px-6 py-3 text-sm font-semibold text-dulce-cacao transition hover:bg-white"
            >
              Ver sabores y precios
            </Link>
          </div>
          <p className="text-sm text-dulce-cacao/70">
            Hecho a mano por Anjury, con ingredientes frescos, recetas de familia y un
            toque creativo que hace decir “¡WOOOOW!” en cada bocado.
          </p>
          <div className="rounded-2xl bg-white/80 p-4 text-sm text-dulce-cacao/80 shadow-sm">
            <p className="font-semibold">{brandInfo.serviceRadius}</p>
            <span className="text-xs text-dulce-cacao/60">
              📍 Base en {brandInfo.location}
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-white/60 blur" />
          <div className="relative rounded-[2.5rem] bg-white/90 p-3 shadow-2xl">
            <Image
              src="/media/anjury1.jpg"
              alt="Torta colorida de WOW Dulce decorada con swirls y frutas"
              width={640}
              height={640}
              className="h-80 w-full rounded-[2rem] object-cover"
              priority
            />
            <div className="mt-3 flex items-center justify-between px-1 text-xs text-dulce-cacao/70">
              <span>Diseño por Anjury · WOW Dulce</span>
              <span>🎂 Hecho en Táchira</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 space-y-6">
        <h2 className="text-2xl font-bold text-dulce-cacao md:text-3xl">
          ¿Por qué elegir WOW Dulce?
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {differentiators.map((item) => (
            <article key={item.title} className="rounded-2xl bg-white/80 p-5 shadow-sm">
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-3 text-lg font-semibold text-dulce-cacao">
                {item.title}
              </h3>
              <p className="text-sm text-dulce-cacao/80">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 space-y-4">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl font-bold text-dulce-cacao">Servicios destacados</h2>
          <Link href="/servicios" className="text-sm font-semibold text-dulce-pink">
            Ver todos los servicios →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {serviceHighlights.map((service) => (
            <article key={service.title} className="swirl-card rounded-2xl p-5">
              <h3 className="text-lg font-semibold text-dulce-cacao">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-dulce-cacao/80">{service.description}</p>
              <Link
                href="/contacto"
                className="mt-3 inline-flex text-xs font-semibold text-dulce-pink"
              >
                Pedir info →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 space-y-4">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-dulce-cacao">Momentos dulces</h2>
            <p className="text-sm text-dulce-cacao/70">
              Inspírate con tortas, mesas de postres y detalles hechos por Anjury.
            </p>
          </div>
          <Link href="/galeria" className="text-sm font-semibold text-dulce-pink">
            Abrir galería completa →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {galleryItems.slice(0, 3).map((item) => (
            <figure key={item.title} className="rounded-3xl bg-white/80 p-3 shadow-sm">
              <Image
                src={item.image}
                alt={item.description}
                width={420}
                height={320}
                className="h-48 w-full rounded-2xl object-cover"
              />
              <figcaption className="mt-3 text-sm text-dulce-cacao/80">
                {item.description}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mt-16 space-y-4">
        <h2 className="text-2xl font-bold text-dulce-cacao">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="rounded-2xl bg-white/80 p-5 shadow-sm"
            >
              <p className="text-sm text-dulce-cacao/90">“{testimonial.quote}”</p>
              <figcaption className="mt-3 text-xs font-semibold text-dulce-cacao/70">
                ⭐⭐⭐⭐⭐ {testimonial.author} · {testimonial.location}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <RainbowCta
          title="¿Tienes una fecha especial?"
          description="Escríbele a Anjury ahora mismo y asegura tu cupo en la agenda. Cupos limitados para mantener la calidad de cada pedido."
          primaryLabel="Enviar mensaje por WhatsApp"
        />
      </section>
    </>
  );
}
