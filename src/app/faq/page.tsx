import type { Metadata } from "next";
import { FaqClient } from "./FaqClient";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Resuelve dudas sobre pedidos, anticipación, entregas y opciones especiales de WOW Dulce.",
};

export default function FaqPage() {
  return <FaqClient />;
}
