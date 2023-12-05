'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import './InfiniteCarousel.css';

const InfiniteCarousel = () => {
	useEffect;

	return (
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
	);
};

export default InfiniteCarousel;
