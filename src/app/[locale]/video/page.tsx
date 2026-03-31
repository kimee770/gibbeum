"use client";

import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { useConsultationModal } from "@/context/ConsultationModalContext";

/* ─────────────────────────────────────────
   Types & Data
───────────────────────────────────────── */
type VideoCategory =
  | "All"
  | "Surgical Technique"
  | "Patient Stories"
  | "Education"
  | "Recovery";

type VideoItem = {
  category: Exclude<VideoCategory, "All">;
  duration: string;
  views: string;
  title: string;
  description: string;
};

const TABS: VideoCategory[] = [
  "All",
  "Surgical Technique",
  "Patient Stories",
  "Education",
  "Recovery",
];

const VIDEOS: VideoItem[] = [
  {
    category: "Surgical Technique",
    duration: "12:45",
    views: "15.2K",
    title: "Dr. Kang Explains the Kang Repair Technique",
    description: "A comprehensive overview of our mesh-free surgical approach",
  },
  {
    category: "Patient Stories",
    duration: "8:30",
    views: "8.7K",
    title: "Patient Success Story: John from Australia",
    description:
      "Hear about John's journey from chronic pain to full recovery",
  },
  {
    category: "Education",
    duration: "10:15",
    views: "12.4K",
    title: "Understanding Mesh Complications",
    description: "Medical explanation of common mesh-related issues",
  },
  {
    category: "Education",
    duration: "6:20",
    views: "9.8K",
    title: "Virtual Hospital Tour",
    description: "Take a look at our state-of-the-art facilities",
  },
  {
    category: "Recovery",
    duration: "9:40",
    views: "11.3K",
    title: "Post-Surgery Recovery Tips",
    description: "Essential guidance for optimal recovery outcomes",
  },
  {
    category: "Surgical Technique",
    duration: "14:25",
    views: "13.9K",
    title: "Mesh Removal Surgery Explained",
    description: "How we safely remove problematic mesh implants",
  },
];

/* ─────────────────────────────────────────
   Thumbnail component (gradient + play)
───────────────────────────────────────── */
function VideoThumbnail({
  duration,
  size = "sm",
}: {
  duration: string;
  size?: "lg" | "sm";
}) {
  const playSize = size === "lg" ? "size-[80px]" : "size-16";
  const iconSize = size === "lg" ? "size-9" : "size-7";
  const playIcon =
    size === "lg"
      ? "/assets/video/icon-play-lg.svg"
      : "/assets/video/icon-play-sm.svg";

  return (
    <div
      className="relative w-full aspect-video flex items-center justify-center"
      style={{
        background:
          "linear-gradient(150.5deg, rgba(0,71,171,0.2) 0%, rgba(0,71,171,0.1) 100%)",
      }}
    >
      {/* Play button */}
      <div
        className={`${playSize} rounded-full bg-white/20 flex items-center justify-center pl-1`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={playIcon} alt="Play" className={`${iconSize} object-contain`} />
      </div>
      {/* Duration badge */}
      <div className="absolute bottom-3 right-3 bg-black/70 rounded-[4px] px-2 py-[3px]">
        <span className="text-white text-[12px] leading-[16px] font-normal">
          {duration}
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Category Badge
───────────────────────────────────────── */
function CategoryBadge({ label }: { label: string }) {
  return (
    <div className="bg-neutralgray-200 group-hover:bg-neutralgray-50 rounded-[4px] px-2 py-[4.5px] inline-flex self-start transition-colors duration-200">
      <span className="text-neutralgray-700 text-[12px] leading-[16px] whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────
   Featured Video Card (horizontal)
───────────────────────────────────────── */
function FeaturedVideo() {
  return (
    <div className="bg-white rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row">
      {/* Thumbnail */}
      <div className="w-full md:w-1/2 shrink-0">
        <VideoThumbnail duration="15:30" size="lg" />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-4 justify-center p-6 xl:px-12 xl:py-10">
        {/* Featured badge */}
        <div className="bg-blue-700/10 rounded-full px-3 py-[4px] inline-flex self-start">
          <span className="text-blue-700 text-[14px] leading-[20px]">
            Featured
          </span>
        </div>

        <h3 className="font-bold text-neutralgray-900 text-[length:var(--text-h3)] leading-[1.25]">
          Understanding the Kang Repair Advantage
        </h3>

        <p className="text-neutralgray-700 text-[length:var(--text-body-m)] leading-[1.5]">
          Dr. Kang provides an in-depth explanation of why our mesh-free
          technique achieves superior outcomes compared to traditional mesh
          repairs.
        </p>

        <div className="flex gap-6 items-center">
          <div className="flex gap-[6px] items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/video/icon-clock.svg"
              alt=""
              className="size-4"
            />
            <span className="text-neutralgray-500 text-[14px] leading-[20px]">
              15:30
            </span>
          </div>
          <div className="flex gap-[6px] items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/video/icon-eye.svg" alt="" className="size-4" />
            <span className="text-neutralgray-500 text-[14px] leading-[20px]">
              23.5K views
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Video Card (grid item)
───────────────────────────────────────── */
function VideoCard({ video }: { video: VideoItem }) {
  return (
    <div className="group bg-white hover:bg-blue-50 rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col cursor-pointer transition-colors duration-200">
      <VideoThumbnail duration={video.duration} size="sm" />

      <div className="flex flex-col gap-3 p-6">
        <CategoryBadge label={video.category} />

        <h4 className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.4] tracking-[-0.2px]">
          {video.title}
        </h4>

        <p className="text-neutralgray-700 text-[length:var(--text-body-s)] leading-[1.45]">
          {video.description}
        </p>

        <div className="flex gap-[6px] items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/video/icon-eye.svg" alt="" className="size-[14px]" />
          <span className="text-neutralgray-500 text-[14px] leading-[20px]">
            {video.views}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Filter Tabs
   - Desktop (xl+): 전체 너비 균등 분배 pill tabs
   - Mobile/Tablet (< xl): 드롭다운 select
───────────────────────────────────────── */
function FilterTabs({
  active,
  onChange,
}: {
  active: VideoCategory;
  onChange: (tab: VideoCategory) => void;
}) {
  return (
    <>
      {/* ── Desktop tabs (xl 이상) ── */}
      <div className="hidden xl:block">
        <div className="bg-neutralgray-300 rounded-[100px] p-2 flex gap-2 w-full">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => onChange(tab)}
              className={`flex-[1_0_0] min-w-0 h-10 rounded-[80px] px-6 py-2 font-bold text-[length:var(--text-body-l)] leading-[1.45] text-center whitespace-nowrap transition-colors ${
                active === tab
                  ? "bg-blue-700 text-neutralgray-50"
                  : "bg-neutralgray-50 text-neutralgray-600 hover:bg-blue-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ── Mobile/Tablet 커스텀 드롭다운 (xl 미만) ── */}
      <div className="xl:hidden">
        <MobileDropdown active={active} onChange={onChange} />
      </div>
    </>
  );
}

/* ─────────────────────────────────────────
   Mobile Custom Dropdown
───────────────────────────────────────── */
function MobileDropdown({
  active,
  onChange,
}: {
  active: VideoCategory;
  onChange: (tab: VideoCategory) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 닫기
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <div className="bg-neutralgray-300 rounded-[100px] p-2">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full bg-neutralgray-50 h-10 rounded-[80px] px-4 flex items-center justify-between gap-2"
        >
          <span className="font-bold text-blue-700 text-[length:var(--text-body-m)] leading-[1.45]">
            {active}
          </span>
          {/* Chevron */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="#212121"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 bg-white border border-neutralgray-300 rounded-[8px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] p-2 flex flex-col gap-1">
          {TABS.map((tab) => {
            const isActive = active === tab;
            return (
              <button
                key={tab}
                onClick={() => { onChange(tab); setOpen(false); }}
                className={`w-full h-9 flex items-center pl-3 rounded-[4px] text-left transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-neutralgray-800 hover:bg-neutralgray-200"
                }`}
              >
                <span className="text-[length:var(--text-body-m)] leading-[1.25]">
                  {tab}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   CTA Banner
───────────────────────────────────────── */

const ICON_MEDICAL_RECORD =
  "https://www.figma.com/api/mcp/asset/036b858e-d03e-42d7-bb82-ab7dad593c70";
const ICON_STETHOSCOPE =
  "https://www.figma.com/api/mcp/asset/d2ebf98e-6473-4947-b3e6-9f43c5d45706";

function CtaBanner() {
  const { openModal } = useConsultationModal();
  return (
    <div
      className="relative overflow-hidden rounded-[12px] px-6 py-10 xl:py-[48px] flex flex-col items-center gap-4 xl:gap-6 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(73,158,242,1) 0%, rgba(47,122,220,1) 100%)",
      }}
    >
      {/* Decorative left: medical record */}
      <div
        className="absolute left-[-17px] top-[50%] size-[272px] opacity-30 pointer-events-none select-none hidden md:block"
        style={{ transform: "translateY(-50%) rotate(21.08deg)" }}
      >
        <div className="relative size-full overflow-hidden">
          <div className="absolute inset-[9.38%_17.71%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ICON_MEDICAL_RECORD}
              alt=""
              className="absolute block max-w-none size-full"
            />
          </div>
        </div>
      </div>

      {/* Decorative right: stethoscope */}
      <div
        className="absolute right-0 top-[50%] size-[232px] opacity-30 pointer-events-none select-none hidden md:block"
        style={{ transform: "translateY(-50%) rotate(-30deg)" }}
      >
        <div className="relative size-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ICON_STETHOSCOPE}
            alt=""
            className="absolute block max-w-none size-full"
          />
        </div>
      </div>

      <h3 className="font-bold text-neutralgray-50 text-[length:var(--text-h3)] leading-[1.25] text-center z-10">
        Ready to Start Your Journey?
      </h3>
      <p className="text-neutralgray-50 text-[length:var(--text-body-l)] leading-[1.55] text-center tracking-[-0.2px] z-10 max-w-[700px]">
        Schedule a free consultation to discuss your specific case with our
        medical team
      </p>

      <button
        onClick={openModal}
        className="z-10 bg-blue-700 hover:bg-blue-800 transition-colors px-6 py-4 rounded-[8px] shrink-0 mt-2"
      >
        <span className="font-bold text-neutralgray-50 text-[length:var(--text-h6)] tracking-[-0.3px] whitespace-nowrap">
          Get Free Consultation
        </span>
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────
   Main Videos Section
───────────────────────────────────────── */
function VideoSection() {
  const [activeTab, setActiveTab] = useState<VideoCategory>("All");

  const filtered =
    activeTab === "All"
      ? VIDEOS
      : VIDEOS.filter((v) => v.category === activeTab);

  return (
    <section className="bg-white py-[var(--spacing-xl)] px-6 md:px-10 xl:px-[150px]">
      <div className="max-w-[1216px] mx-auto flex flex-col gap-8 xl:gap-14">
        {/* Filter Tabs */}
        <FilterTabs active={activeTab} onChange={setActiveTab} />

        {/* Featured Video — shown only in "All" tab */}
        {activeTab === "All" && <FeaturedVideo />}

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
          {filtered.map((video) => (
            <VideoCard key={video.title} video={video} />
          ))}
        </div>

        {/* CTA Banner */}
        <CtaBanner />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function VideoLibraryPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="VIDEO LIBRARY"
          subtitle="The Mesh-Free Solution That Achieves the Impossible"
          padding="vtall"
        />
        <VideoSection />
      </main>
      <Footer />
    </>
  );
}
