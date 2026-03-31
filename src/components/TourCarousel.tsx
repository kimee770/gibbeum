"use client";

import Image from "next/image";
import { useRef } from "react";

export type TourItem = {
  tag: string;
  tagBg: string;
  tagText: string;
  img: string;
  name: string;
  desc: string;
  bullets: { bold: string; rest: string }[];
  subway: string;
  time: string;
};

function TourCard({ tour }: { tour: TourItem }) {
  return (
    <div className="bg-white border border-neutralgray-400 rounded-[16px] flex flex-col items-start w-[270px] md:w-[376px] shrink-0 pb-8">
      {/* Photo */}
      <div className="relative h-[152px] w-full rounded-tl-[16px] rounded-tr-[16px] overflow-hidden bg-neutralgray-100">
        <Image src={tour.img} alt={tour.name} fill className="object-cover" />
        <span
          className="absolute top-[15px] left-[15px] text-[12px] font-bold uppercase tracking-[0.3px] leading-[16px] px-3 py-1 rounded-full whitespace-nowrap"
          style={{ backgroundColor: tour.tagBg, color: tour.tagText }}
        >
          {tour.tag}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-6 pt-6 px-6 w-full">
        <div className="flex flex-col gap-[11px]">
          <p className="font-bold text-neutralgray-900 text-[length:var(--text-h5)] leading-[1.25] tracking-[-0.3px]">
            {tour.name}
          </p>
          <p className="italic text-neutralgray-500 text-[length:var(--text-body-l)] leading-[1.45]">
            {tour.desc}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {tour.bullets.map((b, i) => (
            <div key={i} className="flex gap-2 items-start">
              <div className="shrink-0 mt-[10px]">
                <div className="rounded-full size-[6px] bg-blue-400" />
              </div>
              <p className="flex-1 text-neutralgray-900 text-[length:var(--text-body-m)] leading-[1.4]">
                <strong className="font-bold">{b.bold}</strong>
                {b.rest}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-neutralgray-400 pt-6 flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <Image
              src="/assets/patient/icon-subway.svg"
              alt=""
              width={16}
              height={16}
              className="shrink-0"
            />
            <p className="text-neutralgray-500 text-[length:var(--text-body-m)] leading-[1.35]">
              {tour.subway}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src="/assets/patient/icon-clock.svg"
              alt=""
              width={16}
              height={16}
              className="shrink-0"
            />
            <p className="text-neutralgray-500 text-[length:var(--text-body-m)] leading-[1.35]">
              {tour.time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TourCarousel({ tours }: { tours: TourItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    // card width + gap (376 + 24 = 400 on md+, 320 + 24 = 344 on mobile)
    const cardW = el.querySelector("div")?.clientWidth ?? 376;
    el.scrollBy({ left: dir === "next" ? cardW + 24 : -(cardW + 24), behavior: "smooth" });
  };

  const btnClass =
    "hidden xl:flex absolute top-1/2 -translate-y-1/2 z-10 size-10 bg-[#fafafa] border border-black/[0.08] rounded-full items-center justify-center shadow-[0px_6px_12px_0px_rgba(171,190,209,0.3)] hover:bg-white transition-colors shrink-0";

  return (
    <div className="relative">
      {/* Left arrow */}
      <button
        onClick={() => scroll("prev")}
        className={`${btnClass} -left-14`}
        aria-label="Previous"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M12.5 15L7.5 10L12.5 5"
            stroke="#212121"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Scroll container — scrollbar hidden */}
      <div
        ref={scrollRef}
        className="overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex gap-2" style={{ width: "max-content" }}>
          {tours.map((tour) => (
            <TourCard key={tour.name} tour={tour} />
          ))}
        </div>
      </div>

      {/* Right arrow */}
      <button
        onClick={() => scroll("next")}
        className={`${btnClass} -right-14`}
        aria-label="Next"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M7.5 5L12.5 10L7.5 15"
            stroke="#212121"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
