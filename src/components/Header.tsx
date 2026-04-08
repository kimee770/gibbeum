"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useConsultationModal } from "@/context/ConsultationModalContext";

/* ─── Figma 에셋 경로 (public/assets/header/) ─────────────────── */
const LOGO_NEW_MARK     = "/assets/header/logo-new-mark.svg";
const LOGO_NEW_GIBBEUM  = "/assets/header/logo-new-gibbeum.svg";
const LOGO_NEW_HOSPITAL = "/assets/header/logo-new-hospital.svg";
const ICON_BOOK   = "/assets/header/icon-book.svg";
const ICON_VIDEO  = "/assets/header/icon-video.svg";
const ICON_CHAT_1 = "/assets/header/icon-chat1.svg";
const ICON_CHAT_2 = "/assets/header/icon-chat2.svg";
const ICON_CHAT_3 = "/assets/header/icon-chat3.svg";
const ICON_CHAT_4 = "/assets/header/icon-chat4.svg";
const ICON_SEARCH    = "/assets/header/icon-search.svg";
const ICON_HAMBURGER = "/assets/header/icon-hamburger.svg";

/* ─── Icon 컴포넌트 ────────────────────────────────────────────── */

/** 책 아이콘 — Educational Cartoons (24×24) */
function IconBook({ size = 24 }: { size?: number }) {
  return (
    <div className="overflow-clip relative shrink-0" style={{ width: size, height: size }}>
      <div className="absolute inset-[3.13%_0]">
        <img alt="" className="absolute block max-w-none size-full" src={ICON_BOOK} />
      </div>
    </div>
  );
}

/** 비디오 아이콘 — Video Library (24×24) */
function IconVideo({ size = 24 }: { size?: number }) {
  return (
    <div className="overflow-clip relative shrink-0" style={{ width: size, height: size }}>
      <div className="absolute inset-[3.13%_0_3.14%_0]">
        <img alt="" className="absolute block max-w-none size-full" src={ICON_VIDEO} />
      </div>
    </div>
  );
}

/** 채팅 아이콘 — Patient Forum (24×24, 4-part Figma SVG) */
function IconChat({ size = 24 }: { size?: number }) {
  return (
    <div className="relative overflow-clip shrink-0" style={{ width: size, height: size }}>
      <div className="absolute bottom-3/4 left-[18.75%] right-[37.5%] top-[18.75%]">
        <img alt="" className="absolute block max-w-none size-full" src={ICON_CHAT_1} />
      </div>
      <div className="absolute bottom-[59.38%] left-[18.75%] right-1/2 top-[34.38%]">
        <img alt="" className="absolute block max-w-none size-full" src={ICON_CHAT_2} />
      </div>
      <div className="absolute inset-[3.13%_18.75%_18.75%_0]">
        <img alt="" className="absolute block max-w-none size-full" src={ICON_CHAT_3} />
      </div>
      <div className="absolute bottom-[3.13%] left-1/4 right-0 top-[21.88%]">
        <img alt="" className="absolute block max-w-none size-full" src={ICON_CHAT_4} />
      </div>
    </div>
  );
}

/** 돋보기 — Search 버튼 (32×32) */
function IconSearch({ size = 32 }: { size?: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <img alt="" className="absolute block max-w-none size-full" src={ICON_SEARCH} />
    </div>
  );
}

/** 돋보기 소형 — 검색 입력창 내부 (16×16) */
function IconSearchSmall() {
  return (
    <div className="relative shrink-0 size-4">
      <img alt="" className="block size-full" src={ICON_SEARCH} />
    </div>
  );
}

/** 햄버거 메뉴 (32×32) */
function IconHamburger({ size = 32 }: { size?: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <img alt="" className="absolute block max-w-none size-full" src={ICON_HAMBURGER} />
    </div>
  );
}

/** X 닫기 아이콘 (32×32) — 메뉴 열렸을 때 */
function IconClose({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M8 8l16 16M24 8L8 24" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Logo ─────────────────────────────────────────────────────── */

/**
 * Gibbeum 로고 (Figma 에셋 기반)
 * - desktop/tablet: 276×25
 * - mobile: 220×20 (80% 스케일)
 */
function Logo({ mobile = false }: { mobile?: boolean }) {
  const scale = mobile ? 0.8 : 1;
  const W = 276 * scale;
  const H = 25 * scale;
  return (
    <div className="relative shrink-0" style={{ width: W, height: H }}>
      {/* 로고 마크 (smiley) */}
      <div
        className="absolute -translate-y-1/2"
        style={{ left: 0.14 * scale, top: "50%", width: 32.088 * scale, height: 24.599 * scale }}
      >
        <img alt="" className="absolute block max-w-none size-full" src={LOGO_NEW_MARK} />
      </div>
      {/* GIBBEUM */}
      <div
        className="absolute"
        style={{ left: 39 * scale, top: 3.18 * scale, width: 106.014 * scale, height: 18.08 * scale }}
      >
        <img alt="GIBBEUM HOSPITAL" className="absolute block max-w-none size-full" src={LOGO_NEW_GIBBEUM} />
      </div>
      {/* HOSPITAL */}
      <div
        className="absolute"
        style={{ left: 154 * scale, top: 3 * scale, width: 122 * scale, height: 18 * scale }}
      >
        <img alt="" className="absolute block max-w-none size-full" src={LOGO_NEW_HOSPITAL} />
      </div>
    </div>
  );
}

/* ─── Navigation Data ──────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "About Us",                 href: "/about" },
  { label: "Kang Repair",              href: "/kang-repair" },
  { label: "Mesh Removal",             href: "/mesh-removal" },
  { label: "Become a Patient",         href: "/patient" },
  { label: "Premium Health Screening", href: "/screening" },
  { label: "FAQ & Contact",            href: "/faq" },
];

/* ─── Main Header ──────────────────────────────────────────────── */
export default function Header() {
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [searchOpen,  setSearchOpen]  = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const { openModal } = useConsultationModal();
  const pathname = usePathname();

  /** 경로가 href와 일치하면 활성 텍스트 색상, 아니면 비활성 */
  const navTextColor = (href: string) =>
    pathname.includes(href)
      ? "text-[#FDFDFD]"
      : "text-[rgba(253,253,253,0.7)]";

  const closeAll     = () => { setMenuOpen(false); setSearchOpen(false); };
  const toggleMenu   = () => { setMenuOpen((v) => !v); setSearchOpen(false); };
  const toggleSearch = () => { setSearchOpen((v) => !v); setMenuOpen(false); };

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  return (
    /**
     * sticky — 스크롤해도 상단 고정
     * relative — 드롭다운이 absolute top-full 로 위치잡음
     */
    <header className="sticky top-0 z-50">

      {/* ══════════════════════════════════════════════════════════
          NAV BAR
          ┌ Mobile  (<768px)   h-[44px]  px-6   Logo(작음) + Hamburger
          ├ Tablet  (≥768px)   h-[80px]  px-10  Logo(전체) + Hamburger
          └ Desktop (≥1024px)  h-[80px]  px-10→xl:px-[144px]
                               Logo + 퀵아이콘 + Free Consultation + Search + Hamburger
          ══════════════════════════════════════════════════════════ */}
      <nav className="bg-[#0047AB] rounded-b-[16px] mb-[2px]">
        <div className="
          max-w-[1516px] mx-auto
          px-6 md:px-10 xl:px-[144px]
          h-[44px] md:h-[80px]
          flex items-center justify-between
        ">

          {/* ── 로고 ─────────────────────────────────────────── */}
          <Link href="/" onClick={closeAll} className="shrink-0">
            <span className="md:hidden"><Logo mobile /></span>
            <span className="hidden md:block"><Logo /></span>
          </Link>

          {/* ── 우측 메뉴 영역 ────────────────────────────────── */}
          <div className="flex items-center gap-6">

            {/* 퀵아이콘 3개 + Free Consultation: lg+(≥1024px) 전용 */}
            <div className="hidden lg:flex items-center gap-6">

              {/* 퀵메뉴 아이콘 (book / video / chat, 24×24, gap-4) */}
              <div className="flex items-center gap-4">
                <Link href="/cartoons" title="Educational Cartoons"
                  className="opacity-80 hover:opacity-100 transition-opacity">
                  <IconBook size={24} />
                </Link>
                <Link href="/video" title="Video Library"
                  className="opacity-80 hover:opacity-100 transition-opacity">
                  <IconVideo size={24} />
                </Link>
                <Link href="/forum" title="Patient Forum"
                  className="opacity-80 hover:opacity-100 transition-opacity">
                  <IconChat size={24} />
                </Link>
              </div>

              {/* Free Consultation 버튼 — bg:#086FED, rounded-[4px] */}
              <button
                onClick={() => { closeAll(); openModal(); }}
                className="
                  bg-[#086FED] text-white font-bold text-base leading-[1.25]
                  px-4 py-2 rounded
                  hover:bg-blue-800 transition-colors
                "
              >
                Free Consultation
              </button>
            </div>

            {/* 검색 인풋 — searchOpen 상태이고 lg+ 일 때만 표시 */}
            {searchOpen && (
              <div className="
                hidden lg:flex items-center gap-1
                border-2 border-[#E9EAEB] rounded-lg
                px-4 h-9 overflow-hidden
              ">
                <IconSearchSmall />
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="search..."
                  className="
                    bg-transparent w-[143px] text-base font-normal outline-none
                    text-neutralgray-50
                    placeholder:text-[rgba(253,253,253,0.5)]
                  "
                />
              </div>
            )}

            {/* 검색 토글 버튼 — lg+(≥1024px) 전용, 32×32 */}
            <button
              className="hidden lg:flex items-center justify-center size-8"
              onClick={toggleSearch}
              aria-label="Toggle search"
            >
              <IconSearch size={32} />
            </button>

            {/* 햄버거 / 닫기 버튼 — 항상 표시, 32×32 */}
            <button
              className="flex items-center justify-center size-8"
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <IconClose size={32} /> : <IconHamburger size={32} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════════════
          DROPDOWN PANEL (menuOpen 상태일 때)
          absolute top-full — nav 바로 아래에 위치
          ══════════════════════════════════════════════════════════ */}
      {menuOpen && (
        <>
          {/* 백드롭 — 바깥 클릭 시 닫기 */}
          <div className="fixed inset-0 z-40" onClick={closeAll} />

          <div className="absolute top-full left-0 right-0 z-50">
            <div className="
              bg-[#0047AB] rounded-[16px]
              border-t border-[#E5E7EB]
              shadow-[0px_8px_16px_0px_rgba(75,75,75,0.4)]
            ">
              <div className="max-w-[1516px] mx-auto">

                {/* ══ Desktop (lg+): 3컬럼, 검색바 없음 ══════════ */}
                <div className="hidden lg:block px-6 md:px-10 xl:px-[144px] py-10">
                  <div className="flex items-start justify-between">

                    {/* 컬럼1 — Navigation 링크 */}
                    <div className="flex flex-col gap-6 w-[240px]">
                      <p className="text-[#10D6FF] font-bold text-base leading-[1.25]">
                        Navigation
                      </p>
                      <div className="flex flex-col gap-4">
                        {NAV_LINKS.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={closeAll}
                            className="
                              text-[18px] font-normal leading-[1.45]
                              text-[rgba(253,253,253,0.7)]
                              hover:text-[#FDFDFD] transition-colors
                            "
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* 컬럼2 — Resources */}
                    <div className="flex flex-col gap-6 w-[240px]">
                      <p className="text-[#10D6FF] font-bold text-[16px] leading-6">
                        Resources
                      </p>
                      <div className="flex flex-col gap-6">
                        <Link href="/cartoons" onClick={closeAll}
                          className="flex items-start gap-3 group">
                          <IconBook size={24} />
                          <p className={`${navTextColor("/cartoons")} group-hover:text-[#FDFDFD] text-[18px] font-normal leading-[1.45] flex-1 transition-colors`}>
                            Educational Cartoons
                          </p>
                        </Link>
                        <Link href="/video" onClick={closeAll}
                          className="flex items-start gap-3 group">
                          <IconVideo size={24} />
                          <p className={`${navTextColor("/video")} group-hover:text-[#FDFDFD] text-[18px] font-normal leading-[1.45] flex-1 transition-colors`}>
                            Video Library
                          </p>
                        </Link>
                        <Link href="/forum" onClick={closeAll}
                          className="flex items-start gap-3 group">
                          <IconChat size={24} />
                          <p className={`${navTextColor("/forum")} group-hover:text-[#FDFDFD] text-[18px] font-normal leading-[1.45] flex-1 transition-colors`}>
                            Patient Forum
                          </p>
                        </Link>
                      </div>
                    </div>

                    {/* 컬럼3 — Get Started */}
                    <div className="flex flex-col gap-6 w-[288px]">
                      <p className="text-[#10D6FF] font-bold text-[16px] leading-6">
                        Get Started
                      </p>
                      <div className="flex flex-col gap-4">
                        <p className="text-white text-[16px] font-normal leading-[1.35]">
                          Ready to explore mesh-free hernia repair?
                        </p>
                        <button
                          onClick={() => { closeAll(); openModal(); }}
                          className="
                            block w-full bg-[#125CC3] text-white text-center
                            font-bold text-[20px] leading-[1.45] tracking-[-0.3px]
                            px-6 py-2 rounded-lg
                            hover:bg-blue-800 transition-colors
                          "
                        >
                          Free Consultation
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ══ Mobile/Tablet (<lg): 검색바 + 반응형 컬럼 ══ */}
                <div className="lg:hidden p-8 flex flex-col gap-6 md:gap-8">

                  {/* 검색바 */}
                  <div className="flex items-center gap-1 h-9 border-b border-[#E9EAEB] py-3">
                    <IconSearchSmall />
                    <input
                      type="text"
                      placeholder="search..."
                      className="
                        flex-1 bg-transparent text-base font-normal outline-none
                        text-neutralgray-50
                        placeholder:text-[rgba(253,253,253,0.5)]
                      "
                    />
                  </div>

                  {/* 컨텐츠 영역
                      - Mobile (<768px) : 세로 단일 컬럼
                      - Tablet (≥768px) : 3컬럼 가로 배치    */}
                  <div className="flex flex-col md:flex-row gap-8 md:gap-6">

                    {/* 컬럼1 — Navigation */}
                    <div className="flex flex-col gap-4 flex-1 min-w-0">
                      <p className="text-[#10D6FF] font-bold text-base leading-[1.25]">
                        Navigation
                      </p>
                      <div className="flex flex-col gap-4">
                        {NAV_LINKS.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={closeAll}
                            className="
                              text-white text-base font-normal leading-[1.45]
                              hover:text-white/80 transition-colors
                            "
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* 컬럼2 — Resources */}
                    <div className="flex flex-col gap-4 flex-1 min-w-0">
                      <p className="text-[#10D6FF] font-bold text-[16px] leading-6">
                        Resources
                      </p>
                      <div className="flex flex-col gap-4">
                        <Link href="/cartoons" onClick={closeAll}
                          className="flex items-center gap-3 group">
                          <IconBook size={24} />
                          <p className={`${navTextColor("/cartoons")} group-hover:text-[#FDFDFD] text-base font-normal leading-[1.45] whitespace-nowrap transition-colors`}>
                            Educational Cartoons
                          </p>
                        </Link>
                        <Link href="/video" onClick={closeAll}
                          className="flex items-center gap-3 group">
                          <IconVideo size={24} />
                          <p className={`${navTextColor("/video")} group-hover:text-[#FDFDFD] text-base font-normal leading-[1.45] whitespace-nowrap transition-colors`}>
                            Video Library
                          </p>
                        </Link>
                        <Link href="/forum" onClick={closeAll}
                          className="flex items-center gap-3 group">
                          <IconChat size={24} />
                          <p className={`${navTextColor("/forum")} group-hover:text-[#FDFDFD] text-base font-normal leading-[1.45] whitespace-nowrap transition-colors`}>
                            Patient Forum
                          </p>
                        </Link>
                      </div>
                    </div>

                    {/* 컬럼3 — Get Started */}
                    <div className="flex flex-col gap-4 flex-1 min-w-0">
                      <p className="text-[#10D6FF] font-bold text-[16px] leading-6">
                        Get Started
                      </p>
                      <div className="flex flex-col gap-4">
                        <p className="text-white text-sm font-normal leading-[1.35]">
                          Ready to explore mesh-free hernia repair?
                        </p>
                        <button
                          onClick={() => { closeAll(); openModal(); }}
                          className="
                            block w-full bg-[#125CC3] text-white text-center
                            font-bold text-[18px] leading-[1.45] tracking-[-0.3px]
                            px-6 py-2 rounded-lg
                            hover:bg-blue-800 transition-colors
                          "
                        >
                          Free Consultation
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              </div>
          </div>
        </>
      )}
    </header>
  );
}
