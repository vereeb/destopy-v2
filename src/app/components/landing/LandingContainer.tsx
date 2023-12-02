import { vanguard } from '@/app/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { FaStarOfLife } from 'react-icons/fa';
import { HiCubeTransparent } from 'react-icons/hi';

const LandingContainer = () => {
	return (
		<section className="w-full min-h-screen flex flex-col items-center justify-center">
			<Image
				src="/images/landing-bg.png"
				alt="dystopi character"
				fill
				className="object-cover relative -z-10"
				priority
			/>
			<div className="p-6 flex flex-col items-center justify-center mb-4 lg:mb-16">
				<h1
					className={`font-semibold text-7xl md:text-[140px] lg:text-[200px] xl:text-[200px] xl:leading-[220px] 3xl:text-[480x] 3xl:leading-[520px]`}
				>
					DYSTOPI
				</h1>
				<div className="lg:mb-8 flex items-center justify-center gap-1 lg:gap-2 text-[0.5rem] md:text-sm lg:text-base 3xl:text-3xl">
					<FaStarOfLife />
					<p className="opacity-80 text-center">
						New generation NFT GAME to save the earth from alien
						invaders
					</p>
					<FaStarOfLife />
				</div>
				<p
					className={`${vanguard.className} flex-wrap flex items-center justify-center text-dystopi-yellow font-bold text-3xl lg:text-8xl`}
				>
					<span>500 000</span>
					<span className="font-serif text-4xl  md:text-7xl lg:text-9xl">
						$
					</span>
					<span>AIRDROP</span>
				</p>
				<p
					className={`${vanguard.className} font-bold text-3xl md:text-6xl lg:text-8xl mb-20 lg:mb-6`}
				>
					WHITELIST
				</p>
				<Link
					href="/"
					className="text-sm md:text-base 3xl:text-3xl text-zinc-950 py-2 px-10 rounded-full bg-dystopi-yellow text-dystopi-black"
				>
					JOIN WHITELIST
				</Link>
			</div>
			{/* <InfiniteCarousel /> */}
			<div className="w-full bg-gradient-to-r from-dystopi-yellow/25 via-dystopi-yellow to-dystopi-yellow/25 py-4 flex items-center justify-center gap-8">
				<HiCubeTransparent size={40} />
				<HiCubeTransparent size={40} />
				<HiCubeTransparent size={40} />
				<HiCubeTransparent size={40} />
				<HiCubeTransparent size={40} />
			</div>
		</section>
	);
};

export default LandingContainer;
