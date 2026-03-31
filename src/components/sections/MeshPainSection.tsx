import Link from "next/link";

const cards = [
  {
    icon: "/assets/sections/mesh-icon1.svg",
    title: "Complete Removal",
    description:
      "We remove even embedded or scarred mesh whenever it is safely possible.",
  },
  {
    icon: "/assets/sections/mesh-icon2.svg",
    title: "No New Mesh",
    description:
      "Reconstruction is performed strictly with Kang Repair – a mesh-free tissue repair instead of mesh-to-mesh re-operation.",
  },
  {
    icon: "/assets/sections/mesh-icon3.svg",
    title: "Superior Outcome",
    description:
      "Our mesh-free reconstruction after removal shows a near-zero recurrence rate in our cohort, with most patients reporting 70–100% pain improvement.",
  },
];

export default function MeshPainSection() {
  return (
    <section className="bg-neutralgray-100 py-[var(--spacing-xl)]">
      <div className="max-w-[1516px] mx-auto px-6 md:px-10 xl:px-[144px] flex flex-col items-center gap-[var(--spacing-ml)]">
        <h2 className="font-inter font-bold text-neutralgray-900 text-[32px] md:text-[38px] xl:text-[42px] leading-[1.25] tracking-[-0.5px] text-center">
          Finally Free from Mesh Pain
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-gradient-to-b from-[#0671e0] to-[#005ebf] border border-white/20 rounded-[12px] px-4 py-6 xl:p-8 flex flex-col gap-2 xl:gap-6 items-center text-center"
            >
              <div className="w-12 h-12 xl:w-16 xl:h-16 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.icon} alt="" className="w-6 h-6 xl:w-8 xl:h-8" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-inter font-bold text-white text-[20px] xl:text-[24px] leading-[1.25] tracking-[-0.3px]">
                  {card.title}
                </h3>
                <p className="font-inter text-[#fdfdfd] text-[14px] xl:text-[16px] leading-[1.35]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/mesh-removal"
          className="group inline-flex items-center gap-2 border-2 border-blue-700 text-blue-700 font-inter font-bold text-[20px] leading-[1.45] tracking-[-0.3px] px-6 py-4 rounded-full hover:bg-blue-700 hover:text-white transition-colors duration-200"
        >
          Learn More
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/sections/icon-arrow-blue.svg" alt="" className="w-5 h-5 group-hover:brightness-0 group-hover:invert transition-[filter] duration-200" />
        </Link>
      </div>
    </section>
  );
}
