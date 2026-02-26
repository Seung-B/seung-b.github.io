"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiGooglescholar, SiOrcid } from "react-icons/si";
import { profile } from "@/data/content";

const links = [
  { icon: FiMail, href: `mailto:${profile.email}`, label: "Email" },
  { icon: SiGooglescholar, href: profile.links.googleScholar, label: "Google Scholar" },
  { icon: SiOrcid, href: profile.links.orcid, label: "ORCID" },
  { icon: FiGithub, href: profile.links.github, label: "GitHub" },
  { icon: FiLinkedin, href: profile.links.linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-slate-100">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-6 mb-6"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-slate-400 hover:text-[var(--color-primary)] transition-colors"
            >
              <link.icon size={20} />
            </a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-slate-300"
        >
          © {new Date().getFullYear()} {profile.name}
        </motion.p>
      </div>
    </footer>
  );
}
