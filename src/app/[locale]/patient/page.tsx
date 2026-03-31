import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import TourCarousel from "@/components/TourCarousel";
import InsuranceCardsClient from "@/components/InsuranceCardsClient";
import HotelPriceToggle from "@/components/HotelPriceToggle";

/* ─────────────────────────────────────────
   Shared helpers
───────────────────────────────────────── */

function SectionTitle({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-8">
      <div
        className={`h-[9px] w-[184px] shrink-0 ${light ? "bg-neutralgray-50" : "bg-blue-600"}`}
      />
      {children}
    </div>
  );
}

function BulletItem({
  children,
  color = "blue",
}: {
  children: React.ReactNode;
  color?: "blue" | "green" | "light";
}) {
  const dot =
    color === "green"
      ? "bg-system-green"
      : color === "light"
        ? "bg-blue-400"
        : "bg-blue-400";
  return (
    <div className="flex gap-2 items-start">
      <div className="shrink-0 mt-[10px]">
        <div className={`rounded-full size-[6px] ${dot}`} />
      </div>
      <p className="flex-1 text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
        {children}
      </p>
    </div>
  );
}

function StepHeader({
  num,
  title,
}: {
  num: number;
  title: string;
}) {
  return (
    <div className="flex gap-4 items-center">
      {/* Round number circle — desktop only */}
      <div className="hidden xl:flex bg-gradient-to-b from-[#0076f1] to-[#0062c7] rounded-full size-14 items-center justify-center shrink-0 shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]">
        <span className="font-bold text-white text-[length:var(--text-h5)] leading-[1.25] tracking-[-0.3px]">
          {num}
        </span>
      </div>
      {/* Pill header */}
      <div className="flex-1 bg-gradient-to-b from-[#0076f1] to-[#0062c7] rounded-full px-8 py-4 flex items-center gap-4">
        <span className="font-bold text-neutralgray-50 text-[length:var(--text-h5)] leading-[1.25] tracking-[-0.3px] shrink-0">
          Step {num}
        </span>
        <div className="w-px h-4 bg-white/40 shrink-0" />
        <span className="font-bold text-neutralgray-50 text-[length:var(--text-h5)] leading-[1.25] tracking-[-0.3px] flex-1">
          {title}
        </span>
      </div>
    </div>
  );
}

function StepCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white border border-blue-100 rounded-2xl px-4 py-6 xl:p-8 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
      {children}
    </div>
  );
}

function NumberedList({
  items,
}: {
  items: { num: number; text: React.ReactNode }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <div key={item.num} className="flex gap-2 items-start">
          <div className="bg-blue-700 rounded-full size-7 flex items-center justify-center shrink-0">
            <span className="font-bold text-neutralgray-50 text-[16px] leading-6 text-center">
              {item.num}
            </span>
          </div>
          <p className="flex-1 text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   Steps Section
───────────────────────────────────────── */
function StepsSection() {
  return (
    <section className="bg-neutralgray-100 py-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[1216px] mx-auto flex flex-col gap-6 xl:gap-10">

        {/* ── Step 1 ── */}
        <div className="flex flex-col gap-4">
          <StepHeader num={1} title="Free Online Consultation" />
          <div className="xl:ml-[70px]">
            <StepCard>
              <div className="flex flex-col gap-6">
                <p className="font-bold text-blue-700 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                  Before you book a flight, let&apos;s make sure surgery is
                  right for you.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* How it works */}
                  <div className="flex flex-col gap-4">
                    <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                      How it works
                    </p>
                    <NumberedList
                      items={[
                        {
                          num: 1,
                          text: "Simply send us a message via email or WhatsApp.",
                        },
                        {
                          num: 2,
                          text: "We'll respond with personalized guidance within 24-48 hours",
                        },
                        {
                          num: 3,
                          text: (
                            <>
                              If you&apos;d like, we&apos;ll invite you to our{" "}
                              <strong>[Pre-Op Tuesday]</strong> Zoom
                              consultation for a live session
                            </>
                          ),
                        },
                      ]}
                    />
                    <div className="bg-blue-50 border border-blue-200 rounded-lg px-6 py-4 flex flex-col gap-1">
                      <p className="font-bold text-blue-700 text-[length:var(--text-body-16b)] leading-[1.25]">
                        [Pre-Op Tuesday] Global Hernia Consultation Session
                      </p>
                      <p className="text-neutralgray-900 text-[length:var(--text-body-m)] leading-[1.35]">
                        Join our one-to-many Zoom meeting (at 8 AM, KST) where
                        Dr. Kang addresses questions from prospective patients.
                      </p>
                    </div>
                  </div>
                  {/* What we discuss */}
                  <div className="flex flex-col gap-4">
                    <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                      What we&apos;ll discuss
                    </p>
                    <div className="flex flex-col gap-2">
                      {[
                        "Your symptoms and medical history",
                        "Review of imaging and previous surgeries",
                        "Treatment options (surgery vs. conservative management)",
                        "Expected outcomes and realistic expectations",
                        "Cost estimate and timeline",
                      ].map((item) => (
                        <div key={item} className="flex gap-2 items-center">
                          <Image
                            src="/assets/patient/icon-check-circle.svg"
                            alt=""
                            width={20}
                            height={20}
                            className="shrink-0"
                          />
                          <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                            {item}
                          </p>
                        </div>
                      ))}
                      <div className="flex gap-2 items-center">
                        <Image
                          src="/assets/patient/icon-check-circle.svg"
                          alt=""
                          width={20}
                          height={20}
                          className="shrink-0"
                        />
                        <p className="font-bold text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                          Honest recommendation — even if it means no surgery
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-neutralgray-200 pt-6">
                  <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                    <strong>
                      Consultation is completely free and without obligation.
                    </strong>
                    <br />
                    We&apos;ll never pressure you to proceed with surgery.
                  </p>
                </div>
              </div>
            </StepCard>
          </div>
        </div>

        {/* ── Step 2 ── */}
        <div className="flex flex-col gap-4">
          <StepHeader num={2} title="Surgery Planning & Scheduling Assistance" />
          <div className="xl:ml-[70px]">
            <StepCard>
              <div className="flex flex-col gap-6">
                <p className="font-bold text-blue-700 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                  Once you decide to proceed
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Personalized Plan */}
                  <div className="flex flex-col gap-4">
                    <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                      Personalized Treatment Plan
                    </p>
                    <div className="flex flex-col gap-3">
                      {[
                        "Detailed surgical plan (technique, approach, duration)",
                        "Total cost breakdown (transparent, no hidden fees)",
                        "Recovery timeline and milestones",
                        "What to bring and how to prepare",
                      ].map((item) => (
                        <BulletItem key={item} color="light">
                          {item}
                        </BulletItem>
                      ))}
                    </div>
                  </div>
                  {/* Recommended Stay */}
                  <div className="flex flex-col gap-4">
                    <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                      Recommended Stay
                    </p>
                    <div className="flex flex-col gap-4">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex flex-col gap-0.5">
                        <p className="font-bold text-neutralgray-600 text-[length:var(--text-body-16b)] leading-[1.25]">
                          SIMPLE HERNIA REPAIR
                        </p>
                        <p className="font-bold text-blue-700 text-[length:var(--text-h5)] leading-[1.25] tracking-[-0.3px]">
                          7-10 days
                        </p>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex flex-col gap-0.5">
                        <p className="font-bold text-neutralgray-600 text-[length:var(--text-body-16b)] leading-[1.25]">
                          COMPLEX MESH REMOVAL
                        </p>
                        <p className="font-bold text-blue-700 text-[length:var(--text-h5)] leading-[1.25] tracking-[-0.3px]">
                          10-14 days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </StepCard>
          </div>
        </div>

        {/* ── Step 3 ── */}
        <div className="flex flex-col gap-4">
          <StepHeader num={3} title="Arrival in Seoul" />
          <div className="xl:ml-[70px] flex flex-col gap-6">
            <StepCard>
              <div className="flex flex-col gap-8">
                {/* Airport Pickup */}
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/assets/patient/icon-airport.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                    <p className="font-bold text-blue-700 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                      Airport Pickup Service
                    </p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 flex flex-col gap-4">
                    <p className="font-bold text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                      We&apos;ll meet you at Incheon International Airport with:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Dedicated driver with name sign",
                        "Comfortable vehicle",
                        "Direct transfer to your accommodation (60-90 min)",
                        "Cost: Included in surgical package",
                      ].map((item) => (
                        <div key={item} className="flex gap-2 items-start">
                          <Image
                            src="/assets/patient/icon-check-sm.svg"
                            alt=""
                            width={16}
                            height={16}
                            className="shrink-0 mt-1"
                          />
                          <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Accommodation */}
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/assets/patient/icon-hotel.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                    <p className="font-bold text-blue-700 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                      Accommodation Options
                    </p>
                  </div>
                  <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                    We&apos;ve partnered with nearby hotels for special rates:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Budget */}
                    <div className="bg-neutralgray-100 border border-neutralgray-300 rounded-lg p-6 flex flex-col gap-2">
                      <p className="font-bold text-system-green text-[length:var(--text-body-16b)] leading-[1.25]">
                        BUDGET
                      </p>
                      <div className="flex items-baseline gap-1">
                        <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                          $40-60
                        </p>
                        <p className="text-neutralgray-500 text-[14px]">
                          /night
                        </p>
                      </div>
                      <div className="flex flex-col gap-1 mt-2">
                        <BulletItem color="light">Clean guesthouses</BulletItem>
                        <BulletItem color="light">
                          10-15 min walk to hospital
                        </BulletItem>
                      </div>
                    </div>
                    {/* Mid-range */}
                    <div className="relative bg-neutralgray-50 border-2 border-blue-200 rounded-lg p-6 flex flex-col gap-2 shadow-sm">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-100 rounded-full px-4 py-1">
                        <p className="font-bold text-blue-700 text-[length:var(--text-body-16b)] leading-[1.25] whitespace-nowrap">
                          Most Popular
                        </p>
                      </div>
                      <p className="font-bold text-blue-700 text-[length:var(--text-body-16b)] leading-[1.25]">
                        MID-RANGE
                      </p>
                      <div className="flex items-baseline gap-1">
                        <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                          $80-120
                        </p>
                        <p className="text-neutralgray-500 text-[14px]">
                          /night
                        </p>
                      </div>
                      <div className="flex flex-col gap-1 mt-2">
                        <BulletItem color="light">3-4 star hotels</BulletItem>
                        <BulletItem color="light">
                          Breakfast included
                        </BulletItem>
                        <BulletItem color="light">
                          5-10 min walk from hospital
                        </BulletItem>
                      </div>
                    </div>
                    {/* Premium */}
                    <div className="bg-neutralgray-100 border border-neutralgray-300 rounded-lg p-6 flex flex-col gap-2">
                      <p className="font-bold text-system-violet text-[length:var(--text-body-16b)] leading-[1.25]">
                        PREMIUM
                      </p>
                      <div className="flex items-baseline gap-1">
                        <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                          $150-250
                        </p>
                        <p className="text-neutralgray-500 text-[14px]">
                          /night
                        </p>
                      </div>
                      <div className="flex flex-col gap-1 mt-2">
                        <BulletItem color="light">4-5 star hotels</BulletItem>
                        <BulletItem color="light">Full concierge</BulletItem>
                        <BulletItem color="light">
                          Walking distance
                        </BulletItem>
                      </div>
                    </div>
                  </div>
                  {/* Partner hotels */}
                  <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-6 flex gap-4 items-start">
                    <Image
                      src="/assets/patient/icon-check-sm.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="shrink-0 mt-0.5"
                    />
                    <p className="text-blue-700 text-[length:var(--text-body-m)] leading-[1.4]">
                      <strong>Note:</strong> Please mention{" "}
                      <strong>&ldquo;Gibbeum Hospital&rdquo;</strong> when
                      booking via phone or email to ensure you receive these
                      special partner rates (10-20% discount at partner hotels).
                      Rates may vary during peak seasons.
                    </p>
                  </div>
                </div>
              </div>
            </StepCard>

            {/* ── Partner Hotel Price Toggle ── */}
            <HotelPriceToggle>

              {/* Le Collective (Urbanstay) */}
              <div className="bg-white border border-neutralgray-300 rounded-[12px] overflow-hidden shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
                <div className="bg-neutralgray-100 border-b border-neutralgray-300 flex items-center justify-between px-4 py-4 gap-4">
                  <div className="flex items-center gap-2 shrink-0">
                    <p className="font-bold text-blue-700 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">Le Collective (Urbanstay)</p>
                    <span className="bg-blue-100 text-system-link font-bold text-[12px] px-2 py-0.5 rounded-full shrink-0">Partner</span>
                  </div>
                  <a href="https://en.urbanstay.co.kr/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 shrink-0 hover:underline">
                    <p className="text-system-link text-[length:var(--text-body-m)] leading-[1.35]">en.urbanstay.co.kr</p>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 11L11 3M11 3H6M11 3V8" stroke="#1447e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[680px] text-[14px] border-collapse">
                    <thead>
                      <tr className="bg-blue-700 text-white text-[12px] font-bold uppercase">
                        <th className="px-4 py-3 text-left font-bold w-[200px]">Hotel Name</th>
                        <th className="px-4 py-3 text-left font-bold">Room Type</th>
                        <th className="px-4 py-3 text-left font-bold">Option</th>
                        <th className="px-4 py-3 text-right font-bold">Rack Rate</th>
                        <th className="px-4 py-3 text-right font-bold">Discount Rate</th>
                        <th className="px-4 py-3 text-right font-bold">5+ Nights</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* SAC Royeum */}
                      <tr>
                        <td className="bg-neutralgray-100 px-4 py-3 align-top border-r border-neutralgray-300" rowSpan={6}>
                          <p className="font-bold text-neutralgray-900 text-[16px] leading-[1.4]">Le Collective Gangnam SAC Royeum</p>
                          <p className="text-neutralgray-500 text-[14px] leading-[1.35] mt-1">30 Banpo-daero 16-gil, Seocho-gu, Seoul</p>
                          <p className="text-blue-700 text-[14px] leading-[1.35] mt-1">542m from hospital</p>
                        </td>
                        <td className="px-4 py-3 border-r border-b border-neutralgray-300 align-top" rowSpan={2}>Studio</td>
                        <td className="px-4 py-3 border-r border-b border-neutralgray-300">Room only</td>
                        <td className="px-4 py-3 text-right text-neutralgray-500 border-r border-b border-neutralgray-300">₩100,000</td>
                        <td className="px-4 py-3 text-right font-bold text-blue-700 border-r border-b border-neutralgray-300">₩80,000</td>
                        <td className="px-4 py-3 text-right font-bold text-system-green border-b border-neutralgray-300">₩80,000</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-b border-neutralgray-300">Inc. Breakfast 2pax</td>
                        <td className="px-4 py-3 text-right text-neutralgray-500 border-r border-b border-neutralgray-300">₩144,000</td>
                        <td className="px-4 py-3 text-right font-bold text-blue-700 border-r border-b border-neutralgray-300">₩115,200</td>
                        <td className="px-4 py-3 text-right text-neutralgray-500 border-b border-neutralgray-300">—</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-b border-neutralgray-300 align-top" rowSpan={2}>Premier Suite</td>
                        <td className="px-4 py-3 border-r border-b border-neutralgray-300">Room only</td>
                        <td className="px-4 py-3 text-right text-neutralgray-500 border-r border-b border-neutralgray-300">₩150,000</td>
                        <td className="px-4 py-3 text-right font-bold text-blue-700 border-r border-b border-neutralgray-300">₩120,000</td>
                        <td className="px-4 py-3 text-right font-bold text-system-green border-b border-neutralgray-300">₩120,000</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-b border-neutralgray-300">Inc. Breakfast 2pax</td>
                        <td className="px-4 py-3 text-right text-neutralgray-500 border-r border-b border-neutralgray-300">₩174,000</td>
                        <td className="px-4 py-3 text-right font-bold text-blue-700 border-r border-b border-neutralgray-300">₩139,200</td>
                        <td className="px-4 py-3 text-right text-neutralgray-500 border-b border-neutralgray-300">—</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-b border-neutralgray-300 align-top" rowSpan={2}>Family Two Room</td>
                        <td className="px-4 py-3 border-r border-b border-neutralgray-300">Room only</td>
                        <td className="px-4 py-3 text-right text-neutralgray-500 border-r border-b border-neutralgray-300">₩220,000</td>
                        <td className="px-4 py-3 text-right font-bold text-blue-700 border-r border-b border-neutralgray-300">₩176,000</td>
                        <td className="px-4 py-3 text-right font-bold text-system-green border-b border-neutralgray-300">₩160,000</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-b border-neutralgray-300">Inc. Breakfast 2pax</td>
                        <td className="px-4 py-3 text-right text-neutralgray-500 border-r border-b border-neutralgray-300">₩248,000</td>
                        <td className="px-4 py-3 text-right font-bold text-blue-700 border-r border-b border-neutralgray-300">₩198,400</td>
                        <td className="px-4 py-3 text-right font-bold text-system-green border-b border-neutralgray-300">₩160,000</td>
                      </tr>
                      {/* SAC Signity */}
                      <tr>
                        <td className="bg-neutralgray-100 px-4 py-3 align-top border-r border-t-2 border-neutralgray-400" rowSpan={3}>
                          <p className="font-bold text-neutralgray-900 text-[16px] leading-[1.4]">Le Collective Gangnam SAC Signity</p>
                          <p className="text-neutralgray-500 text-[14px] leading-[1.35] mt-1">50, Hyoeryeong-ro 53-gil, Seocho-gu, Seoul</p>
                          <p className="text-blue-700 text-[14px] leading-[1.35] mt-1">2.5km from hospital</p>
                        </td>
                        <td className="px-4 py-3 border-r border-b border-t-2 border-neutralgray-300 border-t-neutralgray-400">Studio</td>
                        <td className="px-4 py-3 border-r border-b border-t-2 border-neutralgray-300 border-t-neutralgray-400">Room only</td>
                        <td className="px-4 py-3 text-right text-neutralgray-500 border-r border-b border-t-2 border-neutralgray-300 border-t-neutralgray-400">₩120,000</td>
                        <td className="px-4 py-3 text-right font-bold text-blue-700 border-r border-b border-t-2 border-neutralgray-300 border-t-neutralgray-400">₩96,000</td>
                        <td className="px-4 py-3 text-right font-bold text-system-green border-b border-t-2 border-neutralgray-300 border-t-neutralgray-400">₩96,000</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-b border-neutralgray-300">Premier Suite</td>
                        <td className="px-4 py-3 border-r border-b border-neutralgray-300">Room only</td>
                        <td className="px-4 py-3 text-right text-neutralgray-500 border-r border-b border-neutralgray-300">₩170,000</td>
                        <td className="px-4 py-3 text-right font-bold text-blue-700 border-r border-b border-neutralgray-300">₩136,000</td>
                        <td className="px-4 py-3 text-right font-bold text-system-green border-b border-neutralgray-300">₩136,000</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-neutralgray-300">Family Two Room</td>
                        <td className="px-4 py-3 border-r border-neutralgray-300">Room only</td>
                        <td className="px-4 py-3 text-right text-neutralgray-500 border-r border-neutralgray-300">₩280,000</td>
                        <td className="px-4 py-3 text-right font-bold text-blue-700 border-r border-neutralgray-300">₩224,000</td>
                        <td className="px-4 py-3 text-right font-bold text-system-green">₩200,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Sohsul Hotel */}
              <div className="bg-white border border-neutralgray-300 rounded-[12px] overflow-hidden shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
                <div className="bg-neutralgray-100 border-b border-neutralgray-300 flex items-center justify-between px-4 py-4 gap-4">
                  <div className="flex items-center gap-2 shrink-0">
                    <p className="font-bold text-blue-700 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">Sohsul Hotel</p>
                    <span className="bg-blue-100 text-system-link font-bold text-[12px] px-2 py-0.5 rounded-full shrink-0">Partner</span>
                  </div>
                  <a href="https://booking.naver.com/booking/3/bizes/413726?area=plt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 shrink-0 hover:underline">
                    <p className="text-system-link text-[length:var(--text-body-m)] leading-[1.35]">Booking Link</p>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 11L11 3M11 3H6M11 3V8" stroke="#1447e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[540px] text-[14px] border-collapse">
                    <thead>
                      <tr className="bg-blue-700 text-white text-[12px] font-bold uppercase">
                        <th className="px-4 py-3 text-left font-bold w-[200px]">Hotel Name</th>
                        <th className="px-4 py-3 text-left font-bold">Room Type</th>
                        <th className="px-4 py-3 text-left font-bold">Day</th>
                        <th className="px-4 py-3 text-right font-bold">Rack Rate</th>
                        <th className="px-4 py-3 text-right font-bold">Discount Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="bg-neutralgray-100 px-4 py-3 align-top border-r border-neutralgray-300" rowSpan={4}>
                          <p className="font-bold text-neutralgray-900 text-[16px] leading-[1.4]">Sohsul Hotel</p>
                          <p className="text-neutralgray-500 text-[14px] leading-[1.35] mt-1">53, Banpo-daero 14-gil, Seocho-gu, Seoul</p>
                          <p className="text-blue-700 text-[14px] leading-[1.35] mt-1">730m from hospital</p>
                        </td>
                        <td className="px-4 py-3 border-r border-b border-neutralgray-300 align-top" rowSpan={2}>Deluxe (Double/Twin)</td>
                        <td className="px-4 py-3 border-r border-b border-neutralgray-300">Weekday</td>
                        <td className="px-4 py-3 text-right text-neutralgray-500 border-r border-b border-neutralgray-300">₩150,000</td>
                        <td className="px-4 py-3 text-right font-bold text-blue-700 border-b border-neutralgray-300">₩130,000</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-b border-neutralgray-300">Weekend</td>
                        <td className="px-4 py-3 text-right text-neutralgray-500 border-r border-b border-neutralgray-300">₩200,000</td>
                        <td className="px-4 py-3 text-right font-bold text-blue-700 border-b border-neutralgray-300">₩165,000</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-b border-neutralgray-300 align-top" rowSpan={2}>Suite (Double)</td>
                        <td className="px-4 py-3 border-r border-b border-neutralgray-300">Weekday</td>
                        <td className="px-4 py-3 text-right text-neutralgray-500 border-r border-b border-neutralgray-300">₩180,000</td>
                        <td className="px-4 py-3 text-right font-bold text-blue-700 border-b border-neutralgray-300">₩160,000</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-neutralgray-300">Weekend</td>
                        <td className="px-4 py-3 text-right text-neutralgray-500 border-r border-neutralgray-300">₩300,000</td>
                        <td className="px-4 py-3 text-right font-bold text-blue-700">₩195,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Shilla Stay Seocho */}
              <div className="bg-white border border-neutralgray-300 rounded-[12px] overflow-hidden shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
                <div className="bg-neutralgray-100 border-b border-neutralgray-300 flex items-center justify-between px-4 py-4 gap-4">
                  <div className="flex items-center gap-2 shrink-0">
                    <p className="font-bold text-blue-700 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">Shilla Stay Seocho</p>
                    <span className="bg-blue-100 text-system-link font-bold text-[12px] px-2 py-0.5 rounded-full shrink-0">Partner</span>
                  </div>
                  <a href="https://www.shillastay.com/seocho/index.do#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 shrink-0 hover:underline">
                    <p className="text-system-link text-[length:var(--text-body-m)] leading-[1.35]">www.shillastay.com</p>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 11L11 3M11 3H6M11 3V8" stroke="#1447e6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] text-[14px] border-collapse">
                    <thead>
                      <tr className="bg-blue-700 text-white text-[12px] font-bold uppercase">
                        <th className="px-4 py-3 text-left font-bold w-[200px]">Hotel Name</th>
                        <th className="px-4 py-3 text-left font-bold">Room Type</th>
                        <th className="px-4 py-3 text-left font-bold">Option</th>
                        <th className="px-4 py-3 text-right font-bold">Rack Rate</th>
                        <th className="px-4 py-3 text-right font-bold">Discount Rate</th>
                        <th className="px-4 py-3 text-right font-bold">Fri–Sat Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="bg-neutralgray-100 px-4 py-3 align-top border-r border-neutralgray-300" rowSpan={6}>
                          <p className="font-bold text-neutralgray-900 text-[16px] leading-[1.4]">Shilla Stay Seocho</p>
                          <p className="text-neutralgray-500 text-[14px] leading-[1.35] mt-1">427, Hyoeryeong-ro, Seocho-gu, Seoul 06628</p>
                          <p className="text-blue-700 text-[14px] leading-[1.35] mt-1">1.3km from hospital</p>
                        </td>
                        <td className="px-4 py-3 border-r border-b border-neutralgray-300 align-top" rowSpan={2}>Standard</td>
                        <td className="px-4 py-3 border-r border-b border-neutralgray-300">Sunday–Thursday</td>
                        <td className="px-4 py-3 text-right text-neutralgray-500 border-r border-b border-neutralgray-300">—</td>
                        <td className="px-4 py-3 text-right font-bold text-blue-700 border-r border-b border-neutralgray-300">₩160,000</td>
                        <td className="px-4 py-3 text-right font-bold text-blue-700 border-b border-neutralgray-300">₩190,000</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-b border-neutralgray-300">Inc. Breakfast 1pax</td>
                        <td className="px-4 py-3 text-right text-neutralgray-500 border-r border-b border-neutralgray-300">—</td>
                        <td className="px-4 py-3 text-right font-bold text-blue-700 border-r border-b border-neutralgray-300">₩175,000</td>
                        <td className="px-4 py-3 text-right font-bold text-blue-700 border-b border-neutralgray-300">₩205,000</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-b border-neutralgray-300 align-top" rowSpan={2}>Deluxe</td>
                        <td className="px-4 py-3 border-r border-b border-neutralgray-300">Sunday–Thursday</td>
                        <td className="px-4 py-3 text-right text-neutralgray-500 border-r border-b border-neutralgray-300">—</td>
                        <td className="px-4 py-3 text-right font-bold text-blue-700 border-r border-b border-neutralgray-300">₩170,000</td>
                        <td className="px-4 py-3 text-right font-bold text-blue-700 border-b border-neutralgray-300">₩200,000</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-b border-neutralgray-300">Inc. Breakfast 1pax</td>
                        <td className="px-4 py-3 text-right text-neutralgray-500 border-r border-b border-neutralgray-300">—</td>
                        <td className="px-4 py-3 text-right font-bold text-blue-700 border-r border-b border-neutralgray-300">₩185,000</td>
                        <td className="px-4 py-3 text-right font-bold text-blue-700 border-b border-neutralgray-300">₩215,000</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-b border-neutralgray-300 align-top" rowSpan={2}>Premier Deluxe</td>
                        <td className="px-4 py-3 border-r border-b border-neutralgray-300">Sunday–Thursday</td>
                        <td className="px-4 py-3 text-right text-neutralgray-500 border-r border-b border-neutralgray-300">—</td>
                        <td className="px-4 py-3 text-right font-bold text-blue-700 border-r border-b border-neutralgray-300">₩190,000</td>
                        <td className="px-4 py-3 text-right font-bold text-blue-700 border-b border-neutralgray-300">₩220,000</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 border-r border-neutralgray-300">Inc. Breakfast 1pax</td>
                        <td className="px-4 py-3 text-right text-neutralgray-500 border-r border-neutralgray-300">—</td>
                        <td className="px-4 py-3 text-right font-bold text-blue-700 border-r border-neutralgray-300">₩205,000</td>
                        <td className="px-4 py-3 text-right font-bold text-blue-700">₩235,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </HotelPriceToggle>
          </div>
        </div>

        {/* ── Step 4 ── */}
        <div className="flex flex-col gap-4">
          <StepHeader num={4} title="Pre-Surgery (Day 1-2)" />
          <div className="xl:ml-[70px]">
            <StepCard>
              <div className="flex flex-col gap-6">
                <div className="flex gap-2 items-center">
                  <p className="font-bold text-blue-700 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                    Pre-Operative Hospital Visit
                  </p>
                  <span className="bg-blue-100 text-blue-700 font-bold text-[14px] px-3 py-1 rounded-full">
                    1-2 hours
                  </span>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex flex-col gap-4">
                  <p className="font-bold text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                    Preoperative Hospital Visit:
                  </p>
                  <div className="flex flex-col gap-2">
                    {[
                      "Meet your surgeon",
                      "Ultrasound imaging for diagnosis",
                      "Preoperative laboratory tests: Essential Admission Battery (see Premium Health Screening)",
                    ].map((item) => (
                      <div key={item} className="flex gap-2 items-start">
                        <Image
                          src="/assets/patient/icon-check-sm.svg"
                          alt=""
                          width={16}
                          height={16}
                          className="shrink-0 mt-1"
                        />
                        <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                    <strong>Duration:</strong> 1-2 hours
                  </p>
                </div>
              </div>
            </StepCard>
          </div>
        </div>

        {/* ── Step 5 ── */}
        <div className="flex flex-col gap-4">
          <StepHeader num={5} title="Surgery Day" />
          <div className="xl:ml-[70px]">
            <StepCard>
              <div className="flex flex-col gap-8">
                {/* Morning */}
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2 items-center">
                    <Image src="/assets/patient/icon-morning.svg" alt="" width={20} height={20} className="shrink-0" />
                    <p className="font-bold text-blue-700 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                      Morning of Surgery
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <BulletItem>
                      Arrive fasting (no food/water for 3-4 hours)
                    </BulletItem>
                    <BulletItem>IV line placement, final check by surgeon</BulletItem>
                  </div>
                </div>
                {/* During */}
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2 items-center">
                    <Image src="/assets/patient/icon-surgery.svg" alt="" width={20} height={20} className="shrink-0" />
                    <p className="font-bold text-blue-700 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                      During Surgery
                    </p>
                  </div>
                  <div className="bg-white border border-neutralgray-300 rounded-lg p-6 shadow-sm flex flex-col gap-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <p className="font-bold text-blue-300 text-[length:var(--text-body-16b)]">
                          Primary hernia repair
                        </p>
                        <div className="flex items-center gap-1">
                          <p className="font-bold text-blue-700 text-[length:var(--text-body-l)] leading-[1.45]">
                            20-30 min
                          </p>
                          <p className="text-neutralgray-500 text-[length:var(--text-body-m)]">
                            (one side)
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="font-bold text-blue-300 text-[length:var(--text-body-16b)]">
                          Mesh removal + reconstruction
                        </p>
                        <div className="flex items-center gap-1">
                          <p className="font-bold text-blue-700 text-[length:var(--text-body-l)] leading-[1.45]">
                            1-1.5 hours
                          </p>
                          <p className="text-neutralgray-500 text-[length:var(--text-body-m)]">
                            (one side)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-neutralgray-300 pt-4">
                      <p className="text-neutralgray-900 text-[length:var(--text-body-m)] leading-[1.35]">
                        <strong>Anesthesia</strong>: Local anesthesia (If
                        desired, you can be sedated to sleep during the surgery
                        at no additional cost)
                      </p>
                    </div>
                  </div>
                </div>
                {/* After */}
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2 items-center">
                    <Image src="/assets/patient/icon-surgery.svg" alt="" width={20} height={20} className="shrink-0" />
                    <p className="font-bold text-blue-700 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                      After Surgery
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <BulletItem>Recovery room: 10-20 minutes</BulletItem>
                    <BulletItem>
                      Pain management, light food and water
                    </BulletItem>
                    <BulletItem>
                      Discharge: Same day or next morning (for mesh removal:
                      1-2 nights hospital stay)
                    </BulletItem>
                  </div>
                </div>
              </div>
            </StepCard>
          </div>
        </div>

        {/* ── Step 6 ── */}
        <div className="flex flex-col gap-4">
          <StepHeader num={6} title="Post-Surgery Recovery" />
          <div className="xl:ml-[70px]">
            <StepCard>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Wound care */}
                <div className="bg-[#f0fdf4] border border-[#dcfce7] rounded-xl p-6 flex flex-col gap-4">
                  <div className="flex gap-2 items-start">
                    <Image
                      src="/assets/patient/icon-wound.svg"
                      alt=""
                      width={20}
                      height={22}
                      className="shrink-0 mt-0.5"
                    />
                    <p className="font-bold text-[#016630] text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                      Wound Care — No Dressing Required
                    </p>
                  </div>
                  <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                    We suture only the deep tissue layers, then seal the skin
                    with medical-grade glue (Histoacryl).
                  </p>
                  <div className="flex flex-col gap-2">
                    {[
                      "No wound dressing needed at all",
                      "Showering possible from the day after surgery",
                      "No stitches to remove",
                    ].map((item) => (
                      <div key={item} className="flex gap-2 items-start">
                        <div className="bg-system-green rounded-full size-[6px] shrink-0 mt-[10px]" />
                        <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Typical schedule */}
                <div className="flex flex-col gap-4">
                  <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                    Typical Schedule
                  </p>
                  <div className="relative border-l-2 border-blue-100 pl-6 flex flex-col gap-6">
                    {[
                      {
                        day: "DAY 0",
                        text: "Surgery, same-day discharge or overnight stay",
                        note: null,
                      },
                      {
                        day: "DAYS 1-6",
                        text: "Stay at hotel, most patients enjoy light local sightseeing",
                        note: null,
                      },
                      {
                        day: "DAY 7+",
                        text: "Final check before departure",
                        note: "Departing earlier? We'll check you the day before you leave.",
                      },
                    ].map((item) => (
                      <div key={item.day} className="relative">
                        <div className="absolute -left-[29px] top-[2px] size-3 rounded-full bg-blue-500 border-2 border-white" />
                        <p className="font-bold text-neutralgray-500 text-[14px] leading-[1.2]">
                          {item.day}
                        </p>
                        <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                          {item.text}
                        </p>
                        {item.note && (
                          <p className="italic text-neutralgray-500 text-[14px] leading-[1.2] mt-1">
                            {item.note}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </StepCard>
          </div>
        </div>

        {/* ── Step 7 ── */}
        <div className="flex flex-col gap-4">
          <StepHeader num={7} title="Final Check-Up & Departure" />
          <div className="xl:ml-[70px]">
            <StepCard>
              <div className="flex flex-col gap-6">
                <p className="font-bold text-blue-700 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                  You&apos;re ready to head home with peace of mind.
                </p>
                <div className="flex flex-col gap-3">
                  <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                    What you&apos;ll receive:
                  </p>
                  <div className="flex flex-col gap-2">
                    {[
                      "Comprehensive wound inspection and travel clearance",
                      "Detailed surgical report in English",
                      "Insurance claim documents (itemized invoice with CPT/ICD codes) — upon request",
                      "Post-operative exercise and activity guidelines",
                      "Free airport drop-off service",
                    ].map((item) => (
                      <div
                        key={item}
                        className="bg-blue-50 border border-blue-200 rounded-lg flex gap-3 items-center pl-6 pr-4 py-2.5"
                      >
                        <Image
                          src="/assets/patient/icon-check-circle.svg"
                          alt=""
                          width={20}
                          height={20}
                          className="shrink-0"
                        />
                        <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </StepCard>
          </div>
        </div>

        {/* ── Step 8 ── */}
        <div className="flex flex-col gap-4">
          <StepHeader num={8} title="Telemedicine Follow-Up" />
          <div className="xl:ml-[70px]">
            <div className="bg-gradient-to-b from-blue-700 to-[#003380] rounded-2xl px-4 py-6 xl:p-8 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)] flex flex-col gap-6">
              <p className="font-bold text-neutralgray-50 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                We don&apos;t abandon you after surgery.
              </p>
              {/* Post-Op Thursday */}
              <div className="bg-white/10 border border-white/10 rounded-xl p-6 flex flex-col gap-2">
                <div className="flex flex-col md:flex-row gap-1 md:gap-2 items-start">
                  <p className="font-bold text-system-mint text-[length:var(--text-body-l)] leading-[1.45] shrink-0">
                    [Post-Op Thursday]
                  </p>
                  <p className="font-bold text-white text-[length:var(--text-body-l)] leading-[1.45]">
                    Global Hernia Recovery Session
                  </p>
                </div>
                <p className="text-white text-[length:var(--text-body-l)] leading-[1.45]">
                  Email us any questions or concerns about your recovery.
                  We&apos;ll respond with guidance, and if we determine a video
                  consultation is needed, we&apos;ll schedule a 5-minute Zoom
                  call on Thursday at 8:00 AM KST.
                </p>
              </div>
              {/* Contacts + QR */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1 flex flex-col gap-4">
                  <p className="font-bold text-white text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                    Anytime Support:
                  </p>
                  <div className="flex flex-col gap-2">
                    {[
                      {
                        label: "Email:",
                        value: "internationalcenter@gibbeum.com",
                      },
                      { label: "WhatsApp:", value: "+82-10-9947-9530" },
                      {
                        label: "Phone:",
                        value:
                          "+82-2-570-1479 (office hours: 8 AM - 5 PM KST, Mon to Fri)",
                      },
                    ].map((item) => (
                      <div key={item.label} className="flex gap-3 items-start">
                        <div className="bg-[#05df72] rounded-full size-[6px] shrink-0 mt-[10px]" />
                        <p className="text-white text-[length:var(--text-body-l)] leading-[1.45]">
                          <strong>{item.label}</strong> {item.value}
                        </p>
                      </div>
                    ))}
                    <div className="flex gap-3 items-start">
                      <div className="bg-[#05df72] rounded-full size-[6px] shrink-0 mt-[10px]" />
                      <p className="font-bold text-system-mint text-[length:var(--text-body-l)] leading-[1.45]">
                        Response within 24 hours (during the weekday)
                      </p>
                    </div>
                  </div>
                </div>
                {/* WhatsApp QR */}
                <div className="relative w-[160px] h-[184px] rounded-lg overflow-hidden shadow-sm shrink-0">
                  <Image
                    src="/assets/patient/whatsapp-qr.png"
                    alt="WhatsApp QR Code"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Cost Transparency Section
───────────────────────────────────────── */
function CostSection() {
  return (
    <section className="bg-neutralgray-100 py-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[1016px] mx-auto flex flex-col gap-8 xl:gap-14">
        <SectionTitle>
          <h2 className="font-bold text-blue-700 text-[length:var(--text-h2)] text-center leading-[1.25] tracking-[-0.5px]">
            Cost Transparency
          </h2>
          <p className="font-bold text-neutralgray-900 text-[length:var(--text-h4)] text-center leading-[1.35] tracking-[-0.5px]">
            We believe in honest pricing — no surprises.
          </p>
        </SectionTitle>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Left: Package + Payment */}
          <div className="flex flex-col gap-8 xl:gap-14 flex-1 min-w-0">
            {/* Package includes */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <Image
                  src="/assets/patient/icon-package.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                  Surgical Package Includes:
                </p>
              </div>
              <div className="flex flex-col gap-2 pl-4">
                {[
                  "Surgeon's fee, operating room, anesthesia, surgical supplies",
                  "Admission room, meals, nursing care",
                  "Follow-up visits, wound care, medications",
                  "Surgical report in English",
                  "Airport pickup and drop-off, patient coordinator support",
                ].map((item) => (
                  <BulletItem key={item}>{item}</BulletItem>
                ))}
              </div>
            </div>
            {/* Payment options */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <Image
                  src="/assets/patient/icon-payment.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                  Payment Options
                </p>
              </div>
              <div className="flex flex-col gap-2 pl-4">
                <BulletItem>
                  Credit card (Visa, Mastercard, American Express)
                </BulletItem>
                <BulletItem>Cash (USD, KRW)</BulletItem>
              </div>
              <p className="italic text-neutralgray-600 text-[16px] leading-6">
                Payment will be settled at the time of discharge
              </p>
            </div>
          </div>

          {/* Right: Pricing cards */}
          <div className="flex-1 bg-blue-100 border border-neutralgray-300 rounded-2xl px-4 py-6 xl:p-8 flex flex-col gap-4">
            <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
              Estimated Total Costs
            </p>
            <div className="flex flex-col gap-4">
              {/* Inguinal */}
              <div className="bg-neutralgray-50 border border-blue-100 rounded-xl p-4 flex flex-col gap-2 items-center text-center shadow-sm">
                <p className="font-bold text-blue-300 text-[length:var(--text-body-16b)] leading-[1.25]">
                  Inguinal Hernia Repair (Kang Repair)
                </p>
                <div className="flex flex-wrap gap-2 items-center justify-center">
                  <div className="flex gap-1 items-baseline">
                    <p className="font-bold text-blue-700 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                      $5,000
                    </p>
                    <p className="text-neutralgray-600 text-[length:var(--text-body-m)]">
                      (one side)
                    </p>
                  </div>
                  <div className="flex gap-1 items-baseline">
                    <p className="font-bold text-blue-700 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                      / $9,000
                    </p>
                    <p className="text-neutralgray-600 text-[length:var(--text-body-m)]">
                      (both sides)
                    </p>
                  </div>
                </div>
              </div>
              {/* Umbilical */}
              <div className="bg-neutralgray-50 border border-blue-100 rounded-xl p-4 flex flex-col gap-2 items-center text-center shadow-sm">
                <p className="font-bold text-blue-300 text-[length:var(--text-body-16b)] leading-[1.25]">
                  Umbilical hernia / Epigastric hernia
                </p>
                <p className="font-bold text-blue-700 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                  $5,000
                </p>
              </div>
              {/* Mesh Removal */}
              <div className="bg-neutralgray-50 border border-blue-100 rounded-xl p-4 flex flex-col gap-2 items-center text-center shadow-sm">
                <p className="font-bold text-blue-300 text-[length:var(--text-body-16b)] leading-[1.25]">
                  Mesh Removal + Repair
                </p>
                <div className="flex flex-wrap gap-2 items-center justify-center">
                  <div className="flex gap-1 items-baseline">
                    <p className="font-bold text-blue-700 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                      $10,000
                    </p>
                    <p className="text-neutralgray-600 text-[length:var(--text-body-m)]">
                      (one side)
                    </p>
                  </div>
                  <div className="flex gap-1 items-baseline">
                    <p className="font-bold text-blue-700 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                      / $18,000
                    </p>
                    <p className="text-neutralgray-600 text-[length:var(--text-body-m)]">
                      (both sides)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-neutralgray-900 text-[14px] leading-[1.35]">
              (Includes surgery package + hospital accommodation + meals +
              transportation)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   International Medical Insurance Section
───────────────────────────────────────── */
function InsuranceSection() {
  return (
    <section className="bg-blue-700 py-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[808px] mx-auto flex flex-col gap-8 xl:gap-14">
        <SectionTitle light>
          <h2 className="font-bold text-neutralgray-50 text-[length:var(--text-h1)] text-center leading-[1.1]">
            International Medical Insurance
          </h2>
          <p className="font-bold text-neutralgray-50 text-[length:var(--text-h4)] text-center leading-[1.35] tracking-[-0.5px]">
            Gibbeum Hospital welcomes patients with diverse international health
            insurance plans.
          </p>
        </SectionTitle>

        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-start">
            <div className="bg-blue-400 rounded-full size-[6px] shrink-0 mt-[10px]" />
            <p className="flex-1 text-blue-50 text-[length:var(--text-body-l)] leading-[1.45]">
              International patients hold various insurance plans from different
              countries and companies.
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <div className="bg-blue-400 rounded-full size-[6px] shrink-0 mt-[10px]" />
            <p className="flex-1 text-blue-50 text-[length:var(--text-body-l)] leading-[1.45]">
              Coverage details and reimbursement levels depend entirely on your{" "}
              <strong className="text-blue-300">
                individual policy, insurer&apos;s terms, and national
                regulations.
              </strong>
            </p>
          </div>
          <div className="flex gap-2 items-start">
            <div className="bg-blue-400 rounded-full size-[6px] shrink-0 mt-[10px]" />
            <p className="flex-1 font-bold text-blue-300 text-[length:var(--text-body-l)] leading-[1.45]">
              Therefore, the hospital cannot guarantee coverage or payment
              approval in advance.
            </p>
          </div>
        </div>

        <InsuranceCardsClient />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Where to Go (Seoul Guide) Section
───────────────────────────────────────── */
function WhereToGoSection() {
  const tours = [
    {
      tag: "Korean history & culture",
      tagBg: "#973c00",
      tagText: "#f9ffd5",
      img: "/assets/patient/where-tour-gyeongbokgung.jpg",
      name: "Gyeongbokgung & Traditional Seoul",
      desc: "The essential Korean heritage experience",
      bullets: [
        { bold: "Gyeongbokgung Palace", rest: " — Korea's most iconic palace, free entry in hanbok" },
        { bold: "Bukchon Hanok Village", rest: " — Traditional houses, Instagram-famous alleyways" },
        { bold: "Insadong", rest: " — Arts, crafts, traditional tea houses" },
      ],
      subway: "Subway Line 3, Anguk Station",
      time: "Approx. visit time: 3-5 hours",
    },
    {
      tag: "Shopping & K-beauty",
      tagBg: "#a3004c",
      tagText: "#ffe3f0",
      img: "/assets/patient/where-tour-myeongdong.jpg",
      name: "Myeongdong & Namsan Tower",
      desc: "Shopping, street food, city views",
      bullets: [
        { bold: "Myeongdong", rest: " — K-beauty shops, famous street food" },
        { bold: "Namsan Tower", rest: " — Take cable car up, panoramic views, love locks" },
      ],
      subway: "Subway Line 4, Myeongdong Station",
      time: "Approx. visit time: 3-5 hours",
    },
    {
      tag: "Trendy cafes & art",
      tagBg: "#6e11b0",
      tagText: "#f3e3ff",
      img: "/assets/patient/where-tour-hongdae.jpg",
      name: "Hongdae & Yeonnam-dong",
      desc: "Young, artistic, indie vibes",
      bullets: [
        { bold: "Hongdae", rest: " — Street performances, unique shops, cafe culture" },
        { bold: "Yeonnam-dong", rest: " — Gyeongui Line Forest Park, hipster cafes" },
      ],
      subway: "Subway Line 2, Hongik University Station",
      time: "Approx. visit time: 3-5 hours",
    },
    {
      tag: "Modern city vibes",
      tagBg: "#0047ab",
      tagText: "#dbedff",
      img: "/assets/patient/where-tour-gangnam.jpg",
      name: "Gangnam & Garosu-gil",
      desc: "Modern Korea, trendy streets",
      bullets: [
        { bold: "Gangnam Station", rest: ' — The famous "Gangnam Style" district' },
        { bold: "Garosu-gil", rest: " — Tree-lined street, designer boutiques, beautiful cafes" },
        { bold: "COEX Starfield Library", rest: " — Stunning K-drama filming location" },
      ],
      subway: "Subway Line 2, Gangnam Station",
      time: "Approx. visit time: 3-5 hours",
    },
    {
      tag: "Nature & relaxation",
      tagBg: "#005f78",
      tagText: "#adeeff",
      img: "/assets/patient/where-tour-hanriver.jpg",
      name: "Han River",
      desc: "Relaxation, picnic, local lifestyle",
      bullets: [
        { bold: "Yeouido Park", rest: " — Flat riverside paths, perfect for recovery walks" },
        { bold: "Banpo Bridge", rest: " — Rainbow fountain show at night" },
        { bold: 'Order "Han River delivery"', rest: " — Chicken & beer to your picnic spot!" },
      ],
      subway: "Subway Line 5, Yeouinaru Station",
      time: "Approx. visit time: 2-4 hours",
    },
    {
      tag: "Food adventure",
      tagBg: "#ffedd4",
      tagText: "#9f2d00",
      img: "/assets/patient/where-tour-markets.jpg",
      name: "Traditional Markets",
      desc: "Food adventure",
      bullets: [
        { bold: "Gwangjang Market", rest: " — Korea's oldest market, famous street food" },
        { bold: "Namdaemun Market", rest: " — Huge traditional market" },
        { bold: "Tongin Market", rest: " — Build your own lunch box with coins" },
      ],
      subway: "Subway Line 1, Jongno 5-ga Station",
      time: "Approx. visit time: 2-4 hours",
    },
  ];

  return (
    <section className="relative bg-blue-700 py-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px] overflow-hidden">
      {/* BG image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/assets/patient/where-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative flex flex-col gap-8 xl:gap-14 max-w-[1120px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <div className="bg-neutralgray-50 h-[9px] w-[184px] shrink-0" />
          <h2 className="font-bold text-neutralgray-50 text-[length:var(--text-h2)] text-center leading-[1.25] tracking-[-0.5px]">
            Where to Go
          </h2>
          <p className="font-bold text-neutralgray-50 text-[length:var(--text-h4)] text-center leading-[1.35] tracking-[-0.5px]">
            Explore Seoul During Your Recovery
          </p>
          <p className="text-neutralgray-50 text-[length:var(--text-body-l)] leading-[1.45] text-center max-w-[805px]">
            By Day 3-4, most patients enjoy gentle walking. Seoul is one of the
            world&apos;s most walkable cities—and you&apos;re here at the
            perfect time to explore.
          </p>
        </div>

        {/* Self-Guided Walking Tours heading + pill */}
        <div className="flex flex-col gap-3 items-center">
          <div className="flex gap-2 items-center justify-center">
            <Image
              src="/assets/patient/icon-walking.svg"
              alt=""
              width={40}
              height={40}
            />
            <h3 className="font-bold text-neutralgray-50 text-[length:var(--text-h3)] leading-[1.25] text-center">
              Self-Guided Walking Tours
            </h3>
          </div>
          <div className="bg-neutralgray-50 rounded-full px-8 py-[9px] flex gap-2 md:gap-3 items-center justify-center flex-wrap">
            <span className="font-bold text-blue-700 text-[17px] md:text-[18px] leading-[26px]">All free</span>
            <span className="text-blue-700 text-[16px]">|</span>
            <span className="font-bold text-blue-700 text-[17px] md:text-[18px] leading-[26px]">2-3 miles</span>
            <span className="text-blue-700 text-[16px]">|</span>
            <span className="font-bold text-blue-700 text-[17px] md:text-[18px] leading-[26px]">Easy public transport access</span>
          </div>
        </div>

        {/* Tour cards — horizontal scroll carousel with arrow navigation */}
        <TourCarousel tours={tours} />

        {/* Getting Around + Private Van Tour */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Getting Around */}
          <div className="bg-white border border-neutralgray-400 rounded-[16px] px-4 py-6 xl:p-8 flex flex-col gap-6">
            <div className="flex gap-3 items-center">
              <div className="bg-white rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-9 flex items-center justify-center shrink-0">
                <Image src="/assets/patient/icon-subway.svg" alt="" width={20} height={20} />
              </div>
              <h4 className="font-bold text-neutralgray-900 text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px]">
                Getting Around
              </h4>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                  Seoul&apos;s subway is world-class:
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    "Clean, safe, English signs everywhere",
                    "T-Money card at any convenience store",
                    "Elevators at most stations",
                  ].map((item) => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                  Taxi:
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    "Very affordable (₩5,000-15,000 for most trips)",
                    "Kakao Taxi app works like Uber",
                  ].map((item) => (
                    <BulletItem key={item}>{item}</BulletItem>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-[12px] px-6 py-[19px] flex gap-3 items-start">
              <Image src="/assets/patient/icon-tip.svg" alt="" width={20} height={20} className="shrink-0 mt-px" />
              <p className="text-blue-700 text-[length:var(--text-body-m)] leading-[1.35]">
                <strong>Tip: </strong>Download{" "}
                <strong>Naver Maps</strong> — works better than Google in Korea
              </p>
            </div>
          </div>

          {/* Private Van Tour */}
          <div className="bg-white border border-neutralgray-400 rounded-[16px] px-4 py-6 xl:p-8 flex flex-col gap-6">
            <div className="flex items-center justify-between gap-3">
              <div className="flex gap-3 items-center">
                {/* Van icon — Figma node 6235:6016 */}
                <div className="bg-white rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-9 flex items-center justify-center shrink-0">
                  <div className="relative size-5 overflow-hidden">
                    <div className="absolute inset-[29.17%_8.33%]">
                      <div className="absolute inset-[-10%_-5%]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="" className="block max-w-none size-full" src="/assets/patient/icon-van-body.svg" />
                      </div>
                    </div>
                    <div className="absolute inset-[62.5%_62.5%_20.83%_20.83%]">
                      <div className="absolute inset-[-25%]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="" className="block max-w-none size-full" src="/assets/patient/icon-van-wheel.svg" />
                      </div>
                    </div>
                    <div className="absolute inset-[70.83%_37.5%_29.17%_37.5%]">
                      <div className="absolute inset-[-0.83px_-16.67%]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="" className="block max-w-none size-full" src="/assets/patient/icon-van-line.svg" />
                      </div>
                    </div>
                    <div className="absolute inset-[62.5%_20.83%_20.83%_62.5%]">
                      <div className="absolute inset-[-25%]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img alt="" className="block max-w-none size-full" src="/assets/patient/icon-van-wheel.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="font-bold text-neutralgray-900 text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px]">
                  Private Van Tour
                </h4>
              </div>
              <span className="bg-white border border-blue-300 rounded-full px-4 py-2 text-[14px] font-bold text-blue-700 leading-[1.2] shadow-sm shrink-0">
                Optional
              </span>
            </div>

            <p className="italic text-neutralgray-600 text-[length:var(--text-body-l)] leading-[1.45]">
              Want to see more with less effort?
            </p>
            <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
              For patients who prefer a comfortable, guided experience:
            </p>

            <div className="bg-white border border-neutralgray-200 rounded-[12px] shadow-sm px-6 py-6 flex flex-col gap-4">
              <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                Private Staria Van + English-Speaking Guide
              </p>
              <div className="flex flex-col gap-2">
                {[
                  "Door-to-door pickup from your accommodation",
                  "Flexible itinerary (palaces, DMZ, Nami Island, coastal trips, etc.)",
                  "Rest stops whenever you need",
                  "Perfect for Day 5+",
                ].map((item) => (
                  <BulletItem key={item}>{item}</BulletItem>
                ))}
              </div>
            </div>

            <div className="px-8 flex flex-col gap-2">
              <div className="flex gap-2 items-baseline flex-wrap">
                <p className="font-bold text-neutralgray-900 text-[length:var(--text-h3)] leading-[1.25]">
                  ₩400,000
                </p>
                <p className="font-bold text-neutralgray-600 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
                  (~$300 USD)
                </p>
              </div>
              <p className="text-neutralgray-600 text-[length:var(--text-body-l)] leading-[1.45]">
                for 8 hours
              </p>
            </div>

            <div className="border-t border-neutralgray-200 pt-6 flex gap-2 items-center">
              <Image src="/assets/patient/icon-contact-blue.svg" alt="" width={24} height={24} className="shrink-0" />
              <p className="font-bold text-blue-500 text-[length:var(--text-body-l)] leading-[1.45]">
                Interested? Ask our coordinator for details.
              </p>
            </div>
          </div>
        </div>

        {/* Recovery-Friendly Reminders */}
        <div className="bg-[#f0fdf4] border border-[#dcfce7] rounded-[16px] px-4 py-6 xl:p-8 flex flex-col gap-6">
          <div className="flex gap-3 items-center">
            <div className="bg-white rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] size-9 flex items-center justify-center shrink-0">
              <Image src="/assets/patient/icon-heart-green.svg" alt="" width={20} height={20} />
            </div>
            <h4 className="font-bold text-neutralgray-900 text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px]">
              Recovery-Friendly Reminders
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 px-0 md:px-12">
            {[
              { icon: "icon-recovery1.svg", text: "Take rest breaks often" },
              { icon: "icon-recovery2.svg", text: "Avoid rush hours (8-9 AM, 6-7 PM)" },
              { icon: "icon-recovery2.svg", text: "Don't carry heavy shopping bags" },
              { icon: "icon-recovery1.svg", text: "Listen to your body" },
              { icon: "icon-recovery2.svg", text: "Keep our emergency contact card with you" },
            ].map((item) => (
              <div key={item.text} className="flex gap-2 items-center">
                <Image
                  src={`/assets/patient/${item.icon}`}
                  alt=""
                  width={20}
                  height={20}
                  className="shrink-0"
                />
                <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing banner */}
        <div className="bg-gradient-to-b from-[#0076f1] to-[#0062c7] rounded-[16px] px-6 py-10 flex flex-col gap-4 items-center text-center text-neutralgray-50">
          <h3 className="font-bold text-[length:var(--text-h3)] leading-[1.25]">
            You came for surgery.
            <br />
            Leave with unforgettable memories.
          </h3>
          <p className="italic text-[length:var(--text-body-l)] leading-[1.45]">
            Recover your health. Discover Korea. Create memories.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Insurance Steps Section
───────────────────────────────────────── */
function InsuranceStepsSection() {
  const steps = [
    {
      num: 1,
      title: "Contact Insurer",
      desc: "Call your insurance or assistance company first. Confirm if your plan covers treatment in Korea.",
    },
    {
      num: 2,
      title: "Confirm Direct Billing",
      desc: "Ask if direct billing via an assistance company (e.g., AXA, Allianz, BUPA) is possible.",
    },
    {
      num: 3,
      title: "Bring Documents",
      desc: "Bring your insurance card, policy number, and any pre-authorization forms when you arrive.",
    },
  ];

  return (
    <section className="bg-slate-200 py-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[808px] mx-auto flex flex-col gap-8 xl:gap-14">
        <SectionTitle>
          <h2 className="font-bold text-blue-700 text-[length:var(--text-h2)] text-center leading-[1.25] tracking-[-0.5px]">
            Cost Transparency
          </h2>
          <p className="font-bold text-neutralgray-900 text-[length:var(--text-h4)] text-center leading-[1.35] tracking-[-0.5px]">
            We believe in honest pricing — no surprises.
          </p>
        </SectionTitle>

        <div className="flex flex-col gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-neutralgray-50 border border-blue-100 rounded-2xl flex gap-6 px-6 py-8 shadow-sm"
            >
              <div className="bg-blue-700 rounded-full size-12 flex items-center justify-center shrink-0">
                <span className="font-bold text-neutralgray-50 text-[20px] leading-7">
                  {step.num}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-neutralgray-900 text-[length:var(--text-h5)] leading-[1.25] tracking-[-0.3px]">
                  {step.title}
                </p>
                <p className="text-neutralgray-900 text-[18px] leading-7">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function PatientPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          badge="Est. 2005 • Seoul, South Korea"
          title="BECOME A PATIENT"
          subtitle="Your Journey from Consultation to Recovery"
          rounded="lg"
          padding="default"
        />
        <StepsSection />
        <CostSection />
        <InsuranceSection />
        <InsuranceStepsSection />
        <WhereToGoSection />
      </main>
      <Footer />
    </>
  );
}
