"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useConsultationModal } from "@/context/ConsultationModalContext";

/* ─── 에셋 경로 ─────────────────────────────────────── */
// 로고
const LOGO_NEW_MARK     = "/assets/header/logo-new-mark.svg";
const LOGO_NEW_GIBBEUM  = "/assets/header/logo-new-gibbeum.svg";
const LOGO_NEW_HOSPITAL = "/assets/header/logo-new-hospital.svg";

// 유틸 아이콘
const ICON_GLOBE      = "/assets/footer/icon-globe.svg";
const ICON_ARROW_DOWN = "/assets/footer/icon-arrow-down.svg";
const ICON_EMAIL      = "/assets/footer/icon-email.svg";
const ICON_PHONE      = "/assets/footer/icon-phone.svg";
const ICON_WHATSAPP   = "/assets/footer/icon-whatsapp.svg";
const ICON_LOCATION   = "/assets/footer/icon-location.svg";

/* ─── 데이터 ─────────────────────────────────────────── */
const quickLinks = [
  { label: "FAQ & Contact",            href: "/faq" },
  { label: "Premium Health Screening", href: "/screening" },
  { label: "Become a Patient",         href: "/patient" },
  { label: "Mesh Removal",             href: "/mesh-removal" },
  { label: "Kang Repair",              href: "/kang-repair" },
  { label: "About Us",                 href: "/about" },
];

const resources = [
  { label: "Educational Cartoons", href: "/cartoons" },
  { label: "Video Library",        href: "/video" },
  { label: "Patient Forum",        href: "/forum" },
];

const contactItems = [
  { icon: ICON_EMAIL,    text: "international@gibbeum.com",  href: "mailto:international@gibbeum.com" },
  { icon: ICON_PHONE,    text: "+82-2-570-1479",              href: "tel:+8225701479" },
  { icon: ICON_WHATSAPP, text: "+82-10-9947-9530",            href: "https://wa.me/821099479530" },
  { icon: ICON_LOCATION, text: "Seoul, South Korea",          href: null },
];

/* ─── 서브 컴포넌트 ──────────────────────────────────── */

/** 푸터 로고 내부 — scale 파라미터로 크기 조절 */
function FooterLogoInner({ s }: { s: number }) {
  return (
    <div className="relative shrink-0" style={{ width: 276 * s, height: 25 * s }}>
      <div className="absolute -translate-y-1/2" style={{ left: 0.14 * s, top: "50%", width: 32.088 * s, height: 24.599 * s }}>
        <img alt="" className="absolute block max-w-none size-full" src={LOGO_NEW_MARK} />
      </div>
      <div className="absolute" style={{ left: 39 * s, top: 3.18 * s, width: 106.014 * s, height: 18.08 * s }}>
        <img alt="GIBBEUM HOSPITAL" className="absolute block max-w-none size-full" src={LOGO_NEW_GIBBEUM} />
      </div>
      <div className="absolute" style={{ left: 154 * s, top: 3 * s, width: 122 * s, height: 18 * s }}>
        <img alt="" className="absolute block max-w-none size-full" src={LOGO_NEW_HOSPITAL} />
      </div>
    </div>
  );
}

/** 푸터 로고 — 모바일: 100%, 데스크탑(md+): 90% */
function FooterLogo() {
  return (
    <>
      <div className="md:hidden"><FooterLogoInner s={1} /></div>
      <div className="hidden md:block"><FooterLogoInner s={0.9} /></div>
    </>
  );
}

/** 소셜 아이콘 버튼 40×40
 *  - 기본: text-blue-500 (#086FED) 아이콘
 *  - hover: bg-blue-500 + text-neutralgray-50 (#FDFDFD) 아이콘
 *  인라인 SVG + currentColor로 정확한 색상 제어
 */
function SocialButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        relative rounded-[8px] shrink-0 size-[40px]
        bg-[rgba(61,61,61,0.3)] hover:bg-blue-500
        text-blue-500 hover:text-neutralgray-50
        transition-colors
      "
    >
      <div className="relative flex flex-col items-start pt-[10px] px-[10px] size-full">
        <div className="relative shrink-0 w-full overflow-clip" style={{ height: 20 }}>
          {children}
        </div>
      </div>
    </a>
  );
}

/** Facebook 아이콘 — 인라인 SVG, currentColor */
function IconFacebook() {
  return (
    <div className="absolute bottom-[8.33%] left-[29.17%] right-1/4 top-[8.33%]">
      <div className="absolute inset-[-5%_-9.09%]">
        <svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" viewBox="0 0 10.8333 18.3333" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 0.833333H7.5C6.39493 0.833333 5.33512 1.27232 4.55372 2.05372C3.77232 2.83512 3.33333 3.89493 3.33333 5V7.5H0.833333V10.8333H3.33333V17.5H6.66667V10.8333H9.16667L10 7.5H6.66667V5C6.66667 4.77899 6.75446 4.56702 6.91074 4.41074C7.06702 4.25446 7.27899 4.16667 7.5 4.16667H10V0.833333Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

/** Instagram 아이콘 (3-part) — 인라인 SVG, currentColor */
function IconInstagram() {
  return (
    <>
      {/* 외곽 사각형 */}
      <div className="absolute inset-[8.33%]">
        <div className="absolute inset-[-5%]">
          <svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" viewBox="0 0 18.3333 18.3333" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3333 0.833333H5C2.69881 0.833333 0.833333 2.69881 0.833333 5V13.3333C0.833333 15.6345 2.69881 17.5 5 17.5H13.3333C15.6345 17.5 17.5 15.6345 17.5 13.3333V5C17.5 2.69881 15.6345 0.833333 13.3333 0.833333Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      {/* 원 */}
      <div className="absolute inset-[33.15%_33.15%_33.51%_33.51%]">
        <div className="absolute inset-[-12.5%]">
          <svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" viewBox="0 0 8.33334 8.33334" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.46395 3.67773C7.56679 4.37126 7.44833 5.07957 7.12541 5.70191C6.8025 6.32424 6.29157 6.8289 5.6653 7.14412C5.03904 7.45934 4.32932 7.56906 3.6371 7.45767C2.94489 7.34628 2.30542 7.01946 1.80965 6.52369C1.31388 6.02793 0.98706 5.38845 0.875672 4.69624C0.764285 4.00402 0.874004 3.2943 1.18922 2.66804C1.50444 2.04177 2.0091 1.53084 2.63144 1.20793C3.25377 0.885011 3.96208 0.76655 4.65562 0.869393C5.36305 0.974297 6.01799 1.30395 6.52369 1.80965C7.0294 2.31535 7.35905 2.97029 7.46395 3.67773Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      {/* 점 */}
      <div className="absolute inset-[27.08%_27.04%_72.92%_72.92%]">
        <div className="absolute inset-[-0.83px]">
          <svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" viewBox="0 0 1.675 1.66667" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.833333 0.833333H0.841667" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </>
  );
}

/** YouTube 아이콘 (2-part) — 인라인 SVG, currentColor */
function IconYouTube() {
  return (
    <>
      {/* 외곽 */}
      <div className="absolute inset-[20.56%_8.23%]">
        <div className="absolute inset-[-7.08%_-4.99%]">
          <svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" viewBox="0 0 18.3732 13.4441" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.26994 10.8887C0.687796 8.14139 0.687796 5.30262 1.26994 2.55534C1.34643 2.27635 1.49423 2.02207 1.69878 1.81751C1.90334 1.61295 2.15762 1.46516 2.43661 1.38867C6.90615 0.648221 11.4671 0.648221 15.9366 1.38867C16.2156 1.46516 16.4699 1.61295 16.6744 1.81751C16.879 2.02207 17.0268 2.27635 17.1033 2.55534C17.6854 5.30262 17.6854 8.14139 17.1033 10.8887C17.0268 11.1677 16.879 11.4219 16.6744 11.6265C16.4699 11.8311 16.2156 11.9788 15.9366 12.0553C11.4671 12.7959 6.90614 12.7959 2.43661 12.0553C2.15762 11.9788 1.90334 11.8311 1.69878 11.6265C1.49423 11.4219 1.34643 11.1677 1.26994 10.8887Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      {/* 재생 버튼 */}
      <div className="absolute inset-[37.5%_37.5%_37.5%_41.67%]">
        <div className="absolute inset-[-16.67%_-20%]">
          <svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" viewBox="0 0 5.83333 6.66667" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.833333 5.83333L5 3.33333L0.833333 0.833333V5.83333Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </>
  );
}

/* ─── 언어 선택 드롭다운 ─────────────────────────────── */

const LOCALES: { code: string; label: string }[] = [
  { code: "en", label: "English"  },
  { code: "zh", label: "中文"     },
  { code: "ar", label: "العربية"  },
  { code: "ru", label: "Русский"  },
];

function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const locale   = useLocale();
  const pathname = usePathname(); // e.g. "/en" or "/en/about"

  /** 현재 경로에서 locale prefix 교체 */
  const switchHref = (newLocale: string) => {
    // pathname이 "/" + locale 으로 시작하는 경우 교체, 아니면 prepend
    const withoutLocale = pathname.replace(new RegExp(`^/${locale}`), "") || "/";
    return `/${newLocale}${withoutLocale}`;
  };

  const currentLabel = LOCALES.find((l) => l.code === locale)?.label ?? "English";

  return (
    <div className="relative w-full">
      {/* 트리거 버튼 */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="
          flex gap-[8px] items-center w-full
          h-[36px] px-[12px]
          bg-[rgba(61,61,61,0.3)] hover:bg-[rgba(18,92,195,0.4)]
          rounded-[8px] cursor-pointer transition-colors
        "
      >
        <div className="relative shrink-0 size-[18px]">
          <img alt="" className="absolute block max-w-none size-full" src={ICON_GLOBE} />
        </div>
        <span className="flex-1 text-neutralgray-500 text-[14px] font-medium text-center">
          {currentLabel}
        </span>
        <div
          className="relative shrink-0 size-[24px] transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <img alt="" className="absolute block max-w-none size-full" src={ICON_ARROW_DOWN} />
        </div>
      </button>

      {/* 드롭다운 리스트 — 위로 열림 */}
      {open && (
        <div className="
          absolute bottom-full left-0 w-full mb-[4px]
          rounded-[8px] overflow-hidden z-10
        ">
          {LOCALES.map((loc) => (
            <Link
              key={loc.code}
              href={switchHref(loc.code)}
              onClick={() => setOpen(false)}
              className={`
                flex items-center px-[12px] h-[36px]
                text-neutralgray-500 text-[14px] font-medium
                transition-colors
                ${loc.code === locale
                  ? "bg-blue-800 hover:bg-blue-900"
                  : "bg-neutralgray-800 hover:bg-neutralgray-700"
                }
              `}
            >
              {loc.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── 재사용 섹션 블록 ────────────────────────────────── */

/** Container 1 — 로고 + 설명 + 소셜 + 언어 */
function BrandBlock() {
  return (
    <div className="flex flex-col gap-[24px] items-start">
      <FooterLogo />
      <div className="flex flex-col gap-[16px] items-start w-full">
        {/* 설명 */}
        <p className="text-neutralgray-400 text-[16px] md:text-[16px] font-normal leading-[1.35]">
          The world&apos;s leading destination for mesh-free hernia repair and mesh removal surgery.
        </p>
        <div className="flex flex-col gap-[16px] items-start">
          {/* 소셜 링크 */}
          <div className="flex gap-[12px] items-start">
            <SocialButton href="#"><IconFacebook /></SocialButton>
            <SocialButton href="#"><IconInstagram /></SocialButton>
            <SocialButton href="#"><IconYouTube /></SocialButton>
          </div>
          {/* 언어 선택 */}
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
}

/** Container 2 — Quick Links */
function QuickLinksBlock() {
  return (
    <div className="flex flex-col gap-[16px] items-start">
      <p className="text-white font-bold text-[18px] md:text-[18px] leading-[1.3]">Quick Links</p>
      <div className="flex flex-col gap-[12px] items-start w-full">
        {quickLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-neutralgray-500 text-[16px] font-normal leading-[1.35] hover:text-neutralgray-100 transition-colors whitespace-nowrap"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/** Container 3 — Resources */
function ResourcesBlock() {
  return (
    <div className="flex flex-col gap-[16px] items-start">
      <p className="text-white font-bold text-[18px] leading-[1.3]">Resources</p>
      <div className="flex flex-col gap-[12px] items-start w-full">
        {resources.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-neutralgray-500 text-[16px] font-normal leading-[1.35] hover:text-neutralgray-100 transition-colors whitespace-nowrap"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/** Container 4 — Contact */
function ContactBlock() {
  const { openModal } = useConsultationModal();
  return (
    <div className="flex flex-col gap-[16px] items-start w-full">
      <p className="text-white font-bold text-[18px] leading-[1.3] whitespace-nowrap">Contact</p>
      <div className="flex flex-col gap-[12px] items-start w-full">
        {contactItems.map((item) => (
          <div key={item.text} className="flex gap-[12px] items-start w-full">
            <div className="relative shrink-0 size-[18px] mt-[1px]">
              <img alt="" className="absolute block max-w-none size-full" src={item.icon} />
            </div>
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex-1 text-neutralgray-500 text-[16px] font-normal leading-[1.35] hover:text-neutralgray-100 transition-colors"
              >
                {item.text}
              </a>
            ) : (
              <p className="flex-1 text-neutralgray-500 text-[16px] font-normal leading-[1.35]">
                {item.text}
              </p>
            )}
          </div>
        ))}
        {/* Free Consultation CTA */}
        <button
          onClick={openModal}
          className="
            flex items-center justify-center w-full
            bg-blue-500 hover:bg-blue-600 transition-colors
            px-[16px] py-[8px] rounded-[8px] mt-[4px]
          "
        >
          <span className="flex-1 text-white font-bold text-[20px] leading-[1.45] tracking-[-0.3px] text-center">
            Free Consultation
          </span>
        </button>
      </div>
    </div>
  );
}

/** Bottom bar — 저작권 + 링크 + 면책 */
function BottomBar() {
  const policyLinks = ["Privacy Policy", "Terms of Service", "Medical Disclaimer"];
  return (
    <div className="border-t border-slate-800 w-full">
      {/* Desktop / Tablet 1024+: 한 줄 (좌: copyright, 우: policy links) */}
      <div className="hidden md:flex items-center justify-between pt-[31px] pb-0">
        <p className="text-slate-700 text-[14px] font-normal leading-[1.35] whitespace-nowrap">
          © 2026 Gibbeum Hospital. All rights reserved.
        </p>
        <div className="flex gap-[24px] items-center">
          {policyLinks.map((label) => (
            <Link
              key={label}
              href="#"
              className="text-slate-700 text-[14px] font-normal leading-[1.35] hover:text-slate-100 transition-colors whitespace-nowrap"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile / Tablet 768: 세로 (copyright, links 세로, disclaimer) */}
      <div className="md:hidden flex flex-col gap-[8px] pt-[32px]">
        <p className="text-slate-700 text-[14px] font-normal leading-[1.35] whitespace-nowrap">
          © 2026 Gibbeum Hospital. All rights reserved.
        </p>
        <div className="flex flex-col gap-[8px]">
          {policyLinks.map((label) => (
            <Link
              key={label}
              href="#"
              className="text-slate-700 text-[14px] font-normal leading-[1.35] hover:text-slate-100 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* 면책 문구 — 전 브레이크포인트 */}
      <p className="text-slate-700 text-[14px] font-normal leading-[1.35] pt-[24px] md:pt-[24px] pb-0 w-full">
        Medical tourism disclaimer: Results may vary. This website is for informational purposes
        only and does not constitute medical advice. Consult with qualified healthcare providers
        before making medical decisions.
      </p>
    </div>
  );
}

/* ─── 메인 Footer ────────────────────────────────────── */
export default function Footer() {
  const { openModal } = useConsultationModal();
  const [floatVisible, setFloatVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setFloatVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#101828] text-white">
      <div className="max-w-[1516px] mx-auto px-6 md:px-10 xl:px-[144px] py-[40px] md:py-[56px]">

        {/*
          ══════════════════════════════════════════════
          Desktop (≥1024px): flex-row 4컬럼, gap-[16px]
          ══════════════════════════════════════════════
        */}
        <div className="hidden lg:flex items-start gap-[16px] xl:gap-[24px] mb-[48px]">
          <div className="flex-1 min-w-0"><BrandBlock /></div>
          <div className="flex-1 min-w-0"><QuickLinksBlock /></div>
          <div className="flex-1 min-w-0"><ResourcesBlock /></div>
          <div className="flex-1 min-w-0"><ContactBlock /></div>
        </div>

        {/*
          ══════════════════════════════════════════════
          Tablet 768px: 3컬럼 그리드
          Row 1: Brand | Quick Links | Resources
          Row 2: (empty) | Contact (col 2-3 span)
          ══════════════════════════════════════════════
        */}
        <div className="hidden md:grid lg:hidden grid-cols-3 gap-x-[16px] gap-y-[16px] mb-[32px]">
          {/* Row 1 */}
          <div className="col-start-1 row-start-1 self-start"><BrandBlock /></div>
          <div className="col-start-2 row-start-1 self-start"><QuickLinksBlock /></div>
          <div className="col-start-3 row-start-1 self-start"><ResourcesBlock /></div>
          {/* Row 2: Contact spans col 2-3 */}
          <div className="col-start-2 col-span-2 row-start-2 self-start"><ContactBlock /></div>
        </div>

        {/*
          ══════════════════════════════════════════════
          Mobile (<768px): flex-col 단일 컬럼, gap-[32px]
          ══════════════════════════════════════════════
        */}
        <div className="flex flex-col gap-[32px] md:hidden mb-[32px]">
          <BrandBlock />
          <QuickLinksBlock />
          <ResourcesBlock />
          <ContactBlock />
        </div>

        {/* Bottom bar */}
        <BottomBar />

        {/* 하단 여백 */}
        <div className="pt-[32px]" />
      </div>

      {/* 플로팅 메뉴 (WhatsApp / Free Consultation / Back to Top) */}
      <div className={`fixed bottom-6 right-4 z-40 flex flex-col gap-3 items-end transition-all duration-300 ${floatVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
        {/* WhatsApp */}
        <div className="group flex items-center gap-2">
          <span className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-[#212121]/80 text-white text-[length:var(--text-body-m)] leading-[1.35] px-3 py-2 rounded-lg whitespace-nowrap">
            Chat on WhatsApp
          </span>
          <a
            href="https://wa.me/821099479530"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="bg-whatsapp hover:brightness-90 transition-all size-10 md:size-14 rounded-[12px] md:rounded-[16px] flex items-center justify-center shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0"
          >
            <svg className="w-5 h-5 md:w-7 md:h-7" viewBox="0 0 28 28" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2C7.373 2 2 7.373 2 14c0 2.387.672 4.618 1.838 6.51L2.5 25.5l5.18-1.358A11.948 11.948 0 0014 26c6.627 0 12-5.373 12-12S20.627 2 14 2zm6.385 16.98c-.27.756-1.587 1.443-2.163 1.532-.553.085-1.252.12-2.019-.127-.465-.152-1.062-.355-1.825-.695-3.208-1.385-5.304-4.616-5.467-4.83-.161-.214-1.316-1.751-1.316-3.34 0-1.59.833-2.369 1.128-2.693.295-.322.645-.403.86-.403.215 0 .43.002.618.01.198.01.464-.075.726.554.27.645.916 2.232.996 2.393.08.161.134.35.027.563-.108.214-.161.348-.323.537-.161.188-.339.42-.484.565-.161.161-.33.335-.142.658.188.322.836 1.379 1.795 2.233 1.234 1.101 2.274 1.442 2.596 1.603.322.161.51.135.699-.08.188-.215.806-.94 1.02-1.263.215-.322.43-.268.726-.161.295.108 1.876.885 2.198 1.046.322.161.537.242.617.376.08.134.08.778-.189 1.533z"/>
            </svg>
          </a>
        </div>

        {/* Free Consultation */}
        <div className="group flex items-center gap-2">
          <span className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-[#212121]/80 text-white text-[length:var(--text-body-m)] leading-[1.35] px-3 py-2 rounded-lg whitespace-nowrap">
            Free Consultation
          </span>
          <button
            onClick={openModal}
            aria-label="Free Consultation"
            className="bg-blue-700 hover:brightness-90 transition-all size-10 md:size-14 rounded-[12px] md:rounded-[16px] flex items-center justify-center shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0"
          >
            <svg className="w-5 h-5 md:w-7 md:h-7" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3.5" y="5.5" width="21" height="19" rx="2.5" stroke="white" strokeWidth="2"/>
              <path d="M3.5 11.5h21" stroke="white" strokeWidth="2"/>
              <path d="M9.5 3.5v4M18.5 3.5v4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="9.5" cy="17.5" r="1.5" fill="white"/>
              <circle cx="14" cy="17.5" r="1.5" fill="white"/>
              <circle cx="18.5" cy="17.5" r="1.5" fill="white"/>
              <circle cx="9.5" cy="22" r="1.5" fill="white"/>
              <circle cx="14" cy="22" r="1.5" fill="white"/>
            </svg>
          </button>
        </div>

        {/* Back to Top */}
        <div className="group flex items-center gap-2">
          <span className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-[#212121]/80 text-white text-[length:var(--text-body-m)] leading-[1.35] px-3 py-2 rounded-lg whitespace-nowrap">
            Back to Top
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            title="Back to Top"
            className="bg-blue-700 hover:brightness-90 transition-all size-10 md:size-14 rounded-[12px] md:rounded-[16px] flex items-center justify-center shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0"
          >
            <svg className="w-5 h-5 md:w-7 md:h-7" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 22V8M6 15l8-8 8 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
