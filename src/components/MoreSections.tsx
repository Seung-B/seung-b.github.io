"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { patents, service, projects, teaching } from "@/data/content";

function HighlightItem({
  children,
  index,
  inView,
}: {
  children: React.ReactNode;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: 0.1 + index * 0.07, ease: "easeOut" }}
      className="group relative py-3 px-4 rounded-lg hover:bg-cyan-50/50 transition-colors"
    >
      <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 bg-[var(--color-primary)] rounded-full transition-all duration-200" />
      {children}
    </motion.div>
  );
}

function SectionBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="mb-16 last:mb-0">
      <motion.h3
        initial={{ opacity: 0, y: 15 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-xl font-semibold text-slate-800 mb-6 text-center"
      >
        {title}
      </motion.h3>
      {children}
    </div>
  );
}

export default function MoreSections() {
  const patentsRef = useRef(null);
  const patentsInView = useInView(patentsRef, { once: true, margin: "-60px" });

  const serviceRef = useRef(null);
  const serviceInView = useInView(serviceRef, { once: true, margin: "-60px" });

  const teachingRef = useRef(null);
  const teachingInView = useInView(teachingRef, { once: true, margin: "-60px" });

  const projectsRef = useRef(null);
  const projectsInView = useInView(projectsRef, { once: true, margin: "-60px" });

  return (
    <section id="more" className="py-32 px-6 bg-slate-50/50">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-slate-900 mb-14 text-center"
        >
          More
        </motion.h2>

        {/* Patents */}
        <SectionBlock title="Patents">
          <div ref={patentsRef}>
            {patents.map((p, i) => (
              <HighlightItem key={i} index={i} inView={patentsInView}>
                <p className="font-medium text-slate-700">{p.title}</p>
                <p className="text-sm text-slate-500">{p.inventors}</p>
                <p className="text-xs text-slate-400">
                  {p.number} · {p.year}
                </p>
              </HighlightItem>
            ))}
          </div>
        </SectionBlock>

        {/* Academic Service */}
        <SectionBlock title="Academic Service">
          <div ref={serviceRef}>
            {service.map((s, i) => (
              <HighlightItem key={i} index={i} inView={serviceInView}>
                <p className="font-medium text-slate-700">{s.role}</p>
                <p className="text-sm text-slate-400">{s.venue}</p>
              </HighlightItem>
            ))}
          </div>
        </SectionBlock>

        {/* Teaching */}
        <SectionBlock title="Teaching">
          <div ref={teachingRef}>
            {teaching.map((t, i) => (
              <HighlightItem key={i} index={i} inView={teachingInView}>
                <p className="font-medium text-slate-700">{t.course}</p>
                <p className="text-sm text-slate-500">
                  {t.role}, {t.institution}
                  {t.code && ` (${t.code})`}
                </p>
                <p className="text-xs text-slate-400">{t.period}</p>
              </HighlightItem>
            ))}
          </div>
        </SectionBlock>

        {/* Projects */}
        <SectionBlock title="Projects">
          <div ref={projectsRef}>
            {projects.map((p, i) => (
              <HighlightItem key={i} index={i} inView={projectsInView}>
                <p className="font-medium text-slate-700">{p.name}</p>
                <p className="text-sm text-slate-400">
                  {p.org} · {p.period}
                </p>
              </HighlightItem>
            ))}
          </div>
        </SectionBlock>
      </div>
    </section>
  );
}
