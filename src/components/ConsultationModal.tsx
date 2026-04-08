"use client";

import { useEffect, useRef } from "react";
import { useConsultationModal } from "@/context/ConsultationModalContext";

/* ─────────────────────────────────────────
   Form Field helpers
───────────────────────────────────────── */
function Label({ children, required }: { children: string; required?: boolean }) {
  return (
    <p className="font-bold text-neutralgray-900 text-[length:var(--text-body-m)] leading-[1.25]">
      {children}
      {required && <span className="text-blue-500 ml-1">*</span>}
    </p>
  );
}

function InputField({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full h-12 border-2 border-neutralgray-300 rounded-[8px] px-4 py-3 text-[length:var(--text-body-m)] text-neutralgray-600 placeholder:text-neutralgray-600 focus:outline-none focus:border-blue-500 transition-colors"
    />
  );
}

function SelectField({ placeholder }: { placeholder: string }) {
  return (
    <div className="relative">
      <select
        defaultValue=""
        className="w-full h-12 border-2 border-neutralgray-300 rounded-[8px] px-4 py-3 text-[length:var(--text-body-m)] text-neutralgray-600 appearance-none focus:outline-none focus:border-blue-500 transition-colors bg-white"
      >
        <option value="" disabled>{placeholder}</option>
        <option>Inguinal Hernia</option>
        <option>Umbilical Hernia</option>
        <option>Femoral Hernia</option>
        <option>Mesh Complication / Removal</option>
        <option>Recurrent Hernia</option>
        <option>Other</option>
      </select>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/modal/icon-chevron-down.svg"
        alt=""
        className="absolute right-4 top-1/2 -translate-y-1/2 size-6 pointer-events-none"
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   Trust Badge
───────────────────────────────────────── */
function TrustBadge({ label }: { label: string }) {
  return (
    <div className="flex gap-2 items-center">
      <div className="bg-white border border-blue-700 rounded-full size-[21px] flex items-center justify-center shrink-0">
        <span className="text-blue-700 text-[12px] leading-none">✓</span>
      </div>
      <span className="font-bold text-neutralgray-600 text-[14px] leading-[1.2] whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────
   Modal
───────────────────────────────────────── */
export default function ConsultationModal() {
  const { isOpen, closeModal } = useConsultationModal();
  const scrollbarWidthRef = useRef(0);
  const formRef = useRef<HTMLDivElement>(null);

  // body scroll lock
  // — overflow:hidden + 스크롤바 너비 보상 (데스크탑 레이아웃 흔들림 방지)
  useEffect(() => {
    if (isOpen) {
      const sw = window.innerWidth - document.documentElement.clientWidth;
      scrollbarWidthRef.current = sw;
      if (sw > 0) document.body.style.paddingRight = `${sw}px`;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  // iOS touchmove 흔들림 방지
  // — document 전체의 touchmove를 막고, 모달 내부 스크롤 영역만 허용
  useEffect(() => {
    if (!isOpen) return;

    const blockBodyScroll = (e: TouchEvent) => {
      e.preventDefault();
    };

    document.addEventListener("touchmove", blockBodyScroll, { passive: false });
    return () => {
      document.removeEventListener("touchmove", blockBodyScroll);
    };
  }, [isOpen]);

  // ESC key close
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-4 md:py-8"
      style={{ background: "rgba(0,0,0,0.85)" }}
      onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
    >
      {/*
        모달 컨테이너:
        - flex-col 구조로 헤더(고정) + 폼(스크롤) 분리
        - sticky 제거 → 헤더가 overflow 컨테이너 밖에 위치
        - max-h: svh(small viewport height) 사용 — iOS browser chrome 제외한 실제 가시 영역 기준
      */}
      <div
        className="bg-white rounded-[16px] w-full max-w-[672px] flex flex-col shadow-2xl"
        style={{ maxHeight: "min(calc(100svh - 32px), calc(100vh - 32px))" }}
      >
        {/* ── Header (스크롤 영역 밖, 항상 보임) ── */}
        <div
          className="flex items-center justify-between px-6 py-6 rounded-t-[16px] shrink-0"
          style={{ background: "linear-gradient(to bottom, #0047ab, #003380)" }}
        >
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-white text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px]">
              Free Online Consultation
            </h2>
            <p className="text-[#dbeafe] text-[length:var(--text-body-l)] leading-[1.45]">
              We&apos;ll respond within 24 hours
            </p>
          </div>
          <button
            onClick={closeModal}
            className="size-10 flex items-center justify-center rounded-[16px] hover:bg-white/10 transition-colors shrink-0"
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* ── Form (독립 스크롤 영역) ── */}
        <div
          ref={formRef}
          className="overflow-y-auto overscroll-contain flex-1"
          onTouchMove={(e) => e.nativeEvent.stopImmediatePropagation()}
        >
          <div className="flex flex-col gap-6 p-6">
            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label required>Full Name</Label>
                <InputField placeholder="John Smith" />
              </div>
              <div className="flex flex-col gap-2">
                <Label required>Email Address</Label>
                <InputField placeholder="john@example.com" type="email" />
              </div>
            </div>

            {/* Row 2: Country + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label required>Country</Label>
                <SelectField placeholder="Select Country" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Phone/WhatsApp</Label>
                <InputField placeholder="+1 234 567 8900" type="tel" />
              </div>
            </div>

            {/* What brings you */}
            <div className="flex flex-col gap-2">
              <Label required>What brings you to us?</Label>
              <SelectField placeholder="Select condition Type" />
            </div>

            {/* Describe symptoms */}
            <div className="flex flex-col gap-2">
              <Label required>Describe your symptoms</Label>
              <textarea
                placeholder="When did it start? Where is the pain/bulge? Any previous surgeries?"
                rows={4}
                className="w-full border-2 border-neutralgray-300 rounded-[8px] px-4 py-3 text-[length:var(--text-body-m)] text-neutralgray-600 placeholder:text-neutralgray-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            {/* Previous surgeries */}
            <div className="flex flex-col gap-2">
              <Label>Previous hernia surgeries?</Label>
              <InputField placeholder="e.g., Mesh repair in 2020" />
            </div>

            {/* Preferred Date */}
            <div className="flex flex-col gap-2">
              <Label>Preferred Date for Consultation</Label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full h-12 border-2 border-neutralgray-300 rounded-[8px] px-4 py-3 text-[length:var(--text-body-m)] text-neutralgray-600 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            {/* Medical records notice */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-[8px] p-6 flex flex-col items-center gap-2 text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/modal/icon-upload.svg" alt="" className="size-8" />
              <p className="font-bold text-neutralgray-900 text-[length:var(--text-body-m)] leading-[1.25]">
                Have medical records or CT/MRI scans?
              </p>
              <p className="text-neutralgray-600 text-[14px] leading-[1.35]">
                You can attach them in the follow-up email we&apos;ll send after this form.
              </p>
            </div>

            {/* Privacy notice */}
            <div className="bg-neutralgray-200 rounded-[8px] p-4">
              <p className="text-[#4a5565] text-[14px] leading-[1.35]">
                By submitting this form, you agree to be contacted by Gibbeum Hospital&apos;s
                international team via email or WhatsApp. Your information is kept
                confidential and used only for medical consultation purposes.
              </p>
            </div>

            {/* Checkbox + Submit */}
            <div className="flex flex-col gap-4">
              <label className="flex gap-2 items-start cursor-pointer">
                <input type="checkbox" className="mt-[3px] size-4 shrink-0 border border-neutralgray-500 cursor-pointer" />
                <span className="text-neutralgray-900 text-[length:var(--text-body-m)] leading-[1.35]">
                  I agree to the collection of my personal information.{" "}
                  <span className="text-blue-500">*</span>
                </span>
              </label>

              <button
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-white text-[length:var(--text-h6)] tracking-[-0.3px] transition-opacity hover:opacity-90 whitespace-nowrap"
                style={{ background: "linear-gradient(to bottom, #0076f1, #0062c7)" }}
              >
                Submit Consultation Request
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/modal/icon-send.svg" alt="" className="size-5 hidden md:block" />
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center">
              <TrustBadge label="No obligations" />
              <TrustBadge label="24-hour response" />
              <TrustBadge label="Completely confidential" />
            </div>

            {/* Direct contact */}
            <div className="border-t border-neutralgray-300 pt-6 flex flex-col gap-6 items-center">
              <p className="font-bold text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45] text-center">
                Or contact us directly:
              </p>
              <div className="flex flex-col gap-6 items-center">
                <a
                  href="mailto:internationalcenter@gibbeum.com"
                  className="flex gap-2 items-center text-blue-700 text-[14px] hover:underline"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/modal/icon-email.svg" alt="" className="size-4" />
                  internationalcenter@gibbeum.com
                </a>
                <a href="https://wa.me/821099479530" target="_blank" rel="noopener noreferrer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/modal/whatsapp-qr.png"
                    alt="WhatsApp QR Code"
                    className="rounded-[4px]"
                    style={{ width: 153, height: 153 }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
