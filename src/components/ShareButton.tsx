"use client";

import { useState, useRef, useEffect } from "react";

export default function ShareButton() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    function handleScroll() {
      const current = window.scrollY;
      if (current <= 0) {
        setVisible(false);
      } else if (current < lastScrollY.current) {
        setVisible(true);
      } else {
        setVisible(false);
        setOpen(false);
      }
      lastScrollY.current = current;
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function getUrl() {
    return typeof window !== "undefined" ? window.location.href : "";
  }

  function copyLink() {
    navigator.clipboard.writeText(getUrl()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const shareItems = [
    {
      label: "Facebook",
      href: () => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getUrl())}`,
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect width="20" height="20" rx="4" fill="#1877F2"/>
          <path d="M13 10h-2v6h-2v-6H8V8h1V7c0-1.7.7-2.7 2.7-2.7H13v2h-1.3c-.5 0-.7.2-.7.7V8H13l-.3 2z" fill="white"/>
        </svg>
      ),
    },
    {
      label: "Twitter",
      href: () => `https://twitter.com/intent/tweet?url=${encodeURIComponent(getUrl())}`,
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect width="20" height="20" rx="4" fill="#000"/>
          <path d="M11.2 9.1L15.5 4h-1l-3.7 4.3L7.8 4H4.5l4.5 6.6L4.5 16h1l3.9-4.6 3.1 4.6H15.5L11.2 9.1zm-1.4 1.6l-.5-.6-3.7-5.3h1.6l3 4.3.5.6 3.9 5.5h-1.6l-3.2-4.5z" fill="white"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: () => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getUrl())}`,
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect width="20" height="20" rx="4" fill="#0A66C2"/>
          <path d="M5.5 8H4v8h1.5V8zm-.75-1a.87.87 0 100-1.74.87.87 0 000 1.74zM16 11.5c0-2.2-1.1-3.5-3-3.5-1 0-1.8.5-2 1.2V8H9.5v8H11v-4.5c0-1 .5-1.7 1.5-1.7s1.5.7 1.5 1.8V16H16v-4.5z" fill="white"/>
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      href: () => `https://wa.me/?text=${encodeURIComponent(getUrl())}`,
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect width="20" height="20" rx="4" fill="#25D366"/>
          <path d="M10 3C6.13 3 3 6.13 3 10c0 1.25.34 2.42.93 3.43L3 17l3.68-.96A6.97 6.97 0 0010 17c3.87 0 7-3.13 7-7s-3.13-7-7-7zm3.44 9.58c-.16.44-.93.84-1.27.89-.32.05-.73.07-1.18-.07-.27-.09-.62-.21-1.07-.41-1.88-.81-3.1-2.7-3.2-2.83-.09-.12-.77-1.02-.77-1.95s.49-1.38.66-1.57c.17-.19.37-.24.5-.24h.36c.12 0 .28-.05.43.33l.54 1.3c.04.1.08.21.02.33-.06.12-.09.2-.19.31-.1.11-.2.24-.28.32-.1.1-.19.2-.08.38.11.18.49.8 1.05 1.3.72.65 1.33.85 1.52.94.19.1.3.08.41-.05.11-.12.47-.55.6-.74.12-.19.25-.16.41-.1.17.06 1.1.52 1.29.62.19.1.31.14.36.22.05.08.05.47-.1.91z" fill="white"/>
        </svg>
      ),
    },
  ];

  return (
    <div ref={ref} className={`fixed top-[62px] md:top-[98px] right-4 z-30 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Share this page"
        className="bg-white hover:bg-blue-50 border border-neutralgray-300 rounded-full size-10 md:size-14 flex items-center justify-center shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] transition-colors"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="17" cy="4" r="2.5" stroke="#0047AB" strokeWidth="1.8"/>
          <circle cx="5" cy="11" r="2.5" stroke="#0047AB" strokeWidth="1.8"/>
          <circle cx="17" cy="18" r="2.5" stroke="#0047AB" strokeWidth="1.8"/>
          <path d="M7.3 12.2l7.4 4.3M14.7 5.5L7.3 9.8" stroke="#0047AB" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </button>

      {open && (
        <div className="absolute top-0 right-[calc(100%+8px)] bg-white border border-neutralgray-300 rounded-lg shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] w-[200px] overflow-hidden">
          <p className="px-3 py-2.5 text-neutralgray-900 text-[14px] leading-[1.35] border-b border-neutralgray-100">
            Share this page
          </p>
          <div className="flex flex-col p-1">
            {shareItems.map((item) => (
              <a
                key={item.label}
                href={item.href()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 h-9 rounded text-neutralgray-900 text-[14px] leading-[1.35] hover:bg-blue-50 transition-colors"
              >
                <span className="shrink-0">{item.icon}</span>
                {item.label}
              </a>
            ))}
            <button
              onClick={copyLink}
              className="flex items-center gap-3 px-3 h-9 rounded text-neutralgray-900 text-[14px] leading-[1.35] hover:bg-blue-50 transition-colors w-full text-left"
            >
              <span className="shrink-0">
                {copied ? (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" stroke="#00BC7D" strokeWidth="1.5"/>
                    <path d="M6 10l3 3 5-5" stroke="#00BC7D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="7" y="7" width="9" height="11" rx="1.5" stroke="#555" strokeWidth="1.5"/>
                    <path d="M13 7V5.5A1.5 1.5 0 0011.5 4h-7A1.5 1.5 0 003 5.5v8A1.5 1.5 0 004.5 15H6" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                )}
              </span>
              {copied ? "Copied!" : "Copy link"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
