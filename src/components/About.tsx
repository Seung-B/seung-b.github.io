"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { profile, education } from "@/data/content";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl font-bold text-slate-900 mb-12 text-center"
        >
          About
        </motion.h2>

        {/* Profile photo + Bio */}
        <div className="flex flex-col md:flex-row md:items-stretch items-center gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="shrink-0"
          >
            <img
              src="/images/profile.jpeg"
              alt={profile.name}
              className="w-52 rounded-xl object-cover border-2 border-slate-100 shadow-sm md:self-stretch"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              I am a Ph.D. student at{" "}
              <a
                href="https://www.unist.ac.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:underline"
              >
                {profile.affiliationFull}
              </a>{" "}
              ({profile.affiliation}), {profile.department}. My research focuses
              on building trustworthy and efficient machine learning systems,
              particularly in machine unlearning and federated learning.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Outside the lab, I love staying active — you can find me catching
              waves 🏄, sending bouldering routes 🧗, or playing pickup
              basketball 🏀.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Always happy to connect — whether it&apos;s a research
              collaboration, an interesting opportunity, or just a casual coffee
              chat ☕. Feel free to reach out anytime!
            </p>
          </motion.div>
        </div>

        {/* Education */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="text-xl font-semibold text-slate-800 mb-6 text-center"
        >
          Education
        </motion.h3>

        <div className="space-y-4">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.4 + i * 0.12,
                ease: "easeOut",
              }}
              className="text-center"
            >
              <div className="inline-block bg-white border border-slate-200 rounded-lg px-6 py-4 hover:border-[var(--color-primary-light)] transition-colors">
                <p className="font-semibold text-slate-800">
                  {edu.degree} in {edu.field}
                </p>
                <p className="text-sm text-slate-500">
                  {edu.school} · {edu.period}
                  {edu.advisor && ` · Advisor: ${edu.advisor}`}
                  {edu.coadvisor && `, ${edu.coadvisor} (co-advisor)`}
                </p>
                {edu.honors && (
                  <p className="text-xs text-slate-400 mt-1">
                    <em>{edu.honors}</em>
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
