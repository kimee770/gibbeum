"use client";

import { useState } from "react";
import Image from "next/image";

type CardKey = "partner" | "plans";

function InsuranceModal({
  cardKey,
  onClose,
}: {
  cardKey: CardKey;
  onClose: () => void;
}) {
  const isPartner = cardKey === "partner";
  const title = isPartner ? "Gibbeum's Partner Support" : "Frequently Used Plans";

  return (
    <div
      className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.85)] flex items-center justify-center px-6 md:px-0"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[16px] w-full md:w-[672px] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-b from-blue-700 to-[#003380] flex items-start justify-between p-6">
          <h2 className="font-bold text-white text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px] flex-1">
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="size-10 flex items-center justify-center shrink-0 rounded-[16px] hover:bg-white/10 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M15 5L5 15M5 5l10 10"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-6 md:gap-8 px-6 pt-6 pb-10 text-neutralgray-900 overflow-y-auto max-h-[70vh] md:max-h-none">
          {isPartner ? (
            <>
              <p className="text-[length:var(--text-body-l)] leading-[1.4]">
                While Gibbeum Hospital does not provide insurance services
                directly, we partner with{" "}
                <strong className="text-blue-700">
                  Global Assistance Partners (GAP)
                </strong>{" "}
                to assist patients.
              </p>
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-neutralgray-900 text-[length:var(--text-h5)] leading-[1.25] tracking-[-0.3px]">
                  Role of GAP
                </h3>
                <p className="text-[length:var(--text-body-l)] leading-[1.4]">
                  GAP can help{" "}
                  <strong>verify your coverage</strong>{" "}
                  with the insurer and facilitate direct billing if approved.
                  This support does not mean the hospital provides insurance
                  coverage directly.
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Disclaimer */}
              <p className="text-[14px] leading-[1.45] text-neutralgray-500 italic">
                <span className="text-blue-600 not-italic">*</span>
                For Reference Only: These examples do not guarantee coverage or
                a direct contract with the hospital.
              </p>

              {/* Travel / Short-term Plans */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-[5px]">
                  <h3 className="font-bold text-blue-700 text-[length:var(--text-h5)] leading-[1.25] tracking-[-0.3px]">
                    Travel / Short-term Plans
                  </h3>
                  <div className="border-t border-neutralgray-300" />
                </div>
                <div className="flex flex-col gap-3 text-[length:var(--text-body-l)] leading-[1.45]">
                  {[
                    { name: "Seven Corners", sub: "Liaison Travel, Wander Frequent" },
                    { name: "WorldTrips", sub: "Atlas Travel, StudentSecure" },
                    { name: "Allianz Partners", sub: "Travel Insurance, Global Assistance" },
                    { name: "AXA Assistance", sub: "Schengen Low Cost, Europe Travel" },
                    { name: "Trawick International", sub: "Safe Travels Outbound" },
                  ].map((item) => (
                    <div key={item.name}>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-neutralgray-700">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Long-term / Expat Plans */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-[5px]">
                  <h3 className="font-bold text-blue-700 text-[length:var(--text-h5)] leading-[1.25] tracking-[-0.3px]">
                    Long-term / Expat Plans
                  </h3>
                  <div className="border-t border-neutralgray-300" />
                </div>
                <div className="flex flex-col gap-3 text-[length:var(--text-body-l)] leading-[1.45]">
                  {[
                    { name: "Cigna Global Health", sub: "Global Health Options (Silver/Gold/Platinum)" },
                    { name: "GeoBlue Xplorer", sub: "Xplorer Premier, Xplorer Essential" },
                    { name: "IMG Global Medical", sub: "Global Medical Insurance, Global Prima" },
                    { name: "Aetna International", sub: "Aetna Pioneer, Summit" },
                    { name: "Henner / GMC", sub: "Expat Care or International Health" },
                  ].map((item) => (
                    <div key={item.name}>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-neutralgray-700">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const CARDS: { key: CardKey; icon: string; title: string }[] = [
  {
    key: "partner",
    icon: "/assets/patient/icon-insurance1.svg",
    title: "Gibbeum's Partner Support",
  },
  {
    key: "plans",
    icon: "/assets/patient/icon-insurance2.svg",
    title: "Frequently Used Plans",
  },
];

export default function InsuranceCardsClient() {
  const [openCard, setOpenCard] = useState<CardKey | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CARDS.map((card) => (
          <div
            key={card.key}
            onClick={() => setOpenCard(card.key)}
            className="group bg-white hover:bg-blue-50 rounded-2xl p-6 flex flex-col gap-4 items-center text-center shadow-sm hover:shadow-xl cursor-pointer transition-all duration-200 hover:scale-[1.03]"
          >
            <div className="bg-blue-600 group-hover:bg-blue-700 rounded-full size-16 flex items-center justify-center shrink-0 transition-colors duration-200">
              <Image src={card.icon} alt="" width={32} height={32} />
            </div>
            <p className="font-bold text-blue-700 text-[length:var(--text-h6)] text-center leading-[1.45] tracking-[-0.3px]">
              {card.title}
            </p>
            <div className="bg-slate-300 group-hover:bg-blue-700 rounded-full px-5 py-2 flex items-center gap-1 transition-colors duration-200">
              <span className="font-bold text-slate-900 group-hover:text-white text-[length:var(--text-body-16b)] leading-[1.25] transition-colors duration-200">
                more
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 text-slate-900 group-hover:text-white transition-colors duration-200"
              >
                <path
                  fillRule="evenodd"
                  d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {openCard && (
        <InsuranceModal cardKey={openCard} onClose={() => setOpenCard(null)} />
      )}
    </>
  );
}
