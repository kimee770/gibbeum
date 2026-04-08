import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ScreeningImageSlider from "@/components/ScreeningImageSlider";

/* ─────────────────────────── Section 1: Why Korea ─────────────────────────── */
function WhyKoreaSection() {
  const cards = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Advanced Technology",
      desc: "Advanced medical technology (often ahead of USA/Europe)",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Best Detection Rates",
      desc: "Best early cancer detection rates in the world",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Affordable Pricing",
      desc: "1/3 to 1/5 of Western countries",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Fast Results",
      desc: "Same-day or next-day results",
    },
  ];

  return (
    <section className="w-full bg-[#eef5fc] py-[var(--spacing-xl)]">
      <div className="max-w-[1224px] mx-auto px-6 md:px-8 flex flex-col items-center gap-[var(--spacing-ml)]">
        {/* Title */}
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="bg-blue-600 h-[9px] w-[184px] shrink-0" />
          <h2 className="font-bold text-blue-700 text-[length:var(--text-h2)] leading-[1.25] tracking-[-0.5px]">
            Why Get a Health Screening in Korea?
          </h2>
          <p className="font-bold text-neutralgray-900 text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px]">
            Korea leads the world in preventive medicine and early cancer detection.
          </p>
        </div>

        {/* Cards */}
        <div className="w-full flex flex-col items-center gap-6 xl:gap-12">
          <h3 className="font-bold text-blue-700 text-[length:var(--text-h3)] leading-[1.25] text-center">
            Korea&apos;s Healthcare Advantage
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[40px] sm:gap-6 w-full mt-6">
            {cards.map((card) => (
              <div key={card.title} className="relative bg-white rounded-[12px] border border-[#e9eaeb] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] pt-[56px] pb-6 px-6 flex flex-col items-center gap-2 text-center">
                {/* Icon — absolute inside card, straddling top edge */}
                <div className="absolute -top-[25px] left-1/2 -translate-x-1/2 w-12 h-12 bg-[#0047ab] rounded-[32px] flex items-center justify-center">
                  {card.icon}
                </div>
                <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                  {card.title}
                </p>
                <p className="text-neutralgray-700 text-[length:var(--text-body-l)] leading-[1.45]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Section 2: Cancer Detection ─────────────────────────── */
function CancerDetectionSection() {
  const stats = [
    { type: "Colorectal cancer survival", badge: "Korea Wins", wins: true, korea: 72, usa: 65 },
    { type: "Breast cancer survival",     badge: "Korea Wins", wins: true, korea: 93, usa: 90 },
    { type: "Prostate cancer survival",   badge: "Comparable", wins: false, korea: 95, usa: 97 },
  ];

  return (
    <section className="w-full bg-white py-[var(--spacing-xl)]">
      <div className="max-w-[1224px] mx-auto px-6 md:px-8 flex flex-col gap-[var(--spacing-ml)]">
        {/* Title */}
        <div className="flex flex-col items-center gap-[32px] text-center">
          <h2 className="font-bold text-blue-700 text-[length:var(--text-h3)] md:text-[length:var(--text-h2)] leading-[1.25]">
            World-Leading Cancer Detection
          </h2>
          <p className="font-bold text-neutralgray-900 text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px]">
            Korea has the highest cancer survival rates globally<br /> — because we catch it early.
          </p>
        </div>

        {/* Two-column layout — 50:50 */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-[var(--spacing-m)]">
          {/* Left: stat cards */}
          <div className="flex flex-col gap-[16px]">
            {stats.map((s) => (
              <div key={s.type} className="bg-[#eef5fc] rounded-[12px] p-[16px] md:p-[24px] flex flex-col gap-[8px]">
                {/* Header row */}
                <div className="flex items-center justify-between h-[28px]">
                  <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                    {s.type}
                  </p>
                  {s.wins ? (
                    <span className="bg-gradient-to-b from-[#0076f1] to-[#0062c7] text-white text-[16px] font-medium px-[8px] py-[4px] rounded-[4px] leading-[20px] whitespace-nowrap">
                      Korea Wins
                    </span>
                  ) : (
                    <span className="bg-white text-[#737373] text-[16px] font-medium px-[8px] py-[4px] rounded-[4px] leading-[20px] whitespace-nowrap">
                      Comparable
                    </span>
                  )}
                </div>
                {/* Bars */}
                <div className="flex gap-[16px]">
                  {/* Korea */}
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <div className="flex items-center justify-between h-[20px]">
                      <span className="font-bold text-neutralgray-900 text-[14px] leading-[20px]">Korea</span>
                      <span className="font-medium text-neutralgray-900 text-[14px] leading-[20px]">{s.korea}%</span>
                    </div>
                    <div className="bg-[#e9eaeb] h-[10px] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-b from-[#0076f1] to-[#0062c7] rounded-full" style={{ width: `${s.korea}%` }} />
                    </div>
                  </div>
                  {/* USA */}
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <div className="flex items-center justify-between h-[20px]">
                      <span className="font-bold text-neutralgray-900 text-[14px] leading-[20px]">USA</span>
                      <span className="font-medium text-neutralgray-900 text-[14px] leading-[20px]">
                        {s.usa}%<span className="text-[#086fed]">*</span>
                      </span>
                    </div>
                    <div className="bg-[#e9eaeb] h-[10px] rounded-full overflow-hidden">
                      <div className="h-full bg-[#8f8f8f] rounded-full" style={{ width: `${s.usa}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <p className="text-neutralgray-700 text-[length:var(--text-body-16)] leading-[1.35]">
              <span className="text-[#086fed]">*</span>according to national cancer statistics from Korea and the USA.
            </p>
          </div>

          {/* Right: how we achieve */}
          <div className="flex flex-col gap-[16px]">
            <h3 className="font-bold text-neutralgray-900 text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px]">
              How do we achieve this?
            </h3>
            <ul className="flex flex-col gap-[16px]">
              {[
                "High-frequency screening culture embedded in the healthcare system",
                "Advanced endoscopy and imaging technology available at most centers",
                "Experienced physicians performing hundreds of screenings weekly",
              ].map((item) => (
                <li key={item} className="flex items-start gap-[8px]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[4px]" aria-hidden="true">
                    <circle cx="12" cy="12" r="11.5" stroke="#2563EB" strokeWidth="1.5"/>
                    <path d="M7.5 12.5L10 15L16.5 8.5" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Section 3: Advanced Technology ─────────────────────────── */
function AdvancedTechSection() {
  const equipment = [
    "Latest generation CT and MRI scanners",
    "High-definition endoscopy (4K resolution with AI-assistance)",
    "Digital mammography and ultrasound",
    "DEXA bone density scanners",
    "Echocardiogram (cardiac ultrasound)",
  ];

  return (
    <section className="w-full bg-[#fafafa] py-[var(--spacing-xl)]">
      <div className="max-w-[1224px] mx-auto px-6 md:px-8 flex flex-col items-center gap-[var(--spacing-ml)]">

        {/* Title */}
        <div className="flex flex-col items-center gap-[32px] text-center">
          <h2 className="font-bold text-blue-700 text-[length:var(--text-h3)] leading-[1.25]">
            Advanced Technology
          </h2>
          <p className="font-bold text-neutralgray-900 text-[length:var(--text-h5)] leading-[1.25] tracking-[-0.3px]">
            Equipment you&apos;ll experience during your screening
          </p>
        </div>

        {/* Equipment cards — 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[8px] md:gap-[24px] w-full">
          {equipment.map((item) => (
            <div key={item} className="flex items-start gap-[12px] bg-white rounded-[8px] border border-[#e9eaeb] px-[24px] py-[16px]">
              {/* Check icon */}
              <div className="shrink-0 w-[24px] h-[24px] bg-[#dcfce7] rounded-full flex items-center justify-center p-[4px] mt-[2px]">
                <svg width="12" height="9" viewBox="0 0 12 9" fill="none" aria-hidden="true">
                  <path d="M11.333 0.667L4 8L0.667 4.667" stroke="#009262" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[#1e2939] text-[length:var(--text-body-l)] leading-[1.45]">{item}</span>
            </div>
          ))}
        </div>

        {/* Image slider */}
        <ScreeningImageSlider />

      </div>
    </section>
  );
}

/* ─────────────────────────── Section 4: Cost Comparison ─────────────────────────── */
function CostComparisonSection() {
  const rows = [
    { country: "South Korea", note: "(with our discount)", price: "$490 - 700",   highlight: true,  alt: false },
    { country: "USA",          note: "",                   price: "$2,000 - 5,000", highlight: false, alt: false },
    { country: "UK (Private)", note: "",                   price: "$1,900 - 3,800", highlight: false, alt: true  },
    { country: "Australia",    note: "",                   price: "$1,700 - 2,700", highlight: false, alt: false },
    { country: "Singapore",    note: "",                   price: "$1,500 - 2,600", highlight: false, alt: true  },
  ];

  return (
    <section className="w-full bg-white py-[var(--spacing-xl)]">
      <div className="max-w-[1224px] mx-auto px-6 md:px-8 flex flex-col items-center gap-[var(--spacing-ml)]">

        {/* Title block */}
        <div className="flex flex-col items-center gap-[17px] text-center max-w-[1016px]">
          <h2 className="font-bold text-blue-700 text-[length:var(--text-h3)] leading-[1.25]">
            Cost Comparison
          </h2>
          <p className="font-bold text-neutralgray-900 text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px]">
            You save 70-80% while getting superior technology and expertise.
          </p>
        </div>

        {/* Blue subtitle + Table */}
        <div className="flex flex-col items-center gap-[32px] w-full">
          <p className="font-bold text-blue-700 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px] text-center">
            You save 70-80% while getting superior technology and expertise.
          </p>

          {/* Table */}
          <div className="w-full max-w-[806px] rounded-[12px] border border-neutralgray-300 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] overflow-hidden">
            <table className="w-full border-collapse table-fixed">
              <thead>
                <tr className="bg-blue-700">
                  <th className="w-1/2 p-[20px] border-r border-blue-600 font-bold text-white text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px] text-center">
                    Country
                  </th>
                  <th className="w-1/2 p-[20px] font-bold text-white text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px] text-center">
                    Comprehensive Screening Cost
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.country}
                    className={`border-b last:border-b-0 border-neutralgray-300 ${
                      row.highlight ? "bg-[#f0fdf4]" : row.alt ? "bg-neutralgray-100" : "bg-white"
                    }`}
                  >
                    <td className="px-[12px] sm:px-[20px] py-[16px] sm:py-[21px] border-r border-neutralgray-300">
                      <div className="flex flex-col items-center justify-center gap-[2px]">
                        <div className="flex flex-wrap items-center justify-center gap-x-[6px]">
                          <span className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45] text-center whitespace-nowrap">
                            {row.country}
                          </span>
                          {row.note && (
                            <span className="text-system-green text-[12px] sm:text-[length:var(--text-body-l)] leading-[1.45] text-center whitespace-nowrap">
                              {row.note}
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-[12px] sm:px-[21px] py-[16px] sm:py-[20px] text-center">
                      {row.highlight ? (
                        <span className="font-bold text-system-green text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                          {row.price}
                        </span>
                      ) : (
                        <span className="font-normal text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                          {row.price}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────── Sections 5–9: Combined (Essential Battery → Quotes) ─────────────────────────── */
function ScreeningDetailSection() {
  const batteryTests = [
    "Complete Blood Count (CBC): Hemoglobin, anemia screening",
    "Liver Function: AST, ALT, GGT, bilirubin",
    "Kidney Function: Creatinine, BUN, eGFR",
    "Lipid Profile: Total cholesterol, HDL, LDL, triglycerides",
    "Diabetes Screening: Fasting glucose, HbA1c",
    "Infectious Disease: Hepatitis B, Hepatitis C, HIV screening",
    "Urinalysis",
    "Chest PA",
  ];

  const addons = [
    { name: "Upper Endoscopy (Gastroscopy)", sub: "with sedation",   badge: null,                         desc: "Stomach, esophagus",     regular: "$170", discounted: "$120" },
    { name: "Colonoscopy",                   sub: "with sedation",   badge: "If polypectomy done, +$150", desc: "Colon polyps/cancer",    regular: "$300", discounted: "$210" },
    { name: "Low-Dose Chest CT",             sub: null,              badge: null,                         desc: "Lung cancer (smokers)",  regular: "$190", discounted: "$135" },
    { name: "Brain MRI + MRA",               sub: null,              badge: null,                         desc: "Tumor, aneurysm, stroke",regular: "$600", discounted: "$420" },
  ];

  const BatteryCheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-[2px]" aria-hidden="true">
      <circle cx="10" cy="10" r="9.5" stroke="#2563EB" strokeWidth="1"/>
      <path d="M6 10.5L8.5 13L14 7.5" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const PremiumCheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-[4px]" aria-hidden="true">
      <path d="M4.5 10.5L8 14L15.5 6.5" stroke="#0047AB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <section className="w-full bg-neutralgray-100 py-[var(--spacing-xl)]">
      <div className="max-w-[1224px] mx-auto px-6 md:px-8 flex flex-col items-center gap-[var(--spacing-ml)]">

        {/* ── Essential Admission Battery ── */}
        <div className="w-full flex flex-col items-center gap-[var(--spacing-m)]">
          <div className="flex flex-col items-center gap-[var(--spacing-m)] text-center">
            <div className="bg-blue-600 h-[9px] w-[184px] shrink-0" />
            <h2 className="font-bold text-blue-700 text-[length:var(--text-h2)] leading-[1.25] tracking-[-0.5px]">
              Essential Admission Battery
            </h2>
            <div className="flex flex-col items-center gap-0 text-neutralgray-900 font-bold text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px]">
              <p>Required for all surgical patients — included in surgery fee for international patients</p>
              <p>(Normal price: $100 USD)</p>
            </div>
          </div>

          <div className="w-full max-w-[1016px] bg-white border border-neutralgray-300 rounded-[12px] p-[16px] md:p-[var(--spacing-m)] shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[24px] gap-y-[8px]">
              {batteryTests.map((t) => (
                <div key={t} className="flex items-start gap-[8px] py-[4px]">
                  <BatteryCheckIcon />
                  <span className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Premium Health Screening Package ── */}
        <div className="w-full max-w-[1016px] bg-white border-2 border-blue-700 rounded-[12px] overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
          {/* Blue header band */}
          <div className="bg-blue-700 flex flex-col items-center gap-[16px] px-[16px] md:px-6 xl:px-[40px] pt-[24px] md:pt-[32px] pb-[32px] md:pb-[40px] text-center">
            <h2 className="font-bold text-white text-[length:var(--text-h3)] leading-[1.25]">
              Premium Health Screening Package
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-[16px]">
              <p className="text-white opacity-70 text-[length:var(--text-body-l)] leading-[1.45]">
                Regular price: $700 USD
              </p>
              <p className="font-bold text-system-mint text-[length:var(--text-h5)] leading-[1.25] tracking-[-0.3px]">
                Special discount: $490 USD
              </p>
            </div>
            <p className="text-neutralgray-300 text-[length:var(--text-body-l)] leading-[1.45]">
              Save $210 — 30% discount, exclusive to hernia surgery patients
            </p>
          </div>

          {/* Body */}
          <div className="px-[16px] md:px-6 xl:px-[40px] py-[32px] flex flex-col gap-[var(--spacing-m)]">
            <h3 className="font-bold text-blue-700 text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px]">
              What&apos;s Included
            </h3>
            <div className="flex flex-col gap-[var(--spacing-m)]">
              {/* Blood Panel */}
              <div className="flex flex-col gap-[16px]">
                <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                  Special Blood Panel (30+ markers)
                </p>
                <div className="flex flex-col gap-[8px]">
                  {[
                    "Thyroid Function: TSH, Free T3, Free T4",
                    "Tumor Markers: CEA, AFP, CA19-9, PSA (men), CA125 (women)",
                    "Inflammation: CRP, ESR",
                    "Nutritional: Iron panel, Vitamin D, B12, Folate",
                    "Electrolytes: Sodium, potassium, chloride, calcium, phosphorus, magnesium",
                  ].map((i) => (
                    <div key={i} className="flex items-start gap-[12px]">
                      <PremiumCheckIcon />
                      <span className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">{i}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-px bg-neutralgray-100" />
              {/* Cardiac */}
              <div className="flex flex-col gap-[16px]">
                <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                  Cardiac Assessment
                </p>
                <div className="flex flex-col gap-[12px]">
                  {[
                    "Electrocardiogram (ECG): 12-lead ECG, detects arrhythmias, previous heart attacks",
                    "Echocardiogram: Cardiac ultrasound — heart valves, chambers, pumping strength",
                    "Blood pressure monitoring",
                    "10-year cardiovascular risk assessment",
                  ].map((i) => (
                    <div key={i} className="flex items-start gap-[12px]">
                      <PremiumCheckIcon />
                      <span className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">{i}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-px bg-neutralgray-100" />
              {/* Respiratory */}
              <div className="flex flex-col gap-[16px]">
                <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                  Respiratory System
                </p>
                <div className="flex flex-col gap-[12px]">
                  {[
                    "Chest X-ray: PA and lateral views — lung nodules, infections, heart enlargement",
                    "Pulmonary Function Test: Lung capacity, airflow — asthma, COPD screening",
                  ].map((i) => (
                    <div key={i} className="flex items-start gap-[12px]">
                      <PremiumCheckIcon />
                      <span className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">{i}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-px bg-neutralgray-100" />
              {/* Cancer + Gender */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--spacing-m)]">
                <div className="flex flex-col gap-[16px]">
                  <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                    Cancer Screening
                  </p>
                  <div className="flex flex-col gap-[12px]">
                    {[
                      "Abdominal Ultrasound: Liver, gallbladder, pancreas, kidneys, spleen",
                      "Thyroid Ultrasound: Nodules, cysts, enlargement",
                    ].map((i) => (
                      <div key={i} className="flex items-start gap-[12px]">
                        <PremiumCheckIcon />
                        <span className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">{i}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-[16px]">
                  <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                    Gender-Specific Screening
                  </p>
                  <div className="flex flex-col gap-[12px]">
                    {[
                      { label: "Women:", rest: "Breast ultrasound, pelvic ultrasound, Pap smear" },
                      { label: "Men:", rest: "PSA blood test, prostate assessment" },
                    ].map((i) => (
                      <div key={i.label} className="flex items-start gap-[12px]">
                        <PremiumCheckIcon />
                        <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                          <span className="font-bold">{i.label} </span>{i.rest}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Optional Add-Ons ── */}
        <div className="w-full max-w-[1016px] flex flex-col gap-[var(--spacing-m)]">
          <h2 className="font-bold text-neutralgray-900 text-[length:var(--text-h3)] leading-[1.25] text-center">
            Optional <span className="text-blue-500">Add-Ons</span>
          </h2>

          {/* Table card */}
          <div className="w-full bg-white border border-neutralgray-300 rounded-[12px] overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
            <div className="bg-blue-700 flex items-center justify-between p-[16px]">
              <span className="font-bold text-white text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px]">
                Add-On Services
              </span>
              <div className="bg-[rgba(28,57,142,0.5)] rounded-full px-[16px] py-[4px]">
                <span className="text-blue-100 text-[length:var(--text-body-16)] leading-[1.35]">Exclusive Rates</span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse">
                <thead>
                  <tr className="bg-neutralgray-100 border-b border-neutralgray-300">
                    <th className="px-[16px] py-[8px] text-left font-bold text-neutralgray-600 text-[length:var(--text-body-l)] leading-[1.45] uppercase">Service</th>
                    <th className="px-[16px] py-[8px] text-left font-bold text-neutralgray-600 text-[length:var(--text-body-l)] leading-[1.45] uppercase">Description</th>
                    <th className="px-[16px] py-[8px] text-right font-bold text-neutralgray-500 text-[length:var(--text-body-l)] leading-[1.45] uppercase line-through">Regular</th>
                    <th className="px-[16px] py-[8px] text-right font-bold text-system-green text-[length:var(--text-body-l)] leading-[1.45] uppercase bg-[rgba(0,166,62,0.05)]">Discounted</th>
                  </tr>
                </thead>
                <tbody>
                  {addons.map((a) => (
                    <tr key={a.name} className="border-t border-neutralgray-300">
                      <td className="px-[16px] py-[8px]">
                        <p className="font-bold text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">{a.name}</p>
                        {a.sub && <p className="text-neutralgray-600 text-[length:var(--text-body-16)] leading-[1.35]">{a.sub}</p>}
                        {a.badge && (
                          <span className="inline-block mt-[4px] bg-[rgba(251,44,54,0.1)] border border-[rgba(251,44,54,0.3)] text-system-danger text-[length:var(--text-body-16)] font-bold px-[9px] py-[4px] rounded-[4px]">
                            {a.badge}
                          </span>
                        )}
                      </td>
                      <td className="px-[16px] py-[8px] text-neutralgray-600 text-[length:var(--text-body-l)] leading-[1.45]">{a.desc}</td>
                      <td className="px-[16px] py-[8px] text-right text-neutralgray-500 text-[length:var(--text-body-l)] leading-[1.45]">{a.regular}</td>
                      <td className="px-[16px] py-[8px] text-right font-bold text-system-green text-[length:var(--text-body-l)] leading-[1.45] bg-[rgba(0,166,62,0.05)]">{a.discounted}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* OnePrep */}
          <div className="w-full bg-blue-50 border border-blue-200 rounded-[12px] p-[var(--spacing-m)] flex flex-col items-center gap-[24px]">
            <div className="flex flex-col items-center gap-[8px]">
              <div className="flex items-center gap-[8px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
                  <path d="M11.017 2.814C11.0598 2.5846 11.1816 2.37742 11.3611 2.22832C11.5406 2.07922 11.7666 1.99761 12 1.99761C12.2334 1.99761 12.4594 2.07922 12.6389 2.22832C12.8184 2.37742 12.9402 2.5846 12.983 2.814L14.034 8.372C14.1086 8.76715 14.3007 9.13062 14.585 9.41497C14.8694 9.69932 15.2329 9.89135 15.628 9.966L21.186 11.017C21.4154 11.0598 21.6226 11.1816 21.7717 11.3611C21.9208 11.5406 22.0024 11.7666 22.0024 12C22.0024 12.2334 21.9208 12.4594 21.7717 12.6389C21.6226 12.8184 21.4154 12.9402 21.186 12.983L15.628 14.034C15.2329 14.1086 14.8694 14.3007 14.585 14.585C14.3007 14.8694 14.1086 15.2329 14.034 15.628L12.983 21.186C12.9402 21.4154 12.8184 21.6226 12.6389 21.7717C12.4594 21.9208 12.2334 22.0024 12 22.0024C11.7666 22.0024 11.5406 21.9208 11.3611 21.7717C11.1816 21.6226 11.0598 21.4154 11.017 21.186L9.966 15.628C9.89135 15.2329 9.69932 14.8694 9.41497 14.585C9.13062 14.3007 8.76715 14.1086 8.372 14.034L2.814 12.983C2.5846 12.9402 2.37742 12.8184 2.22832 12.6389C2.07922 12.4594 1.99761 12.2334 1.99761 12C1.99761 11.7666 2.07922 11.5406 2.22832 11.3611C2.37742 11.1816 2.5846 11.0598 2.814 11.017L8.372 9.966C8.76715 9.89135 9.13062 9.69932 9.41497 9.41497C9.69932 9.13062 9.89135 8.76715 9.966 8.372L11.017 2.814Z" fill="#F0B100" stroke="#F0B100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 2V6" stroke="#F0B100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 4H18" stroke="#F0B100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 22C5.10457 22 6 21.1046 6 20C6 18.8954 5.10457 18 4 18C2.89543 18 2 18.8954 2 20C2 21.1046 2.89543 22 4 22Z" fill="#F0B100" stroke="#F0B100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="font-bold text-neutralgray-900 text-[length:var(--text-h5)] leading-[1.25] tracking-[-0.3px]">
                  Exclusive: OnePrep
                </p>
              </div>
              <p className="font-medium text-neutralgray-900 text-[20px] leading-[1.4] text-center">
                — The World&apos;s Easiest Bowel Prep
              </p>
            </div>
            <p className="text-neutralgray-700 text-[length:var(--text-body-l)] leading-[1.45] text-center max-w-[600px]">
              Gibbeum Hospital uses{" "}
              <span className="font-bold text-blue-700">OnePrep</span>, a bowel preparation solution developed by Dr. Kang Yoon-sik and approved by Korean FDA.
            </p>
            <div className="flex flex-col gap-[8px] md:flex-row md:flex-wrap md:gap-[16px] items-center justify-center">
              {["Lowest Volume (1.5L)", "Best Tasting"].map((label) => (
                <div key={label} className="bg-white border border-blue-200 rounded-full flex items-center gap-[6px] px-[13px] py-[5px] shadow-sm">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="7.5" stroke="#0047AB" strokeWidth="1"/>
                    <path d="M5 8.5L7 10.5L11.5 6" stroke="#0047AB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-medium text-blue-700 text-[16px] leading-[20px]">{label}</span>
                </div>
              ))}
            </div>
            <p className="font-normal italic text-blue-700 text-[length:var(--text-body-l)] leading-[1.45] text-center">
              Don&apos;t miss this opportunity to have a colonoscopy without the usual discomfort of bowel prep!
            </p>
          </div>

          {/* Popular Combos + Family Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-m)]">
            <div className="bg-blue-50 border border-blue-200 rounded-[12px] p-[var(--spacing-m)] flex flex-col gap-[16px]">
              <div className="flex items-center gap-[8px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
                  <path d="M5 12H19" stroke="#086FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5V19" stroke="#086FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="flex-1 font-bold text-neutralgray-900 text-[length:var(--text-h5)] leading-[1.25] tracking-[-0.3px]">Popular Combos</p>
              </div>
              <div className="flex flex-col gap-[16px]">
                {[
                  { text: "Premium + Colonoscopy = ", highlight: "$700 total" },
                  { text: "Premium + Low-Dose Chest CT = ", highlight: "$625 total" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-[12px]">
                    <div className="w-[8px] h-[8px] rounded-full bg-system-link shrink-0" />
                    <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                      {c.text}<span className="font-bold text-system-link">{c.highlight}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-[12px] p-[var(--spacing-m)] flex flex-col gap-[16px]">
              <div className="flex items-center gap-[8px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
                  <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="#086FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#086FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 8V14" stroke="#086FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 11H16" stroke="#086FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="flex-1 font-bold text-neutralgray-900 text-[length:var(--text-h5)] leading-[1.25] tracking-[-0.3px]">Family Benefits</p>
              </div>
              <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                If you prefer individual tests instead of the full package, please contact us for personalized consultation.
              </p>
              <p className="font-bold text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                Family members traveling with you can receive the same discounted price.
              </p>
            </div>
          </div>
        </div>

        {/* ── Scheduling ── */}
        <div className="w-full max-w-[1016px] flex flex-col gap-[var(--spacing-m)]">
          <h2 className="font-bold text-neutralgray-900 text-[length:var(--text-h3)] leading-[1.25] text-center">
            Scheduling
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[16px]">
            {/* Option 1 */}
            <div className="bg-blue-50 border border-blue-200 rounded-[14px] p-[16px] relative">
              <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 bg-system-link text-white text-[12px] font-bold px-[16px] py-[4px] rounded-full uppercase tracking-[0.5px] whitespace-nowrap">
                Recommended
              </div>
              <div className="pt-[16px] flex flex-col gap-[4px] items-center text-center">
                <p className="font-bold text-blue-700 text-[12px] leading-[20px] tracking-[0.5px] uppercase">Option 1</p>
                <p className="font-bold text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">2-3 days before surgery</p>
                <p className="text-neutralgray-600 text-[length:var(--text-body-l)] leading-[1.45]">Optimize health for safest outcome.</p>
              </div>
            </div>
            {/* Option 2 */}
            <div className="bg-white border border-neutralgray-400 rounded-[14px] p-[16px] flex items-center justify-center">
              <div className="flex flex-col gap-[4px] items-center text-center">
                <p className="font-bold text-neutralgray-500 text-[12px] leading-[20px] tracking-[0.5px] uppercase">Option 2</p>
                <p className="font-bold text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">Day 5-7 after surgery</p>
                <p className="text-neutralgray-600 text-[length:var(--text-body-l)] leading-[1.45]">During recovery period.</p>
              </div>
            </div>
            {/* Duration */}
            <div className="bg-white border border-neutralgray-300 rounded-[14px] p-[16px] flex items-center justify-center">
              <div className="flex flex-col gap-[4px] items-center text-center">
                <p className="font-bold text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">Duration</p>
                <p className="text-neutralgray-600 text-[length:var(--text-body-l)] leading-[1.45]">Half-day (4-5 hours)</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Quotes ── */}
        <div className="w-full max-w-[1016px] flex flex-col gap-[24px]">
          {[
            {
              text: "\"They found early-stage stomach polyps during gastroscopy — removed them on the spot. My doctor said if I'd waited 2-3 years, it could have become cancer.\"",
              author: "— James, 52, USA",
            },
            {
              text: "\"My German cardiologist was genuinely impressed by the thoroughness. He said this level of screening would cost €3,000+ in Germany. I paid $490.\"",
              author: "— German patient",
            },
          ].map((q, i) => (
            <div key={i} className="bg-white border-l-4 border-blue-700 px-[24px] md:px-[48px] py-[16px] md:py-[24px] flex flex-col gap-[16px]">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="shrink-0 rotate-180 -scale-y-100">
                <path d="M21.3333 4C20.6261 4 19.9478 4.28095 19.4477 4.78105C18.9476 5.28115 18.6667 5.95942 18.6667 6.66667V14.6667C18.6667 15.3739 18.9476 16.0522 19.4477 16.5523C19.9478 17.0524 20.6261 17.3333 21.3333 17.3333C21.687 17.3333 22.0261 17.4738 22.2761 17.7239C22.5262 17.9739 22.6667 18.313 22.6667 18.6667V20C22.6667 20.7072 22.3857 21.3855 21.8856 21.8856C21.3855 22.3857 20.7072 22.6667 20 22.6667C19.6464 22.6667 19.3072 22.8071 19.0572 23.0572C18.8071 23.3072 18.6667 23.6464 18.6667 24V26.6667C18.6667 27.0203 18.8071 27.3594 19.0572 27.6095C19.3072 27.8595 19.6464 28 20 28C22.1217 28 24.1566 27.1571 25.6569 25.6569C27.1571 24.1566 28 22.1217 28 20V6.66667C28 5.95942 27.719 5.28115 27.2189 4.78105C26.7189 4.28095 26.0406 4 25.3333 4H21.3333Z" stroke="#B3D9FF" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.66667 4C5.95942 4 5.28115 4.28095 4.78105 4.78105C4.28095 5.28115 4 5.95942 4 6.66667V14.6667C4 15.3739 4.28095 16.0522 4.78105 16.5523C5.28115 17.0524 5.95942 17.3333 6.66667 17.3333C7.02029 17.3333 7.35943 17.4738 7.60948 17.7239C7.85952 17.9739 8 18.313 8 18.6667V20C8 20.7072 7.71905 21.3855 7.21895 21.8856C6.71885 22.3857 6.04058 22.6667 5.33333 22.6667C4.97971 22.6667 4.64057 22.8071 4.39052 23.0572C4.14048 23.3072 4 23.6464 4 24V26.6667C4 27.0203 4.14048 27.3594 4.39052 27.6095C4.64057 27.8595 4.97971 28 5.33333 28C7.45507 28 9.4899 27.1571 10.9902 25.6569C12.4905 24.1566 13.3333 22.1217 13.3333 20V6.66667C13.3333 5.95942 13.0524 5.28115 12.5523 4.78105C12.0522 4.28095 11.3739 4 10.6667 4H6.66667Z" stroke="#B3D9FF" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-medium italic text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                {q.text}
              </p>
              <p className="text-neutralgray-500 text-[length:var(--text-body-16)] leading-[1.35]">{q.author}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
/* ─────────────────────────── Section 10: Form ─────────────────────────── */
function RequestFormSection() {
  /* ── inline calendar SVG icon ── */
  const CalendarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 18 20" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M14 0C13.45 0 13 0.45 13 1V2H5V1C5 0.45 4.55 0 4 0C3.45 0 3 0.45 3 1V2H2C0.89 2 0.01 2.9 0.01 4L0 18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2H15V1C15 0.45 14.55 0 14 0ZM16 18H2V8H16V18ZM8 11C8 10.45 8.45 10 9 10C9.55 10 10 10.45 10 11C10 11.55 9.55 12 9 12C8.45 12 8 11.55 8 11ZM4 11C4 10.45 4.45 10 5 10C5.55 10 6 10.45 6 11C6 11.55 5.55 12 5 12C4.45 12 4 11.55 4 11ZM12 11C12 10.45 12.45 10 13 10C13.55 10 14 10.45 14 11C14 11.55 13.55 12 13 12C12.45 12 12 11.55 12 11ZM8 15C8 14.45 8.45 14 9 14C9.55 14 10 14.45 10 15C10 15.55 9.55 16 9 16C8.45 16 8 15.55 8 15ZM4 15C4 14.45 4.45 14 5 14C5.55 14 6 14.45 6 15C6 15.55 5.55 16 5 16C4.45 16 4 15.55 4 15ZM12 15C12 14.45 12.45 14 13 14C13.55 14 14 14.45 14 15C14 15.55 13.55 16 13 16C12.45 16 12 15.55 12 15Z" fill="#737373"/>
    </svg>
  );

  /* ── section heading with thick bottom border ── */
  const SectionHeading = ({ title }: { title: string }) => (
    <div className="w-full border-b-2 border-neutralgray-900 py-[8px]">
      <p className="font-bold text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45] whitespace-nowrap">{title}</p>
    </div>
  );

  /* ── underline text input ── */
  const LineInput = ({ className = "" }: { className?: string }) => (
    <input
      type="text"
      className={`border-b border-neutralgray-400 h-[33px] bg-transparent focus:outline-none focus:border-blue-500 ${className}`}
    />
  );

  const addOns = [
    "Upper Endoscopy (Gastroscopy) with sedation — $120",
    "Colonoscopy with sedation — $210 (+$150 if polypectomy needed)",
    "Low-Dose Chest CT (lung cancer screening) — $135",
    "Brain MRI + MRA — $420",
  ];

  return (
    <section className="w-full bg-blue-100 py-[var(--spacing-xl)]">
      <div className="max-w-[1016px] mx-auto px-6 md:px-8">
        <div className="bg-white flex flex-col gap-[32px] items-center px-[16px] md:px-[40px] py-[32px] md:pt-[40px] md:pb-px shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]">

          {/* ── Title ── */}
          <div className="flex flex-col gap-[8px] text-center w-full">
            <h2 className="font-bold text-blue-700 text-[length:var(--text-h3)] leading-[1.25] w-full">
              HEALTH SCREENING REQUEST FORM
            </h2>
            <p className="text-neutralgray-600 text-[length:var(--text-body-l)] leading-[1.45] w-full">
              Check the tests you want and send to our coordinator
            </p>
          </div>

          {/* ── Form body ── */}
          <div className="flex flex-col gap-[40px] w-full">

            {/* 1 · Patient Information */}
            <div className="flex flex-col gap-[16px] w-full">
              <SectionHeading title="Patient Information" />
              <div className="flex flex-col gap-[24px] w-full">

                {/* Row 1: Name + Date of Birth — 모바일 1열, md+ 2열 */}
                <div className="flex flex-col md:flex-row gap-[24px] md:items-end w-full">
                  {/* Name */}
                  <div className="flex w-full md:flex-1 gap-[12px] items-end min-w-0">
                    <p className="font-bold text-neutralgray-900 text-[16px] leading-[24px] whitespace-nowrap shrink-0">Name:</p>
                    <LineInput className="flex-1 min-w-0" />
                  </div>
                  {/* Date of Birth */}
                  <div className="flex w-full md:flex-1 gap-[12px] items-end min-w-0">
                    <p className="font-bold text-neutralgray-900 text-[16px] leading-[24px] whitespace-nowrap shrink-0">Date of Birth:</p>
                    <div className="relative flex-1 min-w-0 border-b border-neutralgray-400">
                      {/* native date input – hides browser icon, shows ours */}
                      <input
                        type="date"
                        className="w-full h-[33px] bg-transparent focus:outline-none text-neutralgray-900 text-[length:var(--text-body-m)] pl-[8px] pr-[36px] py-[5px] appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:top-0 [&::-webkit-calendar-picker-indicator]:w-[36px] [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                      />
                      {/* custom calendar icon — pointer-events-none so clicks pass to native picker */}
                      <div className="absolute right-[8px] top-1/2 -translate-y-1/2 pointer-events-none">
                        <CalendarIcon />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 2: Email + Phone — 모바일 1열, md+ 2열 */}
                <div className="flex flex-col md:flex-row gap-[24px] md:items-end w-full">
                  <div className="flex w-full md:flex-1 gap-[12px] items-end min-w-0">
                    <p className="font-bold text-neutralgray-900 text-[16px] leading-[24px] whitespace-nowrap shrink-0">Email:</p>
                    <LineInput className="flex-1 min-w-0" />
                  </div>
                  <div className="flex w-full md:flex-1 gap-[12px] items-end min-w-0">
                    <p className="font-bold text-neutralgray-900 text-[16px] leading-[24px] whitespace-nowrap shrink-0">Phone:</p>
                    <LineInput className="flex-1 min-w-0" />
                  </div>
                </div>

                {/* Row 3: Planned Surgery Date + Preferred Screening Date — 모바일 1열, md+ 2열 */}
                <div className="flex flex-col md:flex-row gap-[24px] md:items-end w-full">
                  <div className="flex w-full md:flex-1 gap-[12px] items-end min-w-0">
                    <p className="font-bold text-neutralgray-900 text-[16px] leading-[24px] whitespace-nowrap shrink-0">Planned Surgery Date:</p>
                    <div className="relative flex-1 min-w-0 border-b border-neutralgray-400">
                      <input
                        type="date"
                        className="w-full h-[33px] bg-transparent focus:outline-none text-neutralgray-900 text-[length:var(--text-body-m)] pl-[8px] pr-[36px] py-[5px] appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:top-0 [&::-webkit-calendar-picker-indicator]:w-[36px] [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                      />
                      <div className="absolute right-[8px] top-1/2 -translate-y-1/2 pointer-events-none">
                        <CalendarIcon />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full md:flex-1 gap-[12px] items-end min-w-0">
                    <p className="font-bold text-neutralgray-900 text-[16px] leading-[24px] whitespace-nowrap shrink-0">Preferred Screening Date:</p>
                    <div className="relative flex-1 min-w-0 border-b border-neutralgray-400">
                      <input
                        type="date"
                        className="w-full h-[33px] bg-transparent focus:outline-none text-neutralgray-900 text-[length:var(--text-body-m)] pl-[8px] pr-[36px] py-[5px] appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:top-0 [&::-webkit-calendar-picker-indicator]:w-[36px] [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                      />
                      <div className="absolute right-[8px] top-1/2 -translate-y-1/2 pointer-events-none">
                        <CalendarIcon />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* 2 · Package Options */}
            <div className="flex flex-col gap-[16px] w-full">
              <SectionHeading title="Package Options" />
              <label className="flex gap-[10px] items-start py-[10px] cursor-pointer">
                <input type="checkbox" defaultChecked className="mt-[3px] w-[20px] h-[20px] accent-blue-600 shrink-0" />
                <span className="font-bold text-neutralgray-900 text-[18px] leading-[26px]">
                  Premium Health Screening Package — $490 (surgical patient) / $700 (regular)
                </span>
              </label>
            </div>

            {/* 3 · Optional Add-Ons */}
            <div className="flex flex-col gap-[16px] w-full">
              <SectionHeading title="Optional Add-Ons (Check all that apply)" />
              <div className="flex flex-col gap-[12px] pl-[4px] w-full">
                {addOns.map((item) => (
                  <label key={item} className="flex gap-[10px] items-start cursor-pointer">
                    <input type="checkbox" className="mt-[3px] w-[20px] h-[20px] accent-blue-600 shrink-0" />
                    <span className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 4 · Family Members */}
            <div className="flex flex-col gap-[16px] w-full">
              <SectionHeading title="Family Members" />
              <div className="flex flex-col gap-[10px] py-px w-full">
                {/* 모바일: 텍스트 + 인풋 세로 스택, md+: 가로 배치 */}
                <div className="flex flex-col md:flex-row gap-[10px] md:items-start w-full">
                  <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                    Number of accompanying family members who want screening:
                  </p>
                  <select className="border-b border-neutralgray-400 h-[29px] w-[96px] shrink-0 bg-transparent focus:outline-none text-neutralgray-900 text-[length:var(--text-body-m)] cursor-pointer appearance-none">
                    <option value="">—</option>
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
                <p className="text-neutralgray-900 text-[length:var(--text-body-m)] leading-[1.35]">
                  (Same discounted prices apply to family members)
                </p>
              </div>
            </div>

            {/* 5 · Special Requests or Questions */}
            <div className="flex flex-col gap-[16px] w-full">
              <SectionHeading title="Special Requests or Questions" />
              <div className="flex flex-col gap-[24px] pl-[4px] w-full" style={{ minHeight: "147px" }}>
                <LineInput className="w-full" />
                <LineInput className="w-full" />
                <LineInput className="w-full" />
              </div>
            </div>

            {/* 6 · Contact + Submit */}
            <div className="border-t-2 border-neutralgray-900 flex flex-col gap-[40px] pt-[32px] w-full pb-[40px]">
              <div className="flex flex-col gap-[16px] w-full">
                <p className="font-bold text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45] w-full">
                  Send this form to:{" "}
                  <a href="mailto:internationalcenter@gibbeum.com" className="text-blue-700 hover:underline">
                    internationalcenter@gibbeum.com
                  </a>
                </p>
                <p className="font-bold text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45] w-full">
                  Or WhatsApp:{" "}
                  <a href="https://wa.me/821099479530" className="text-blue-700 hover:underline">
                    +82-10-9947-9530
                  </a>
                </p>
                <p className="font-[family-name:var(--font-lora)] italic text-neutralgray-600 text-[20px] leading-[28px] w-full">
                  We will respond within 24 hours with a personalized quote.
                </p>
              </div>
              <button
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold text-[length:var(--text-h4)] leading-[1.25] h-[76px] rounded-[12px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] text-center"
              >
                Submit Request Form
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Page ─────────────────────────── */
export default function ScreeningPage() {
  return (
    <>
    <Header />
    <main className="flex flex-col w-full">
      <PageHeader
        title="PREMIUM HEALTH SCREENING"
        subtitle="Comprehensive Health Check While You're Here"
        rounded="lg"
        padding="tall"
      />
      <WhyKoreaSection />
      <CancerDetectionSection />
      <AdvancedTechSection />
      <CostComparisonSection />
      <ScreeningDetailSection />
      <RequestFormSection />
    </main>
    <Footer />
    </>
  );
}
