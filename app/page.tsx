import FeatureCarousel from "./components/featureCarousel";

export default function Home() {
  return (
    <>
      <div className="mb-10 gap-4 text-[#8977F3] text-[26px]/7 lg:columns-3 2xl:columns-4 lg:border-b lg:border-b-[#D1D1D1] lg:mb-6 lg:text-[40px]/[44px]">
        <p className="pb-2 border-b border-b-[#D1D1D1] lg:border-none">1.0</p>
        <p className="pt-2 lg:pt-0">Наши услуги</p>
      </div>
      <FeatureCarousel />
    </>
  );
}
