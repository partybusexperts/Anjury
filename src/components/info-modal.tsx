"use client";

import { useEffect, useState } from "react";

interface InfoModalProps {
  title: string;
  triggerLabel: string;
  children: React.ReactNode;
  tone?: "pink" | "mint" | "purple";
}

export function InfoModal({ title, triggerLabel, children, tone = "pink" }: InfoModalProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const toneClasses: Record<NonNullable<InfoModalProps["tone"]>, string> = {
    pink: "bg-dulce-pink text-white",
    mint: "bg-dulce-mint text-dulce-cacao",
    purple: "bg-dulce-purple text-white",
  };

  return (
    <>
      <button
        type="button"
        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold shadow ${toneClasses[tone]}`}
        onClick={() => setOpen(true)}
      >
        ℹ️ {triggerLabel}
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white/95 p-6 text-dulce-cacao shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-dulce-cacao/60">
                  Notas WOW Dulce
                </p>
                <h3 className="text-2xl font-bold">{title}</h3>
              </div>
              <button
                type="button"
                className="rounded-full bg-dulce-cacao/90 px-3 py-1 text-xs font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Cerrar ✕
              </button>
            </div>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-dulce-cacao/80">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
