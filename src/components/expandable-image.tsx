"use client";

import Image, { type ImageProps } from "next/image";
import { useState, useEffect } from "react";

interface ExpandableImageProps extends ImageProps {
  caption?: string;
  frameClassName?: string;
}

export function ExpandableImage({
  caption,
  className = "",
  frameClassName = "",
  alt,
  src,
  ...imageProps
}: ExpandableImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={`Ampliar imagen: ${alt}`}
        onClick={() => setOpen(true)}
        className={`group relative block overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow transition hover:scale-[1.01] ${frameClassName}`}
      >
        <Image src={src} alt={alt} className={`object-cover ${className}`} {...imageProps} />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 opacity-0 transition group-hover:opacity-100" />
        <span className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
          Ver más
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-white/95 p-4 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white"
            >
              Cerrar ✕
            </button>
            <div className="relative h-[65vh] w-full">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="100vw"
                className="rounded-2xl object-contain"
              />
            </div>
            {caption && (
              <p className="mt-3 text-center text-sm font-semibold text-dulce-cacao">{caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
