"use client";

/**
 * CrtScreenBackground — Phase 4
 *
 * Renders the approved static vintage CRT display artwork (`public/images/crt-screen-background.png`)
 * as a fixed CSS background for the digital portfolio environment.
 *
 * Architecture:
 *  - Fixed full-screen container (`fixed inset-0 pointer-events-none z-0`).
 *  - CSS `bg-cover bg-center` scales seamlessly across all viewport ratios.
 *  - Restrained dark vignette & tint overlays maintain WCAG contrast for text and navigation.
 *  - CRT bezel, curved phosphor tube geometry, and scanlines remain visibly atmospheric.
 */
export default function CrtScreenBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* 1. Vintage CRT Screen artwork */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/crt-screen-background.png')",
        }}
      />

      {/* 2. Deep retro-technical contrast overlay to preserve typography readability */}
      <div className="absolute inset-0 bg-[#0c0b0a]/72" />

      {/* 3. Radial bezel & tube curvature shadow vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(12,11,10,0.5)_65%,rgba(12,11,10,0.92)_100%)]" />

      {/* 4. Subtle ambient green phosphor glow reflecting active cathode tube state */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,rgba(74,246,38,0.04)_0%,transparent_75%)]" />
    </div>
  );
}
