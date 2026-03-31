"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useConsultationModal } from "@/context/ConsultationModalContext";

/* ─── 에셋 경로 ─────────────────────────────────────── */
// 로고 (헤더와 동일 SVG, 푸터 사이즈 187×36)
const LOGO_MARK_1 = "/assets/header/logo-mark1.svg";
const LOGO_MARK_2 = "/assets/header/logo-mark2.svg";
const LOGO_MARK_3 = "/assets/header/logo-mark3.svg";

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

/** 푸터 로고 — 187×36 (mark1+2+3 한 컨테이너) */
function FooterLogo() {
  return (
    <div className="relative overflow-clip shrink-0" style={{ width: 187, height: 36 }}>
      <div className="absolute inset-[7.57%_77.69%_3%_0]">
        <img alt="" className="absolute block max-w-none size-full" src={LOGO_MARK_1} />
      </div>
      <div className="absolute inset-[0_0.26%_42.45%_27.65%]">
        <img alt="" className="absolute block max-w-none size-full" src={LOGO_MARK_2} />
      </div>
      <div className="absolute inset-[75.01%_0_-0.01%_27.97%]">
        <img alt="" className="absolute block max-w-none size-full" src={LOGO_MARK_3} />
      </div>
    </div>
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
  return (
    <footer className="bg-[#101828] text-white">
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

      {/* 플로팅 버튼 (Back to Top) */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
          fixed bottom-6 right-6 z-40
          bg-neutralgray-900 hover:bg-neutralgray-800 transition-colors
          size-[56px] rounded-full
          flex items-center justify-center
          shadow-lg
        "
        title="Back to Top"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}
