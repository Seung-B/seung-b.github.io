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

        {/* Bio text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
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
            particularly in federated learning and machine unlearning.
          </p>
        </motion.div>

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
                </p>
                {(edu.gpa || edu.honors) && (
                  <p className="text-xs text-slate-400 mt-1">
                    {edu.gpa && `GPA: ${edu.gpa}`}
                    {edu.gpa && edu.honors && " · "}
                    {edu.honors && <em>{edu.honors}</em>}
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
