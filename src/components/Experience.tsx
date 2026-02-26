"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/data/content";

function TimelineItem({
  item,
  index,
  isLeft,
  inView,
}: {
  item: (typeof experience)[0];
  index: number;
  isLeft: boolean;
  inView: boolean;
}) {
  return (
    <div
      className={`relative flex items-center ${
        isLeft ? "justify-end md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
      }`}
    >
      {/* Dot on the line */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: 0.3 + index * 0.2, duration: 0.3, ease: "backOut" }}
        className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--color-primary)] border-2 border-white shadow-sm z-10 hidden md:block"
      />

      {/* Card */}
      <motion.div
        initial={{
          opacity: 0,
          x: isLeft ? 40 : -40,
        }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{
          delay: 0.3 + index * 0.2,
          duration: 0.6,
          ease: "easeOut",
        }}
        className={`bg-white border border-slate-200 rounded-lg p-5 max-w-sm w-full hover:border-[var(--color-primary-light)] transition-colors ${
          isLeft ? "md:text-right" : "md:text-left"
        } text-center md:text-inherit`}
      >
        <p className="font-semibold text-slate-800">{item.position}</p>
        <p className="text-sm text-slate-500 mt-1">{item.organization}</p>
        <p className="text-xs text-[var(--color-primary)] font-medium mt-2">
          {item.period}
        </p>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-slate-900 mb-4 text-center"
        >
          Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-400 text-center mb-14 text-sm"
        >
          Research Journey
        </motion.p>

        <div ref={containerRef} className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-[var(--color-primary)] origin-top"
            />
          </div>

          <div className="space-y-10">
            {experience.map((item, i) => (
              <TimelineItem
                key={i}
                item={item}
                index={i}
                isLeft={i % 2 === 0}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
