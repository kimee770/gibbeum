import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

/* ─────────────────────────────────────────
   Shared helpers
───────────────────────────────────────── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="bg-blue-600 h-[9px] w-[184px] shrink-0" />
      {children}
    </div>
  );
}

function BulletDot({ color = "blue" }: { color?: "blue" | "gray" }) {
  return (
    <div className="shrink-0 mt-[10px]">
      <div
        className={`rounded-full size-[6px] ${
          color === "blue" ? "bg-blue-700" : "bg-neutralgray-500"
        }`}
      />
    </div>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="shrink-0 w-5 mt-[8px]">
        <Image
          src="/assets/about/icon-check-small.svg"
          alt=""
          width={14}
          height={10}
        />
      </div>
      <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
        {children}
      </p>
    </div>
  );
}

function BlueListItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2 items-center">
      <div className="bg-blue-400 rounded-full shrink-0 size-[6px]" />
      <p className="flex-1 text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
        {children}
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────
   Section 2 · Stats Bar
───────────────────────────────────────── */
function StatsBar() {
  return (
    <div className="bg-blue-50 px-4 py-6 xl:px-8 xl:py-10">
      <div className="max-w-[1220px] mx-auto flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Stat 1 */}
          <div className="flex-1 md:border-r border-neutralgray-400 flex flex-col items-center gap-2 text-center pr-px">
            <p className="font-bold text-blue-700 text-[length:var(--text-h1)] leading-[1.1]">
              &lt;0.5%<span className="text-blue-400">*</span>
            </p>
            <p className="font-bold text-neutralgray-900 text-[18px] leading-[28px] tracking-[-0.2px]">
              Chronic Pain Rate
            </p>
            <p className="text-neutralgray-600 text-[length:var(--text-body-m)] leading-[1.35]">
              (vs 10-20% with mesh)
            </p>
          </div>
          {/* Stat 2 */}
          <div className="flex-1 md:border-r border-neutralgray-400 flex flex-col items-center gap-2 text-center pr-px">
            <p className="font-bold text-blue-700 text-[length:var(--text-h1)] leading-[1.1]">
              &lt;0.3%<span className="text-blue-400">*</span>
            </p>
            <p className="font-bold text-neutralgray-900 text-[18px] leading-[28px] tracking-[-0.2px]">
              Recurrence Rate
            </p>
            <p className="text-neutralgray-600 text-[length:var(--text-body-m)] leading-[1.35]">
              (vs 2-10% with mesh)
            </p>
          </div>
          {/* Stat 3 */}
          <div className="flex-1 flex flex-col items-center gap-2 text-center">
            <p className="font-bold text-blue-700 text-[length:var(--text-h1)] leading-[1.1]">
              35,000+
            </p>
            <p className="font-bold text-neutralgray-900 text-[18px] leading-[28px] tracking-[-0.2px]">
              Mesh-Free Surgeries
            </p>
            <p className="text-neutralgray-600 text-[length:var(--text-body-m)] leading-[1.35]">
              (incl. 20,000+ personally by Dr. Kang)
            </p>
          </div>
        </div>
        <p className="text-neutralgray-600 text-[length:var(--text-body-m)] leading-[1.35] text-center">
          <span className="text-blue-400">*</span>based on our internal
          registry of over 20,000 mesh-free repairs at Gibbeum Hospital
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Section 3 · Why Gibbeum! Why Korea?
───────────────────────────────────────── */
function WhyGibbeumSection() {
  return (
    <section className="bg-white py-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[1016px] mx-auto flex flex-col gap-[var(--spacing-xl)]">
        <SectionTitle>
          <h2 className="font-bold text-blue-700 text-[length:var(--text-h2)] text-center leading-[1.25] tracking-[-0.5px]">
            Why Gibbeum! Why Korea?
          </h2>
        </SectionTitle>

        <div className="flex flex-col gap-8 xl:gap-14">
          {/* Point 1 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-blue-700 text-[length:var(--text-h5)] leading-[1.25] tracking-[-0.3px]">
              Korea&apos;s Only Surgical Specialty General Hospital
            </h3>
            <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
              Gibbeum Hospital combines focused surgical expertise with
              comprehensive medical support — the best of both worlds. No other
              hospital in Korea offers this unique combination.
            </p>
          </div>

          {/* Point 2 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-blue-700 text-[length:var(--text-h5)] leading-[1.25] tracking-[-0.3px]">
              20 Years of Trust in Korea&apos;s Most Demanding District
            </h3>
            <div className="flex flex-col gap-4">
              <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                Gibbeum Hospital sits in Seoul&apos;s prestigious Gangnam area
                — surrounded by Korea&apos;s top 5 teaching hospitals. Patients
                here have every option — yet for 20 years, they&apos;ve chosen
                us.
              </p>
              <p className="font-bold text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                This is the foundation that made Kang Repair possible.
              </p>
            </div>
          </div>

          {/* Point 3 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-blue-700 text-[length:var(--text-h5)] leading-[1.25] tracking-[-0.3px]">
              World-Recognized Medical Excellence
            </h3>
            <div className="flex flex-col gap-5">
              <p className="text-slate-700 text-[length:var(--text-body-l)] leading-[1.45]">
                Korean healthcare ranks among the best in the world — with the
                highest cancer survival rates globally, OECD-leading medical
                technology, and rigorous physician training comparable to the US
                and Europe.
              </p>
              <p className="text-slate-700 text-[length:var(--text-body-l)] leading-[1.45]">
                Surgeons from around the world visit Korea to learn advanced
                techniques. At Gibbeum Hospital, we regularly host international
                surgeons who come to observe and study our methods.
              </p>
              <p className="font-bold text-slate-700 text-[length:var(--text-body-l)] leading-[1.45]">
                When doctors travel across the world to learn from us, you know
                you&apos;re in the right place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Section 4 · Why Patients Fly Here
───────────────────────────────────────── */
function WhyPatientsSection() {
  return (
    <section className="bg-white py-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[1016px] mx-auto flex flex-col gap-6 xl:gap-10">
        {/* Title */}
        <div className="flex flex-col gap-8 items-center text-center">
          <SectionTitle>
            <h2 className="font-bold text-blue-700 text-[length:var(--text-h2)] leading-[1.25] tracking-[-0.5px]">
              Why Patients Fly Here from 57 Countries
            </h2>
          </SectionTitle>
          <p className="font-bold text-neutralgray-900 text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px] xl:text-[25px] xl:tracking-[-1px]">
            When you&apos;re considering flying across the world for surgery,
            you need to know why.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Reality card */}
            <div className="flex-1 bg-neutralgray-100 border border-neutralgray-300 rounded-xl px-4 py-6 xl:p-8 flex flex-col gap-6">
              <div className="flex flex-col items-center gap-2">
                <Image
                  src="/assets/about/icon-x-circle.svg"
                  alt=""
                  width={32}
                  height={32}
                />
                <p className="font-bold text-neutralgray-900 text-[length:var(--text-h5)] text-center leading-[1.25] tracking-[-0.3px]">
                  Here&apos;s the Reality
                  <br />
                  in most countries:
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  "Hernia surgery = mesh is the only option",
                  "Mesh removal = replacing old mesh with new mesh",
                  'Chronic mesh pain = "learn to live with it"',
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <BulletDot color="gray" />
                    <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Offer card */}
            <div className="flex-1 bg-blue-50 border border-blue-100 rounded-xl px-4 py-6 xl:p-8 flex flex-col gap-6">
              <div className="flex flex-col items-center gap-2">
                <Image
                  src="/assets/about/icon-check-circle.svg"
                  alt=""
                  width={32}
                  height={32}
                />
                <p className="font-bold text-neutralgray-900 text-[length:var(--text-h5)] text-center leading-[1.25] tracking-[-0.3px]">
                  What we offer
                  <br />
                  that others don&apos;t:
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-start">
                  <BulletDot />
                  <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                    True mesh-free hernia repair (Kang Repair)
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <BulletDot />
                  <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                    Complete mesh removal without re-implanting mesh
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <BulletDot />
                  <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                    Recurrence rate &lt;0.3%
                    <span className="text-blue-500">*</span> — better than any
                    technique worldwide
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <BulletDot />
                  <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                    Chronic pain rate &lt;0.5%
                    <span className="text-blue-500">*</span> — 30x lower than
                    mesh surgery
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footnote */}
          <p className="text-neutralgray-600 text-[14px] italic leading-[1.35]">
            <span className="text-blue-500">*</span>based on our internal
            registry of over 20,000 mesh-free repairs at Gibbeum Hospital
          </p>
        </div>

        {/* Disclaimer box */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-6 xl:px-8 flex items-center justify-center">
          <p className="font-medium text-slate-700 text-[length:var(--text-h5)] text-center leading-[1.25] tracking-[-0.3px]">
            That&apos;s why patients from the USA, Canada, UK, Spain,
            Australia, UAE,
            <br className="hidden md:block" />
            and 51 other countries trust us with their surgery.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Section 5 · Your Safety Comes from Our Experience
───────────────────────────────────────── */
function SafetySection() {
  return (
    <section className="bg-blue-50 py-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[1016px] mx-auto flex flex-col gap-8 xl:gap-16">
        {/* Title */}
        <div className="flex flex-col items-center gap-8">
          <SectionTitle>
            <h2 className="font-bold text-blue-700 text-[length:var(--text-h2)] text-center leading-[1.25] tracking-[-0.5px]">
              Your Safety Comes from Our Experience
            </h2>
          </SectionTitle>
          <p className="font-bold text-neutralgray-800 text-[length:var(--text-h4)] text-center leading-[1.35] tracking-[-0.5px]">
            <span className="text-blue-400">5,000+</span> hernia surgeries every
            year.
            <br />
            This isn&apos;t just a number—it&apos;s your safety guarantee.
          </p>
        </div>

        {/* 2 col content */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Left: list + quote */}
          <div className="flex-1 flex flex-col gap-6">
            <p className="font-bold text-blue-700 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
              When a surgeon performs the same procedure thousands of times:
            </p>
            <div className="flex flex-col gap-4">
              <CheckItem>Every anatomical variation becomes familiar</CheckItem>
              <CheckItem>Complications are predicted and prevented</CheckItem>
              <CheckItem>Recovery is faster and smoother</CheckItem>
              <CheckItem>Results are consistent and predictable</CheckItem>
            </div>

            {/* Quote block */}
            <div className="pt-6 flex items-start gap-4">
              <div className="shrink-0 rotate-180">
                <Image
                  src="/assets/about/icon-quote-open.svg"
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
              <p
                className="flex-1 font-bold text-blue-700 text-[22px] leading-[1.4]"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                In surgery, volume is the strongest predictor of outcome. We
                redefine precision through repetition.
              </p>
              <div className="shrink-0 self-end">
                <Image
                  src="/assets/about/icon-quote-close.svg"
                  alt=""
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>

          {/* Right: proof card */}
          <div className="flex-1 bg-white border border-slate-100 rounded-2xl px-4 py-6 xl:p-8 flex flex-col gap-4 shadow-sm">
            <p className="font-bold text-blue-700 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
              The Proof is in the Numbers
            </p>
            <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
              We don&apos;t just promise safety; we prove it through unmatched
              clinical volume.
            </p>
            <ul className="list-disc ml-6 flex flex-col gap-3 text-[length:var(--text-body-m)] text-neutralgray-900 leading-[1.35]">
              <li>
                <span className="font-bold">Individual Mastery (Dr. Kang):</span>{" "}
                2,000+ cases / year - Up to 20x more experience than the average
                surgeon.
              </li>
              <li>
                <span className="font-bold">
                  Institutional Strength (Gibbeum Hospital):
                </span>{" "}
                5,000+ cases/year - One of only two centers worldwide performing
                5,000+ mesh-free hernia repairs per year
              </li>
              <li>
                <span className="font-bold">Proven Track Record:</span> 35,000+
                cumulative mesh-free repairs by our hernia team, including
                20,000+ personally performed by Dr. Kang
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Section 6 · 50+ Specialists Ensuring Your Safety
───────────────────────────────────────── */
function SpecialistsSection() {
  return (
    <section className="bg-white py-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[1016px] mx-auto flex flex-col gap-6 xl:gap-10">
        {/* Title */}
        <div className="flex flex-col items-center gap-8">
          <SectionTitle>
            <h2 className="font-bold text-blue-700 text-[length:var(--text-h2)] text-center leading-[1.25] tracking-[-0.5px]">
              50+ Specialists Ensuring Your Safety
            </h2>
          </SectionTitle>
          <p className="font-bold text-neutralgray-900 text-[length:var(--text-h4)] text-center leading-[1.35] tracking-[-0.5px]">
            Unlike other general hospitals that treat everything from headaches
            to heart attacks, we specialize exclusively in advanced surgery.
          </p>
        </div>

        {/* 2 col lists */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Surgical Team */}
          <div className="flex-1 px-4 py-6 xl:p-8 rounded-2xl">
            <div className="flex flex-col gap-1 mb-6">
              <h3 className="font-bold text-blue-700 text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px]">
                Our Surgical Team
              </h3>
              <p className="font-bold text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                15 board-certified surgeons specializing in:
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <BlueListItem>Hernia Repair</BlueListItem>
              <BlueListItem>Colorectal Surgery</BlueListItem>
              <BlueListItem>Thyroid &amp; Endocrine Surgery</BlueListItem>
              <BlueListItem>Breast Surgery</BlueListItem>
              <BlueListItem>Other Abdominal Surgery</BlueListItem>
              <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45] ml-4">
                and other abdominal and urologic procedures
              </p>
            </div>
          </div>

          {/* Support Team */}
          <div className="flex-1 px-4 py-6 xl:p-8 rounded-2xl">
            <div className="flex flex-col gap-1 mb-6">
              <h3 className="font-bold text-blue-700 text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px]">
                Support Team
              </h3>
              <p className="font-bold text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                50+ specialists across all major departments, including:
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <BlueListItem>Internal Medicine</BlueListItem>
              <BlueListItem>Anesthesiology</BlueListItem>
              <BlueListItem>Radiology</BlueListItem>
              <BlueListItem>Emergency Medicine</BlueListItem>
              <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45] ml-4">
                and other specialized departments
              </p>
            </div>
          </div>
        </div>

        {/* Kang Repair Team box */}
        <div className="bg-neutralgray-100 rounded-2xl px-4 py-6 xl:p-8 flex flex-col gap-8">
          <h3 className="font-bold text-blue-700 text-[length:var(--text-h4)] text-center leading-[1.35] tracking-[-0.5px]">
            Our Kang Repair Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
            {[
              "Led by Dr. Kang (developer of Kang Repair)",
              "6 dedicated hernia surgeons, including Dr Kang Jr.",
              "Each surgeon: 500+ hernia repairs per year",
              "Combined experience: 35,000+ mesh-free repairs",
            ].map((item) => (
              <div key={item} className="flex gap-2 items-start">
                <div className="shrink-0 w-4 h-4 mt-[2px]">
                  <Image
                    src="/assets/about/icon-check-blue.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                </div>
                <p className="text-slate-800 text-[length:var(--text-body-l)] leading-[1.45]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SNUH Training Center */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-neutralgray-900 text-[length:var(--text-h5)] leading-[1.25] tracking-[-0.3px]">
                Seoul National University Hospital Training Center
              </h3>
              <p className="text-neutralgray-700 text-[length:var(--text-body-l)] leading-[1.45]">
                We are an official training center for surgical residents,
                designated by Seoul National University Hospital (SNUH),
                Korea&apos;s top-ranked teaching hospital.
              </p>
            </div>
            <div className="border-t border-neutralgray-400 pt-6 flex flex-col gap-4">
              <p className="font-bold text-blue-700 text-[length:var(--text-body-l)] leading-[1.45]">
                What this means for you:
              </p>
              <div className="flex flex-col gap-2">
                <BlueListItem>
                  We meet Korea&apos;s highest academic standards
                </BlueListItem>
                <BlueListItem>
                  Our techniques are studied and replicated nationwide
                </BlueListItem>
                <BlueListItem>
                  Every surgery is performed to university teaching-hospital
                  quality
                </BlueListItem>
              </div>
            </div>
          </div>

          {/* SNUH Logo — 모바일 하단, 데스크탑 오른쪽 */}
          <div className="bg-white rounded-full shadow-md shrink-0 size-[124px] flex items-center justify-center">
            <div className="relative w-[92px] h-[46px] overflow-hidden">
              <Image
                src="/assets/about/snuh-logo.png"
                alt="Seoul National University Hospital"
                width={122}
                height={87}
                className="absolute max-w-none"
                style={{
                  left: "-21.97%",
                  top: "-47.51%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Section 7 · What Makes Us Different?
───────────────────────────────────────── */
function WhatMakesDifferentSection() {
  const rows = [
    {
      typical: "One-size-fits-all mesh surgery",
      gibbeum: "Type-specific mesh-free repair",
      highlight: false,
    },
    {
      typical: "Mesh removal → new mesh",
      gibbeum: "Mesh removal → mesh-free reconstruction",
      highlight: false,
    },
    {
      typical: "2-10% recurrence with mesh",
      gibbeum: (
        <>
          &lt;0.3% recurrence<span className="text-blue-500">*</span>
        </>
      ),
      highlight: true,
    },
    {
      typical: "10-20% chronic pain with mesh",
      gibbeum: (
        <>
          &lt;0.5% chronic pain<span className="text-blue-500">*</span>
        </>
      ),
      highlight: true,
    },
    {
      typical: "Several hundred hernia surgeries/year",
      gibbeum: (
        <>
          5,000+ hernia surgeries/year
          <span className="text-blue-500">*</span>
        </>
      ),
      highlight: true,
    },
  ];

  return (
    <section className="bg-blue-50 py-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[1016px] mx-auto flex flex-col gap-8 xl:gap-14">
        {/* Title */}
        <SectionTitle>
          <h2 className="font-bold text-blue-700 text-[length:var(--text-h2)] text-center leading-[1.25] tracking-[-0.5px]">
            What Makes Us Different?
          </h2>
        </SectionTitle>

        {/* Comparison Table — single grid context for perfect column alignment */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
          <div className="grid grid-cols-2">
            {/* Header: Typical Hospital */}
            <div className="h-[133px] bg-neutralgray-300 border-r border-neutralgray-400 flex flex-col items-center justify-start gap-2 px-4 pt-6 pb-4">
              <div className="relative size-10 shrink-0 overflow-hidden">
                <div className="absolute inset-[9.38%]">
                  <img
                    src="/assets/about/icon-hospital.svg"
                    alt=""
                    className="absolute block max-w-none size-full"
                  />
                </div>
              </div>
              <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] text-center leading-[1.45] tracking-[-0.3px]">
                Typical Hospital
              </p>
            </div>

            {/* Header: Gibbeum */}
            <div className="h-[133px] bg-blue-700 flex flex-col items-center justify-center p-6">
              <div className="relative" style={{ width: 119, height: 40 }}>
                <div
                  className="relative overflow-hidden"
                  style={{ height: 23, width: 116 }}
                >
                  <div
                    className="absolute"
                    style={{
                      top: "9.32%",
                      right: "77.72%",
                      bottom: "2.83%",
                      left: 0,
                    }}
                  >
                    <Image
                      src="/assets/about/logo-mark-group1.svg"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div
                    className="absolute"
                    style={{
                      top: 0,
                      right: 0,
                      bottom: "39.72%",
                      left: "27.24%",
                    }}
                  >
                    <Image
                      src="/assets/about/logo-mark-group2.svg"
                      alt=""
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <div
                    className="absolute"
                    style={{
                      top: "76.17%",
                      right: "0.04%",
                      bottom: 0,
                      left: "28.23%",
                    }}
                  >
                    <Image
                      src="/assets/about/logo-mark-group3.svg"
                      alt=""
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                </div>
                <p
                  className="absolute text-white text-center"
                  style={{
                    top: 27,
                    left: 0,
                    width: "100%",
                    fontSize: 7.837,
                    fontWeight: 600,
                    letterSpacing: 0.5,
                    lineHeight: 1.4,
                  }}
                >
                  KANG REPAIR HERNIA CENTER
                </p>
              </div>
            </div>

            {/* Table Rows — cells placed directly in the outer grid */}
            {rows.map((row, i) => (
              <React.Fragment key={i}>
                <div className="bg-neutralgray-100 border-b border-r border-neutralgray-300 flex items-center justify-center px-2 py-4">
                  <p className="font-bold text-neutralgray-900 text-[length:var(--text-body-l)] text-center leading-[1.45]">
                    {row.typical}
                  </p>
                </div>
                <div className="bg-blue-50/70 border-b border-blue-100 flex items-center justify-center px-2 py-4">
                  <p className="font-bold text-neutralgray-900 text-[length:var(--text-body-l)] text-center leading-[1.45]">
                    {row.gibbeum}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Footnote */}
        <p className="text-[14px] italic leading-[20px] text-neutralgray-600">
          <span className="text-blue-500">*</span>
          <span className="text-neutralgray-600">
            based on our internal registry of over 20,000 mesh-free repairs at
            Gibbeum Hospital
          </span>
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Section 8 · Bottom GIBBEUM HOSPITAL Stats
───────────────────────────────────────── */
function BottomStatsSection() {
  const topStats = [
    {
      icon: "/assets/about/icon-surgeon.svg",
      value: "15",
      label: "SURGEONS",
    },
    {
      icon: "/assets/about/icon-specialist.svg",
      value: "50+",
      label: "SPECIALISTS",
    },
    {
      icon: "/assets/about/icon-globe.svg",
      value: "57",
      label: "COUNTRIES SERVED",
    },
    {
      icon: "/assets/about/icon-surgeon.svg",
      value: "600+",
      label: "INTL. PATIENTS",
    },
  ];

  return (
    <section className="bg-blue-700 py-[var(--spacing-xl)] px-6 md:px-10 xl:px-[149px]">
      <div className="max-w-[1216px] mx-auto flex flex-col gap-8 xl:gap-16">
        {/* Title */}
        <div className="flex flex-col items-center gap-8">
          <div className="bg-neutralgray-50 h-[9px] w-[184px] shrink-0" />
          <h2 className="font-bold text-neutralgray-50 text-[length:var(--text-h1)] text-center leading-[1.1]">
            GIBBEUM HOSPITAL
          </h2>
        </div>

        {/* Stats grid */}
        <div className="flex flex-col gap-4">
          {/* Row 1: 4 cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {topStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 rounded-xl p-4 flex flex-col items-center gap-2"
              >
                <div className="bg-neutralgray-50 rounded-full size-10 flex items-center justify-center p-2">
                  <Image
                    src={stat.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="size-6"
                  />
                </div>
                <p className="font-bold text-system-mint text-[length:var(--text-h3)] leading-[1.25]">
                  {stat.value}
                </p>
                <p className="font-bold text-neutralgray-50 text-[length:var(--text-body-l)] uppercase text-center tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2: surgeries + 2 stats */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Surgeries card */}
            <div className="bg-white/10 rounded-xl p-4 flex flex-col items-center gap-2 md:w-[280px]">
              <div className="bg-neutralgray-50 rounded-full size-10 flex items-center justify-center p-2">
                <Image
                  src="/assets/about/icon-surgery.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="size-6"
                />
              </div>
              <p className="font-bold text-system-mint text-[length:var(--text-h3)] leading-[1.25]">
                5k
              </p>
              <p className="font-bold text-neutralgray-50 text-[length:var(--text-body-l)] uppercase text-center tracking-wide">
                SURGERIES/YEAR
              </p>
            </div>

            {/* Rates card */}
            <div className="flex-1 bg-white/10 rounded-xl p-4 flex items-center justify-center gap-6">
              <div className="flex-1 flex flex-col items-center gap-2 text-center">
                <p className="font-bold text-system-mint text-[length:var(--text-h3)] leading-[1.25]">
                  &lt;0.3%
                </p>
                <p className="font-bold text-neutralgray-50 text-[length:var(--text-body-l)] uppercase tracking-wide">
                  RECURRENCE RATE
                </p>
              </div>
              <div className="bg-white/20 w-px self-stretch" />
              <div className="flex-1 flex flex-col items-center gap-2 text-center">
                <p className="font-bold text-system-mint text-[length:var(--text-h3)] leading-[1.25]">
                  &lt;0.5%
                </p>
                <p className="font-bold text-neutralgray-50 text-[length:var(--text-body-l)] uppercase tracking-wide">
                  CHRONIC PAIN RATE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero — full width, no side padding */}
        <PageHeader
          badge="Est. 2005 • Seoul, South Korea"
          title="GIBBEUM HOSPITAL"
          subtitle="The World's Destination for Mesh-Free Hernia Surgery"
          rounded="sm"
          padding="default"
        />

        <StatsBar />
        <WhyGibbeumSection />
        <WhyPatientsSection />
        <SafetySection />
        <SpecialistsSection />
        <WhatMakesDifferentSection />
        <BottomStatsSection />
      </main>
      <Footer />
    </>
  );
}
