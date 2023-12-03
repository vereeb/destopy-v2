import { vanguard } from '@/app/fonts';
import Image from 'next/image';

type TokenomicCardProps = {
	category: string;
	color: string;
	percent: string;
	text: string;
	subtext: string;
	margin?: string;
};

const TokenomicCard = ({
	category,
	color,
	percent,
	text,
	subtext,
	margin
}: TokenomicCardProps) => (
	<div className="mb-1 md:mb-4 lg:mb-0 grid gap-1 grid-cols-2">
		<div className="flex mb-2">
			<p
				className={`${vanguard.className} ${color} ${
					margin && margin
				} font-semibold text-6xl md:text-7xl 3xl:text-9xl`}
			>
				{percent}
			</p>
			<div className="flex flex-col justify-end">
				<p
					className={`font-semibold text-xl md:text-2xl 3xl:text-5xl ${color}`}
				>
					%
				</p>
				<p className="text-dystopi-yellow text-sm md:text-base 3xl:text-3xl">
					{category}
				</p>
			</div>
		</div>

		<div className="flex flex-col justify-end text-sm md:text-base 3xl:text-3xl">
			<p>{text}</p>
			<p className="text-dystopi-yellow">{subtext}</p>
		</div>
	</div>
);

const TokenomicsContainer = () => {
	return (
		<section
			aria-labelledby="tokenomics-container-title"
			className="relative 3xl:max-w-[80%] w-full grid grid-cols-1 lg:grid-cols-2 px-4 md:px-[10%] 3xl:px-[1%] py-16 lg:py-36"
		>
			<div className="absolute -z-20 w-full h-full">
				<Image
					src="/images/tokenomics-bg.png"
					alt="dystopi tokemonics"
					fill
					className="object-cover brightness-[0.35] lg:brightness-50"
				/>
				<div className="hidden lg:block absolute w-2/3 h-full z-10 right-0 bg-gradient-to-r from-dystopi-black/0 via-dystopi-black/80 to-dystopi-black/100"></div>
			</div>

			<div>
				<div>
					<h2
						className={`${vanguard.className} font-semibold text-6xl md:text-7xl lg:text-9xl 3xl:text-[12rem]`}
						id="tokenomics-container-title"
					>
						TOKENOMICS
					</h2>
					<div className="flex items-end justify-start gap-2">
						<p
							className={`${vanguard.className} font-semibold text-4xl md:text-5xl lg:text-7xl 3xl:text-9xl text-dystopi-yellow`}
						>
							1MLN
						</p>
						<div className="text-xs md:text-sm 3xl:text-3xl">
							<p>Total Supply</p>
							<p className="text-dystopi-yellow">TOKENS</p>
						</div>
					</div>
				</div>
				<div className="relative">
					<Image
						width={800}
						height={800}
						src="/images/Diagram-01.svg"
						alt="dystopi token supply chart"
					/>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						<p className="text-dystopi-yellow text-center text-sm md:text-base 3xl:text-3xl">
							10 000 000 000
						</p>
						<p className="text-dystopi-yellow text-center text-sm md:text-base 3xl:text-3xl">
							tokens
						</p>
					</div>
				</div>
			</div>

			<div className="py-16">
				<div className="flex flex-col pl-[10%]">
					<TokenomicCard
						category="Seed"
						color="text-[#5B7DBE]"
						percent="1"
						subtext="10 000 000 tokens"
						text="5% TGE then 1/100 Weekly"
						margin="sm:ml-[1.5ch]"
					/>
					<TokenomicCard
						category="Presale"
						color="text-[#E0C3DE]"
						percent="0.5"
						subtext="5 000 000 tokens"
						text="5% TGE then 1/35 Weekly"
					/>
					<TokenomicCard
						category="Strategic"
						color="text-[#E0463C]"
						percent="5"
						subtext="5 000 0000 tokens"
						text="5% TGE then 1/100 Weekly"
						margin="sm:ml-[1.5ch]"
					/>
					<TokenomicCard
						category="Development"
						color="text-[#FFB800]"
						percent="5"
						subtext="5 000 0000 tokens"
						text="1/100 Weekly"
						margin="sm:ml-[1.5ch]"
					/>
					<TokenomicCard
						category="Public"
						color="text-[#49A751]"
						percent="1"
						subtext="10 000 000 tokens"
						text="No vesting"
						margin="sm:ml-[1.5ch]"
					/>
					<TokenomicCard
						category="Marketing"
						color="text-[#E9702C]"
						percent="2,5"
						subtext="25 000 000 tokens"
						text="5% TGE then 1/100 Weekly"
					/>
					<TokenomicCard
						category="Liquidity"
						color="text-[#5CBDC5]"
						percent="3"
						subtext="30 000 000 tokens"
						text="No vesting"
						margin="sm:ml-[1.5ch]"
					/>
					<TokenomicCard
						category="Reward"
						color="text-[#8AA8D8]"
						percent="70"
						subtext="700 000 000 tokens"
						text="479 452 DYS token/day (halves every second year)"
						margin="sm:ml-[0.5ch]"
					/>
					<TokenomicCard
						category="Advisor"
						color="text-[#F7D052]"
						percent="1"
						subtext="10 000 000 tokens"
						text="52 Week cliff, then 1/100 Weekly"
						margin="sm:ml-[1.5ch]"
					/>
					<TokenomicCard
						category="Team"
						color="text-[#E67C74]"
						percent="10"
						subtext="10 000 000 tokens"
						text="52 Week cliff, then 1/100 Weekly"
						margin="sm:ml-[0.5ch]"
					/>
					<TokenomicCard
						category="Airdrop"
						color="text-[#7CC387]"
						percent="1"
						subtext="10 000 000 tokens"
						text="No vesting"
						margin="sm:ml-[1.5ch]"
					/>
				</div>
			</div>
		</section>
	);
};

export default TokenomicsContainer;
