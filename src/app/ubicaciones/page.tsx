import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Ubicaciones WOW Dulce",
  description: "Consulta todas las ciudades atendidas por WOW Dulce en la página de Ubicaciones.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function UbicacionesRedirectPage() {
  redirect("/zonas");
}
