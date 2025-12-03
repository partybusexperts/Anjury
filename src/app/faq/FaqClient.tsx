"use client";

import { useState } from "react";
import Link from "next/link";
import { RainbowCta } from "@/components/cta-rainbow";
import { faqs } from "@/data/site-content";
import { ExpandableImage } from "@/components/expandable-image";
import { InfoModal } from "@/components/info-modal";

export function FaqClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-white/85 p-8 shadow">
        <p className="text-xs font-semibold uppercase text-dulce-cacao/60">FAQ</p>
        <h1 className="mt-2 text-4xl font-bold text-dulce-cacao">Preguntas frecuentes</h1>
        <p className="mt-4 text-base text-dulce-cacao/80">
          Si no encuentras tu respuesta, envíanos un mensaje directo por {" "}
          <Link href="/contacto" className="text-dulce-pink underline">
            el formulario de contacto
          </Link>{" "}
          o WhatsApp.
        </p>
      </section>

      <dl className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question} className="rounded-3xl bg-white/90 p-6 shadow">
              <button
                type="button"
                className="flex w-full items-center justify-between text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="text-lg font-semibold text-dulce-cacao">{faq.question}</span>
                <span className="text-sm font-bold text-dulce-pink">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && <dd className="mt-3 text-sm text-dulce-cacao/80">{faq.answer}</dd>}
            </div>
          );
        })}
      </dl>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          "/media/anjury1.png",
          "/media/anjury2.png",
          "/media/anjury3.png",
          "/media/anjury4.png",
          "/media/anjury5.png",
          "/media/anjury6.png",
        ].map((src, index) => (
          <ExpandableImage
            key={src}
            src={src}
            alt={`Preguntas frecuentes WOW Dulce ${index + 1}`}
            width={520}
            height={360}
            className="h-48 w-full rounded-3xl object-cover"
          />
        ))}
      </div>

      <InfoModal title="Política de abonos" triggerLabel="Detalles de pagos" tone="mint">
        <p>
          Reservamos tu fecha con 50% de abono vía pago móvil o transferencia. El comprobante llega
          al correo y WhatsApp.
        </p>
        <p>
          El restante se cancela al entregar, luego tomamos fotos finales y te enviamos tips de
          conservación.
        </p>
      </InfoModal>

      <RainbowCta
        title="¿Listo para asegurar tu fecha?"
        description="Haz clic para hablar con Anjury y confirmar disponibilidad en agenda."
      />
    </div>
  );
}
