import { vanguard } from "@/app/fonts";
import Image from "next/image";
import {
  phaseOneFinishedListItems,
  phaseOnePlannedListItems,
  phaseThirdFinishedListItems,
  phaseThirdPlannedListItems,
  phaseTwoFinishedListItems,
  phaseTwoPlannedListItems,
  phaseZeroFinishedListItems,
  phaseZeroPlannedListItems,
} from "./roadmap.constants";

type RoadmapCardListProps = {
  title: string;
  listItems: string[];
};

const RoadmapCardPhaseItemList = ({
  title,
  listItems,
}: RoadmapCardListProps) => (
  <div className="mb-8 flex flex-col items-start justify-start">
    <p
      className={`${vanguard.className} mb-4 min-w-max gap-6 text-xl font-bold md:text-3xl 4xl:text-6xl`}
    >
      {title}
    </p>
    <ul className="max-w-max text-sm md:text-base 4xl:text-3xl">
      {listItems.map((listItem: string, index: number) => (
        <li key={index}>{listItem}</li>
      ))}
    </ul>
  </div>
);

type RoadmapProps = {
  finishedListItems: string[];
  plannedListItems: string[];
  index: number;
  zIndex: string;
  finishedTitle: string;
  plannedTitle: string;
  image: string;
  className?: string;
};

const RoadmapCard = ({
  finishedTitle,
  plannedTitle,
  finishedListItems,
  plannedListItems,
  index,
  zIndex,
  image,
  className = "",
}: RoadmapProps) => (
  <div
    className={`flex ${zIndex} relative ${
      index % 2 === 0
        ? "-translate-y-48 transform flex-row-reverse lg:-translate-y-0 lg:flex-row"
        : "flex-row-reverse"
    } mb-12 h-[60vh] w-full items-start justify-start lg:mb-24 lg:w-[75vw] ${className}`}
  >
    <div
      className={`${
        index % 2 === 0 ? "md:mr-8" : "md:ml-8"
      } flex flex-col items-start justify-start`}
    >
      <RoadmapCardPhaseItemList
        listItems={finishedListItems}
        title={finishedTitle}
      />
      <RoadmapCardPhaseItemList
        listItems={plannedListItems}
        title={plannedTitle}
      />
    </div>

    <div
      className={`bg-gradient-to-b ${
        index % 2 === 0
          ? "from-dystopi-yellow to-dystopi-yellow/0"
          : "from-dystopi-sand to-dystopi-sand/0"
      } h-[90vh] w-10 md:w-20 4xl:w-40 ${
        index % 2 === 0 ? "mr-4 md:mr-16" : "mr-4 md:ml-16"
      }`}
    >
      <p
        className={`flex min-w-max -translate-x-[28px] translate-y-12 -rotate-90 transform md:-translate-x-[54px] md:translate-y-24 4xl:-translate-x-[66px] 4xl:translate-y-32 ${vanguard.className} text-3xl font-bold text-dystopi-black md:text-6xl 4xl:text-8xl`}
      >
        PHASE 0{index}
      </p>
    </div>

    <div className="relative hidden h-full w-full lg:block">
      <Image
        src={`/images/${image}`}
        alt={`dystopi roadmap phase ${index}`}
        fill
        className="object-cover object-right"
      />
    </div>
  </div>
);

const RoadmapContainer = () => {
  return (
    <section className="relative w-full px-6 pb-16 md:px-[10%]">
      <Image
        src="/images/roadmap-bg.png"
        alt="dystopi game mechanism"
        fill
        className="relative -z-10 object-cover brightness-[0.35] lg:hidden"
      />

      <h2
        className={`${vanguard.className} mb-64 text-7xl font-semibold text-dystopi-yellow lg:mb-24 lg:text-9xl 2xl:mb-0 4xl:text-[12rem]`}
      >
        ROADMAP
      </h2>

      <div className="mt-24 flex flex-col items-start justify-center">
        <div className="mb-24 flex flex-row items-start justify-center lg:mb-8 lg:flex-col">
          <RoadmapCard
            finishedTitle="FINISHED"
            finishedListItems={phaseZeroFinishedListItems}
            plannedTitle="PLANNED"
            plannedListItems={phaseZeroPlannedListItems}
            index={0}
            zIndex="z-40"
            image="roadmap-phase-0-bg.png"
          />
          <RoadmapCard
            finishedTitle="IN PROGRESS"
            finishedListItems={phaseOneFinishedListItems}
            plannedTitle="PLANNED"
            plannedListItems={phaseOnePlannedListItems}
            index={1}
            zIndex="z-30"
            image="roadmap-phase-1-bg.png"
          />
        </div>
        <div className="flex flex-row items-start justify-center lg:flex-col">
          <RoadmapCard
            finishedTitle="FINISHED"
            finishedListItems={phaseTwoFinishedListItems}
            plannedTitle="IN PROGRESS"
            plannedListItems={phaseTwoPlannedListItems}
            index={2}
            zIndex="z-20"
            image="roadmap-phase-2-bg.png"
            className="translate-x-1 sm:translate-x-6 lg:translate-x-0"
          />
          <RoadmapCard
            finishedTitle="PLANNED"
            finishedListItems={phaseThirdFinishedListItems}
            plannedTitle="IN PROGRESS"
            plannedListItems={phaseThirdPlannedListItems}
            index={3}
            zIndex="z-10"
            image="game-mechanism-bg.jpg"
            className="translate-x-2 sm:translate-x-5 lg:translate-x-0"
          />
        </div>
      </div>
    </section>
  );
};

export default RoadmapContainer;
