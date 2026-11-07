"use client";

import { useEffect, useRef, useState, type PointerEvent, type RefObject } from "react";

/*
 * A small, subtle scroll indicator that replaces the native scrollbar.
 * Native thumbs scale with content length (a nearly-full-height bar when the
 * content is only slightly taller than the view); this one is a fixed short
 * magenta pill that slides to show position. Mouse users can still drag it.
 *
 * - No `target`: tracks the page (fixed to the right edge of the window).
 * - With `target`: tracks that scroll container; render it inside a
 *   `relative` parent that wraps (not inside) the scrolling element.
 */

const THUMB = 36; // px — fixed, short
const INSET = 6; // px gap from the top/bottom of the track

interface Metrics {
  scroll: number;
  max: number;
  track: number;
}

function readMetrics(el: HTMLElement | null): Metrics {
  if (el) {
    return { scroll: el.scrollTop, max: el.scrollHeight - el.clientHeight, track: el.clientHeight };
  }
  const doc = document.documentElement;
  return { scroll: window.scrollY, max: doc.scrollHeight - window.innerHeight, track: window.innerHeight };
}

export default function ScrollThumb({ target }: { target?: RefObject<HTMLElement | null> }) {
  const [thumb, setThumb] = useState({ top: INSET, visible: false });
  const drag = useRef<{ startY: number; startScroll: number } | null>(null);

  useEffect(() => {
    const el = target?.current ?? null;
    const source: HTMLElement | Window = el ?? window;

    const update = () => {
      const m = readMetrics(el);
      const range = m.track - INSET * 2 - THUMB;
      setThumb({
        visible: m.max > 4 && range > 0,
        top: INSET + (m.max > 0 ? (m.scroll / m.max) * Math.max(range, 0) : 0),
      });
    };

    update();
    source.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const observer = new ResizeObserver(update);
    observer.observe(el ?? document.body);
    if (el?.firstElementChild) observer.observe(el.firstElementChild);

    return () => {
      source.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, [target]);

  const scrollTo = (value: number) => {
    const scroller: HTMLElement | Window = target?.current ?? window;
    scroller.scrollTo({ top: value });
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { startY: event.clientY, startScroll: readMetrics(target?.current ?? null).scroll };
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    const m = readMetrics(target?.current ?? null);
    const range = m.track - INSET * 2 - THUMB;
    if (range <= 0) return;
    scrollTo(drag.current.startScroll + ((event.clientY - drag.current.startY) * m.max) / range);
  };

  const endDrag = () => {
    drag.current = null;
  };

  if (!thumb.visible) return null;

  return (
    <div
      aria-hidden="true"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className={`${target ? "absolute" : "fixed"} right-0.5 z-50 w-2 cursor-grab touch-none active:cursor-grabbing`}
      style={{ top: thumb.top, height: THUMB }}
    >
      <span className="mx-auto block h-full w-[3px] rounded-full bg-accent-bright/45 transition-colors hover:bg-accent-bright/85" />
    </div>
  );
}
