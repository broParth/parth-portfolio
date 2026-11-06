"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { projects } from "@/content/projects";

/*
 * Reticular graph view — a slowly rotating 3D orbit of the archive.
 * PARTH floats as a hub above a tilted floor of concentric rings; every
 * document node sits exactly on a ring and is linked back to the hub.
 * Depth (front/back of the orbit) scales size and brightness.
 */

const W = 260;
const H = 192;
const FLOOR = { x: 130, y: 116 }; // centre of the orbit floor
const HUB = { x: 130, y: 56 }; // PARTH, floating above the floor
const TILT = 0.36; // vertical squash of the rings (perspective)
const RINGS = { outer: 104, middle: 74, inner: 46 };
const SECONDS_PER_TURN = 90;

const SECTIONS = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];
const SATELLITES = 10;

interface Placed {
  x: number;
  y: number;
  depth: number; // 0 = back of orbit, 1 = front
}

function place(radius: number, angle: number): Placed {
  return {
    x: FLOOR.x + radius * Math.cos(angle),
    y: FLOOR.y + radius * Math.sin(angle) * TILT,
    depth: (Math.sin(angle) + 1) / 2,
  };
}

export default function ArchiveGraph({ pathname }: { pathname: string }) {
  const reduceMotion = useReducedMotion() ?? false;
  const [rotation, setRotation] = useState(0.35);
  const [paused, setPaused] = useState(false);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (reduceMotion || paused) return;
    let last = performance.now();
    const tick = (now: number) => {
      const delta = (now - last) / 1000;
      last = now;
      setRotation((r) => (r + (delta / SECONDS_PER_TURN) * Math.PI * 2) % (Math.PI * 2));
      frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [paused, reduceMotion]);

  const step = (Math.PI * 2) / SECTIONS.length;
  const sections = SECTIONS.map((section, i) => {
    const angle = rotation + i * step;
    return { ...section, angle, ...place(RINGS.outer, angle) };
  });

  const projectsAngle = sections[1].angle;
  const projectNodes = projects.map((project, i) => {
    // Trail slightly ahead of Projects so node and label never overlap it.
    const angle = projectsAngle + 0.75 + i * 0.45;
    return {
      href: `/projects/${project.slug}`,
      label: project.title,
      ...place(RINGS.inner, angle),
    };
  });

  const satellites = Array.from({ length: SATELLITES }, (_, i) =>
    place(RINGS.middle, -rotation * 0.6 + (i * Math.PI * 2) / SATELLITES)
  );

  const nodes = [
    ...sections.map((n) => ({ ...n, kind: "section" as const })),
    ...projectNodes.map((n) => ({ ...n, kind: "project" as const })),
  ].sort((a, b) => a.depth - b.depth);

  return (
    <div
      className="relative aspect-[260/192] w-full overflow-hidden rounded border border-line bg-[radial-gradient(ellipse_at_50%_70%,rgba(233,224,208,0.05),transparent_70%)]"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <svg viewBox={`0 0 ${W} ${H}`} className="h-full w-full" role="img" aria-label="Archive graph: documents linked to Parth">
        <defs>
          <radialGradient id="graph-hub" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="var(--color-paper)" />
            <stop offset="60%" stopColor="var(--color-ink)" />
            <stop offset="100%" stopColor="var(--color-accent)" />
          </radialGradient>
          <radialGradient id="graph-node" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="var(--color-paper)" />
            <stop offset="100%" stopColor="var(--color-ink-faint)" />
          </radialGradient>
          <radialGradient id="graph-node-active" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#ffd6db" />
            <stop offset="100%" stopColor="var(--color-accent-bright)" />
          </radialGradient>
        </defs>

        {/* Floor: concentric perspective rings + cross axes */}
        <g fill="none" className="stroke-line-strong" strokeWidth="0.7">
          {Object.values(RINGS).map((r) => (
            <ellipse key={r} cx={FLOOR.x} cy={FLOOR.y} rx={r} ry={r * TILT} />
          ))}
          <ellipse cx={FLOOR.x} cy={FLOOR.y} rx={RINGS.outer + 14} ry={(RINGS.outer + 14) * TILT} strokeDasharray="2 4" />
        </g>
        <g className="stroke-line" strokeWidth="0.6">
          <line x1={FLOOR.x - RINGS.outer - 14} y1={FLOOR.y} x2={FLOOR.x + RINGS.outer + 14} y2={FLOOR.y} />
          <line x1={FLOOR.x} y1={FLOOR.y - (RINGS.outer + 14) * TILT} x2={FLOOR.x} y2={FLOOR.y + (RINGS.outer + 14) * TILT} />
        </g>

        {/* Satellites on the middle ring */}
        <g className="fill-ink-faint">
          {satellites.map((s, i) => (
            <circle key={i} cx={s.x} cy={s.y} r={0.9 + s.depth * 0.9} opacity={0.25 + s.depth * 0.45} />
          ))}
        </g>

        {/* Hub shadow + mast */}
        <ellipse cx={FLOOR.x} cy={FLOOR.y} rx="14" ry={14 * TILT} className="fill-desk" opacity="0.8" />
        <line x1={HUB.x} y1={HUB.y} x2={FLOOR.x} y2={FLOOR.y} className="stroke-line-strong" strokeWidth="0.8" strokeDasharray="1.5 2.5" />

        {/* Spokes: hub → sections, projects node → project dossiers */}
        <g strokeWidth="0.8">
          {sections.map((n) => (
            <line
              key={n.href}
              x1={HUB.x}
              y1={HUB.y}
              x2={n.x}
              y2={n.y}
              className={pathname === n.href ? "stroke-accent-bright" : "stroke-ink-faint"}
              opacity={0.25 + n.depth * 0.45}
            />
          ))}
          {projectNodes.map((n) => (
            <line
              key={n.href}
              x1={sections[1].x}
              y1={sections[1].y}
              x2={n.x}
              y2={n.y}
              className={pathname === n.href ? "stroke-accent-bright" : "stroke-ink-faint"}
              opacity={0.3 + n.depth * 0.4}
            />
          ))}
        </g>

        {/* Hub */}
        <circle cx={HUB.x} cy={HUB.y} r="13" fill="none" className="stroke-accent-bright" strokeWidth="0.8" opacity="0.7" />
        <circle cx={HUB.x} cy={HUB.y} r="8" fill="url(#graph-hub)" />
        <text x={HUB.x} y={HUB.y - 18} textAnchor="middle" fontSize="9" fontWeight="700" letterSpacing="1.5" className="fill-ink font-mono">
          PARTH
        </text>

        {/* Document nodes, back to front */}
        {nodes.map((node) => {
          const active = pathname === node.href;
          const base = node.kind === "section" ? 3.4 : 2.6;
          const r = base + node.depth * 2.2;
          return (
            <Link key={node.href} href={node.href} aria-label={`Open ${node.label}`} className="group">
              <circle cx={node.x} cy={node.y} r="14" fill="transparent" />
              <ellipse cx={node.x} cy={node.y + r + 1.5} rx={r * 0.9} ry={r * 0.3} className="fill-desk" opacity="0.6" />
              {active && (
                <circle cx={node.x} cy={node.y} r={r + 3.5} fill="none" className="stroke-accent-bright" strokeWidth="0.8" />
              )}
              <circle
                cx={node.x}
                cy={node.y}
                r={r}
                fill={active ? "url(#graph-node-active)" : "url(#graph-node)"}
                opacity={0.55 + node.depth * 0.45}
              />
              <text
                x={node.x}
                y={node.y + r + 10}
                textAnchor="middle"
                fontSize={7.5 + node.depth * 1.5}
                opacity={0.55 + node.depth * 0.45}
                className={`font-mono transition-colors ${active ? "fill-accent-text" : "fill-ink-muted group-hover:fill-ink"}`}
              >
                {node.label}
              </text>
            </Link>
          );
        })}
      </svg>
    </div>
  );
}
