"use client";

import { useConsultationModal } from "@/context/ConsultationModalContext";

/**
 * CTA 버튼 — 클릭 시 Free Consultation 모달 오픈
 * 서버 컴포넌트 페이지에서도 사용 가능한 클라이언트 컴포넌트
 */
export default function ConsultationButton({
  label = "Get Free Consultation",
  className,
}: {
  label?: string;
  className?: string;
}) {
  const { openModal } = useConsultationModal();

  return (
    <button
      onClick={openModal}
      className={
        className ??
        "z-10 bg-blue-700 hover:bg-blue-800 transition-colors px-6 py-4 rounded-[8px] shrink-0 mt-2"
      }
    >
      <span className="font-bold text-neutralgray-50 text-[length:var(--text-h6)] tracking-[-0.3px] whitespace-nowrap">
        {label}
      </span>
    </button>
  );
}
