"use client";

import { useState, useEffect, useCallback } from "react";
import { useConsultationModal } from "@/context/ConsultationModalContext";

/* ─── Assets ──────────────────────────────────────────── */
const BG_SURGERY  = "/assets/hero/bg-surgery.jpg";
const BG_STATS    = "/assets/hero/bg-stats.jpg?v=2";
const BG_DOCTORS  = "/assets/hero/bg-doctors.jpg?v=2";
const IMG_DOCTORS = "/assets/hero/img-doctors.jpg?v=2";
const BADGE_1     = "/assets/hero/badge-certified1.png";
const BADGE_2     = "/assets/hero/badge-certified2.png";
const ICON_RECURRENCE  = "/assets/hero/icon-recurrence.svg?v=2";
const ICON_PAIN        = "/assets/hero/icon-pain.svg?v=2";
const ICON_EXPERIENCE  = "/assets/hero/icon-experience.svg?v=2";

const TOTAL = 3;

/* ─── Sub-components ──────────────────────────────────── */

/** 좌/우 측면 네비게이션 화살표 — Figma: 56×56 rounded-full, border-2 */
function NavArrow({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      className={`
        hidden md:flex
        absolute top-1/2 -translate-y-1/2 z-20
        ${direction === "prev"
          ? "left-4 md:left-6 xl:left-10 border-white/60"
          : "right-4 md:right-6 xl:right-10 border-white"}
        size-[44px] xl:size-[56px] rounded-full
        border-2 bg-white/5
        items-center justify-center
        hover:bg-white/20 transition-colors
      `}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        {direction === "prev" ? (
          <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}

/** 하단 페이지네이션 바 — Figma 6342:2001 */
function PaginationBar({
  current,
  total,
  paused,
  onPrev,
  onNext,
  onTogglePause,
}: {
  current: number;
  total: number;
  paused: boolean;
  onPrev: () => void;
  onNext: () => void;
  onTogglePause: () => void;
}) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
      <div className="flex items-center gap-[10px]" style={{ width: 293, height: 32 }}>

        {/* Prev button — Figma: border-[1.6px] border-white rounded-[6.4px], icon 19.2px */}
        <button
          onClick={onPrev}
          aria-label="Previous"
          className="shrink-0 size-[32px] rounded-[6.4px] border-[1.6px] border-white bg-[rgba(253,253,253,0.02)] hover:bg-white/15 transition-colors flex items-center justify-center"
        >
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Current slide number */}
        <span className="text-white font-bold text-[16px] leading-none tabular-nums w-[22px] text-center shrink-0">
          {String(current + 1).padStart(2, "0")}
        </span>

        {/* Progress track */}
        <div className="flex-1 h-[2px] bg-white/20 rounded-full relative overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-white rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((current + 1) / total) * 100}%` }}
          />
        </div>

        {/* Total slides */}
        <span className="text-white font-bold text-[16px] leading-none tabular-nums w-[22px] text-center shrink-0">
          {String(total).padStart(2, "0")}
        </span>

        {/* Pause / Play button — Figma: border-[1.6px] border-neutralgray-50, icon fills inner area via padding */}
        <button
          onClick={onTogglePause}
          aria-label={paused ? "Play" : "Pause"}
          className="shrink-0 size-[32px] rounded-[6.4px] border-[1.6px] border-neutralgray-50 hover:bg-white/15 transition-colors flex items-center justify-center"
        >
          {paused ? (
            <svg width="19" height="19" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg width="19" height="19" viewBox="0 0 24 24" fill="white">
              <rect x="5" y="3" width="5" height="18" rx="1" />
              <rect x="14" y="3" width="5" height="18" rx="1" />
            </svg>
          )}
        </button>

        {/* Next button — Figma: border-[1.6px] border-neutralgray-50 */}
        <button
          onClick={onNext}
          aria-label="Next"
          className="shrink-0 size-[32px] rounded-[6.4px] border-[1.6px] border-neutralgray-50 hover:bg-white/15 transition-colors flex items-center justify-center"
        >
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ─── Main ─────────────────────────────────────────────── */
export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused,  setPaused]  = useState(false);
  const { openModal } = useConsultationModal();

  const next = useCallback(() => setCurrent((c) => (c + 1) % TOTAL), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + TOTAL) % TOTAL), []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section
      className="relative overflow-hidden rounded-[16px] xl:rounded-[24px] h-[620px] xl:h-[892px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ══════════════════════════════════════════
          SLIDE 1 — Surgery / CTA
          ══════════════════════════════════════════ */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${current === 0 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        {/* BG photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={BG_SURGERY} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        {/* Gradient overlay — Figma: 116.47° */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(116.47deg, rgba(0,71,171,0.8) 19.75%, rgba(0,71,171,0.7) 50.31%, rgba(0,21,63,0) 80.87%)" }}
        />

        {/* Content — Mobile: top-aligned pt-6 pb-10 / Desktop: vertically centered */}
        <div className="relative h-full max-w-[1516px] mx-auto px-6 md:px-10 xl:px-[150px] flex flex-col pt-6 pb-10 gap-6 md:justify-center md:pt-0 md:pb-0 md:gap-0">

          {/* Certification badges — Mobile: justify-between / Desktop: gap-24px */}
          <div className="flex items-start justify-between md:justify-start md:gap-6 md:mb-7 shrink-0">
            <div className="flex items-center gap-[6.7px] md:gap-[10px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={BADGE_1} alt="" className="size-[37px] md:size-[56px] shrink-0 rounded-full" />
              <div className="text-white text-[6.7px] md:text-[10px] font-medium leading-[1.5]">
                <p>MINISTRY OF HEALTH &amp; WELFARE</p>
                <p className="font-bold">CERTIFIED MEDICAL INSTITUTION</p>
              </div>
            </div>
            <div className="flex items-center gap-[6.7px] md:gap-[10px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={BADGE_2} alt="" className="size-[37px] md:size-[56px] shrink-0 rounded-full" />
              <div className="text-white text-[6.7px] md:text-[10px] font-medium leading-[1.5]">
                <p>MINISTRY OF HEALTH &amp; WELFARE</p>
                <p className="font-bold">SURGERY SPECIALTY HOSPITAL</p>
              </div>
            </div>
          </div>

          {/* Headline block */}
          <div className="flex flex-col gap-6 shrink-0 w-full xl:max-w-[838px]">
            {/* Title — Mobile: 36px / Tablet: 38px / Desktop: 60px, Lora Bold */}
            <h1
              className="font-bold text-white leading-[1.15] text-[36px] md:text-[38px] xl:text-[60px]"
              style={{ fontFamily: "var(--font-lora)" }}
            >
              The World&apos;s Destination for<br />
              Mesh-Free Hernia Surgery
            </h1>

            {/* Subtitle — Mobile: 16px / Desktop: 20px, Inter Medium */}
            <p className="text-white/90 font-medium text-[16px] xl:text-[20px] leading-[1.4]">
              Permanent mesh pain is not your only option. At Gibbeum Hospital in Seoul, Korea, we specialize in high-volume, mesh-free hernia repair (Kang Repair) for patients from around the world.
            </p>

            {/* CTA buttons — Mobile: flex-col full width h-44px / Desktop: flex-row h-56px */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-4 shrink-0">
              <button
                onClick={openModal}
                className="
                  inline-flex items-center justify-center gap-2
                  bg-white text-blue-700 font-bold
                  text-[14px] md:text-[18px]
                  h-[44px] md:h-[56px] xl:h-[60px]
                  px-6 xl:px-[24px]
                  rounded-[8px]
                  shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]
                  hover:bg-blue-50 transition-colors
                  w-full md:w-auto whitespace-nowrap
                "
              >
                Get Free Online Consultation
                <svg className="w-[20px] h-[20px] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <a
                href="https://wa.me/821099479530"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center
                  bg-whatsapp border-2 border-whatsapp text-white font-bold
                  text-[14px] md:text-[18px]
                  h-[44px] md:h-[56px] xl:h-[60px]
                  px-6 xl:px-[26px]
                  rounded-[8px]
                  hover:opacity-90 transition-opacity
                  w-full md:w-auto
                "
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SLIDE 2 — Stats Cards
          ══════════════════════════════════════════ */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${current === 1 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        {/* BG photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={BG_STATS} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        {/* Gradient overlay — Figma: 207.82° */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(207.82deg, rgba(11,65,144,0.4) 23.64%, rgba(122,163,224,0.35) 50%, rgba(11,65,144,0.3) 76.36%)" }}
        />

        {/* ── Mobile: horizontal swipe cards (Figma: 255px each, pl-6, peek next card) ── */}
        <div className="md:hidden absolute inset-0 flex flex-col justify-center">
          <div
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory"
            style={{ paddingLeft: 24, paddingRight: 24, scrollPaddingLeft: 24, WebkitOverflowScrolling: "touch" }}
          >
            {[
              { icon: ICON_RECURRENCE, label: "Recurrence Rate", value: "<0.3%", sub: "(vs 2–10% with mesh)", desc: "based on our internal registry of over 35,000 mesh-free hernia repairs at Gibbeum Hospital." },
              { icon: ICON_PAIN, label: "Chronic Pain Rate", value: "<0.5%", sub: "(around 40× lower than typical mesh surgery)", desc: "in our single-center experience." },
              { icon: ICON_EXPERIENCE, label: "Experience", value: "35,000+", sub: "Mesh-Free Surgeries", desc: "performed by Dr. Kang and his team." },
            ].map((card) => (
              <div key={card.label} className="snap-start shrink-0 w-[255px] bg-blue-700 border border-white/20 rounded-[16px] px-4 py-6 flex flex-col items-center text-center gap-4">
                <div className="bg-white/20 rounded-full size-12 flex items-center justify-center shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.icon} alt="" className="size-6" />
                </div>
                <p className="font-bold text-white text-[18px] leading-[1.25]">{card.label}</p>
                <div>
                  <p className="font-bold text-skyblue text-[32px] leading-[1.25]">{card.value}</p>
                  <p className="text-skyblue/80 text-[14px] mt-1 leading-[1.45]">{card.sub}</p>
                </div>
                <p className="text-white/80 text-[14px] leading-[1.45]">{card.desc}</p>
              </div>
            ))}
            {/* trailing spacer so last card can scroll into view */}
            <div className="shrink-0 w-[1px]" />
          </div>
        </div>

        {/* ── Tablet/Desktop: 3-column grid ── */}
        <div className="hidden md:flex relative h-full max-w-[1516px] mx-auto px-10 xl:px-[150px] items-center">
          <div className="grid grid-cols-3 gap-5 xl:gap-8 w-full">

            {/* Card 1 — Recurrence Rate */}
            <div className="bg-blue-700 border border-white/20 rounded-[16px] px-4 py-6 xl:px-[33px] xl:py-[40px] flex flex-col items-center text-center gap-4 xl:gap-6">
              <div className="bg-white/20 rounded-full size-12 xl:size-[64px] flex items-center justify-center shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ICON_RECURRENCE} alt="" className="size-6 xl:size-[32px]" />
              </div>
              <p className="font-bold text-white text-[20px] xl:text-[24px] leading-[1.25]">Recurrence Rate</p>
              <div>
                <p className="font-bold text-skyblue text-[32px] xl:text-[64px] leading-[1.25]">&lt;0.3%</p>
                <p className="text-skyblue/80 text-[18px] mt-1 leading-[1.45]">(vs 2–10% with mesh)</p>
              </div>
              <p className="text-white/80 text-[18px] leading-[1.45]">
                based on our internal registry of over 35,000 mesh-free hernia repairs at Gibbeum Hospital.
              </p>
            </div>

            {/* Card 2 — Chronic Pain Rate */}
            <div className="bg-blue-700 border border-white/20 rounded-[16px] px-4 py-6 xl:px-[33px] xl:py-[40px] flex flex-col items-center text-center gap-4 xl:gap-6">
              <div className="bg-white/20 rounded-full size-12 xl:size-[64px] flex items-center justify-center shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ICON_PAIN} alt="" className="size-6 xl:size-[32px]" />
              </div>
              <p className="font-bold text-white text-[20px] xl:text-[24px] leading-[1.25]">Chronic Pain Rate</p>
              <div>
                <p className="font-bold text-skyblue text-[32px] xl:text-[64px] leading-[1.25]">&lt;0.5%</p>
                <p className="text-skyblue/80 text-[18px] mt-1 leading-[1.45]">(around 40× lower than typical mesh surgery)</p>
              </div>
              <p className="text-white/80 text-[18px] leading-[1.45]">
                in our single-center experience.
              </p>
            </div>

            {/* Card 3 — Experience */}
            <div className="bg-blue-700 border border-white/20 rounded-[16px] px-4 py-6 xl:px-[33px] xl:py-[40px] flex flex-col items-center text-center gap-4 xl:gap-6">
              <div className="bg-white/20 rounded-full size-12 xl:size-[64px] flex items-center justify-center shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ICON_EXPERIENCE} alt="" className="size-6 xl:size-[32px]" />
              </div>
              <p className="font-bold text-white text-[20px] xl:text-[24px] leading-[1.25]">Experience</p>
              <div>
                <p className="font-bold text-skyblue text-[32px] xl:text-[64px] leading-[1.25]">35,000+</p>
                <p className="text-skyblue/80 text-[18px] mt-1 leading-[1.45]">Mesh-Free Surgeries</p>
              </div>
              <p className="text-white/80 text-[18px] leading-[1.45]">
                performed by Dr. Kang and his team.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SLIDE 3 — Doctors Team
          ══════════════════════════════════════════ */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${current === 2 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        {/* BG photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={BG_DOCTORS} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        {/* Gradient overlay — Figma: 206.47° */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(206.47deg, rgba(0,71,171,0.64) 22.74%, rgba(0,21,63,0) 88.9%)" }}
        />

        {/* Doctor team photo
            Figma Mobile  : top-[346px] h-[273px] w-[541px] centered
            Figma Tablet  : bottom-0   h-[438px] w-[868px] centered
            Figma Desktop : top-[243px] h-[649px] w-[1286px] centered */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMG_DOCTORS}
          alt="Dr. Kang and his team"
          className="
            absolute left-1/2 -translate-x-1/2 object-cover object-top
            top-[270px] h-[350px] w-[541px]
            md:top-auto md:bottom-0 md:h-[438px] md:w-[868px]
            xl:bottom-auto xl:top-[243px] xl:h-[649px] xl:w-[1286px]
          "
        />

        {/* Text — top center
            Figma Mobile  : pt-[109px] max-w-[290px]
            Figma Tablet  : pt-[64px]  max-w-[423px]
            Figma Desktop : pt-[78px]  max-w-[838px] */}
        <div className="relative flex flex-col items-center text-center px-6 md:px-10 xl:px-[150px] pt-[109px] md:pt-[64px] xl:pt-[78px]">
          <h2
            className="font-bold text-white md:max-w-[423px] xl:max-w-[838px] w-full text-[24px] md:text-[38px] xl:text-[clamp(38px,3.9vw,60px)]"
            style={{
              fontFamily: "var(--font-lora)",
              lineHeight: "1.15",
            }}
          >
            <span className="whitespace-nowrap">Performed by Dr. Kang</span><br />and his team.
          </h2>
          <p
            className="text-white/90 font-medium mt-4 max-w-[290px] md:max-w-[423px] xl:max-w-[517px]"
            style={{
              fontSize: "clamp(13px, 1.4vw, 20px)",
              lineHeight: "clamp(20px, 2.2vw, 32px)",
            }}
          >
            We will continue to refine our procedures further until we can arrive at a zero recurrence rate with zero complications.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          Navigation — Left / Right arrows
          ══════════════════════════════════════════ */}
      <NavArrow direction="prev" onClick={prev} />
      <NavArrow direction="next" onClick={next} />

      {/* ══════════════════════════════════════════
          Pagination bar — bottom center
          ══════════════════════════════════════════ */}
      <PaginationBar
        current={current}
        total={TOTAL}
        paused={paused}
        onPrev={prev}
        onNext={next}
        onTogglePause={() => setPaused((v) => !v)}
      />
    </section>
  );
}
