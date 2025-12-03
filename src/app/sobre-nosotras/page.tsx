import type { Metadata } from "next";
import Link from "next/link";
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
        </aside>
      </section>

      <RainbowCta
        title="¿Listas para planear tu torta?"
        description="Cuéntanos qué estás celebrando y te recomendamos sabores, tamaños y diseños perfectos para tu evento."
      />
    </div>
  );
}
