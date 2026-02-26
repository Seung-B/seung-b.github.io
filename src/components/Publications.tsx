"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { publications, type Publication } from "@/data/content";
import { FiFileText, FiMonitor } from "react-icons/fi";

const tabs = [
  { key: "all", label: "All" },
  { key: "preprint", label: "Pre-print" },
  { key: "conference", label: "Conference" },
  { key: "journal", label: "Journal" },
] as const;

function PubCard({ pub, index }: { pub: Publication; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.96 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      className="group bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md hover:-translate-y-0.5 hover:border-l-[3px] hover:border-l-[var(--color-primary)] transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-600 mb-2 capitalize">
            {pub.category}
          </span>
          <h3 className="font-semibold text-slate-800 leading-snug mb-1">
            {pub.title}
          </h3>
          <p className="text-sm text-slate-500 mb-1">{pub.authors}</p>
          <p className="text-sm text-slate-400 italic">{pub.venue}, {pub.year}</p>
        </div>
      </div>

      {(pub.paperUrl || pub.slidesUrl) && (
        <div className="flex gap-3 mt-4">
          {pub.paperUrl && (
            <a
              href={pub.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
            >
              <FiFileText size={14} />
              Paper
            </a>
          )}
          {pub.slidesUrl && (
            <a
              href={pub.slidesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
            >
              <FiMonitor size={14} />
              Slides
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default function Publications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState<string>("all");

  const filtered =
    activeTab === "all"
      ? publications
      : publications.filter((p) => p.category === activeTab);

  return (
    <section id="publications" className="py-32 px-6 bg-slate-50/50" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-slate-900 mb-8 text-center"
        >
          Publications
        </motion.h2>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center gap-2 mb-10"
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
                activeTab === tab.key
                  ? "text-white"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {activeTab === tab.key && (
                <motion.div
                  layoutId="pub-tab"
                  className="absolute inset-0 bg-[var(--color-primary)] rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((pub, i) => (
              <PubCard key={pub.title} pub={pub} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
