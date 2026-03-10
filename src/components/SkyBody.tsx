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
  const x = 10 + 80 * progress;
  const y = 50 - Math.sin(angle) * 45;

  return { isSun, x, y };
}

export default function SkyBody() {
  const [state, setState] = useState<{ isSun: boolean; x: number; y: number } | null>(null);

  useEffect(() => {
    setState(getSkyState());
    const interval = setInterval(() => setState(getSkyState()), 60000);
    return () => clearInterval(interval);
  }, []);

  if (!state) return null;

  const { isSun, x, y } = state;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        {isSun ? (
          <g opacity="0.15">
            <defs>
              <radialGradient id="sun-glow">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="60%" stopColor="#fbbf24" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx={x} cy={y} r="8" fill="url(#sun-glow)" />
            <circle cx={x} cy={y} r="2.5" fill="#f59e0b" opacity="0.6" />
            {[...Array(8)].map((_, i) => {
              const a = (Math.PI * 2 * i) / 8;
              const x1 = x + Math.cos(a) * 3.5;
              const y1 = y + Math.sin(a) * 3.5;
              const x2 = x + Math.cos(a) * 5;
              const y2 = y + Math.sin(a) * 5;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#f59e0b"
                  strokeWidth="0.4"
                  strokeLinecap="round"
                  opacity="0.5"
                />
              );
            })}
          </g>
        ) : (
          <g opacity="0.12">
            <defs>
              <radialGradient id="moon-glow">
                <stop offset="0%" stopColor="#cbd5e1" />
                <stop offset="60%" stopColor="#cbd5e1" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx={x} cy={y} r="7" fill="url(#moon-glow)" />
            <circle cx={x} cy={y} r="2.2" fill="#94a3b8" opacity="0.5" />
            <circle cx={x - 0.8} cy={y} r="1.8" fill="white" opacity="0.4" />
          </g>
        )}
      </svg>
    </div>
  );
}
