"use client";
import { Carousel, CarouselBullets, CarouselContent, CarouselItem } from "./carousel";
import FeatureCard from "./featureCard";
import dynamic from "next/dynamic";
const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false,
});

const features = [
  {
    title: "Анализ текущего состояния карьеры",
    description:
      "Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.",
    icon: "/feature-icons/analysis.svg",
  },
  {
    title: "Сопроводительные письма и резюме",
    description:
      "Поможем сформировать профессиональный портфель, которые выделит вас среди других кандидатов.",
    icon: "/feature-icons/covering.svg",
  },
  {
    title: "Поиск работы",
    description: "Определим вашу карьерную цель и разработаем стратегию для трудоустройства.",
    icon: "/feature-icons/search.svg",
  },
  {
    title: "Тренинг по презентации личного бренда",
    description: "Подсветим сильные стороны и грамотно выстроим самопрезентацию.",
    icon: "/feature-icons/training.svg",
  },
  {
    title: "Подготовка к собеседованию",
    description: "Научим говорить о себе кратко, ярко и профессионально.",
    icon: "/feature-icons/preparation.svg",
  },
  {
    title: "Рекомендация по базе STEMPS Career",
    description: "Поможем встретиться соискателю и работодателю.",
    icon: "/feature-icons/recommendation.svg",
  },
];

const FeatureCarousel = () => {
  return (
    <Carousel opts={{ inViewThreshold: 0.48 }}>
      <MediaQuery maxWidth={1536}>
        <CarouselBullets className="mb-6" />
      </MediaQuery>
      <CarouselContent className="select-none pb-2 px-1">
        {features.map((feature, i) => (
          <CarouselItem
            className="basis-full sm:basis-1/2 lg:basis-1/3 2xl:basis-1/4 pl-4  lg:h-64"
            key={i}
          >
            <FeatureCard {...feature} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default FeatureCarousel;
