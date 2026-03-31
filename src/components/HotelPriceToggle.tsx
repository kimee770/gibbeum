"use client";

import { useState } from "react";

export default function HotelPriceToggle({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <div className="flex justify-center">
        <button
          onClick={() => setOpen(!open)}
          className="w-full bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer flex items-center justify-center gap-3 px-6 py-4 rounded-[16px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]"
        >
          <p className="font-bold text-white text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px] whitespace-nowrap">
            See our Partner Hotel Price
          </p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          >
            <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="1.5" />
            <path
              d="M12 8v8M8 12l4 4 4-4"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Hotel Tables — collapsible */}
      {open && (
        <div className="flex flex-col gap-6">
          {children}
        </div>
      )}
    </>
  );
}
