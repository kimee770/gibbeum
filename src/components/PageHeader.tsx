"use client";

import Image from "next/image";
import Link from "next/link";
import { useConsultationModal } from "@/context/ConsultationModalContext";

export type PageHeaderProps = {
  /** Green badge text (e.g. "Est. 2005 • Seoul, South Korea") */
  badge?: string;
  /** Main title — displayed in Lora Bold */
  title: string;
  /** Subtitle text or node below the title */
  subtitle?: React.ReactNode;
  /**
   * Optional CTA button.
   * - href: navigate to a page
   * - useModal: open Free Consultation modal
   */
  cta?: { text: string; href?: string; useModal?: boolean };
  /**
   * Top-corner rounding variant
   * - "sm" → rounded-tl/tr-[16px]  (About page)
   * - "lg" → rounded-tl/tr-[24px]  (all other pages)
   */
  rounded?: "sm" | "lg";
  /**
   * Vertical padding preset
   * - "default" → xl: py-[90px], md: h-[312px], mobile: h-[290px]
   * - "compact"  → xl: py-[52px]  (Kang Repair, Mesh Removal)
   * - "tall"     → xl: py-[120px] (Premium Health Screening)
   * - "xtall"    → xl: py-[122px] (FAQ & Contact)
   * - "vtall"    → xl: py-[101px] (Video Library, Cartoons)
   */
  padding?: "default" | "compact" | "tall" | "xtall" | "vtall";
  /** Extra classes applied to the h1 title element */
  titleClassName?: string;
};

const paddingMap: Record<NonNullable<PageHeaderProps["padding"]>, string> = {
  default: "py-[56px] md:py-[56px] xl:py-[90px]",
  compact: "py-[40px] md:py-[40px] xl:py-[52px]",
  tall:    "py-[56px] md:py-[56px] xl:py-[120px]",
  xtall:   "py-[56px] md:py-[56px] xl:py-[122px]",
  vtall:   "py-[56px] md:py-[56px] xl:py-[101px]",
};

export default function PageHeader({
  badge,
  title,
  subtitle,
  cta,
  rounded = "lg",
  padding = "default",
  titleClassName,
}: PageHeaderProps) {
  const { openModal } = useConsultationModal();

  const roundedClass =
    rounded === "sm"
      ? "rounded-tl-[16px] rounded-tr-[16px]"
      : "rounded-tl-[24px] rounded-tr-[24px]";

  const pyClass = paddingMap[padding];

  const ctaInner = (
    <>
      <span className="font-bold text-blue-700 group-hover:text-white text-[length:var(--text-h6)] tracking-[-0.3px] whitespace-nowrap transition-colors">
        {cta?.text}
      </span>
      <Image
        src="/assets/header/icon-arrow-right.svg"
        alt=""
        width={20}
        height={20}
        className="group-hover:brightness-0 group-hover:invert transition-all"
      />
    </>
  );

  const ctaClassName =
    "group bg-neutralgray-50 flex gap-2 items-center justify-center px-[26px] py-[13px] rounded-[8px] mt-2 shrink-0 hover:bg-blue-900 transition-colors";

  return (
    <div
      className={`
        w-full bg-gradient-to-b from-blue-700 to-[#003380]
        ${roundedClass}
        flex items-center justify-center
        ${pyClass}
        px-6 md:px-8
        min-h-[290px] md:min-h-[312px]
      `}
    >
      <div className="flex flex-col items-center gap-4 md:gap-6 text-center w-full max-w-[900px]">
        {/* Badge */}
        {badge && (
          <div className="bg-system-green border border-[#66e3b9] flex gap-2 items-center justify-center px-4 md:px-6 py-2 rounded-full shrink-0">
            <Image
              src="/assets/about/icon-pin.svg"
              alt=""
              width={16}
              height={16}
            />
            <p className="font-bold text-white text-[length:var(--text-body-16b)] leading-[1.25] whitespace-nowrap">
              {badge}
            </p>
          </div>
        )}

        {/* Title */}
        <h1
          className={`font-bold text-neutralgray-50 text-[length:var(--text-lora-h1)] text-center leading-[1.15] w-full${titleClassName ? ` ${titleClassName}` : ""}`}
          style={{ fontFamily: "var(--font-lora)" }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <div className="text-neutralgray-50 text-[length:var(--text-h4)] xl:text-[26px] xl:font-medium xl:leading-[38px] font-bold leading-[1.35] tracking-[-0.5px] text-center w-full">
            {subtitle}
          </div>
        )}

        {/* CTA Button */}
        {cta && (
          cta.useModal ? (
            <button onClick={openModal} className={ctaClassName}>
              {ctaInner}
            </button>
          ) : (
            <Link href={cta.href!} className={ctaClassName}>
              {ctaInner}
            </Link>
          )
        )}
      </div>
    </div>
  );
}
