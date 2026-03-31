import Link from "next/link";

const steps = [
  {
    icon: "/assets/sections/journey-icon1.svg",
    title: "Free Pre-Check",
    description:
      "Online consultation and record review before you fly, so you know whether Kang Repair or mesh removal is necessary for you.",
    href: "/screening",
  },
  {
    icon: "/assets/sections/journey-icon2.svg",
    title: "Round-trip airport transfer",
    description:
      "Airport pickup on arrival and drop-off at departure are both included in the surgical package for international patients.",
    href: "/patient",
  },
  {
    icon: "/assets/sections/journey-icon3.svg",
    title: "Easy Recovery",
    description:
      "No external stitches to remove; the skin is sealed with medical glue, and many patients feel comfortable enough for light city walk-arounds within 3–4 days after surgery.",
    href: "/patient",
  },
  {
    icon: "/assets/sections/journey-icon4.svg",
    title: "Bonus Value",
    description:
      "International patients receive up to 30% discount on optional premium health screening while in Korea.",
    href: "/screening",
  },
];

export default function JourneySection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1516px] mx-auto w-full flex flex-col items-center px-8 py-10 gap-8 md:p-[var(--spacing-ml)] md:gap-[var(--spacing-m)] lg:px-[var(--spacing-ml)] lg:py-[var(--spacing-xl)] lg:gap-[var(--spacing-ml)] xl:px-[130px] xl:py-[var(--spacing-xl)] xl:gap-[56px]">
        <h2 className="font-inter font-bold text-neutralgray-900 text-[32px] md:text-[38px] xl:text-[42px] leading-[1.25] tracking-[-0.5px] text-center">
          Your Journey from Consultation to Recovery
        </h2>

        {/* Cards — horizontal swipe on mobile/tablet, 4-col grid on xl */}
        <div className="w-full overflow-x-auto xl:overflow-visible">
          <div className="flex gap-4 snap-x snap-mandatory xl:snap-none xl:grid xl:grid-cols-4 xl:gap-6">
            {steps.map((step) => (
              <div
                key={step.title}
                className="shrink-0 snap-start w-[226px] md:w-[272px] xl:w-auto xl:shrink border border-[#fdfdfd] rounded-[200px] flex flex-col items-center px-4 py-10 gap-4 transition-transform duration-200 hover:scale-[1.05] active:scale-[1.02] cursor-pointer"
                style={{
                  backgroundImage:
                    "linear-gradient(124.7deg, #f9fafb 0%, #f3f4f6 100%)",
                }}
              >
                {/* Icon circle */}
                <div className="w-12 h-12 xl:w-16 xl:h-16 rounded-full bg-gradient-to-t from-[#0064e1] to-[#26b7ff] flex items-center justify-center shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={step.icon} alt="" className="w-6 h-6 xl:w-8 xl:h-8" />
                </div>

                <h3 className="font-inter font-bold text-blue-700 text-[20px] md:text-[24px] leading-[32px] text-center">
                  {step.title}
                </h3>

                <p className="font-inter text-[#3d3d3d] text-[16px] leading-[24px] text-center tracking-[-0.3px] flex-1">
                  {step.description}
                </p>

                <Link
                  href={step.href}
                  className="group inline-flex items-center gap-1 border-2 border-blue-700 text-blue-700 font-inter font-bold text-[14px] md:text-[16px] leading-[24px] px-4 py-2 rounded-full hover:bg-blue-700 hover:text-white transition-colors duration-200"
                >
                  More
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/sections/icon-arrow-blue.svg"
                    alt=""
                    className="w-5 h-5 group-hover:brightness-0 group-hover:invert transition-[filter] duration-200"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
