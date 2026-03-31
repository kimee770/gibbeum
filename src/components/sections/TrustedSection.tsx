export default function TrustedSection() {
  return (
    <section className="bg-gradient-to-b from-[#d9ecff] to-[#bcddff] relative overflow-hidden xl:h-[706px]">
      {/* World map + pin (combined SVG) — absolute background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/sections/world-map-with-pin.svg"
          alt=""
          style={{ aspectRatio: "1691.16 / 627.063", height: "auto" }}
          className="map-world absolute left-1/2 -translate-x-1/2 max-w-none top-[32px] md:top-[39px] lg:top-[56px] xl:top-[72px]"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-[1516px] mx-auto px-6 md:px-10 xl:px-[144px] pt-[180px] pb-[var(--spacing-m)] md:pt-[220px] xl:pt-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 xl:gap-[80px] items-start">
          {/* Left — title + quote */}
          <div className="flex flex-col gap-10 xl:max-w-[563px]">
            <h2 className="font-lora font-bold text-blue-700 text-[32px] md:text-[40px] xl:text-[48px] leading-[1.25]">
              Trusted by Patients from 57 Countries Worldwide
            </h2>
            <div className="flex flex-col gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/sections/icon-quote.svg"
                alt=""
                className="w-9 h-9 xl:w-12 xl:h-12"
                style={{ transform: "scaleX(-1)" }}
              />
              <div className="flex flex-col gap-2">
                <blockquote className="font-inter font-bold text-neutralgray-900 text-[20px] xl:text-[24px] leading-[1.25] tracking-[-0.3px]">
                  My doctors said mesh-free reconstruction wasn&apos;t possible.
                  <br />
                  Dr. Kang proved them wrong.
                </blockquote>
                <p className="font-inter font-medium text-neutralgray-900 text-[18px] md:text-[20px] leading-[32px]">
                  — Ted, 52, USA
                </p>
              </div>
            </div>
          </div>

          {/* Right — stat cards */}
          <div className="flex flex-col gap-4 md:w-[343px] xl:w-[495px] xl:pt-[202px]">
            <div className="bg-gradient-to-b from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0)] border border-[#eef5fc] rounded-[12px] p-4 xl:p-6 shadow-[0px_6px_12px_0px_rgba(171,190,209,0.3)]">
              <div className="flex flex-col gap-2">
                <h3 className="font-inter font-bold text-blue-700 text-[20px] leading-[1.45] tracking-[-0.3px]">
                  Global Trust
                </h3>
                <p className="font-inter text-[#3d3d3d] text-[16px] xl:text-[18px] leading-[1.45]">
                  Patients from the USA, UK, Canada, Germany, Australia, Japan,
                  the Middle East and 50+ other nations have chosen Gibbeum
                  Hospital for mesh-free hernia repair.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-b from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0)] border border-[#dbedff] rounded-[12px] p-4 xl:p-6 shadow-[0px_6px_12px_0px_rgba(171,190,209,0.3)]">
              <div className="flex flex-col gap-2">
                <h3 className="font-inter font-bold text-blue-700 text-[20px] leading-[1.45] tracking-[-0.3px]">
                  High Volume
                </h3>
                <p className="font-inter text-[#3d3d3d] text-[16px] xl:text-[18px] leading-[1.45]">
                  5000+ hernia surgeries per year – far more than the tens to a
                  few hundred cases most surgeons perform annually.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
