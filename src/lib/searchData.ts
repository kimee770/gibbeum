/* ─────────────────────────────────────────
   검색 인덱스 데이터
   — 사이트 내 모든 검색 가능한 콘텐츠
───────────────────────────────────────── */

export type SearchResult = {
  title: string;
  description: string;
  href: string;
  category: string;
};

export const SEARCH_DATA: SearchResult[] = [
  /* ── Main Pages ── */
  {
    title: "About Us",
    description:
      "Learn about Gibbeum Hospital, Dr. Kang's background, our philosophy of mesh-free hernia surgery, and our world-class surgical team.",
    href: "/about",
    category: "Page",
  },
  {
    title: "Kang Repair — Mesh-Free Hernia Surgery",
    description:
      "The Kang Repair is a revolutionary mesh-free hernia repair technique with a recurrence rate of less than 0.3%. Stronger than mesh, faster recovery.",
    href: "/kang-repair",
    category: "Page",
  },
  {
    title: "Mesh Removal",
    description:
      "Suffering from mesh complications? Gibbeum Hospital specializes in safe and complete mesh explantation, with hundreds of cases performed by Dr. Kang.",
    href: "/mesh-removal",
    category: "Page",
  },
  {
    title: "Become a Patient",
    description:
      "Ready to start your journey? Learn how to become an international patient at Gibbeum Hospital — consultation, travel, surgery, and aftercare explained.",
    href: "/patient",
    category: "Page",
  },
  {
    title: "Premium Health Screening",
    description:
      "World-class health screening packages in Seoul, Korea. Comprehensive diagnostics with English-speaking coordinators for international visitors.",
    href: "/screening",
    category: "Page",
  },
  {
    title: "FAQ & Contact",
    description:
      "Frequently asked questions about Kang Repair, mesh removal, surgery, recovery, travel logistics, and how to get in touch with our team.",
    href: "/faq",
    category: "Page",
  },

  /* ── FAQ: Kang Repair ── */
  {
    title: "Is Kang Repair as strong as mesh surgery?",
    description:
      "Kang Repair is stronger when judged by the metric that matters most: recurrence rate. Mesh surgery has a recurrence rate of 2–10%, while Kang Repair has a recurrence rate of less than 0.3%.",
    href: "/faq",
    category: "FAQ",
  },
  {
    title: "My doctor said mesh-free surgery has high recurrence rates.",
    description:
      "Your doctor is correct — for old mesh-free techniques (10–30% recurrence). But Kang Repair achieves <0.3%, lower than any documented technique.",
    href: "/faq",
    category: "FAQ",
  },
  {
    title: 'What if my hernia is "too large" for mesh-free repair?',
    description:
      "Size has not been a limitation. The hernia sac can grow enormous, but the defect doesn't grow proportionally. We've repaired hernias of all sizes, including very large bilateral cases.",
    href: "/faq",
    category: "FAQ",
  },
  {
    title: "Can you repair my recurrent hernia?",
    description:
      "Yes — recurrent hernias are our specialty. We've treated recurrences after non-mesh repair, laparoscopic mesh, open mesh, and patients who've recurred multiple times.",
    href: "/faq",
    category: "FAQ",
  },
  {
    title: "How long until I can exercise after Kang Repair?",
    description:
      "Week 1: Light walking, desk work. Week 2: Jogging and swimming. Week 3+: Return to any activity that feels comfortable, including sports and heavy exercise.",
    href: "/faq",
    category: "FAQ",
  },

  /* ── FAQ: Mesh Removal ── */
  {
    title: "My scans look normal, but I'm still in pain. Can mesh still be the problem?",
    description:
      "Yes — imaging cannot detect mesh-related nerve damage, inflammatory reactions, or tissue contraction. Scans showing 'normal' mesh do not rule out mesh as the source of pain.",
    href: "/faq",
    category: "FAQ",
  },
  {
    title: "I had mesh inserted years ago. Is it too late to remove it?",
    description:
      "It is never too late. We have successfully removed mesh implanted 10, 15, even 20+ years ago. Older mesh may be more integrated, but our team has extensive experience with complex explant cases.",
    href: "/faq",
    category: "FAQ",
  },
  {
    title: "Why should I travel to Korea instead of finding a local surgeon for mesh removal?",
    description:
      "Mesh removal is a highly specialized procedure. Most surgeons perform only a handful of these cases per year — Dr. Kang performs hundreds. The volume, technique, and outcomes at Gibbeum are not replicated elsewhere.",
    href: "/faq",
    category: "FAQ",
  },

  /* ── FAQ: About Surgery ── */
  {
    title: "Am I too old for surgery?",
    description:
      "Age alone is not a contraindication. We have successfully treated patients in their 80s. The key factors are overall health, cardiac function, and anesthesia tolerance.",
    href: "/faq",
    category: "FAQ",
  },
  {
    title: "What if I have other health conditions (diabetes, heart disease)?",
    description:
      "We work with patients with managed chronic conditions regularly. A full pre-operative evaluation is required, and our team coordinates with your existing physicians.",
    href: "/faq",
    category: "FAQ",
  },
  {
    title: "What if complications occur after I return home?",
    description:
      "We provide 24/7 post-operative support via WhatsApp and email. For any complication, we provide immediate guidance and coordinate with local physicians if needed.",
    href: "/faq",
    category: "FAQ",
  },

  /* ── FAQ: Travel & Logistics ── */
  {
    title: "When can I fly back home after surgery?",
    description:
      "Most patients fly home 7–10 days after surgery for simple hernia repair, or 10–14 days after complex mesh removal. Long-haul flights (over 10 hours) may require an additional day or two.",
    href: "/faq",
    category: "FAQ",
  },
  {
    title: "Do I need a visa to visit Korea?",
    description:
      "Most Western countries can enter South Korea visa-free for up to 90 days. We can provide official documentation to support your visa application if needed.",
    href: "/faq",
    category: "FAQ",
  },
  {
    title: "Can I travel alone to Korea for surgery?",
    description:
      "Yes — many of our international patients travel alone. Our patient coordinator will arrange airport pickup, hotel recommendations, hospital escorts, and daily check-ins.",
    href: "/faq",
    category: "FAQ",
  },
  {
    title: "What if I don't speak Korean?",
    description:
      "All patient-facing communication at Gibbeum International is conducted in English. Our coordinator, nurses, and Dr. Kang all communicate in English.",
    href: "/faq",
    category: "FAQ",
  },
  {
    title: "Is Korea safe to travel to?",
    description:
      "South Korea consistently ranks among the safest countries in the world. Seoul has low crime rates, excellent public infrastructure, and world-class medical facilities.",
    href: "/faq",
    category: "FAQ",
  },

  /* ── Educational Cartoons ── */
  {
    title: "What is an Inguinal Hernia?",
    description:
      "Understanding the basics of inguinal hernias through simple illustrations. 3 min read.",
    href: "/cartoons",
    category: "Educational",
  },
  {
    title: "Mesh vs Mesh-Free Surgery",
    description:
      "Visual comparison of different hernia repair approaches. 4 min read.",
    href: "/cartoons",
    category: "Educational",
  },
  {
    title: "The Kang Repair Technique — Visual Guide",
    description:
      "Step-by-step visual guide to our revolutionary mesh-free technique. 5 min read.",
    href: "/cartoons",
    category: "Educational",
  },
  {
    title: "Mesh Complications Explained",
    description:
      "Understanding potential issues with mesh implants through illustrated guides. 4 min read.",
    href: "/cartoons",
    category: "Educational",
  },
  {
    title: "Recovery Timeline After Hernia Surgery",
    description:
      "What to expect during your recovery journey — illustrated week by week. 3 min read.",
    href: "/cartoons",
    category: "Educational",
  },
  {
    title: "Anatomy of the Groin",
    description:
      "Learn about the anatomy involved in hernia repairs through clear diagrams. 4 min read.",
    href: "/cartoons",
    category: "Educational",
  },

  /* ── Videos ── */
  {
    title: "Dr. Kang Explains the Kang Repair Technique",
    description:
      "A comprehensive overview of our mesh-free surgical approach. 12 min.",
    href: "/video",
    category: "Video",
  },
  {
    title: "Patient Success Story: John from Australia",
    description:
      "Hear about John's journey from chronic pain to full recovery after Kang Repair. 8 min.",
    href: "/video",
    category: "Video",
  },
  {
    title: "Understanding Mesh Complications",
    description:
      "Medical explanation of common mesh-related issues and why removal may be necessary. 10 min.",
    href: "/video",
    category: "Video",
  },
  {
    title: "Virtual Hospital Tour",
    description:
      "Take a look at our state-of-the-art facilities at Gibbeum Hospital in Seoul. 6 min.",
    href: "/video",
    category: "Video",
  },
  {
    title: "Post-Surgery Recovery Tips",
    description:
      "Essential guidance for optimal recovery outcomes after hernia surgery. 9 min.",
    href: "/video",
    category: "Video",
  },
  {
    title: "Mesh Removal Surgery Explained",
    description:
      "How we safely remove problematic mesh implants — step by step. 14 min.",
    href: "/video",
    category: "Video",
  },
];

/* ─────────────────────────────────────────
   Search function
───────────────────────────────────────── */
export function searchContent(query: string): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const terms = q.split(/\s+/).filter(Boolean);

  return SEARCH_DATA.filter((item) => {
    const haystack =
      `${item.title} ${item.description} ${item.category}`.toLowerCase();
    return terms.every((term) => haystack.includes(term));
  });
}
