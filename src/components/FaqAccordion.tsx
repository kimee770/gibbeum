"use client";

import { useState, useRef } from "react";

export type FaqItem = { q: string; a: string };
export type FaqCategory = { id: string; label: string; questions: FaqItem[] };

function ChevronCategory({ open }: { open: boolean }) {
  return (
    <svg
      width="24" height="24" viewBox="0 0 24 24" fill="none"
      className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
    >
      <path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronQuestion({ open }: { open: boolean }) {
  return (
    <svg
      width="24" height="24" viewBox="0 0 24 24" fill="none"
      className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
    >
      <path d="M6 9l6 6 6-6" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FaqAccordion({ categories }: { categories: FaqCategory[] }) {
  const [activeTab, setActiveTab] = useState(categories[0]?.id ?? "");
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    () => new Set([categories[0]?.id ?? ""])
  );
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(
    () => new Set([`${categories[0]?.id}-0`])
  );
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    setOpenCategories(prev => new Set([...prev, id]));
    const el = sectionRefs.current[id];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const toggleCategory = (id: string) => {
    setOpenCategories(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleQuestion = (key: string) => {
    setOpenQuestions(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Tab bar */}
      <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
        <div className="bg-neutralgray-300 rounded-[100px] p-2 flex gap-2 xl:gap-4 min-w-max w-full">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleTabClick(cat.id)}
              className={`shrink-0 h-10 rounded-[80px] px-4 py-2 font-bold text-[15px] xl:text-[16px] leading-[1.25] whitespace-nowrap transition-colors ${
                activeTab === cat.id
                  ? "bg-blue-700 text-neutralgray-50"
                  : "bg-neutralgray-50 text-blue-700 hover:bg-blue-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Category sections */}
      <div className="flex flex-col gap-6">
        {categories.map(cat => {
          const isCatOpen = openCategories.has(cat.id);
          return (
            <div
              key={cat.id}
              ref={el => { sectionRefs.current[cat.id] = el; }}
              className="flex flex-col gap-4"
            >
              {/* Category header pill */}
              <button
                onClick={() => toggleCategory(cat.id)}
                className="w-full bg-gradient-to-b from-[#0076f1] to-[#0062c7] rounded-[50px] h-14 flex items-center px-8 gap-4"
              >
                <span className="flex-1 font-bold text-neutralgray-50 text-[length:var(--text-h5)] leading-[1.25] tracking-[-0.3px] text-left">
                  {cat.label}
                </span>
                <ChevronCategory open={isCatOpen} />
              </button>

              {/* Q&A items */}
              {isCatOpen && (
                <div className="flex flex-col gap-4">
                  {cat.questions.map((item, idx) => {
                    const key = `${cat.id}-${idx}`;
                    const isOpen = openQuestions.has(key);
                    return (
                      <div
                        key={key}
                        className="bg-[#eef5fc] border border-[#b3d9ff] rounded-[16px] px-6 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)]"
                      >
                        {/* Q row */}
                        <button
                          onClick={() => toggleQuestion(key)}
                          className="w-full flex gap-4 items-center py-6 text-left"
                        >
                          <div className="bg-blue-700 rounded-full size-8 flex items-center justify-center shrink-0">
                            <span className="font-bold text-neutralgray-50 text-[18px] leading-[1]">Q</span>
                          </div>
                          <p className="flex-1 font-bold text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                            {item.q}
                          </p>
                          <ChevronQuestion open={isOpen} />
                        </button>
                        {/* A row */}
                        {isOpen && (
                          <div className="flex gap-4 items-start pb-6">
                            <div className="bg-neutralgray-600 rounded-full size-8 flex items-center justify-center shrink-0">
                              <span className="font-bold text-neutralgray-50 text-[18px] leading-[1]">A</span>
                            </div>
                            <p className="flex-1 text-neutralgray-700 text-[length:var(--text-body-l)] leading-[1.45]">
                              {item.a}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
