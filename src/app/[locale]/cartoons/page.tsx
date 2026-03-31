import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ConsultationButton from "@/components/ConsultationButton";
import CartoonGridClient from "@/components/CartoonGridClient";

/* ─────────────────────────────────────────
   Cartoon Card Data
───────────────────────────────────────── */
type CartoonCard = {
  icon: string;
  readTime: string;
  title: string;
  description: string;
};

const CARD_ICON = "/assets/cartoons/icon-card.svg";

const cartoonCards: CartoonCard[] = [
  {
    icon: CARD_ICON,
    readTime: "3 min read",
    title: "What is an Inguinal Hernia?",
    description:
      "Understanding the basics of inguinal hernias through simple illustrations",
  },
  {
    icon: CARD_ICON,
    readTime: "4 min read",
    title: "Mesh vs Mesh-Free Surgery",
    description:
      "Visual comparison of different hernia repair approaches",
  },
  {
    icon: CARD_ICON,
    readTime: "5 min read",
    title: "The Kang Repair Technique",
    description:
      "Step-by-step visual guide to our revolutionary technique",
  },
  {
    icon: CARD_ICON,
    readTime: "4 min read",
    title: "Mesh Complications Explained",
    description:
      "Understanding potential issues with mesh implants",
  },
  {
    icon: CARD_ICON,
    readTime: "3 min read",
    title: "Recovery Timeline",
    description:
      "What to expect during your recovery journey",
  },
  {
    icon: CARD_ICON,
    readTime: "4 min read",
    title: "Anatomy of the Groin",
    description:
      "Learn about the anatomy involved in hernia repairs",
  },
];

/* ─────────────────────────────────────────
   Section: Cartoon Cards Grid
───────────────────────────────────────── */
function CardsSection() {
  return (
    <section className="bg-white py-[var(--spacing-xl)] px-6 md:px-10 xl:px-[150px]">
      <div className="mx-auto" style={{ maxWidth: "1216px" }}>
        <CartoonGridClient cards={cartoonCards} />
      </div>
    </section>
  );
}

/* Figma asset URLs (valid 7 days from generation) */
const ICON_MEDICAL_RECORD =
  "https://www.figma.com/api/mcp/asset/036b858e-d03e-42d7-bb82-ab7dad593c70";
const ICON_STETHOSCOPE =
  "https://www.figma.com/api/mcp/asset/d2ebf98e-6473-4947-b3e6-9f43c5d45706";

/* ─────────────────────────────────────────
   Section: CTA Banner
───────────────────────────────────────── */
function CtaBannerSection() {
  return (
    <section className="px-6 md:px-10 xl:px-[150px] pb-[var(--spacing-xl)]">
      <div className="mx-auto" style={{ maxWidth: "1216px" }}>
        <div
          className="relative overflow-hidden rounded-[12px] px-6 py-10 xl:py-[48px] flex flex-col items-center gap-4 xl:gap-6 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(73,158,242,1) 0%, rgba(47,122,220,1) 100%)",
          }}
        >
          {/* Decorative left: medical record icon */}
          <div
            className="absolute left-[-17px] top-[50%] -translate-y-1/2 size-[272px] opacity-30 pointer-events-none select-none hidden md:block"
            style={{ transform: "translateY(-50%) rotate(21.08deg)" }}
          >
            <div className="relative size-full overflow-hidden">
              <div className="absolute inset-[9.38%_17.71%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ICON_MEDICAL_RECORD}
                  alt=""
                  className="absolute block max-w-none size-full"
                />
              </div>
            </div>
          </div>

          {/* Decorative right: stethoscope icon */}
          <div
            className="absolute right-0 top-[50%] -translate-y-1/2 size-[232px] opacity-30 pointer-events-none select-none hidden md:block"
            style={{ transform: "translateY(-50%) rotate(-30deg)" }}
          >
            <div className="relative size-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ICON_STETHOSCOPE}
                alt=""
                className="absolute block max-w-none size-full"
              />
            </div>
          </div>

          {/* Content */}
          <h3 className="font-bold text-neutralgray-50 text-[length:var(--text-h3)] leading-[1.25] text-center z-10">
            Ready to Start Your Journey?
          </h3>
          <p className="text-neutralgray-50 text-[length:var(--text-body-l)] leading-[1.55] text-center tracking-[-0.2px] z-10 max-w-[700px]">
            Schedule a free consultation to discuss your specific case with our
            medical team
          </p>

          <ConsultationButton />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function CartoonsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="CARTOONS"
          subtitle="The Mesh-Free Solution That Achieves the Impossible"
          padding="vtall"
        />
        <CardsSection />
        <CtaBannerSection />
      </main>
      <Footer />
    </>
  );
}
