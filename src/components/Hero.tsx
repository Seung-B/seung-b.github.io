"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile, researchInterests } from "@/data/content";
import SkyBody from "./SkyBody";

function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const speed = deleting ? 40 : 80;

    if (!deleting && text === current) {
      const pause = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(pause);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const timer = setTimeout(() => {
      setText(
        deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <span>
      {text}
      <span className="animate-pulse text-[var(--color-primary)]">|</span>
    </span>
  );
}

const letterVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.05,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Hero() {
  const nameLetters = profile.name.split("");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Sun / Moon based on current time */}
      <SkyBody />

      {/* Subtle wave background */}
      <div className="absolute bottom-0 left-0 right-0 h-[25vh] min-h-40 overflow-hidden opacity-30 pointer-events-none">
        <svg
          className="absolute bottom-0 w-[200%]"
          style={{ animation: "wave-drift 20s linear infinite" }}
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
            fill="url(#wave-gradient)"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a5f3fc" />
              <stop offset="50%" stopColor="#67e8f9" />
              <stop offset="100%" stopColor="#a5f3fc" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="absolute bottom-0 w-[200%]"
          style={{ animation: "wave-drift 15s linear infinite reverse" }}
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C360,20 720,100 1080,40 C1260,20 1380,60 1440,80 L1440,120 L0,120 Z"
            fill="url(#wave-gradient-2)"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#bae6fd" />
              <stop offset="50%" stopColor="#7dd3fc" />
              <stop offset="100%" stopColor="#bae6fd" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="text-center z-10 px-6">
        {/* Name: stagger drop-in */}
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-slate-900 mb-4">
          {nameLetters.map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="inline-block"
              style={{ minWidth: letter === " " ? "0.3em" : undefined }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        {/* Affiliation: fade-up after name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
          className="text-xl md:text-2xl text-slate-500 font-light mb-8"
        >
          {profile.title} @{" "}
          <span className="text-[var(--color-primary)] font-normal">
            {profile.affiliation}
          </span>
        </motion.p>

        {/* Typewriter keywords */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="text-lg text-slate-400 font-light h-8"
        >
          <Typewriter words={researchInterests} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-12 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-slate-300 text-2xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
