import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FaqAccordion, { FaqCategory } from "@/components/FaqAccordion";

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

/* ─────────────────────────────────────────
   FAQ Data
───────────────────────────────────────── */
const faqData: FaqCategory[] = [
  {
    id: "kang-repair",
    label: "Kang Repair",
    questions: [
      {
        q: "Is Kang Repair as strong as mesh surgery?",
        a: "Kang Repair is stronger when judged by the metric that matters most: recurrence rate. Mesh surgery has a recurrence rate of 2–10%, while Kang Repair has a recurrence rate of less than 0.3%.",
      },
      {
        q: "My doctor said mesh-free surgery has high recurrence rates.",
        a: "Your doctor is correct — for old mesh-free techniques (10–30% recurrence). But Kang Repair achieves <0.3%, lower than any documented technique. Your doctor hasn't seen these results because this level of outcome doesn't exist in typical surgical practice.",
      },
      {
        q: 'What if my hernia is "too large" for mesh-free repair?',
        a: "In our experience, size has not been a limitation. The hernia sac can grow enormous, but the defect doesn't grow proportionally — it's like a balloon where the opening stays the same. We've repaired hernias of all sizes, including very large bilateral cases.",
      },
      {
        q: "Can you repair my recurrent hernia?",
        a: "Yes — recurrent hernias are our specialty. We've treated recurrences after non-mesh repair, laparoscopic mesh, open mesh, and patients who've recurred multiple times.",
      },
      {
        q: "How long until I can exercise?",
        a: "Week 1: Light walking, desk work. Week 2: Jogging and swimming. Week 3+: Listen to your body — return to any activity that feels comfortable, including sports and heavy exercise.",
      },
    ],
  },
  {
    id: "mesh-removal",
    label: "Mesh Removal",
    questions: [
      {
        q: "My scans look normal, but I'm still in pain. Can the mesh still be the problem?",
        a: "Yes — imaging cannot detect mesh-related nerve damage, inflammatory reactions, or tissue contraction. Scans showing 'normal' mesh do not rule out mesh as the source of pain. A clinical assessment is required.",
      },
      {
        q: "I had mesh inserted years ago. Is it too late to remove it?",
        a: "It is never too late. We have successfully removed mesh implanted 10, 15, even 20+ years ago. Older mesh may be more integrated, but our team has extensive experience with complex explant cases.",
      },
      {
        q: "What if my pain doesn't completely go away after removal?",
        a: "Most patients experience significant relief after mesh removal. In cases with long-standing nerve damage, full resolution may take time. We will provide a realistic assessment of expected outcomes before surgery.",
      },
      {
        q: "Why should I travel to Korea instead of finding a local surgeon?",
        a: "Mesh removal is a highly specialized procedure. Most surgeons perform only a handful of these cases per year — Dr. Kang performs hundreds. The volume, technique, and outcomes at Gibbeum are not replicated elsewhere.",
      },
    ],
  },
  {
    id: "about-surgery",
    label: "About Surgery",
    questions: [
      {
        q: "Am I too old for surgery?",
        a: "Age alone is not a contraindication. We have successfully treated patients in their 80s. The key factors are overall health, cardiac function, and anesthesia tolerance — all assessed during your pre-operative consultation.",
      },
      {
        q: "What if I have other health conditions (diabetes, heart disease)?",
        a: "We work with patients with managed chronic conditions regularly. A full pre-operative evaluation is required, and our team coordinates with your existing physicians to ensure safe surgical planning.",
      },
      {
        q: "What if complications occur after I return home?",
        a: "We provide 24/7 post-operative support via WhatsApp and email. For any complication, we provide immediate guidance and coordinate with local physicians if needed. Serious complications requiring intervention are rare but fully supported.",
      },
      {
        q: "Book the Post-Op Thursday: Global Hernia Recovery Session",
        a: "Every Thursday at 8:00 AM KST, Dr. Kang hosts a group video session for post-operative patients. Email us your questions in advance and we will address them live. This is included for all surgical patients.",
      },
    ],
  },
  {
    id: "travel-logistics",
    label: "Travel & Logistics",
    questions: [
      {
        q: "When can I fly back home after surgery?",
        a: "Most patients fly home 7–10 days after surgery for simple hernia repair, or 10–14 days after complex mesh removal. Long-haul flights (over 10 hours) may require an additional day or two of monitoring.",
      },
      {
        q: "Do I need a visa to visit Korea?",
        a: "Most Western countries can enter South Korea visa-free for up to 90 days. Patients from other regions may require a medical visa. We can provide official documentation to support your visa application if needed.",
      },
      {
        q: "Can I travel alone?",
        a: "Yes — many of our international patients travel alone. Our patient coordinator will arrange airport pickup, hotel recommendations, hospital escorts, and daily check-ins throughout your stay.",
      },
      {
        q: "What if I don't speak Korean?",
        a: "All patient-facing communication at Gibbeum International is conducted in English. Our coordinator, nurses, and Dr. Kang all communicate in English. Translation is available for other languages upon request.",
      },
      {
        q: "Is Korea safe?",
        a: "South Korea consistently ranks among the safest countries in the world. Seoul has low crime rates, excellent public infrastructure, and world-class medical facilities. Most patients feel very comfortable traveling here.",
      },
      {
        q: "What's the best time to visit?",
        a: "Korea is beautiful year-round. Spring (April–May) and autumn (September–October) offer the most pleasant weather. Summer is warm but humid; winter is cold but dry. Surgery scheduling is based on your availability, not season.",
      },
    ],
  },
  {
    id: "cost-payment",
    label: "Cost & Payment",
    questions: [
      {
        q: "How much does surgery cost?",
        a: "Kang Repair starts from $5,000 (one side) / $9,000 (both sides). Mesh removal starts from $10,000 / $18,000. The all-inclusive package covers surgery, hospital stay, meals, and airport transfers. A detailed quote is provided after your consultation.",
      },
      {
        q: "How do I pay?",
        a: "We accept Visa, Mastercard, American Express, and cash (USD or KRW). Payment is settled at the time of discharge. A deposit is required to confirm your surgical date.",
      },
      {
        q: "Will insurance cover this?",
        a: "Some international health insurance plans and medical assistance companies (AXA, Allianz, BUPA) cover treatment at Gibbeum. We provide all necessary documentation for reimbursement claims. Contact your insurer before traveling.",
      },
      {
        q: "What if I need to cancel?",
        a: "We understand that circumstances change. Cancellations made more than 14 days before surgery receive a full deposit refund. For cancellations within 14 days, please contact us — we handle each case individually with compassion.",
      },
    ],
  },
];

/* ─────────────────────────────────────────
   Contact icon box helper
───────────────────────────────────────── */
function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[rgba(0,71,171,0.1)] rounded-[8px] size-12 shrink-0 flex items-start pt-3 px-3">
      {children}
    </div>
  );
}

function EmailIcon() {
  return (
    <IconBox>
      <div className="relative size-6 overflow-hidden">
        <div className="absolute inset-[29.17%_8.33%_45.84%_8.33%]">
          <div className="absolute inset-[-16.68%_-5%_-16.67%_-5%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" className="block max-w-none size-full" src="/assets/faq/icon-email-v1.svg" />
          </div>
        </div>
        <div className="absolute inset-[16.67%_8.33%]">
          <div className="absolute inset-[-6.25%_-5%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" className="block max-w-none size-full" src="/assets/faq/icon-email-v2.svg" />
          </div>
        </div>
      </div>
    </IconBox>
  );
}

function PhoneIcon() {
  return (
    <IconBox>
      <div className="relative size-6 overflow-hidden">
        <div className="absolute inset-[8.33%]">
          <div className="absolute inset-[-5%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" className="block max-w-none size-full" src="/assets/faq/icon-phone.svg" />
          </div>
        </div>
      </div>
    </IconBox>
  );
}

function WhatsAppIcon() {
  return (
    <IconBox>
      <div className="relative size-6 overflow-hidden">
        <div className="absolute inset-[8.33%]">
          <div className="absolute inset-[-5%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="" className="block max-w-none size-full" src="/assets/faq/icon-whatsapp.svg" />
          </div>
        </div>
      </div>
    </IconBox>
  );
}

/* ─────────────────────────────────────────
   Sections
───────────────────────────────────────── */
function FaqSection() {
  return (
    <section className="bg-white py-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[856px] mx-auto flex flex-col gap-8 xl:gap-14">
        <div className="flex flex-col gap-8 items-center">
          <div className="bg-blue-700 h-[9px] w-[184px] shrink-0" />
          <h2 className="font-bold text-blue-700 text-[length:var(--text-h2)] leading-[1.25] tracking-[-0.5px] text-center">
            Frequently Asked Questions
          </h2>
        </div>
        <FaqAccordion categories={faqData} />
      </div>
    </section>
  );
}

function GetInTouchSection() {
  return (
    <section className="bg-neutralgray-100 py-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[1216px] mx-auto flex flex-col gap-8 xl:gap-16">
        <div className="flex flex-col gap-8 items-center">
          <div className="bg-blue-600 h-[9px] w-[184px] shrink-0" />
          <h2 className="font-bold text-blue-700 text-[length:var(--text-h2)] leading-[1.25] tracking-[-0.5px] text-center">
            Get in Touch
          </h2>
          <p className="font-bold text-neutralgray-900 text-[length:var(--text-h4)] leading-[1.35] tracking-[-0.5px] text-center">
            We are here to help you. Reach out to us via WhatsApp, email, or phone.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-12">
          {/* Left: contact cards */}
          <div className="flex flex-col gap-6">
            {/* Email */}
            <div className="bg-neutralgray-50 border border-neutralgray-300 rounded-[16px] p-6 flex gap-4 items-start shadow-[0px_4px_8px_0px_rgba(171,190,209,0.4)]">
              <EmailIcon />
              <div className="flex flex-col gap-2">
                <p className="font-bold text-blue-700 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">Email</p>
                <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45] break-all">
                  internationalcenter@gibbeum.com
                </p>
                <p className="text-neutralgray-600 text-[length:var(--text-body-l)] leading-[1.45]">
                  For general inquiries and documents
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-neutralgray-50 border border-neutralgray-300 rounded-[16px] p-6 flex gap-4 items-start shadow-[0px_4px_8px_0px_rgba(171,190,209,0.4)]">
              <PhoneIcon />
              <div className="flex flex-col gap-2">
                <p className="font-bold text-blue-700 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">Phone</p>
                <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                  +82-2-570-1479
                </p>
                <p className="text-neutralgray-600 text-[length:var(--text-body-l)] leading-[1.45]">
                  (office hours: 8 AM - 5 PM KST, Mon to Fri)
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-neutralgray-50 border border-neutralgray-300 rounded-[16px] p-6 flex gap-4 items-start shadow-[0px_4px_8px_0px_rgba(171,190,209,0.4)]">
              <WhatsAppIcon />
              <div className="flex flex-col gap-2 flex-1">
                <p className="font-bold text-blue-700 text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px]">WhatsApp</p>
                <p className="text-neutralgray-900 text-[length:var(--text-body-l)] leading-[1.45]">
                  +82-10-9947-9530
                </p>
              </div>
              <div className="bg-neutralgray-50 border border-neutralgray-50 rounded-[8px] p-[5px] shrink-0">
                <Image
                  src="/assets/faq/whatsapp-qr.png"
                  alt="WhatsApp QR Code"
                  width={86}
                  height={86}
                  className="rounded-[4px]"
                />
              </div>
            </div>
          </div>

          {/* Right: response time card */}
          <div className="bg-white border-2 border-blue-700 rounded-[12px] p-6 flex flex-col gap-4 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
            {/* Response time header */}
            <div className="bg-blue-700 rounded-[8px] p-4 flex flex-col items-center gap-1">
              <div className="relative size-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" className="block size-full object-contain" src="/assets/faq/icon-clock.svg" />
              </div>
              <p className="font-bold text-neutralgray-50 text-[length:var(--text-h5)] leading-[1.25] tracking-[-0.3px] text-center">
                RESPONSE TIME
              </p>
              <p className="text-neutralgray-50 text-[length:var(--text-body-l)] leading-[1.4] text-center">
                Within 24 hours (usually much faster)
              </p>
            </div>

            {/* Pre-Op Tuesday */}
            <div className="bg-[rgba(0,71,171,0.05)] rounded-[8px] px-6 py-4 flex flex-col gap-2">
              <p className="font-bold text-blue-700 text-[length:var(--text-body-l)] leading-[1.45]">
                [Pre-Op Tuesday] Global Hernia Consultation Session
              </p>
              <p className="text-neutralgray-600 text-[length:var(--text-body-l)] leading-[1.45]">
                Join our one-to-many Zoom meeting (at 8 AM, KST) where Dr. Kang addresses questions from prospective patients.
              </p>
            </div>

            {/* Post-Op Thursday */}
            <div className="bg-[rgba(0,71,171,0.05)] rounded-[8px] px-6 py-4 flex flex-col gap-2">
              <p className="font-bold text-blue-700 text-[length:var(--text-body-l)] leading-[1.45]">
                [Post-Op Thursday] Global Hernia Recovery Session
              </p>
              <p className="text-neutralgray-600 text-[length:var(--text-body-l)] leading-[1.45]">
                Email us any questions or concerns about your recovery. We&apos;ll respond with guidance, and if we determine a video consultation is needed, we&apos;ll schedule a 5-minute Zoom call on Thursday at 8:00 AM KST.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section className="bg-blue-700 py-[var(--spacing-xl)] px-6 md:px-10 xl:px-[144px]">
      <div className="max-w-[1216px] mx-auto flex flex-col gap-8 xl:gap-14">
        {/* Title */}
        <div className="flex flex-col gap-8 items-center">
          <div className="bg-white h-[9px] w-[184px] shrink-0" />
          <h2 className="font-bold text-white text-[length:var(--text-h2)] leading-[1.25] tracking-[-0.5px] text-center">
            Location
          </h2>
        </div>

        {/* Info(left) + Map(right) 2-col on desktop */}
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-10 items-start">
          {/* Hospital info — LEFT */}
          <div className="flex flex-col gap-5 w-full xl:w-[280px] xl:shrink-0">
            <h3 className="font-bold text-white text-[24px] leading-[32px]">
              Gibbeum Hospital
            </h3>
            <p className="text-white text-[length:var(--text-body-l)] leading-[1.55] tracking-[-0.2px]">
              4 Seochojungang-ro, Seocho District,<br />
              Seoul, South Korea
            </p>
            <a
              href="https://maps.app.goo.gl/9Ld6WzJ6c9CTn5pq8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center xl:inline-flex bg-[#086fed] hover:bg-blue-500 text-white font-bold text-[length:var(--text-h6)] leading-[1.45] tracking-[-0.3px] rounded-[8px] px-6 py-4 transition-colors w-full xl:w-auto"
            >
              Open in Google Maps
            </a>
          </div>

          {/* Map — RIGHT */}
          <div className="rounded-[16px] overflow-hidden w-full aspect-square xl:w-[752px] xl:h-[561px] xl:aspect-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.0707434026554!2d127.01546431241664!3d37.4826569288154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca14e115f49b5%3A0x3636a121ba64d7b7!2z6riw7IGo67OR7JuQIEdpYmJldW0gR2VuZXJhbCBIb3NwaXRhbA!5e0!3m2!1sko!2skr!4v1774761667845!5m2!1sko!2skr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gibbeum Hospital Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="FAQ & CONTACT"
          subtitle="Everything you need to know about your surgery and travel to Korea."
          padding="xtall"
        />
        <FaqSection />
        <GetInTouchSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}
