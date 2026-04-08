"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { searchContent, SearchResult } from "@/lib/searchData";

/* ─────────────────────────────────────────
   Category badge
───────────────────────────────────────── */
const CATEGORY_STYLE: Record<string, string> = {
  Page:        "bg-blue-100 text-blue-700",
  FAQ:         "bg-green-100 text-green-700",
  Educational: "bg-purple-100 text-purple-700",
  Video:       "bg-orange-100 text-orange-700",
};

function CategoryBadge({ label }: { label: string }) {
  const cls = CATEGORY_STYLE[label] ?? "bg-neutralgray-200 text-neutralgray-700";
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-[12px] font-bold ${cls}`}>
      {label}
    </span>
  );
}

/* ─────────────────────────────────────────
   Highlight matched text
───────────────────────────────────────── */
function Highlight({ text, query }: { text: string; query: string }) {
  const terms = query.trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return <>{text}</>;

  const regex = new RegExp(`(${terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-yellow-200 text-neutralgray-900 rounded-sm px-0.5">
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
   Result Card
───────────────────────────────────────── */
function ResultCard({ result, query, locale }: { result: SearchResult; query: string; locale: string }) {
  return (
    <Link
      href={`/${locale}${result.href}`}
      className="group block border border-neutralgray-200 rounded-[12px] p-6 hover:border-blue-400 hover:shadow-md transition-all"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <CategoryBadge label={result.category} />
        </div>
        <h3 className="font-bold text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.35] group-hover:text-blue-700 transition-colors">
          <Highlight text={result.title} query={query} />
        </h3>
        <p className="text-neutralgray-600 text-[length:var(--text-body-m)] leading-[1.5]">
          <Highlight text={result.description} query={query} />
        </p>
        <span className="text-blue-600 text-[14px] font-bold group-hover:underline">
          View →
        </span>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────
   Search Results Content
───────────────────────────────────────── */
function SearchResults() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const query = searchParams.get("q") ?? "";

  // locale: pathname = "/en/search" → "en"
  const locale = pathname.split("/")[1] ?? "en";

  const results: SearchResult[] = searchContent(query);

  return (
    <div className="flex flex-col gap-8">
      {/* Query display */}
      <div className="flex flex-col gap-2">
        {query ? (
          <>
            <p className="text-neutralgray-600 text-[length:var(--text-body-m)] leading-[1.45]">
              {results.length > 0
                ? `${results.length} result${results.length > 1 ? "s" : ""} for`
                : "No results for"}
            </p>
            <h1 className="font-bold text-neutralgray-900 text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px]">
              &ldquo;{query}&rdquo;
            </h1>
          </>
        ) : (
          <h1 className="font-bold text-neutralgray-900 text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px]">
            Search
          </h1>
        )}
      </div>

      {/* Results list */}
      {results.length > 0 ? (
        <div className="flex flex-col gap-4">
          {results.map((result, i) => (
            <ResultCard key={i} result={result} query={query} locale={locale} />
          ))}
        </div>
      ) : query ? (
        /* No results state */
        <div className="flex flex-col gap-6 items-center py-16 text-center">
          <div className="size-16 rounded-full bg-neutralgray-100 flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="12" cy="12" r="9" stroke="#9CA3AF" strokeWidth="2"/>
              <path d="M19 19l6 6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
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
          {/* Quick links */}
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
                className="px-4 py-2 rounded-full border-2 border-blue-600 text-blue-600 font-bold text-[14px] hover:bg-blue-600 hover:text-white transition-colors"
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
