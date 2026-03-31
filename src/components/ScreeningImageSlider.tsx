"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

const images = [
  {
    src: "/assets/screening/img-operating-room.png",
    alt: "State-of-the-art operating room",
  },
  {
    src: "/assets/screening/img-surgery.png",
    alt: "Advanced surgical procedure with robotic assistance",
  },
  {
    src: "/assets/screening/img-mri.jpg",
    alt: "MRI scanning equipment",
  },
  {
    src: "/assets/screening/img-lab.jpg",
    alt: "Modern diagnostic laboratory",
  },
  {
    src: "/assets/screening/img-endoscope.jpg",
    alt: "High-definition endoscopy equipment",
  },
];

const IMAGE_WIDTH_RATIO = 0.523; // 52.3% of container (637/1217 from Figma)
const GAP = 16;
const DRAG_THRESHOLD = 50; // px needed to trigger slide

export default function ScreeningImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [slotWidth, setSlotWidth] = useState<number | null>(null);

  // Drag state
  const dragStartX = useRef<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const dragging = useRef(false);

  // Measure container width
  useEffect(() => {
    const measure = () => {
      if (containerRef.current)
        setSlotWidth(containerRef.current.offsetWidth * IMAGE_WIDTH_RATIO);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const goTo = useCallback((i: number) => {
    const clamped = Math.max(0, Math.min(i, images.length - 1));
    setActiveIndex(clamped);
  }, []);

  // ─── Mouse events ──────────────────────────────────────────────
  const onMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
    dragging.current = true;
    setDragOffset(0);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current || dragStartX.current === null) return;
    setDragOffset(e.clientX - dragStartX.current);
  };

  const onMouseUp = (e: React.MouseEvent) => {
    if (!dragging.current || dragStartX.current === null) return;
    const diff = e.clientX - dragStartX.current;
    if (diff < -DRAG_THRESHOLD) goTo(activeIndex + 1);
    else if (diff > DRAG_THRESHOLD) goTo(activeIndex - 1);
    dragging.current = false;
    dragStartX.current = null;
    setDragOffset(0);
  };

  const onMouseLeave = () => {
    if (dragging.current) {
      dragging.current = false;
      dragStartX.current = null;
      setDragOffset(0);
    }
  };

  // ─── Touch events ──────────────────────────────────────────────
  const onTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
    dragging.current = true;
    setDragOffset(0);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragging.current || dragStartX.current === null) return;
    setDragOffset(e.touches[0].clientX - dragStartX.current);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!dragging.current || dragStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - dragStartX.current;
    if (diff < -DRAG_THRESHOLD) goTo(activeIndex + 1);
    else if (diff > DRAG_THRESHOLD) goTo(activeIndex - 1);
    dragging.current = false;
    dragStartX.current = null;
    setDragOffset(0);
  };

  // ─── Transform ─────────────────────────────────────────────────
  const baseTranslate = slotWidth != null ? -(activeIndex * (slotWidth + GAP)) : 0;
  const totalTranslate = baseTranslate + dragOffset;
  const isAnimating = !dragging.current;

  return (
    <div className="flex flex-col gap-[16px] items-center w-full select-none">
      {/* Slider track */}
      <div
        ref={containerRef}
        className="w-full overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex gap-[16px]"
          style={{
            transform: `translateX(${totalTranslate}px)`,
            transition: isAnimating ? "transform 500ms ease-in-out" : "none",
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="relative shrink-0 overflow-hidden"
              style={{
                width: slotWidth != null ? `${slotWidth}px` : "52%",
                aspectRatio: "637 / 425",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover pointer-events-none"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex items-center gap-[8px]">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={[
              "w-[12px] h-[12px] rounded-full transition-all duration-300 cursor-pointer",
              i === activeIndex
                ? "bg-gradient-to-b from-[#0076f1] to-[#0062c7]"
                : "bg-[#d5d7da] hover:bg-[#b0b5bc]",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}
