import Image from "next/image";

interface FeatureCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <article className="flex flex-col justify-between gap-[60px] h-full p-4 bg-[#F0F0F0] rounded-md lg:p-6 lg:block">
      <header className="flex place-items-center gap-6 lg:flex-col lg:items-start lg:gap-0 lg:h-full lg:justify-between">
        <Image src={icon} alt="feature icon" width={60} height={60} className="lg:h-20 lg:w-20" />
        <h2 className="flex flex-wrap items-center [overflow-wrap:anywhere] text-2xl/7 lg:text-[32px]/9">
          {title}
        </h2>
      </header>
      <p className="text-sm tracking-[0.02em] lg:hidden">{description}</p>
    </article>
  );
};

export default FeatureCard;
