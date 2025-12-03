import type { Metadata } from "next";
import { brandInfo } from "@/data/site-content";
import { ExpandableImage } from "@/components/expandable-image";
import { InfoModal } from "@/components/info-modal";

export const metadata: Metadata = {
  title: "Contacto / Pedido rápido",
  description:
    "Cuéntale a Anjury de WOW Dulce qué celebras y recibe una cotización personalizada de tortas y postres.",
};

const fields = [
  { name: "nombre", label: "Nombre", type: "text", required: true },
  { name: "telefono", label: "Teléfono / WhatsApp", type: "tel", required: true },
  { name: "email", label: "Email (opcional)", type: "email", required: false },
  { name: "ciudad", label: "Ciudad / Sector", type: "text", required: true },
  { name: "fecha", label: "Fecha del evento", type: "date", required: true },
  { name: "evento", label: "Tipo de evento", type: "text", required: true },
];

export default function ContactoPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-white/85 p-8 shadow">
        <p className="text-xs font-semibold uppercase text-dulce-cacao/60">
          Pedido rápido
        </p>
        <h1 className="mt-2 text-4xl font-bold text-dulce-cacao">Hablemos de tu torta</h1>
        <p className="mt-4 text-base text-dulce-cacao/80">
          Cuéntale a Anjury qué estás celebrando y te ayudamos a elegir tamaño,
          sabor y diseño perfecto. Responderemos por WhatsApp o email.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-3">
        <form className="space-y-4 rounded-3xl bg-white/90 p-6 shadow">
          {fields.map((field) => (
            <div key={field.name} className="space-y-2">
              <label htmlFor={field.name} className="text-sm font-semibold text-dulce-cacao">
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                className="w-full rounded-2xl border border-dulce-cacao/20 bg-white px-4 py-3 text-sm text-dulce-cacao focus:border-dulce-pink focus:outline-none"
              />
            </div>
          ))}
          <div className="space-y-2">
            <label htmlFor="pedido" className="text-sm font-semibold text-dulce-cacao">
              ¿Qué quieres pedir?
            </label>
            <select
              id="pedido"
              name="pedido"
              className="w-full rounded-2xl border border-dulce-cacao/20 bg-white px-4 py-3 text-sm text-dulce-cacao focus:border-dulce-pink"
            >
              <option>Torta personalizada</option>
              <option>Mesas de postres</option>
              <option>Dulces típicos</option>
              <option>Detalles dulces</option>
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="idea" className="text-sm font-semibold text-dulce-cacao">
              Cuéntanos tu idea
            </label>
            <textarea
              id="idea"
              name="idea"
              rows={4}
              className="w-full rounded-2xl border border-dulce-cacao/20 bg-white px-4 py-3 text-sm text-dulce-cacao focus:border-dulce-pink"
              placeholder="Temática, colores, sabores, cantidad de personas..."
            />
          </div>
          <p className="text-xs text-dulce-cacao/60">
            Este formulario es ilustrativo. Envía la información por WhatsApp o email para confirmar disponibilidad.
          </p>
          <button
            type="submit"
            className="w-full rounded-full bg-dulce-pink px-6 py-3 text-sm font-semibold text-white shadow-lg"
          >
            Enviar a WOW Dulce
          </button>
          <InfoModal title="Qué responderás" triggerLabel="Ver checklist" tone="mint">
            <p>
              Al recibir tu mensaje te contestaremos con horarios tentativos, propuesta de sabores y
              formas de pago disponibles.
            </p>
            <p>
              Si adjuntas fotos de referencia las guardamos en tu expediente para futuras órdenes.
            </p>
          </InfoModal>
        </form>

        <div className="space-y-6 rounded-3xl bg-white/90 p-6 shadow">
          <h2 className="text-2xl font-semibold text-dulce-cacao">También puedes escribir directo</h2>
          <ul className="space-y-3 text-sm text-dulce-cacao">
            <li>
              WhatsApp: {brandInfo.phone} <br />
              <a href={brandInfo.phoneLink} target="_blank" className="text-dulce-pink underline">
                Abrir chat inmediato
              </a>
            </li>
            <li>
              Email: <a href={`mailto:${brandInfo.email}`} className="text-dulce-pink underline">{brandInfo.email}</a>
            </li>
            <li>Ubicación: {brandInfo.location}</li>
          </ul>
          <div className="rounded-2xl bg-white/80 p-4 text-sm text-dulce-cacao/80">
            <p className="font-semibold">Checklist rápido</p>
            <ul className="list-disc pl-5">
              <li>Fecha y horario de entrega</li>
              <li>Sector o punto de referencia</li>
              <li>Número aproximado de invitados</li>
              <li>Foto de referencia o temática</li>
            </ul>
          </div>
          <p className="text-xs text-dulce-cacao/60">
            Nota: Pedimos 50% de abono para asegurar tu fecha. El resto se paga al entregar.
          </p>
        </div>

        <div className="space-y-4 rounded-3xl bg-white/90 p-6 shadow">
          <ExpandableImage
            src="/media/anjury6.png"
            alt="Muestras de tortas para contacto WOW Dulce"
            width={420}
            height={520}
            className="h-64 w-full rounded-2xl object-cover"
          />
          <ExpandableImage
            src="/media/anjury7.png"
            alt="Detalle dulce personalizado"
            width={420}
            height={520}
            className="h-64 w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="rounded-3xl bg-white/85 p-6 shadow">
        <h2 className="text-2xl font-bold text-dulce-cacao">Moodboard de pedidos recientes</h2>
        <p className="mt-2 text-sm text-dulce-cacao/70">
          Mientras respondes el formulario, inspírate con estas fotos reales. Todas están listas para
          ampliarse con un clic.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {[
            "/media/anjury8.png",
            "/media/anjury9.png",
            "/media/anjury10.png",
            "/media/anjury11.png",
          ].map((src, index) => (
            <ExpandableImage
              key={src}
              src={src}
              alt={`Moodboard de contacto WOW Dulce ${index + 1}`}
              width={420}
              height={420}
              className="aspect-square w-full rounded-3xl object-cover"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
