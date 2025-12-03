import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { RainbowCta } from "@/components/cta-rainbow";
import { faqs } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Resuelve dudas sobre pedidos, anticipación, entregas y opciones especiales de WOW Dulce.",
};

export default function FaqPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-white/85 p-8 shadow">
        <p className="text-xs font-semibold uppercase text-dulce-cacao/60">
          FAQ
        </p>
        <h1 className="mt-2 text-4xl font-bold text-dulce-cacao">
          Preguntas frecuentes
        </h1>
        <p className="mt-4 text-base text-dulce-cacao/80">
          Si no encuentras tu respuesta, envíanos un mensaje directo por {" "}
          <Link href="/contacto" className="text-dulce-pink underline">
            el formulario de contacto
          </Link>{" "}
          o WhatsApp.
        </p>
      </section>

      <dl className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.question} className="rounded-3xl bg-white/90 p-6 shadow">
            <dt className="text-lg font-semibold text-dulce-cacao">
              {faq.question}
            </dt>
            <dd className="mt-2 text-sm text-dulce-cacao/80">{faq.answer}</dd>
          </div>
        ))}
      </dl>

      <div className="grid gap-4 md:grid-cols-2">
        {["/media/anjury4.png", "/media/anjury5.png"].map((src) => (
          <Image
            key={src}
            src={src}
            alt="Preguntas frecuentes WOW Dulce"
            width={520}
            height={360}
            className="h-48 w-full rounded-3xl object-cover"
          />
        ))}
      </div>

      <RainbowCta
        title="¿Listo para asegurar tu fecha?"
        description="Haz clic para hablar con Anjury y confirmar disponibilidad en agenda."
      />
    </div>
  );
}
