"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { awards } from "@/data/content";

function ImageModal({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-8 cursor-pointer"
    >
      <motion.img
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
        src={src}
        alt={alt}
        className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
}

export default function Awards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [modalImage, setModalImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <>
      <section id="awards" className="py-32 px-6 bg-slate-50/50" ref={ref}>
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-slate-900 mb-10 text-center"
          >
            Awards & Honors
          </motion.h2>

          <div>
            {awards.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.45,
                  delay: 0.1 + i * 0.07,
                  ease: "easeOut",
                }}
                className="group relative py-3 px-4 rounded-lg hover:bg-cyan-50/50 transition-colors"
              >
                <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 bg-[var(--color-primary)] rounded-full transition-all duration-200" />
                <p className="font-medium text-slate-700">
                  {a.url ? (
                    <a
                      href={a.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--color-primary)] transition-colors"
                    >
                      {a.title} ↗
                    </a>
                  ) : a.image ? (
                    <button
                      onClick={() =>
                        setModalImage({ src: a.image!, alt: a.title })
                      }
                      className="hover:text-[var(--color-primary)] transition-colors text-left"
                    >
                      {a.title} 🖼
                    </button>
                  ) : (
                    a.title
                  )}
                </p>
                <p className="text-sm text-slate-400">
                  {a.awarder} · {a.date}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {modalImage && (
          <ImageModal
            src={modalImage.src}
            alt={modalImage.alt}
            onClose={() => setModalImage(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
