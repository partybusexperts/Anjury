"use client";

import Image, { type ImageProps } from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

interface ExpandableImageProps extends ImageProps {
  caption?: string;
  frameClassName?: string;
  containerClassName?: string;
}

export function ExpandableImage({
  caption,
  className = "",
  frameClassName = "",
  containerClassName = "",
  alt,
  src,
  ...imageProps
}: ExpandableImageProps) {
  const [open, setOpen] = useState(false);
  const previousOverflow = useRef<string | undefined>(undefined);

  const closeLightbox = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    };
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      previousOverflow.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (previousOverflow.current !== undefined) {
        document.body.style.overflow = previousOverflow.current;
      }
    };
  }, [open, closeLightbox]);

  return (
    <>
      <button
        type="button"
        aria-label={`Ampliar imagen: ${alt}`}
        onClick={() => setOpen(true)}
        className={`group relative block overflow-hidden rounded-2xl border border-white/60 bg-white/70 shadow transition hover:scale-[1.01] ${frameClassName} ${containerClassName}`}
      >
        <Image src={src} alt={alt} className={`object-cover ${className}`} {...imageProps} />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 opacity-0 transition group-hover:opacity-100" />
        <span className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
          Ver más
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Vista ampliada de ${alt}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[2.5rem] bg-white/95 p-5 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Cerrar foto ampliada"
              onClick={closeLightbox}
              className="absolute right-5 top-5 z-10 inline-flex items-center rounded-full bg-black/80 px-3 py-1 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              ✕ Cerrar
            </button>
            <div className="relative aspect-video w-full">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="100vw"
                className="rounded-2xl object-contain"
                priority={imageProps.priority}
              />
            </div>
            {caption && (
              <p className="mt-4 text-center text-sm font-semibold text-dulce-cacao">{caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
