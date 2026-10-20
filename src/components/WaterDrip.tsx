/**
 * WaterDrip — Phase 3B.2
 *
 * Renders two continuous drip streams positioned over the painted ceiling-leak
 * area already visible in archive-room.png (upper-centre, x ≈ 55–62%).
 *
 * Architecture:
 *  - Pure CSS keyframe animations (no JS timers, no deps).
 *  - Each "stream" is a narrow absolute container:
 *      • one `.trail` element — the thin wet streak at the origin point
 *      • three `.drop` elements — staggered with different animation-delay values
 *        so drops appear naturally irregular.
 *  - `animation-duration` is slightly varied per stream to prevent sync.
 *  - `prefers-reduced-motion` hides every element via the global rule in globals.css.
 *  - `aria-hidden="true"` + `pointer-events-none` → invisible to AT, no hit-testing.
 */

interface DripStreamProps {
  /** % distance from left of the scene-canvas */
  left: string;
  /** % distance from top of the scene-canvas — the drip origin */
  top: string;
  /** Height the droplet travels before fading (as a CSS length) */
  fallHeight: string;
  /** Base duration for one full drop cycle in seconds */
  baseDuration: number;
  /** Per-drop additional delay offsets in seconds [drop0, drop1, drop2] */
  delays: [number, number, number];
  /** Small horizontal wobble so drops aren't perfectly vertical */
  wobbleX?: string;
}

function DripStream({
  left,
  top,
  fallHeight,
  baseDuration,
  delays,
  wobbleX = "0px",
}: DripStreamProps) {
  const drops = delays.map((delay, i) => ({
    delay,
    // Vary durations slightly per drop for organic feel
    duration: baseDuration + i * 0.3,
  }));

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left,
        top,
        width: "3px",
        height: fallHeight,
        pointerEvents: "none",
        translate: wobbleX,
      }}
    >
      {/* Thin wet streak at the drip source */}
      {drops.map((drop, i) => (
        <span
          key={`trail-${i}`}
          className={`drip-trail-${i}`}
          style={{
            display: "block",
            position: "absolute",
            top: 0,
            left: "50%",
            translate: "-50%",
            width: "1.5px",
            height: "22%",
            background:
              "linear-gradient(to bottom, rgba(180,210,230,0.55), rgba(160,200,220,0.0))",
            borderRadius: "0 0 1px 1px",
            transformOrigin: "top center",
            animation: `drip-trail ${drop.duration}s ${drop.delay}s infinite linear`,
            willChange: "transform, opacity",
          }}
        />
      ))}

      {/* Falling droplets */}
      {drops.map((drop, i) => (
        <span
          key={`drop-${i}`}
          className={`droplet-${i}`}
          style={{
            display: "block",
            position: "absolute",
            top: 0,
            left: "50%",
            translate: "-50%",
            /* Teardrop shape: slightly taller than wide, rounded bottom */
            width: "3px",
            height: "6px",
            background:
              "radial-gradient(ellipse 60% 80% at 50% 30%, rgba(200,225,245,0.90), rgba(170,210,235,0.55))",
            borderRadius: "50% 50% 60% 60% / 40% 40% 60% 60%",
            boxShadow: "0 0 3px rgba(190,220,240,0.35)",
            animation: `droplet-fall ${drop.duration}s ${drop.delay}s infinite linear`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}

export default function WaterDrip() {
  return (
    /*
     * Outer wrapper sits inside .scene-canvas so coordinates track
     * with the background image on any viewport size.
     * z-index: 10 — above background & fluorescent overlay, below CRT (z-20).
     */
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 10,
        overflow: "visible",
      }}
    >
      {/*
       * Stream A — primary ceiling leak (aligns with painted drip streak
       * visible in archive-room.png at approximately x=56%, y=2%).
       * Drops travel ~50% of canvas height before fading.
       */}
      <DripStream
        left="56.4%"
        top="2%"
        fallHeight="52%"
        baseDuration={4.8}
        delays={[0, 1.7, 3.3]}
        wobbleX="-0.5px"
      />

      {/*
       * Stream B — secondary drip slightly right of Stream A, mimicking
       * the cluster of hanging pipes visible in the upper-centre of the image.
       * Slightly faster cycle and different stagger for natural irregularity.
       */}
      <DripStream
        left="59.2%"
        top="1%"
        fallHeight="48%"
        baseDuration={5.4}
        delays={[0.9, 2.6, 4.1]}
        wobbleX="0.5px"
      />
    </div>
  );
}
