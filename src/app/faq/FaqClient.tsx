"use client";

import { useState } from "react";
import Link from "next/link";
import { RainbowCta } from "@/components/cta-rainbow";
import { faqs } from "@/data/site-content";
import { ExpandableImage } from "@/components/expandable-image";
import { InfoModal } from "@/components/info-modal";

export function FaqClient() {
  const [openItems, setOpenItems] = useState<Set<number>>(() => new Set());

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

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
          const isOpen = openItems.has(index);
          return (
            <div key={faq.question} className="rounded-3xl bg-white/90 p-6 shadow">
              <button
                type="button"
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between text-left"
                onClick={() => toggleItem(index)}
              >
                <span className="text-lg font-semibold text-dulce-cacao">{faq.question}</span>
                <span className="text-sm font-bold text-dulce-pink">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && <dd className="mt-3 text-sm text-dulce-cacao/80">{faq.answer}</dd>}
            </div>
          );
        })}
      </dl>

      <section className="space-y-4 rounded-3xl bg-white/85 p-6 shadow">
        <h2 className="text-2xl font-bold text-dulce-cacao">Respuestas con evidencia</h2>
        <div className="grid gap-4 md:grid-cols-4">
          {[
            "/media/anjury1.png",
            "/media/anjury2.png",
            "/media/anjury3.png",
            "/media/anjury4.png",
            "/media/anjury5.png",
            "/media/anjury6.png",
            "/media/anjury7.png",
            "/media/anjury12.png",
          ].map((src, index) => (
            <ExpandableImage
              key={src}
              src={src}
              alt={`Preguntas frecuentes WOW Dulce ${index + 1}`}
              width={520}
              height={520}
              className="aspect-square w-full rounded-3xl object-cover"
            />
          ))}
        </div>
        <p className="text-xs text-dulce-cacao/70">
          Cada respuesta viene con fotos reales de entregas recientes. Si necesitas evidencia adicional,
          escríbenos y enviamos capturas de bocetos, empaques y reseñas completas.
        </p>
      </section>

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

      <section className="rounded-3xl bg-white/85 p-6 shadow">
        <h2 className="text-2xl font-bold text-dulce-cacao">¿No ves tu duda?</h2>
        <p className="mt-2 text-sm text-dulce-cacao/80">
          Escríbele directo a Anjury con audio, nota de voz o video. Amamos recibir referencias
          detalladas y responder con tips personalizados.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold">
          <Link href="/contacto" className="rounded-full bg-dulce-pink px-4 py-2 text-white">
            Abrir formulario
          </Link>
          <a
            href="https://wa.me/584247022039"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-dulce-cacao/30 px-4 py-2 text-dulce-cacao"
          >
            WhatsApp inmediato
          </a>
        </div>
      </section>

      <RainbowCta
        title="¿Listo para asegurar tu fecha?"
        description="Haz clic para hablar con Anjury y confirmar disponibilidad en agenda."
      />
    </div>
  );
}
