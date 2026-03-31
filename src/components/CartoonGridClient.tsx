"use client";

import { useState } from "react";

type CartoonCard = {
  icon: string;
  readTime: string;
  title: string;
  description: string;
};

/* ── Modal ── */
function CartoonModal({
  card,
  onClose,
}: {
  card: CartoonCard;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.85)] px-0 md:px-[56px] xl:px-0"
      onClick={onClose}
    >
      {/* Container */}
      <div
        className="relative bg-white rounded-[12px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full mt-[80px] md:mt-0 mx-[32px] md:mx-0 xl:max-w-[896px] xl:mx-auto flex flex-col overflow-hidden max-h-[calc(100vh-96px)] md:max-h-[calc(100vh-80px)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 xl:px-8 xl:py-5 border-b border-neutralgray-100 shrink-0">
          <h2 className="font-bold text-neutralgray-900 text-[length:var(--text-h5)] leading-[1.35] tracking-[-0.3px]">
            {card.title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="ml-4 shrink-0 size-8 flex items-center justify-center rounded-full hover:bg-neutralgray-100 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M15 5L5 15M5 5l10 10"
                stroke="#555"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-y-auto bg-[#f5f5f5]">
          <div className="flex flex-col items-center justify-center gap-4 py-16 xl:py-20 px-6">
            {/* Book icon */}
            <div className="bg-blue-700/10 rounded-full size-16 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.icon}
                alt=""
                className="size-7 object-contain"
              />
            </div>
            <p className="font-bold text-neutralgray-700 text-[length:var(--text-h5)] leading-[1.35] text-center">
              Cartoon Viewer
            </p>
            <p className="text-neutralgray-500 text-[length:var(--text-body-s)] leading-[1.5] text-center max-w-[480px]">
              {card.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Card ── */
function CartoonCardItem({
  card,
  onClick,
}: {
  card: CartoonCard;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="group bg-white hover:bg-blue-50 rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col cursor-pointer transition-colors duration-200"
    >
      {/* Image area */}
      <div
        className="w-full aspect-video flex items-center justify-center"
        style={{
          background:
            "linear-gradient(150deg, rgba(0,71,171,0.2) 0%, rgba(0,71,171,0.08) 100%)",
        }}
      >
        <div className="bg-blue-700/10 rounded-full size-16 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={card.icon} alt="" className="size-7 object-contain" />
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-[10px] px-4 py-6 xl:p-6 flex-1">
        <p className="text-neutralgray-600 text-[length:var(--text-body-s)] leading-[1.4]">
          {card.readTime}
        </p>
        <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.35] tracking-[-0.3px]">
          {card.title}
        </p>
        <p className="text-neutralgray-700 text-[length:var(--text-body-s)] leading-[1.5]">
          {card.description}
        </p>
      </div>
    </div>
  );
}

/* ── Grid + Modal ── */
export default function CartoonGridClient({
  cards,
}: {
  cards: CartoonCard[];
}) {
  const [selected, setSelected] = useState<CartoonCard | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
        {cards.map((card) => (
          <CartoonCardItem
            key={card.title}
            card={card}
            onClick={() => setSelected(card)}
          />
        ))}
      </div>

      {selected && (
        <CartoonModal card={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
