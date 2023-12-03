import { vanguard } from '@/app/fonts';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import { FaStarOfLife } from 'react-icons/fa';

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
			<div className="w-full bg-gradient-to-r from-dystopi-yellow/25 via-dystopi-yellow to-dystopi-yellow/25 py-4 flex items-center justify-center gap-8">
				<Marquee autoFill={true}>
					<Image
						src="/images/landing-logos/Binance Smart Chain.png"
						objectFit="contain"
						alt="Binance Smart Chain - Dystopi"
						width={93}
						height={24}
						// width={247}
						// height={64}
						className="max-h-6 mx-8"
						priority
					/>
					<Image
						src="/images/landing-logos/Binance.png"
						objectFit="contain"
						alt="Binance - Dystopi"
						width={116}
						height={24}
						// width={310}
						// height={64}
						className="max-h-6 mx-8"
						priority
					/>
					<Image
						src="/images/landing-logos/Certik.png"
						objectFit="contain"
						alt="Certik - Dystopi"
						width={93}
						height={24}
						// width={247}
						// height={64}
						className="max-h-6 mx-8"
						priority
					/>
					<Image
						src="/images/landing-logos/CoinVeda.webp"
						objectFit="contain"
						alt="CoinVeda - Dystopi"
						width={83}
						height={30}
						// width={176}
						// height={64}
						className="max-h-6 mx-8"
						priority
					/>
					<Image
						src="/images/landing-logos/Dexview.png"
						objectFit="contain"
						alt="Dexview - Dystopi"
						width={101}
						height={24}
						// width={271}
						// height={64}
						className="max-h-6 mx-8"
						priority
					/>
					<Image
						src="/images/landing-logos/EDNS domains.png"
						objectFit="contain"
						alt="EDNS domains - Dystopi"
						width={29}
						height={24}
						// width={76}
						// height={64}
						className="max-h-6 mx-8"
						priority
					/>
					<Image
						src="/images/landing-logos/Esport manager.webp"
						objectFit="contain"
						alt="Esport manager - Dystopi"
						width={96}
						height={24}
						// width={257}
						// height={64}
						className="max-h-6 mx-8"
						priority
					/>
					<Image
						src="/images/landing-logos/Everdome.png"
						objectFit="contain"
						alt="Everdome - Dystopi"
						width={32}
						height={24}
						// width={87}
						// height={64}
						className="max-h-6 mx-8"
						priority
					/>
					<Image
						src="/images/landing-logos/Gamerland.png"
						objectFit="contain"
						alt="Gamerland - Dystopi"
						width={93}
						height={24}
						// width={249}
						// height={64}
						className="max-h-6 mx-8"
						priority
					/>
					<Image
						src="/images/landing-logos/GURA.png"
						objectFit="contain"
						alt="GURA - Dystopi"
						width={129}
						height={24}
						// width={344}
						// height={64}
						className="max-h-6 mx-8"
						priority
					/>
					<Image
						src="/images/landing-logos/Iam IT.png"
						objectFit="contain"
						alt="Iam IT - Dystopi"
						width={98}
						height={24}
						// width={262}
						// height={64}
						className="max-h-6 mx-8"
						priority
					/>
					<Image
						src="/images/landing-logos/Metaplayers.png"
						objectFit="contain"
						alt="Metaplayers - Dystopi"
						width={33}
						height={24}
						// width={88}
						// height={64}
						className="max-h-6 mx-8"
						priority
					/>
					<Image
						src="/images/landing-logos/Mindtech Apps.png"
						objectFit="contain"
						alt="Mindtech Apps - Dystopi"
						width={26}
						height={24}
						// width={70}
						// height={64}
						className="max-h-6 mx-8"
						priority
					/>
					<Image
						src="/images/landing-logos/PancakeSwap.png"
						objectFit="contain"
						alt="PancakeSwap - Dystopi"
						width={154}
						height={24}
						// width={412}
						// height={64}
						className="max-h-6 mx-8"
						priority
					/>
					<Image
						src="/images/landing-logos/PinkSale.png"
						objectFit="contain"
						alt="PinkSale - Dystopi"
						width={77}
						height={24}
						// width={205}
						// height={64}
						className="max-h-6 mx-8"
						priority
					/>
					<Image
						src="/images/landing-logos/Platinum Crypto Academy.png"
						objectFit="contain"
						alt="Platinum Crypto Academy - Dystopi"
						width={63}
						height={24}
						// width={168}
						// height={64}
						className="max-h-6 mx-8"
						priority
					/>
					<Image
						src="/images/landing-logos/UIG Studio.png"
						objectFit="contain"
						alt="UIG Studio - Dystopi"
						width={17}
						height={24}
						// width={45}
						// height={64}
						className="max-h-6 mx-8"
						priority
					/>
				</Marquee>
			</div>
		</section>
	);
};

export default LandingContainer;
