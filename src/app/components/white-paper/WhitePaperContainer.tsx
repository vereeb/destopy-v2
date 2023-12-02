import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineArrowForward } from 'react-icons/md';
import { vanguard } from '@/app/fonts';

const WhitePaperContainer = () => {
	return (
		<section
			aria-labelledby="white-paper-section"
			className="w-full relative z-10 grid grid-cols-1 xl:grid-cols-2 py-20"
		>
			<div className="relative mb-20 xl:mb-0 px-[8%] 3xl:px-[20%] pt-28 3xl:pt-56">
				<Image
					className="object-cover min-h-[100vh] -z-10 filter brightness-50"
					src="/images/whitepaper-bg.png"
					fill
					alt="dystopi city"
				/>
				<h2
					className={`${vanguard.className} text-7xl lg:text-9xl 3xl:text-[12rem] mb-56 lg:mb-96`}
					id="white-paper-section"
				>
					WHITEPAPER
				</h2>
				<p className="mb-8 max-w-md 3xl:max-w-2xl text-sm md:text-base 3xl:text-3xl">
					The vision of Dystopi&apos;s creators is to create a new
					level of innovation in the gaming industry through the
					integration of blockchain technology and NFTs. The mission
					is to offer players the opportunity to play, earn and
					collect unique digital assets, while engaging in a battle
					against alien invaders.
				</p>
				<Link className="font-semibold 3xl:text-3xl" href="/">
					/ CHECK WHITEPAPER /
				</Link>
			</div>

			<div className="min-h-[100vh] w-full px-8 md:px-20 pt-28 bg-dystopi-sand text-dystopi-black flex items-center">
				<article className="mx-auto flex flex-col items-start justify-start">
					<div className="3xl:min-w-[40vw] flex flex-wrap items-end justify-start gap-4 border-b-2 mb-4 pb-4 w-full">
						<h3
							className={`${vanguard.className} text-3xl md:text-5xl 3xl:text-8xl text-dystopi-black font-semibold`}
						>
							WHAT IS DYSTOPI
						</h3>
						<p className="py-0.5 px-4 rounded-full border text-sm md:text-base 3xl:text-3xl">
							#plot
						</p>
						<Link
							href="/"
							className="mr-0 ml-auto 3xl:transform 3xl:scale-[240%]"
						>
							<MdOutlineArrowForward
								size={24}
								className="transform rotate-45"
							/>
						</Link>
					</div>
					<div className="3xl:min-w-[40vw] flex flex-wrap items-end justify-start gap-4 border-b-2 mb-4 pb-4 w-full">
						<h3
							className={`${vanguard.className} text-3xl md:text-5xl 3xl:text-8xl text-dystopi-black font-semibold`}
						>
							GAME PILLARS
						</h3>
						<p className="py-0.5 px-4 rounded-full border text-sm md:text-base 3xl:text-3xl">
							#blockchain
						</p>
						<p className="py-0.5 px-4 rounded-full border text-sm md:text-base 3xl:text-3xl">
							#nft
						</p>
						<p className="py-0.5 px-4 rounded-full border text-sm md:text-base 3xl:text-3xl">
							#game_mechanics
						</p>
						<Link
							href="/"
							className="mr-0 ml-auto 3xl:transform 3xl:scale-[240%]"
						>
							<MdOutlineArrowForward
								size={24}
								className="transform rotate-45"
							/>
						</Link>
					</div>
					<div className="3xl:min-w-[40vw] flex flex-wrap items-end justify-start gap-4 border-b-2 mb-4 pb-4 w-full">
						<h3
							className={`${vanguard.className} text-3xl md:text-5xl 3xl:text-8xl text-dystopi-black font-semibold`}
						>
							TOKENOMICS
						</h3>
						<p className="py-0.5 px-4 rounded-full border text-sm md:text-base 3xl:text-3xl">
							#dyseum
						</p>
						<Link
							href="/"
							className="mr-0 ml-auto 3xl:transform 3xl:scale-[240%]"
						>
							<MdOutlineArrowForward
								size={24}
								className="transform rotate-45"
							/>
						</Link>
					</div>
					<div className="3xl:min-w-[40vw] flex flex-wrap items-end justify-start gap-4 border-b-2 mb-4 pb-4 w-full">
						<h3
							className={`${vanguard.className} max-w-fit text-3xl md:text-5xl 3xl:text-8xl text-dystopi-black font-semibold`}
						>
							MARKET RESEARCH
						</h3>
						<p className="py-0.5 px-4 rounded-full border text-sm md:text-base 3xl:text-3xl">
							#esport
						</p>
						<p className="py-0.5 px-4 rounded-full border text-sm md:text-base 3xl:text-3xl">
							#blockchain_games
						</p>
						<p className="py-0.5 px-4 rounded-full border text-sm md:text-base 3xl:text-3xl">
							#target
						</p>
						<Link
							href="/"
							className="mr-0 ml-auto 3xl:transform 3xl:scale-[240%]"
						>
							<MdOutlineArrowForward
								size={24}
								className="transform rotate-45"
							/>
						</Link>
					</div>
					<div className="3xl:min-w-[40vw] flex flex-wrap items-end justify-start gap-4 border-b-2 mb-4 pb-4 w-full">
						<h3
							className={`${vanguard.className} text-3xl md:text-5xl 3xl:text-8xl text-dystopi-black font-semibold`}
						>
							ROADMAP
						</h3>
						<p className="py-0.5 px-4 rounded-full border text-sm md:text-base 3xl:text-3xl">
							#phases
						</p>
						<Link
							href="/"
							className="mr-0 ml-auto 3xl:transform 3xl:scale-[240%]"
						>
							<MdOutlineArrowForward
								size={24}
								className="transform rotate-45"
							/>
						</Link>
					</div>
					<div className="3xl:min-w-[40vw] flex flex-wrap items-end justify-start gap-4 border-b-2 mb-4 pb-4 w-full">
						<h3
							className={`${vanguard.className} text-3xl md:text-5xl 3xl:text-8xl text-dystopi-black font-semibold`}
						>
							TEAM
						</h3>
						<p className="py-0.5 px-4 rounded-full border text-sm md:text-base 3xl:text-3xl">
							#members
						</p>
						<p className="py-0.5 px-4 rounded-full border text-sm md:text-base 3xl:text-3xl">
							#partners
						</p>
						<Link
							href="/"
							className="mr-0 ml-auto 3xl:transform 3xl:scale-[240%]"
						>
							<MdOutlineArrowForward
								size={24}
								className="transform rotate-45"
							/>
						</Link>
					</div>
				</article>
			</div>
		</section>
	);
};

export default WhitePaperContainer;
