import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "No Permanent Mesh",
    description:
      "Uses your own healthy tissue for reinforcement, with only a small amount of non-absorbable suture material remaining.",
    image: "/assets/sections/kang-card1.jpg",
    bg: "bg-white",
  },
  {
    title: "Tailored Repair",
    description:
      "Custom reconstruction for your specific defect (indirect, direct, or femoral hernia), instead of a one-size-fits-all mesh patch.",
    image: "/assets/sections/kang-card2.jpg",
    bg: "bg-white",
  },
  {
    title: "Stronger Tissue",
    description:
      "Utilizes strong, healthy muscle, fascia, and ligaments rather than weakened or stretched tissue, for durable long-term support.",
    image: "/assets/sections/kang-card3.jpg",
    bg: "bg-white",
  },
  {
    title: "Nerve and cremaster preservation",
    description:
      "Protects key groin nerves and preserves the cremaster muscle to help prevent the testicle from sagging after surgery.",
    image: "/assets/sections/kang-card4.jpg",
    bg: "bg-white",
  },
];

export default function KangRepairSection() {
  return (
    <section className="bg-white py-[var(--spacing-xl)]">
      <div className="max-w-[1516px] mx-auto px-6 md:px-10 xl:px-[144px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-[var(--spacing-ml)]">
          <h2 className="font-inter font-bold text-neutralgray-900 text-[32px] md:text-[38px] xl:text-[42px] leading-[1.25] tracking-[-0.5px]">
            Kang Repair®
          </h2>
          <p className="font-inter font-bold text-neutralgray-900 text-[20px] xl:text-[26px] leading-[1.35] tracking-[-0.5px]">
            Mesh-Free Hernia Repair That Lasts
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className={`${f.bg} rounded-[16px] overflow-hidden shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] flex flex-col transition-all duration-200 hover:bg-[#f5f7fa] hover:scale-[1.02] hover:shadow-[0px_8px_24px_rgba(0,0,0,0.12)] cursor-pointer`}
            >
              {/* Image */}
              <div className="aspect-[3/2] relative overflow-hidden shrink-0">
                <Image
                  src={f.image}
                  alt={f.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-[rgba(33,33,33,0.1)]" />
              </div>
              {/* Text — tablet: pt-6 px-4 pb-6 / desktop: pt-8 px-6 pb-8 */}
              <div className="flex flex-col gap-2 pt-3 px-3 pb-3 xl:pt-8 xl:px-6 xl:pb-8">
                <h3 className="font-inter font-bold text-blue-700 text-[16px] xl:text-[20px] leading-[1.45] tracking-[-0.3px]">
                  {f.title}
                </h3>
                <p className="font-inter text-neutralgray-900 text-[14px] xl:text-[16px] leading-[1.35]">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-[var(--spacing-ml)]">
          <Link
            href="/kang-repair"
            className="group inline-flex items-center gap-2 border-2 border-blue-700 text-blue-700 font-inter font-bold text-[20px] leading-[1.45] tracking-[-0.3px] px-6 py-4 rounded-full hover:bg-blue-700 hover:text-white transition-colors duration-200"
          >
            Learn More
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/sections/icon-arrow-blue.svg" alt="" className="w-6 h-6 group-hover:brightness-0 group-hover:invert transition-[filter] duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
