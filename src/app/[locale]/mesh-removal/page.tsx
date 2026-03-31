import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

/* ─────────────────────────────────────────
   Shared helpers
───────────────────────────────────────── */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[32px]">
      <div className="bg-blue-600 h-[9px] w-[184px] shrink-0" />
      {children}
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-bold text-blue-700 text-[length:var(--text-h2)] leading-[1.25] tracking-[-0.5px]">
      {children}
    </h2>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 mt-[2px]">
      <circle cx="10" cy="10" r="9.25" stroke="#8F8F8F" strokeWidth="1.5" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#8F8F8F" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 mt-[2px]">
      <circle cx="10" cy="10" r="9.25" stroke="#0047AB" strokeWidth="1.5" />
      <path d="M6 10.5l3 3 5-6" stroke="#0047AB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─────────────────────────────────────────
   S1 · Finally Free from Mesh Pain
───────────────────────────────────────── */
function FinallyFreeSection() {
  return (
    <section className="w-full bg-white pt-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[1016px] mx-auto flex flex-col gap-[var(--spacing-ml)]">
        <SectionTitle>
          <H2>Finally Free from Mesh Pain</H2>
        </SectionTitle>
        <div className="flex flex-col gap-[24px] text-neutralgray-900 text-[length:var(--text-body-xl)] leading-[1.4]">
          <p className="font-bold text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">
            You&apos;re Not Imagining It
          </p>
          <p>
            If you&apos;re reading this, you probably know these sentences too
            well: &ldquo;Your scan looks normal.&rdquo; &ldquo;The mesh is in
            the right position.&rdquo; &ldquo;There&apos;s nothing we can
            do.&rdquo; &ldquo;You&apos;ll just have to live with it.&rdquo;
            &ldquo;The pain is in your head.&rdquo;
          </p>
          <p>
            But you know something is wrong. You feel it every day: burning,
            pulling, stabbing pain; pain during sex or physical activity;
            inability to sit, walk, or exercise without discomfort;
            foreign-body sensation that won&apos;t go away.
          </p>
          <p className="font-bold">
            You&apos;re not imagining it — your symptoms are real, and the
            mesh may be the problem.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   S2 · The Mesh Trap
───────────────────────────────────────── */
function MeshTrapSection() {
  return (
    <section className="w-full bg-white pt-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[1016px] mx-auto flex flex-col gap-[var(--spacing-ml)]">
        <SectionTitle>
          <H2>The Mesh Trap: Why Most Doctors Can&apos;t Help</H2>
        </SectionTitle>
        <div className="flex flex-col gap-[24px] text-neutralgray-900 text-[length:var(--text-body-xl)] leading-[1.45]">
          <p>Here&apos;s what typically happens in most countries:</p>
          <p>You get hernia surgery. Mesh is inserted.</p>
          <p>
            Pain persists for several weeks or longer. Your doctor says
            it&apos;s normal — it&apos;ll go away.
          </p>
          <p>
            Months later, the pain persists or worsens. Your doctor says scans
            are normal — the mesh looks fine.
          </p>
          <p>
            Eventually, you find a specialist willing to remove the mesh. But
            they remove the old mesh… and insert new mesh.
          </p>
          <p>
            <strong>The result?&nbsp;</strong>If the mesh was causing your
            pain, replacing it with new mesh doesn&apos;t solve the problem —
            it restarts the cycle. Pain may persist, return, or new
            complications may develop.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   S3 · Our Approach
───────────────────────────────────────── */
function OurApproachSection() {
  return (
    <section className="w-full bg-white pt-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[1016px] mx-auto flex flex-col gap-[var(--spacing-ml)]">
        <SectionTitle>
          <H2>Our Approach: Complete Removal + Mesh-Free Reconstruction</H2>
        </SectionTitle>
        <div className="flex flex-col gap-[24px] text-neutralgray-900 text-[length:var(--text-body-xl)] leading-[1.4]">
          <p>
            We are one of the only centers worldwide that offers complete mesh
            removal (even embedded, scarred, or contracted mesh), true
            mesh-free reconstruction using the most effective and durable Kang
            Repair technique, and a guarantee that no new mesh will ever be
            inserted. This combination results in a near-zero recurrence rate
            — far better than mesh-to-mesh repairs.
          </p>
          <p>
            This approach is very rare globally, which is why patients from the
            USA, Europe, Japan, China, and the Middle East fly to Korea for
            treatment.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   S4 · Why Mesh Causes Problems
───────────────────────────────────────── */
function WhyMeshSection() {
  return (
    <section className="w-full bg-white pt-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[1016px] mx-auto flex flex-col gap-[var(--spacing-ml)]">
        <SectionTitle>
          <H2>Why Mesh Causes Problems</H2>
        </SectionTitle>
        <div className="flex flex-col gap-[24px] text-neutralgray-900 text-[length:var(--text-body-xl)] leading-[1.4]">
          <p>
            Mesh is a permanent foreign material inside your body. Even when
            labeled &ldquo;biocompatible,&rdquo; mesh can cause significant
            issues because your body may treat it as an invader.
          </p>
          <p>
            Common complications affect 10-15% of patients and include chronic
            pain, nerve entrapment, foreign-body sensation, mesh contraction,
            and pain during movement.
          </p>
          <p>
            Serious complications affect 1-5% of patients and include
            infection, mesh migration, adhesions to intestines, bladder, or
            vessels, mesh erosion, and perforation.
          </p>
          <p>
            If you&apos;re experiencing mesh complications, removal is often
            the only definitive solution.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   S5 · What Makes Our Center Different?
───────────────────────────────────────── */
const comparisonRows = [
  {
    typical: "Remove mesh → insert NEW mesh",
    gibbeum: "Remove mesh → Mesh-Free Kang Repair",
  },
  {
    typical: '"You\'ll need mesh for strength"',
    gibbeum: '"Your own tissue is stronger"',
  },
  {
    typical: "Limited removal experience",
    gibbeum: "100+ mesh removal patients",
  },
  {
    typical: "5-8% recurrence after mesh-to-mesh",
    gibbeum: (
      <>
        Near-zero recurrence after mesh-free
        <span className="text-blue-500">*</span>
      </>
    ),
  },
];

function ComparisonSection() {
  return (
    <section className="w-full bg-white pt-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[1016px] mx-auto flex flex-col gap-[var(--spacing-ml)]">
        <SectionTitle>
          <H2>What Makes Our Center Different?</H2>
        </SectionTitle>

        <div className="w-full bg-white rounded-[24px] overflow-hidden shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
          {/* Header */}
          <div className="flex border-b border-neutralgray-300">
            <div className="flex-1 bg-neutralgray-300 border-r border-neutralgray-400 flex flex-col items-center justify-center gap-[8px] p-[16px] md:p-[24px]">
              <Image
                src="/assets/about/icon-hospital.svg"
                alt=""
                width={40}
                height={40}
              />
              <p className="font-bold text-neutralgray-900 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px] text-center">
                Typical Hospital
              </p>
            </div>
            <div className="flex-1 bg-blue-700 flex flex-col items-center justify-center gap-[8px] px-[16px] md:px-[24px] py-[16px] md:py-[38px]">
              <div className="flex items-center gap-[6px]">
                <Image src="/assets/header/logo-mark1.svg" alt="" width={32} height={32} />
                <div>
                  <p className="font-bold text-white text-[18px] leading-[1.2]">GIBBEUM</p>
                  <p className="text-blue-200 text-[9px] font-medium leading-[1.2]">GENERAL HOSPITAL</p>
                </div>
              </div>
              <p className="font-semibold text-white text-[8px] tracking-[0.5px] text-center">
                KANG REPAIR HERNIA CENTER
              </p>
            </div>
          </div>

          {/* Data Rows */}
          {comparisonRows.map((row, i) => (
            <div key={i} className="flex border-b border-neutralgray-300 last:border-b-0">
              <div className="flex-1 bg-neutralgray-100 border-r border-neutralgray-300 flex gap-[8px] md:gap-[12px] items-start p-[16px] md:px-[24px] md:py-[20px]">
                <XIcon />
                <p className="flex-1 text-neutralgray-800 text-[length:var(--text-body-l)] leading-[1.45]">
                  {row.typical}
                </p>
              </div>
              <div className="flex-1 bg-blue-50/70 border-r border-blue-100 flex gap-[8px] md:gap-[12px] items-start p-[16px] md:px-[24px] md:py-[20px]">
                <CheckIcon />
                <p className="flex-1 font-bold text-blue-700 text-[length:var(--text-body-l)] leading-[1.25]">
                  {row.gibbeum}
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
   S6 · Can Your Mesh Be Removed?
───────────────────────────────────────── */
function CanBeRemovedSection() {
  return (
    <section className="w-full bg-white pt-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[1016px] mx-auto flex flex-col gap-[var(--spacing-ml)]">
        <SectionTitle>
          <H2>Can Your Mesh Be Removed?</H2>
        </SectionTitle>
        <p className="text-neutralgray-900 text-[length:var(--text-body-xl)] leading-[1.4]">
          In most cases, yes. We have successfully removed embedded mesh
          (stuck to surrounding tissue), scarred or contracted mesh, mesh
          from multiple previous surgeries, partially eroded or infected mesh,
          and all major mesh types including polypropylene, polyester,
          composite, and biological mesh.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   S7 · Mesh Removal Surgery
───────────────────────────────────────── */
const surgeryCards = [
  {
    label: "Duration",
    value: "1 - 1.5 hours",
    img: "/assets/mesh-removal/img-surgery-duration.jpg",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="#0047AB" strokeWidth="1.8" />
        <path d="M12 7v5l3 3" stroke="#0047AB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Approach",
    value: "complete mesh removal",
    img: "/assets/mesh-removal/img-surgery-approach.jpg",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#0047AB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Hospital Stay",
    value: "1 - 2 nights",
    img: "/assets/mesh-removal/img-hospital-stay.png",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="#0047AB" strokeWidth="1.8" />
        <path d="M16 2v4M8 2v4M3 10h18" stroke="#0047AB" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

function SurgerySection() {
  return (
    <section className="w-full bg-white pt-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[1016px] mx-auto flex flex-col gap-[var(--spacing-ml)]">
        <SectionTitle>
          <H2>Mesh Removal Surgery; What to Expect</H2>
        </SectionTitle>

        <div className="flex flex-col gap-[24px] text-neutralgray-900 text-[length:var(--text-body-xl)] leading-[1.4]">
          <p>
            The surgery takes 1-1.5 hours depending on how embedded the mesh
            is and the complexity of the case.
          </p>
          <p>
            Our approach involves careful dissection to remove as much mesh
            material as possible while striving to protect nerves and vessels
            and preserve healthy tissue. In most patients, we are able to
            remove nearly all of the mesh. The exception is rare cases where
            mesh is adhered to major blood vessels or other high-risk
            structures — in such situations, small remnants may be left to
            ensure safety. We then reconstruct using Kang Repair principles.
            Hospital stay is typically 1-2 nights.
          </p>
        </div>

        {/* Info Cards */}
        <div className="flex flex-col md:flex-row gap-[16px]">
          {surgeryCards.map((card) => (
            <div
              key={card.label}
              className="relative flex-1 bg-blue-50 rounded-[16px] overflow-visible flex flex-col pb-[var(--spacing-m)]"
            >
              {/* Photo */}
              <div className="relative h-[143px] rounded-t-[16px] overflow-hidden w-full shrink-0">
                <Image
                  src={card.img}
                  alt={card.label}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlapping icon badge */}
              <div className="absolute left-1/2 -translate-x-1/2 top-[119px] bg-white rounded-full shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] size-[48px] flex items-center justify-center z-10">
                {card.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-[4px] items-center px-[24px] pt-[40px] text-center">
                <p className="font-bold text-neutralgray-900 text-[26px] leading-[38px] w-full">
                  {card.label}
                </p>
                <p className="text-neutralgray-700 text-[length:var(--text-body-l)] leading-[1.45] w-full">
                  {card.value}
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
   S8 · Recovery Timeline
───────────────────────────────────────── */
const timelineItems = [
  { period: "Week 1",   desc: "Hospital stay 1-2 nights, light walking from Day 1" },
  { period: "Week 2",   desc: "Resume light daily activities, desk work, most foreign-body sensation gone" },
  { period: "Week 3-4", desc: "Light exercise, many patients report significant pain improvement" },
  { period: "Month 1",  desc: "Return to sports and heavy activity, full recovery" },
];

function RecoverySection() {
  return (
    <section className="w-full bg-white pt-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[1016px] mx-auto flex flex-col gap-[var(--spacing-ml)]">
        <SectionTitle>
          <H2>Recovery Timeline</H2>
        </SectionTitle>

        <div className="pl-[24px]">
          <div className="border-l-2 border-blue-200 pl-[42px] flex flex-col gap-[40px]">
            {timelineItems.map((item) => (
              <div key={item.period} className="relative flex flex-col gap-[8px]">
                <div className="absolute -left-[49px] top-[6px] bg-blue-700 rounded-full size-[16px] shadow-[0px_0px_0px_0px_white,0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
                <p className="font-bold text-blue-700 text-[length:var(--text-h5)] leading-[1.25] tracking-[-0.3px]">
                  {item.period}
                </p>
                <p className="text-neutralgray-800 text-[length:var(--text-body-l)] leading-[1.55] tracking-[-0.2px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-neutralgray-900 text-[length:var(--text-body-xl)] leading-[1.4]">
          <strong>Important:&nbsp;</strong>
          Recovery after mesh removal can take longer than primary hernia
          repair because we&apos;re dealing with scar tissue. But most
          patients say the recovery is worth it to finally be free of mesh
          pain.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   S9 · Expected Outcomes
───────────────────────────────────────── */
function OutcomesSection() {
  return (
    <section className="w-full bg-white pt-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[1016px] mx-auto flex flex-col gap-[var(--spacing-ml)]">
        <SectionTitle>
          <H2>Expected Outcomes</H2>
        </SectionTitle>
        <div className="flex flex-col gap-[24px] text-neutralgray-900 text-[length:var(--text-body-xl)] leading-[1.4]">
          <p>
            Most patients experience 70-100% pain reduction. The recurrence
            rate is near-zero after mesh-free reconstruction.
          </p>
          <p>
            Why not always 100% improvement? Sometimes nerve damage from the
            original mesh surgery is permanent, and chronic pain can have
            multiple causes. However, removing the source of irritation offers
            the best chance for relief.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   S10 · Real Patient Stories
───────────────────────────────────────── */
const stories = [
  {
    quote:
      "\u201cFive years of chronic pain after mesh surgery. Three doctors told me nothing was wrong, that it was \u2018all in my head.\u2019 After mesh removal and Kang Repair \u2014 I\u2019m finally pain-free. I have my life back.",
    name: "John, 47, USA",
    avatar: "/assets/kang-repair/avatar-james.png",
  },
  {
    quote:
      "\u201cNo surgeon in Japan would attempt mesh removal \u2014 they said it was \u2018too risky.\u2019 Dr. Kang removed my mesh completely and reconstructed without new mesh. The foreign-body sensation disappeared immediately.\u201d",
    name: "Yuki, 52, Japan",
    avatar: "/assets/kang-repair/avatar-michael.png",
  },
];

function StoriesSection() {
  return (
    <section className="w-full bg-white pt-[var(--spacing-xl)] pb-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[1016px] mx-auto flex flex-col gap-[var(--spacing-ml)]">
        <SectionTitle>
          <H2>Real Patients Stories</H2>
        </SectionTitle>

        <div className="flex flex-col md:flex-row gap-[24px]">
          {stories.map((s) => (
            <div
              key={s.name}
              className="flex-1 bg-blue-50 rounded-[16px] p-[32px] flex flex-col gap-[32px]"
            >
              <p
                className="font-semibold italic text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45] flex-1"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                {s.quote}
              </p>
              <div className="flex gap-[8px] items-center">
                <div className="relative size-[40px] rounded-full overflow-hidden shrink-0 border border-white/20">
                  <Image src={s.avatar} alt={s.name} fill className="object-cover" />
                </div>
                <p className="text-neutralgray-600 text-[length:var(--text-body-l)] leading-[1.45]">
                  — {s.name}
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
export default function MeshRemovalPage() {
  return (
    <>
      <Header />
      <PageHeader
        badge="Global Center for Mesh Complications"
        title="MESH REMOVAL"
        cta={{ text: "Get Free Consultation", useModal: true }}
        padding="compact"
      />
      <main>
        <FinallyFreeSection />
        <MeshTrapSection />
        <OurApproachSection />
        <WhyMeshSection />
        <ComparisonSection />
        <CanBeRemovedSection />
        <SurgerySection />
        <RecoverySection />
        <OutcomesSection />
        <StoriesSection />
      </main>
      <Footer />
    </>
  );
}
