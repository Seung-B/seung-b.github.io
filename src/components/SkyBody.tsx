"use client";

import { useEffect, useState } from "react";

function getSkyState() {
  const now = new Date();
  const hours = now.getHours() + now.getMinutes() / 60;

  const sunRise = 6;
  const sunSet = 18;
  const isSun = hours >= sunRise && hours < sunSet;

  let progress: number;
  if (isSun) {
    progress = (hours - sunRise) / (sunSet - sunRise);
  } else {
    const nightHours = hours >= sunSet ? hours - sunSet : hours + (24 - sunSet);
    const nightDuration = 24 - (sunSet - sunRise);
    progress = nightHours / nightDuration;
  }

  const angle = Math.PI * progress;
  const xPct = 10 + 80 * progress;
  const yPct = 75 - Math.sin(angle) * 60;

  return { isSun, xPct, yPct };
}

export default function SkyBody() {
  const [state, setState] = useState<{
    isSun: boolean;
    xPct: number;
    yPct: number;
  } | null>(null);

  useEffect(() => {
    setState(getSkyState());
    const interval = setInterval(() => setState(getSkyState()), 60000);
    return () => clearInterval(interval);
  }, []);

  if (!state) return null;

  const { isSun, xPct, yPct } = state;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${xPct}%`,
        top: `${yPct}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {isSun ? (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          className="opacity-15"
        >
          <defs>
            <radialGradient id="sun-glow">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="60%" stopColor="#fbbf24" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="40" cy="40" r="38" fill="url(#sun-glow)" />
          <circle cx="40" cy="40" r="12" fill="#f59e0b" opacity="0.6" />
          {[...Array(8)].map((_, i) => {
            const a = (Math.PI * 2 * i) / 8;
            const x1 = 40 + Math.cos(a) * 17;
            const y1 = 40 + Math.sin(a) * 17;
            const x2 = 40 + Math.cos(a) * 25;
            const y2 = 40 + Math.sin(a) * 25;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#f59e0b"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.5"
              />
            );
          })}
        </svg>
      ) : (
        <svg
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
          className="opacity-12"
        >
          <defs>
            <radialGradient id="moon-glow">
              <stop offset="0%" stopColor="#cbd5e1" />
              <stop offset="60%" stopColor="#cbd5e1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="35" cy="35" r="33" fill="url(#moon-glow)" />
          <circle cx="35" cy="35" r="11" fill="#94a3b8" opacity="0.5" />
          <circle cx="31" cy="35" r="9" fill="white" opacity="0.4" />
        </svg>
      )}
    </div>
  );
}
