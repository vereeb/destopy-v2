import { vanguard } from '@/app/fonts';
import Image from 'next/image';
import {
	phaseOneFinishedListItems,
	phaseOnePlannedListItems,
	phaseThirdFinishedListItems,
	phaseThirdPlannedListItems,
	phaseTwoFinishedListItems,
	phaseTwoPlannedListItems,
	phaseZeroFinishedListItems,
	phaseZeroPlannedListItems
} from './roadmap.constants';

type RoadmapCardListProps = {
	title: string;
	listItems: string[];
};

const RoadmapCardPhaseItemList = ({
	title,
	listItems
}: RoadmapCardListProps) => (
	<div className="flex flex-col items-start justify-start mb-8">
		<p
			className={`${vanguard.className} font-bold text-xl md:text-3xl 3xl:text-6xl mb-4 gap-6 min-w-max`}
		>
			{title}
		</p>
		<ul className="max-w-max text-sm md:text-base 3xl:text-3xl">
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
	className = ''
}: RoadmapProps) => (
	<div
		className={`flex ${zIndex} relative ${
			index % 2 === 0
				? 'flex-row-reverse lg:flex-row transform -translate-y-48 lg:-translate-y-0'
				: 'flex-row-reverse'
		} items-start justify-start h-[60vh] w-full lg:w-[75vw] mb-12 lg:mb-24 ${className}`}
	>
		<div
			className={`${
				index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
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
					? 'from-dystopi-yellow to-dystopi-yellow/0'
					: 'from-dystopi-sand to-dystopi-sand/0'
			} w-10 md:w-20 3xl:w-40 h-[90vh] ${
				index % 2 === 0 ? 'mr-4 md:mr-16' : 'mr-4 md:ml-16'
			}`}
		>
			<p
				className={`flex min-w-max transform -translate-x-[28px] md:-translate-x-[54px] 3xl:-translate-x-[66px] translate-y-12 md:translate-y-24 3xl:translate-y-32 -rotate-90 ${vanguard.className} text-3xl md:text-6xl 3xl:text-8xl font-bold text-dystopi-black`}
			>
				PHASE 0{index}
			</p>
		</div>

		<div className="hidden lg:block relative w-full h-full">
			<Image
				src={`/images/${image}`}
				alt={`dystopi roadmap phase ${index}`}
				fill
				className="object-cover"
			/>
		</div>
	</div>
);

const RoadmapContainer = () => {
	return (
		<section className="w-full px-6 md:px-[10%] pb-16 relative">
			<Image
				src="/images/roadmap-bg.png"
				alt="dystopi game mechanism"
				fill
				className="object-cover relative -z-10 brightness-[0.35] lg:hidden"
			/>

			<h2
				className={`${vanguard.className} mb-64 lg:mb-24 2xl:mb-0 font-semibold text-7xl lg:text-9xl 3xl:text-[12rem] text-dystopi-yellow`}
			>
				ROADMAP
			</h2>

			<div className="mt-24 flex items-start flex-col justify-center">
				<div className="flex items-start flex-row lg:flex-col justify-center mb-24 lg:mb-8">
					<RoadmapCard
						finishedTitle="FINISHED"
						finishedListItems={phaseZeroFinishedListItems}
						plannedTitle="PLANNED"
						plannedListItems={phaseZeroPlannedListItems}
						index={0}
						zIndex="z-40"
						image="roadmap-phase-0-bg.jpg"
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
				<div className="flex items-start flex-row lg:flex-col justify-center">
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
