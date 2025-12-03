import Link from "next/link";
import { brandInfo, navLinks } from "@/data/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/50 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 text-dulce-cacao">
          <span className="rounded-full bg-dulce-pink px-3 py-1 text-xs font-semibold text-white shadow">
            WOW
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-extrabold tracking-tight">
              {brandInfo.name}
            </span>
            <span className="text-[11px] font-semibold uppercase text-dulce-cacao/70">
              Tortas · Dulces · Amor
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-dulce-cacao md:flex">
          {navLinks.map((nav) => (
            <Link key={nav.href} href={nav.href} className="hover:text-dulce-pink">
              {nav.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contacto"
            className="hidden rounded-full bg-dulce-pink px-4 py-2 text-sm font-semibold text-white shadow hover:scale-105 transition md:inline-flex"
          >
            Pedir mi torta
          </Link>
          <a
            href={brandInfo.phoneLink}
            target="_blank"
            className="inline-flex rounded-full border border-dulce-cacao/20 px-3 py-2 text-xs font-semibold text-dulce-cacao hover:bg-white"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
