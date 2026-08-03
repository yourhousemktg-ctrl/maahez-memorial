"use client";

import { useEffect, useRef } from "react";

type ParallaxMediaProps = {
  src: string;
  alt: string;
  intensity?: number;
  loading?: "eager" | "lazy";
};

export function ParallaxMedia({
  src,
  alt,
  intensity = 54,
  loading = "lazy",
}: ParallaxMediaProps) {
  const mediaRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const media = mediaRef.current;
    if (!media || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const bounds = media.parentElement?.getBoundingClientRect();
      if (!bounds) return;

      const viewport = window.innerHeight;
      const progress = (viewport / 2 - (bounds.top + bounds.height / 2)) / (viewport + bounds.height);
      const shift = Math.max(-intensity, Math.min(intensity, progress * intensity * 2));
      media.style.setProperty("--parallax-shift", `${shift.toFixed(2)}px`);
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [intensity]);

  return (
    <span className="parallax-media" ref={mediaRef}>
      <img src={src} alt={alt} loading={loading} />
    </span>
  );
}
