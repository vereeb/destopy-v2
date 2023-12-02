import { vanguard } from '@/app/fonts';
import Image from 'next/image';

const DecorCircle = () => (
	<div className="-z-10 absolute left-1/2 -translate-x-[47%] md:-translate-x-[58%] lg:-translate-x-[47%] top-1/2 transform -translate-y-1/2 -rotate-[110deg] lg:rotate-0">
		<svg
			className="w-[320px] md:w-[560px] h-[320] md:h-[560px]"
			// width="403"
			// height="412"
			viewBox="0 0 403 412"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="183.169"
				cy="183.169"
				r="181.169"
				stroke="#FFB800"
				strokeWidth="4"
			/>
			<line
				x1="307.047"
				y1="316.148"
				x2="389.032"
				y2="398.132"
				stroke="#FFB800"
				strokeWidth="4"
			/>
			<circle cx="390.211" cy="399.547" r="12.4534" fill="#FFB800" />
		</svg>
	</div>
);

type NftCharacterProps = {
	className: string;
};

const NftCharacter = ({ className }: NftCharacterProps) => (
	<div className={`relative lg:min-w-[512px] lg:right-24 ${className}`}>
		<div className="absolute -top-4 lg:top-24 left-4 lg:left-auto right-auto lg:-right-24 flex flex-col items-start justify-start">
			<div className="flex items-baseline justify-start font-bold">
				<p
					className={`${vanguard.className} font-bold text-3xl md:text-5xl lg:text-8xl text-dystopi-yellow`}
				>
					10K
				</p>
				<p className="text-3xl lg:text-4xl text-dystopi-sand font-chillax">
					+
				</p>
			</div>
			<p className="text-base md:text-2xl lg:text-4xl">COLLECTION</p>
		</div>
		<DecorCircle />
		<Image
			src="/images/nft-character.png"
			alt="dystopi nft character"
			width={512}
			height={869}
			className="lg::max-w-sm xl:max-w-xl"
		/>
		<p
			className={`${vanguard.className} text-3xl lg:text-5xl font-bold absolute right-0 md:right-12 lg:-right-24 bottom-auto lg:bottom-24 top-0 lg:top-auto`}
		>
			ATLANTEAN
		</p>
	</div>
);

const NftContainer = () => {
	return (
		<section className="3xl:pl-[11%] px-[10%] py-36 relative">
			<Image
				src="/images/nft-bg.png"
				alt="dystopi game mechanism"
				height={1017}
				width={1024}
				className="object-cover absolute top-16 left-0 -z-10 brightness-[0.5] hidden lg:block"
			/>

			<div className="flex flex-col lg:flex-row items-start justify-start">
				<div>
					<h2
						className={`${vanguard.className} mb-12 md:mb-36 lg:mb-48 font-semibold text-3xl md:text-6xl lg:text-7xl 3xl:text-9xl`}
					>
						UNLEASH YOUR STRATEGIC SKILLS AND EQUIP YOUR HERO WITH{' '}
						<span className="text-dystopi-yellow">
							POWERFUL NFT
						</span>{' '}
						ARMOR SETS AND WEAPONS
					</h2>

					<NftCharacter className="block lg:hidden" />

					<div className="flex flex-col-reverse lg:flex-row items-start justify-start">
						<div className="3xl:text-3xl">
							<p className="mb-16 lg:mb-20 max-w-md 3xl:max-w-3xl">
								The right combination of NFT armor will greatly
								impact your hero&apos;s combat points,
								determining your resilence, attack power, supply
								capacity, and ability to fight solo or as part
								of a larger group.
							</p>
							<p className="max-w-md 3xl:max-w-3xl">
								With special armor, you&apos;ll be able to
								access areas of the map that would otherwise be
								out of reach. So, choose your NFT armor wisely
								and watch your hero&apos;s rewards soar at the
								end of each day! Get ready to dominate the
								battlefield and claim your share of glory!
							</p>
						</div>
					</div>
				</div>
				<NftCharacter className="hidden lg:block" />
			</div>
		</section>
	);
};

export default NftContainer;
