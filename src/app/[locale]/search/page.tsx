"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { searchContent, SearchResult } from "@/lib/searchData";

/* ─────────────────────────────────────────
   Category display order & labels
───────────────────────────────────────── */
const CATEGORY_ORDER = ["Page", "FAQ", "Educational Cartoons", "Video"];

/* ─────────────────────────────────────────
   Highlight matched text — Gibbeum blue
───────────────────────────────────────── */
function Highlight({ text, query }: { text: string; query: string }) {
  const terms = query.trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return <>{text}</>;

  const regex = new RegExp(
    `(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi"
  );
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark
            key={i}
            className="bg-yellow-200 text-neutralgray-900 rounded-sm px-0.5"
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

/* ─────────────────────────────────────────
   Row item inside a category group
───────────────────────────────────────── */
function ResultRow({
  result,
  query,
  locale,
  isLast,
}: {
  result: SearchResult;
  query: string;
  locale: string;
  isLast: boolean;
}) {
  return (
    <Link
      href={`/${locale}${result.href}`}
      className={`group flex flex-col gap-1 py-4 hover:bg-neutralgray-50 px-4 -mx-4 rounded-[8px] transition-colors ${
        !isLast ? "border-b border-neutralgray-100" : ""
      }`}
    >
      <p className="font-bold text-neutralgray-900 text-[length:var(--text-body-m)] leading-[1.35] group-hover:text-[#0047AB] transition-colors">
        <Highlight text={result.title} query={query} />
      </p>
      <p className="text-neutralgray-500 text-[14px] leading-[1.5] line-clamp-2">
        <Highlight text={result.description} query={query} />
      </p>
    </Link>
  );
}

/* ─────────────────────────────────────────
   Category group block
───────────────────────────────────────── */
function CategoryGroup({
  category,
  results,
  query,
  locale,
}: {
  category: string;
  results: SearchResult[];
  query: string;
  locale: string;
}) {
  return (
    <div className="flex flex-col">
      {/* Category header */}
      <div className="flex items-center gap-3 mb-2">
        <p className="font-bold text-[#0047AB] text-[14px] leading-[1.25] uppercase tracking-[0.05em]">
          {category}
        </p>
        <span className="text-neutralgray-400 text-[13px]">
          {results.length}
        </span>
        <div className="flex-1 h-px bg-neutralgray-100" />
      </div>
      {/* Items */}
      <div className="flex flex-col">
        {results.map((result, i) => (
          <ResultRow
            key={i}
            result={result}
            query={query}
            locale={locale}
            isLast={i === results.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Search Results Content
───────────────────────────────────────── */
function SearchResults() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const query = searchParams.get("q") ?? "";
  const locale = pathname.split("/")[1] ?? "en";

  const results: SearchResult[] = searchContent(query);

  // Group by category, preserve display order
  const grouped: Record<string, SearchResult[]> = {};
  for (const item of results) {
    if (!grouped[item.category]) grouped[item.category] = [];
    grouped[item.category].push(item);
  }
  const categories = CATEGORY_ORDER.filter((c) => grouped[c]);

  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-2">
        {query ? (
          <>
            <p className="text-neutralgray-500 text-[length:var(--text-body-m)] leading-[1.45]">
              {results.length > 0
                ? `${results.length} result${results.length > 1 ? "s" : ""} for`
                : "No results for"}
            </p>
            <h1 className="font-bold text-neutralgray-900 text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px]">
              &ldquo;<span className="text-[#0047AB]">{query}</span>&rdquo;
            </h1>
          </>
        ) : (
          <h1 className="font-bold text-neutralgray-900 text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px]">
            Search
          </h1>
        )}
      </div>

      {/* Category groups */}
      {categories.length > 0 ? (
        <div className="flex flex-col gap-10">
          {categories.map((cat) => (
            <CategoryGroup
              key={cat}
              category={cat}
              results={grouped[cat]}
              query={query}
              locale={locale}
            />
          ))}
        </div>
      ) : query ? (
        /* No results */
        <div className="flex flex-col gap-6 items-center py-16 text-center">
          <div className="size-16 rounded-full bg-neutralgray-100 flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="12" cy="12" r="9" stroke="#9CA3AF" strokeWidth="2" />
              <path d="M19 19l6 6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.35]">
              No results found
            </p>
            <p className="text-neutralgray-600 text-[length:var(--text-body-m)] leading-[1.45] max-w-[400px]">
              Try different keywords, or browse our pages below.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mt-4">
            {[
              { label: "Kang Repair", href: `/${locale}/kang-repair` },
              { label: "Mesh Removal", href: `/${locale}/mesh-removal` },
              { label: "FAQ", href: `/${locale}/faq` },
              { label: "Become a Patient", href: `/${locale}/patient` },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full border-2 border-[#0047AB] text-[#0047AB] font-bold text-[14px] hover:bg-[#0047AB] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function SearchPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <div className="max-w-[800px] mx-auto px-6 md:px-10 py-12 md:py-16">
          <Suspense fallback={<div className="text-neutralgray-400">Loading...</div>}>
            <SearchResults />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
