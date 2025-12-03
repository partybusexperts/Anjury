import type { Metadata } from "next";
import Link from "next/link";
import { ExpandableImage } from "@/components/expandable-image";
import { InfoModal } from "@/components/info-modal";
import { brandInfo } from "@/data/site-content";
import { RainbowCta } from "@/components/cta-rainbow";

export const metadata: Metadata = {
  title: "Sobre nosotras",
  description:
    "Conoce a Anjury, pastelera de WOW Dulce, su historia en Táchira y los valores que inspiran cada torta personalizada.",
};

const storyParagraphs = [
  "Anjury creció en Táchira entre olores a café, arepas recién hechas y tortas que siempre se preparaban en casa.",
  "De niña ayudaba a su mamá a batir las mezclas y a decorar con lluvia de colores. Con el tiempo mezcló técnicas modernas con sabores clásicos de la región.",
  "Después de hornear para familia, amigos, vecinos, bautizos y bodas nació WOW Dulce: un emprendimiento que une pasión, creatividad y tradición tachirense.",
  "Hoy transforma ideas en tortas: desde diseños minimalistas hasta tortas llenas de swirls, degradados y detalles personalizados que cuentan historias.",
];

const valores = [
  {
    title: "Calidez",
    detail: "Cada pedido se trata como si fuera para su propia familia. Preguntamos, escuchamos y acompañamos todo el proceso.",
  },
  {
    title: "Calidad",
    detail: "Ingredientes frescos, medidas exactas y procesos cuidados que garantizan sabor y presentación impecable.",
  },
  {
    title: "Creatividad",
    detail: "Diseños originales inspirados en tus gustos, tu historia y tu ciudad. Nada de tortas genéricas.",
  },
];

export default function SobreNosotrasPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-white/85 p-8 shadow-lg">
        <p className="text-xs font-semibold uppercase text-dulce-cacao/60">
          Conoce a WOW Dulce
        </p>
        <h1 className="mt-2 text-4xl font-bold text-dulce-cacao">
          Conoce a Anjury, el corazón de WOW Dulce
        </h1>
        <p className="mt-4 max-w-3xl text-base text-dulce-cacao/80">
          Desde San Cristóbal, {brandInfo.owner} combina recetas familiares y técnicas
          modernas para crear tortas que gritan “tortas, dulces y amor
          venezolano”.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="space-y-4 rounded-3xl bg-white/80 p-6 shadow-sm">
          {storyParagraphs.map((paragraph) => (
            <p key={paragraph} className="text-sm text-dulce-cacao/85">
              {paragraph}
            </p>
          ))}
          <p className="text-sm font-semibold text-dulce-cacao">
            ¿Quieres ver el resultado? Explora la {" "}
            <Link href="/galeria" className="text-dulce-pink underline">
              galería de momentos dulces
            </Link>{" "}
            y elige tu estilo favorito.
          </p>
          <InfoModal title="Formación de Anjury" triggerLabel="Ver inspiración" tone="purple">
            <p>
              Workshops con pasteleras venezolanas, cursos online con artistas de buttercream y
              horas de práctica documentadas en cuadernos llenos de swirls.
            </p>
            <p>
              Cada temporada agrega un sabor típico nuevo: papelón con limón, guanábana cremosa o
              cacao rubiense.
            </p>
          </InfoModal>
        </article>
        <aside className="space-y-4 rounded-3xl bg-white/80 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-dulce-cacao">Valores</h2>
          <ul className="space-y-3">
            {valores.map((valor) => (
              <li key={valor.title} className="rounded-2xl bg-white/90 p-4 shadow">
                <h3 className="text-sm font-bold text-dulce-cacao">{valor.title}</h3>
                <p className="text-sm text-dulce-cacao/75">{valor.detail}</p>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl bg-dulce-mint/40 p-4 text-sm text-dulce-cacao">
            <p className="font-semibold">Fun fact</p>
            <p>
              Las primeras tortas WOW Dulce fueron para vecinos y maestras del
              colegio de Anjury. Hoy viajan por todo el Táchira.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {["/media/anjury2.png", "/media/anjury6.png"].map((src, index) => (
              <ExpandableImage
                key={src}
                src={src}
                alt={`Anjury creando tortas WOW ${index + 1}`}
                width={320}
                height={320}
                className="h-36 w-full rounded-2xl object-cover"
              />
            ))}
          </div>
        </aside>
      </section>

      <section className="rounded-3xl bg-white/85 p-6 shadow">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-dulce-cacao">Cronología dulce</h2>
            <p className="text-sm text-dulce-cacao/70">
              Un vistazo rápido a cómo Anjury convirtió un hobby familiar en el atelier WOW Dulce.
            </p>
          </div>
          <InfoModal title="Detrás de los swirls" triggerLabel="Ver backstage" tone="mint">
            <p>
              Cada diseño arranca con moodboards, luego horneamos pruebas miniatura para ajustar
              texturas antes del pastel final.
            </p>
            <p>
              Documentamos todo en fotos para que los clientes vean el progreso y puedan pedir
              ajustes oportunamente.
            </p>
          </InfoModal>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-4">
          {[
            { src: "/media/anjury3.png", label: "2009 · Tortas caseras" },
            { src: "/media/anjury4.png", label: "2015 · Primeras bodas" },
            { src: "/media/anjury5.png", label: "2020 · Mesas corporativas" },
            { src: "/media/anjury7.png", label: "2024 · Detalles sorpresa" },
          ].map((item) => (
            <div key={item.src} className="space-y-2">
              <ExpandableImage
                src={item.src}
                alt={item.label}
                width={360}
                height={360}
                className="h-48 w-full rounded-3xl object-cover"
              />
              <p className="text-center text-xs font-semibold text-dulce-cacao">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-white/90 p-6 shadow">
        <h2 className="text-2xl font-bold text-dulce-cacao">Moodboard de inspiración</h2>
        <p className="mt-2 text-sm text-dulce-cacao/70">
          Cada pedido incluye referencias visuales que compartimos por WhatsApp para alinear tonos y
          texturas. Aquí algunas favoritas.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            "/media/anjury8.png",
            "/media/anjury9.png",
            "/media/anjury10.png",
            "/media/anjury11.png",
            "/media/anjury12.png",
            "/media/anjury1.png",
          ].map((src, index) => (
            <ExpandableImage
              key={src}
              src={src}
              alt={`Moodboard WOW Dulce ${index + 1}`}
              width={420}
              height={320}
              className="h-44 w-full rounded-3xl object-cover"
            />
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-white/90 p-6 shadow">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-dulce-cacao">Detrás del atelier WOW</h2>
            <p className="text-sm text-dulce-cacao/70">
              Ocho fotos que muestran mezclas, drips y empaques antes de salir a entregar.
            </p>
          </div>
          <InfoModal title="Procesos artesanales" triggerLabel="Ver detalles" tone="mint">
            <p>
              Pesamos cada ingrediente en gramos para mantener textura uniforme. Los swirls se hacen con
              mangas personalizadas según lote.
            </p>
            <p>
              Cada caja va con stickers WOW Dulce, estabilizadores y nota escrita a mano.
            </p>
          </InfoModal>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          {[
            "/media/anjury2.png",
            "/media/anjury3.png",
            "/media/anjury4.png",
            "/media/anjury5.png",
            "/media/anjury6.png",
            "/media/anjury7.png",
            "/media/anjury8.png",
            "/media/anjury9.png",
          ].map((src, index) => (
            <ExpandableImage
              key={src}
              src={src}
              alt={`Detrás del atelier WOW ${index + 1}`}
              width={420}
              height={420}
              className="aspect-square w-full rounded-3xl object-cover"
            />
          ))}
        </div>
      </section>

      <RainbowCta
        title="¿Listas para planear tu torta?"
        description="Cuéntanos qué estás celebrando y te recomendamos sabores, tamaños y diseños perfectos para tu evento."
      />
    </div>
  );
}
