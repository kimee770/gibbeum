import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

/* ─────────────────────────────────────────
   Shared helpers
───────────────────────────────────────── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="bg-blue-600 h-[9px] w-[184px] shrink-0" />
      {children}
    </div>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2 items-start">
      <div className="shrink-0 mt-[10px]">
        <div className="bg-blue-400 rounded-full size-[6px]" />
      </div>
      <p className="flex-1 text-neutralgray-800 text-[length:var(--text-body-l)] leading-[1.45]">
        {children}
      </p>
    </div>
  );
}

function ListDot({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 items-start list-none">
      <div className="shrink-0 mt-[10px]">
        <div className="bg-blue-400 rounded-full size-[6px]" />
      </div>
      <span className="flex-1 text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
        {children}
      </span>
    </li>
  );
}

/* ─────────────────────────────────────────
   Section 1 · Why Can't Anyone Fix...
───────────────────────────────────────── */
function WhySection() {
  return (
    <section className="bg-white py-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[1016px] mx-auto flex flex-col gap-8 xl:gap-14">
        <SectionTitle>
          <h2 className="font-bold text-blue-700 text-[length:var(--text-h2)] leading-[1.25] tracking-[-0.5px]">
            &ldquo;Why Can&apos;t Anyone Fix My Hernia Without Mesh?&rdquo;
          </h2>
        </SectionTitle>

        {/* You've probably heard */}
        <div className="flex flex-col gap-6">
          <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
            You&apos;ve probably heard:
          </p>
          <p className="font-medium text-neutralgray-900 text-[length:var(--text-body-xl)] leading-[1.4]">
            &ldquo;Mesh is the only reliable option&rdquo; &ndash; &ldquo;Old
            mesh-free methods have high recurrence&rdquo; &ndash; &ldquo;You&apos;ll
            just need another surgery in a few years&rdquo;
          </p>
        </div>

        {/* Reality */}
        <div className="flex flex-col gap-6">
          <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
            Here&apos;s the reality they&apos;re not telling you
          </p>
          <div className="flex flex-col gap-5 text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
            <p>
              Traditional mesh-free methods failed with 10-30% recurrence rates.
              Surgeons believed this was due to &ldquo;tension&rdquo; from simple
              closure of the defect. But if tension were truly the cause, we should
              see 10%+ rupture or tear rates at suture sites in other abdominal
              surgeries too — which we don&apos;t. Even during this era, well-managed
              techniques such as Shouldice repair achieved recurrence rates below 5%.
            </p>
            <p>
              One likely reason for the high failure rates: Many older techniques
              relied on stretched and weakened muscle tissue for repair. When you use
              stretched and weakened muscle to close a defect, the repair is more
              likely to fail. Tension may not have been the major cause; rather the
              choice of tissue may have mattered more.
            </p>
            <p>
              Standard mesh surgery reduced recurrence — but at what cost? Recurrence
              still 2-10%. Plus 10-20% develop chronic pain. Permanent foreign
              material remains in your body forever.
            </p>
            <p>
              Many surgeons continue with this approach because alternatives have been
              limited — until now.
            </p>
          </div>
        </div>

        {/* Doctor photo placeholder */}
        <div className="w-full h-[360px] md:h-[480px] rounded-2xl bg-neutralgray-200 flex items-center justify-center overflow-hidden">
          <p className="text-neutralgray-500 font-bold text-[length:var(--text-h6)]">
            Doctor Consultation Photo
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Section 2 · Kang Repair®: The Breakthrough
───────────────────────────────────────── */
function BreakthroughSection() {
  return (
    <section className="bg-white py-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[1016px] mx-auto flex flex-col gap-8 xl:gap-14">
        <SectionTitle>
          <h2 className="font-bold text-blue-700 text-[length:var(--text-h2)] leading-[1.25] tracking-[-0.5px] whitespace-nowrap">
            Kang Repair®: The Breakthrough
          </h2>
        </SectionTitle>

        {/* Intro paragraph */}
        <p className="text-neutralgray-900 text-[length:var(--text-body-xl)] leading-[1.45]">
          Kang Repair achieves what no other technique has achieved. The recurrence
          rate is less than 0.3%
          <span className="text-blue-500">*</span> — lower than mesh surgery
          (2–10%), lower than any mesh-free technique ever documented, and lower than
          any hernia repair technique in medical literature. The chronic pain rate is
          less than 0.5%
          <span className="text-blue-500">*</span>, which is 30 times lower than mesh
          surgery (10–20%), and even then, it is only mild.
        </p>

        {/* Foreign material note */}
        <div className="flex flex-col gap-4">
          <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
            No foreign material except sutures
          </p>
          <p className="text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45]">
            Just a few permanent sutures — no mesh at all. Natural, anatomical
            healing.
          </p>
        </div>

        {/* 3 stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Chronic Pain */}
          <div className="bg-blue-700 border border-white/20 rounded-2xl px-6 py-4 flex flex-col items-center gap-2 min-h-[200px] justify-center">
            <div className="bg-white/20 rounded-full size-12 flex items-center justify-center shrink-0">
              <Image
                src="/assets/kang-repair/icon-chronic-pain.svg"
                alt=""
                width={24}
                height={25}
              />
            </div>
            <p className="font-bold text-neutralgray-50 text-[length:var(--text-h5)] text-center leading-[1.25] tracking-[-0.3px]">
              Chronic Pain Rate
            </p>
            <p className="font-bold text-skyblue text-[length:var(--text-h1)] text-center leading-[1.1]">
              &lt;0.5%
            </p>
            <p className="text-neutralgray-50 text-[length:var(--text-body-l)] text-center leading-[1.45]">
              Lower than mesh surgery (2-10%)
            </p>
          </div>

          {/* Foreign Material */}
          <div className="bg-blue-700 border border-white/20 rounded-2xl px-6 py-4 flex flex-col items-center gap-2 min-h-[200px] justify-center">
            <div className="size-12 shrink-0 flex items-center justify-center">
              <Image
                src="/assets/kang-repair/icon-foreign-material.svg"
                alt=""
                width={48}
                height={48}
              />
            </div>
            <p className="font-bold text-neutralgray-50 text-[length:var(--text-h5)] text-center leading-[1.25] tracking-[-0.3px]">
              Foreign material
            </p>
            <p className="font-bold text-skyblue text-[length:var(--text-h1)] text-center leading-[1.1]">
              0%
            </p>
            <p className="text-neutralgray-50 text-[length:var(--text-body-l)] text-center leading-[1.45]">
              Sutures only
            </p>
          </div>

          {/* Recurrence */}
          <div className="bg-blue-700 border border-white/20 rounded-2xl px-6 py-4 flex flex-col items-center gap-2 min-h-[200px] justify-center">
            <div className="bg-white/20 rounded-full size-12 flex items-center justify-center shrink-0">
              <Image
                src="/assets/kang-repair/icon-recurrence.svg"
                alt=""
                width={24}
                height={24}
              />
            </div>
            <p className="font-bold text-neutralgray-50 text-[length:var(--text-h5)] text-center leading-[1.25] tracking-[-0.3px]">
              Recurrence Rate
            </p>
            <p className="font-bold text-skyblue text-[length:var(--text-h1)] text-center leading-[1.1]">
              &lt;0.3%
            </p>
            <div className="text-neutralgray-50 text-[length:var(--text-body-l)] text-center leading-[1.45]">
              <p>Lower than mesh surgery</p>
              <p>(2-10%)</p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <p
          className="font-semibold italic text-blue-700 text-[length:var(--text-lora-h4)] leading-[1.45]"
          style={{ fontFamily: "var(--font-lora)" }}
        >
          This is not &ldquo;the best mesh-free technique&rdquo; — this is one of
          the most advanced hernia repair techniques available today
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Section 3 · What Is Kang Repair®?
───────────────────────────────────────── */
function WhatIsSection() {
  const cards = [
    {
      bg: "/assets/kang-repair/card-bg-1.svg",
      num: "1",
      title: "Type-Specific Repair",
      sub: "(Not one-size-fits-all)",
    },
    {
      bg: "/assets/kang-repair/card-bg-2.svg",
      num: "2",
      title: "Only strong native muscle",
      sub: null,
    },
    {
      bg: "/assets/kang-repair/card-bg-2.svg",
      num: "3",
      title: "Preserve normal structures",
      sub: null,
    },
  ];

  return (
    <section className="bg-neutralgray-100 py-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[1016px] mx-auto flex flex-col gap-8 xl:gap-14">
        <SectionTitle>
          <h2 className="font-bold text-blue-700 text-[length:var(--text-h2)] text-center leading-[1.25] tracking-[-0.5px] whitespace-nowrap">
            What Is Kang Repair®?
          </h2>
        </SectionTitle>

        <p className="text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
          A custom, anatomically precise reconstruction of your hernia — using only
          your own healthy tissue. Developed by Dr. Kang over 20,000+ mesh-free
          surgeries, refined year after year, proven in patients from 57 countries.
        </p>

        <div className="flex flex-col gap-10">
          <p className="font-bold text-neutralgray-900 text-[length:var(--text-h5)] leading-[1.25] tracking-[-0.3px]">
            Three Core Principles
          </p>

          {/* Principle 1 */}
          <div className="flex flex-col gap-4">
            <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
              1. Type-Specific Repair (Not One-Size-Fits-All)
            </p>
            <p className="pl-6 text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
              Your hernia is unique. Indirect inguinal hernia ≠ Direct inguinal
              hernia ≠ Femoral hernia.
            </p>
            <ul className="pl-6 flex flex-col gap-3">
              <ListDot>
                <span className="font-bold">Standard mesh surgery: </span>Uses mesh
                in every case, but largely treats all types with similar, generic
                patches that only slightly vary in material or shape.
              </ListDot>
              <ListDot>
                <span className="font-bold">Kang Repair: </span>Precisely defines
                your specific defect and applies a tailored, mesh-free
                reconstruction technique optimized for that hernia type.
              </ListDot>
            </ul>
          </div>

          {/* Principle 2 */}
          <div className="flex flex-col gap-4">
            <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
              2. Uses Only Strong, Healthy Muscle
            </p>
            <div className="pl-6 flex flex-col gap-4 text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
              <p>
                Many older mesh-free techniques failed because they relied on damaged,
                weakened muscle. Kang Repair uses strong, healthy muscle, intact
                fascia and ligaments, and natural anatomical structures.
              </p>
              <p>
                Result: Tension-balanced, durable reconstruction designed to last —
                without artificial reinforcement.
              </p>
            </div>
          </div>

          {/* Principle 3 */}
          <div className="flex flex-col gap-4">
            <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
              3. Preserves All Critical Structures
            </p>
            <div className="pl-6 flex flex-col gap-4 text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
              <p>
                Some chronic pain after hernia surgery results from nerve injury. Kang
                Repair protects: ilioinguinal nerve, iliohypogastric nerve, genital
                branch of genitofemoral nerve, vas deferens, testicular vessels, and
                cremaster muscle.
              </p>
              <p>
                This is why Kang Repair has &lt;0.5% chronic pain rate — compared to
                10-20% with mesh surgery
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.num}
              className="relative rounded-[24px] overflow-hidden shadow-[0px_8px_8px_-4px_rgba(171,190,209,0.5)] bg-transparent"
              style={{ minHeight: 191 }}
            >
              {/* Background SVG */}
              <div className="absolute inset-0">
                <Image src={card.bg} alt="" fill className="object-cover" />
              </div>

              {/* Number circle */}
              <div
                className="absolute size-[69px] rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(to bottom, #125cc3, #6aa9ff)",
                  left: 40,
                  top: 7,
                }}
              >
                <span className="font-bold text-white text-[length:var(--text-h3)] leading-[1.25]">
                  {card.num}
                </span>
              </div>

              {/* Text */}
              <div className="absolute left-6 top-[104px] right-6 flex flex-col gap-2">
                <p className="font-bold text-blue-700 text-[length:var(--text-h5)] leading-[1.25] tracking-[-0.3px]">
                  {card.title}
                </p>
                {card.sub && (
                  <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                    {card.sub}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Section 4 · How Kang Repair® Works
───────────────────────────────────────── */
function HowItWorksSection() {
  return (
    <section className="bg-white py-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[1016px] mx-auto flex flex-col gap-8 xl:gap-14">
        <SectionTitle>
          <h2 className="font-bold text-blue-700 text-[length:var(--text-h2)] leading-[1.25] tracking-[-0.5px]">
            How Kang Repair® Works: The Three Types
          </h2>
        </SectionTitle>

        {/* 1. Indirect Inguinal Hernia */}
        <div className="flex flex-col gap-10">
          <h3 className="font-bold text-blue-700 text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px]">
            KANG&apos;S INDIRECT INGUINAL HERNIA REPAIR
          </h3>
          <div className="flex flex-col gap-6 text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
            <p>
              <span className="font-bold">Your problem: </span>Defective shutter
              mechanism — Hernia sac pushing through internal inguinal ring — Dilated
              internal ring
            </p>
            <p>
              <span className="font-bold">Our solution: </span>Reduce or remove
              hernia sac completely — Reconstruct the conjoined arch and reinforce the
              shutter mechanism over internal ring (tension-controlled) — Protect vas
              deferens, vessels, nerves, and cremaster muscle throughout
            </p>
            <p>
              <span className="font-bold">Result: </span>Durable stability with
              natural anatomy reinforced — Shutter mechanism reconstructed to function
              more effectively — No mesh needed
            </p>
            <p>
              <span className="font-bold">
                Key innovation — The Quatro Fix:{" "}
              </span>
              Unlike generic repairs that only reinforce Hesselbach triangle to
              indirectly narrow the ring, Kang Repair applies four simultaneous
              protection mechanisms for indirect inguinal hernia:
            </p>
          </div>

          {/* 4-card Quatro Fix grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                num: "1",
                title: "Direct Ring Narrowing",
                body: "Directly narrows the dilated internal ring, addressing the root cause immediately.",
              },
              {
                num: "2",
                title: "Extended Shutter",
                body: "Lowers the shutter further to cover the upper part of Hesselbach triangle, significantly helping to reduce the risk of future direct hernia formation.",
              },
              {
                num: "3",
                title: "2D → 3D Transformation",
                body: "Transforms the dilated 2D ring into a narrow, long 3D tunnel, creating a complex physical barrier against recurrence.",
              },
              {
                num: "4",
                title: "Dynamic Compression",
                body: "Uses your own physiology: Muscle contraction actively further narrows the tunnel whenever you cough or strain.",
              },
            ].map((card) => (
              <div
                key={card.num}
                className="bg-white border border-neutralgray-300 rounded-3xl overflow-hidden shadow-[0px_2px_4px_0px_rgba(171,190,209,0.6)] flex items-stretch"
              >
                <div className="bg-neutralgray-100 w-14 shrink-0 flex items-start justify-center pt-8">
                  <span className="font-bold text-[40px] leading-[40px] text-slate-300">
                    {card.num}
                  </span>
                </div>
                <div className="flex flex-col gap-4 px-4 py-6 xl:p-8 flex-1">
                  <p className="font-bold text-neutralgray-900 text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px]">
                    {card.title}
                  </p>
                  <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                    {card.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="font-bold text-neutralgray-900 text-[length:var(--text-h5)] leading-[1.25] tracking-[-0.3px]">
            Four mechanisms of protection. Working together. Simultaneously.
          </p>
        </div>

        {/* 2. Direct Inguinal Hernia */}
        <div className="flex flex-col gap-6">
          <h3 className="font-bold text-blue-700 text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px]">
            KANG&apos;S DIRECT INGUINAL HERNIA REPAIR
          </h3>
          <div className="flex flex-col gap-6 text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
            <p>
              <span className="font-bold">Your problem: </span>The Hesselbach
              triangle — a specific area of the posterior wall composed of
              transversalis fascia — has weakened, allowing tissue to bulge through
            </p>
            <p>
              <span className="font-bold">Our solution: </span>Reduce direct sac,
              reconstruct Hesselbach triangle using strong healthy muscle and ligament
              instead of stretched and weakened overlying fascia and muscle. During
              this process, we also identify and address any hidden indirect sac to
              minimize the possibility of future indirect hernia development.
            </p>
            <p>
              <span className="font-bold">Key innovation: </span>We don&apos;t just
              &ldquo;patch&rdquo; the weakness or mindlessly use only the muscles
              that are visible to the eye — we rebuild the entire Hesselbach triangle
              by deliberately using your body&apos;s strongest and most robust
              muscles.
            </p>
          </div>
        </div>

        {/* 3. Preventing Future Hernias */}
        <div className="flex flex-col gap-6">
          <h3 className="font-bold text-blue-700 text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px]">
            PREVENTING FUTURE INGUINAL HERNIAS
          </h3>
          <div className="flex flex-col gap-6 text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
            <p>
              We don&apos;t stop at fixing your current hernia. Mesh repair addresses
              this by placing a large mesh to cover the entire groin area — but this
              comes with the downsides of permanent foreign material. With minimal but
              highly effective additional steps, we achieve similar protection without
              mesh:
            </p>
            <ul className="flex flex-col gap-3">
              <ListDot>
                <span className="font-bold">During indirect hernia repair: </span>We
                extend the shutter mechanism to cover the upper part of Hesselbach
                triangle, reducing the risk of future direct hernia
              </ListDot>
              <ListDot>
                <span className="font-bold">During direct hernia repair: </span>We
                carefully search for and address any hidden indirect sac or patent
                processus vaginalis to reduce the risk of future indirect hernia
              </ListDot>
            </ul>
            <p>
              This comprehensive approach means it is uncommon for patients to return
              with a different type of hernia on the same side.
            </p>
          </div>
        </div>

        {/* 4. Results Comparison */}
        <div className="flex flex-col gap-6">
          <h3 className="font-bold text-blue-700 text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px]">
            RESULTS COMPARISON
          </h3>
          <p
            className="font-semibold text-neutralgray-900 text-[length:var(--text-lora-h4)] leading-[1.45]"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            &ldquo;These are the reasons Kang Repair achieves a recurrence rate of
            less than 0.3%, the lowest ever documented for any hernia repair
            technique.&rdquo;
          </p>

          {/* Table */}
          <div className="w-full overflow-x-auto rounded-lg border border-neutralgray-300 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-[#0f2e5a] text-white font-bold text-[length:var(--text-body-l)] leading-[1.45] text-center py-4 px-6 border-r border-[#1a4b8c]">
                    Outcome
                  </th>
                  <th className="bg-blue-700 text-white font-bold text-[length:var(--text-body-l)] leading-[1.45] text-center py-4 px-6 border-r border-[#1a4b8c]">
                    Kang Repair
                  </th>
                  <th className="bg-[#0f2e5a] text-white font-bold text-[length:var(--text-body-l)] leading-[1.45] text-center py-4 px-6">
                    Mesh Surgery
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    outcome: "2-Year Recurrence rate",
                    kang: (
                      <>
                        &lt;0.3%<span className="text-blue-500">*</span>
                      </>
                    ),
                    mesh: "2-10%",
                  },
                  {
                    outcome: "Chronic pain / Complications",
                    kang: (
                      <>
                        &lt;0.5%<span className="text-blue-500">*</span>
                      </>
                    ),
                    mesh: "10-20%",
                  },
                  {
                    outcome: "Foreign Material",
                    kang: "Only sutures",
                    mesh: "Permanent mesh",
                  },
                  {
                    outcome: "Early Post-Op Pain",
                    kang: "Lowest",
                    mesh: "Moderate-high",
                  },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-neutralgray-300">
                    <td className="py-4 px-6 text-center font-bold text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45] border-r border-neutralgray-300">
                      {row.outcome}
                    </td>
                    <td className="bg-[#f0fdf4] py-4 px-6 text-center font-bold text-green-700 text-[length:var(--text-body-l)] leading-[1.45] border-r border-neutralgray-300">
                      {row.kang}
                    </td>
                    <td className="py-4 px-6 text-center font-bold text-slate-700 text-[length:var(--text-body-l)] leading-[1.45]">
                      {row.mesh}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Misconception box */}
        <div className="bg-neutralgray-200 rounded-2xl px-4 py-6 xl:p-10 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-neutralgray-900 text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px]">
              Addressing a Common Misconception
            </p>
            <p className="italic text-neutralgray-800 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
              &ldquo;Isn&apos;t Kang Repair just a variation of Marcy Repair?&rdquo;
            </p>
          </div>
          <div className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45] flex flex-col gap-4">
            <p>
              This question reflects a fundamental misunderstanding. Classical repairs
              such as Bassini, Shouldice, and Marcy share the same essential approach.
              They elevate the spermatic cord, divide the cremaster muscle, and repair
              the transversalis fascia. The primary difference among them lies in the
              extent or location of repair, whether at the Hesselbach triangle or the
              internal inguinal ring area.
            </p>
            <p>
              Kang Repair for indirect inguinal hernia is fundamentally different. It
              does not elevate the spermatic cord and never divides the cremaster
              muscle. Instead of focusing on the transversalis fascia, it targets the
              conjoined arch and applies four simultaneous protection mechanisms.
            </p>
            <p>
              For direct hernias, Kang Repair reconstructs the Hesselbach triangle
              using healthy rectus muscle, an approach not offered by Marcy repair.
            </p>
            <p className="font-bold">
              Kang Repair is not a modification of Marcy or any classical technique.
              It represents a completely different surgical approach.
            </p>
          </div>
        </div>

        {/* Patient Quote */}
        <div className="bg-blue-50 rounded-2xl px-4 py-6 xl:px-10 xl:py-8 flex flex-col gap-6">
          <p
            className="font-semibold italic text-neutralgray-900 text-[18px] leading-[1.45]"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            I had Desarda repair on my left side last year, then Kang Repair on my
            right side recently. The difference was night and day. Desarda: 9/10
            pain. Kang Repair: 2/10 — walked comfortably the next day.
          </p>
          <div className="flex gap-2 items-center">
            <div className="relative size-[46px] rounded-full overflow-hidden shrink-0">
              <Image
                src="/assets/kang-repair/avatar-james.png"
                alt="James, 39, Canada"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-neutralgray-600 text-[length:var(--text-body-l)] leading-[1.45]">
              — James, 39, Canada
            </p>
          </div>
          <p className="font-bold text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
            Kang Repair aims not only for the lowest recurrence rate but also for the
            least painful surgery.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Section 5 · Other Hernias
───────────────────────────────────────── */
function OtherHerniasSection() {
  return (
    <section className="bg-neutralgray-100 py-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[1016px] mx-auto flex flex-col gap-8 xl:gap-14">
        <SectionTitle>
          <h2 className="font-bold text-blue-700 text-[length:var(--text-h2)] leading-[1.25] tracking-[-0.5px]">
            Other Hernias
          </h2>
        </SectionTitle>

        {/* Femoral */}
        <div className="flex flex-col gap-10">
          <h3 className="font-bold text-blue-700 text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px]">
            KANG&apos;S FEMORAL HERNIA REPAIR
          </h3>
          <div className="flex flex-col gap-6 text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
            <p>
              <span className="font-bold">Your problem: </span>Hernia through femoral
              canal (below inguinal ligament), high-risk area near major vessels.
            </p>
            <p>
              <span className="font-bold">Our solution: </span>Infrainguinal approach
              (through the groin from below), meticulous protection of femoral
              vessels, close femoral ring securely, rebuild ligament framework. Some
              surgeons insist that femoral hernia must be repaired with mesh, but we
              actually repair femoral hernia using the simplest non-mesh technique
              very successfully.
            </p>
            <p>
              <span className="font-bold">Key innovation: </span>Traditional femoral
              hernia repair has been performed using more complex methods than standard
              inguinal hernia surgery, whereas our infrainguinal approach is much
              simpler yet allows safer defect closure with less tissue trauma. As a
              result, patients who undergo femoral hernia repair experience
              significantly less pain than those undergoing inguinal hernia repair.
            </p>
            <p>
              <span className="font-bold">Outcomes: </span>The recurrence rate for
              femoral hernia repair using the Kang technique is comparable to that of
              inguinal hernia repair — less than 0.3%.
            </p>
          </div>
        </div>

        {/* Umbilical & Epigastric */}
        <div className="flex flex-col gap-10">
          <h3 className="font-bold text-blue-700 text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px]">
            KANG&apos;S UMBILICAL AND EPIGASTRIC HERNIA REPAIR
          </h3>
          <div className="flex flex-col gap-6 text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
            <p>
              <span className="font-bold">Your problem: </span>Weakness in the
              abdominal wall at or around the umbilicus (belly button) or along the
              midline of the upper abdomen has resulted in a defect (hole) in the
              fascia, allowing tissue to bulge through.
            </p>
            <p>
              <span className="font-bold">Our solution: </span>At Gibbeum Hospital,
              we perform open tissue repair without mesh for umbilical and epigastric
              hernias with defects up to 5 cm in diameter.
            </p>
            <p>
              <span className="font-bold">Anesthesia considerations: </span>Defects
              smaller than 3 cm: Local anesthesia with sedation — Defects 4 cm or
              larger: General anesthesia may be required
            </p>
            <p>
              <span className="font-bold">Key innovation: </span>While many surgeons
              believe mesh is mandatory for umbilical and epigastric hernias, we
              achieve durable repairs using tissue-based techniques for appropriately
              sized defects — avoiding the long-term complications associated with
              mesh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Section 6 · Your Recovery Timeline
───────────────────────────────────────── */
function TimelineSection() {
  const entries = [
    {
      period: "Day 0-1: Hospital Stay",
      items: [
        "The procedure typically takes 20 to 30 minutes.",
        "Pain is well controlled with medication.",
        "Light walking begins within hours after surgery.",
        "Discharge is usually in the late afternoon or the following day.",
      ],
    },
    {
      period: "Days 2-7: First Week",
      items: [
        "Light walking and local sightseeing are appropriate.",
        "Desk work is generally permitted.",
        "Heavy lifting should be avoided.",
        "Most discomfort improves quickly during this period.",
      ],
    },
    {
      period: "Days 8-14: Second Week",
      items: [
        "Most normal daily activities can be resumed.",
        "Light exercise may begin as tolerated.",
      ],
    },
    {
      period: "Week 3+: Listen to Your Body",
      items: [
        "Return to any activity that feels comfortable.",
        "If it feels acceptable, you may continue, including all forms of exercise.",
        "If discomfort occurs, pause and allow additional recovery time.",
      ],
    },
  ];

  return (
    <section className="bg-white py-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[1016px] mx-auto flex flex-col gap-8 xl:gap-14">
        <SectionTitle>
          <h2 className="font-bold text-blue-700 text-[length:var(--text-h2)] text-left leading-[1.25] tracking-[-0.5px]">
            Your Recovery Timeline
          </h2>
        </SectionTitle>

        <div className="bg-neutralgray-100 rounded-2xl px-4 py-6 xl:p-10 flex flex-col gap-6 xl:gap-8">
          {/* Timeline list */}
          <div className="relative border-l-2 border-blue-200 pl-8 flex flex-col gap-6">
            {entries.map((entry) => (
              <div key={entry.period} className="relative">
                {/* Blue dot on the line */}
                <div className="absolute -left-[39px] top-[-0.5px] size-4 rounded-full bg-blue-700 shadow-sm" />
                <h3 className="font-bold text-blue-700 text-[length:var(--text-h5)] leading-[1.25] tracking-[-0.3px] mb-4">
                  {entry.period}
                </h3>
                <ul className="flex flex-col gap-2">
                  {entry.items.map((item, i) => (
                    <BulletItem key={i}>{item}</BulletItem>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="bg-white rounded-2xl p-6">
            <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
              This is very different from mesh surgery, where surgeons often restrict
              activity for 4-6 weeks because foreign material needs time to
              &ldquo;integrate&rdquo; and risks mesh displacement.
            </p>
          </div>

          {/* Patient Quote */}
          <div className="bg-blue-50 rounded-2xl px-4 py-6 xl:px-10 xl:py-8 flex flex-col gap-6">
            <p
              className="font-semibold italic text-neutralgray-900 text-[18px] leading-[1.45]"
              style={{ fontFamily: "var(--font-lora)" }}
            >
              I was back at the gym at Day 12. Started light, but by Week 3 I was
              doing everything — squats, deadlifts, the works. No pain, no issues.
            </p>
            <div className="flex gap-2 items-center">
              <div className="relative size-[46px] rounded-full overflow-hidden shrink-0">
                <Image
                  src="/assets/kang-repair/avatar-michael.png"
                  alt="Michael, 35, USA"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-neutralgray-600 text-[length:var(--text-body-l)] leading-[1.45]">
                — Michael, 35, USA
              </p>
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
export default function KangRepairPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          badge="The Mesh-Free Solution"
          title="KANG REPAIR®"
          subtitle="The World's Most Advanced Mesh-Free Hernia Surgery"
          cta={{ text: "Get Free Consultation", useModal: true }}
          rounded="lg"
          padding="compact"
        />

        <WhySection />
        <BreakthroughSection />
        <WhatIsSection />
        <HowItWorksSection />
        <OtherHerniasSection />
        <TimelineSection />
      </main>
      <Footer />
    </>
  );
}
