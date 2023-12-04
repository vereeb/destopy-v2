import Link from 'next/link';
import { vanguard } from '@/app/fonts';
import Image from 'next/image';

const GameMechanismContainer = () => {
	return (
		<section
			aria-labelledby="game-mechanism-section"
			className="w-full grid grid-cols-1 xl:grid-cols-2 pb-36"
		>
			<div className="mb-20 xl:mb-0 px-[10%] 3xl:px-[24%] relative">
				<Image
					src="/images/game-mechanism-bg.jpg"
					alt="dystopi game mechanism"
					fill
					className="object-cover relative -z-10 brightness-[0.35]"
				/>

				<h2
					className={`${vanguard.className} text-6xl md:text-7xl lg:text-9xl 3xl:text-[12rem] mb-10 lg:mb-16`}
					id="game-mechanism-section"
				>
					<span className="text-dystopi-yellow">GAME</span> MECHANISM
				</h2>

				<p
					className={`${vanguard.className} text-2xl md:text-3xl 3xl:text-6xl mb-8`}
				>
					DYSEUM
				</p>

				<div className="pb-48 md:flex-row flex-col flex items-start justify-between gap-4 md:gap-20 max-w-screen-sm 3xl:max-w-screen-lg text-sm md:text-base 3xl:text-3xl">
					<p>
						Get ready to be rewarded for your bravery in the war for
						Dyseum tokens! Dyseum is a currency that is accepted by
						all four members of the alliance, making it the perfect
						tool for financing the war, producing weapons, and
						distributing rewards. Made of a special alloy, there is
						a limited supply of Dyseum, with only 1,000,000,000
						tokens in existence.
					</p>
					<div>
						<p className="mb-4">
							60% of these tokens have been set aside to finance
							the costs of the war, and if you join the fight, you
							can benefit from the prize pool.
						</p>
						<p>
							The alliance has divided the war budget into
							two-year periods, with 410,958 Dyseum tokens being
							distributed daily to the bravest warriors in the
							first two years. Each subsequent two-year period,
							the daily reward will be halved, so don&apos;t miss
							your chance to be a part of this exciting adventure
							and earn your share of the Dyseum tokens!
						</p>
					</div>
				</div>
			</div>

			<div className="px-8 lg:px-12 py-8 lg:py-28 3xl:py-64 bg-dystopi-sand text-dystopi-black flex items-center">
				<div className="3xl:pl-24 flex flex-col items-start justify-start xl:min-w-[40vw] mb-8">
					<article className="pb-6 border-b-2 border-dystopi-black mb-8 3xl:mb-12">
						<h3
							className={`${vanguard.className} mb-4 lg:mb-8 3xl:mb-12 text-4xl md:text-5xl lg:text-7xl 3xl:text-9xl`}
						>
							SHORT STORY
						</h3>

						<div className="flex-col md:flex-row flex items-start gap-4 sm:gap-8 md:gap-24 text-sm md:text-base 3xl:text-3xl">
							<p className="3xl:max-w-3xl">
								..In the 314th year of the New Age an alien
								symbiotic species is coming to Earth: the mighty
								plant-like giants
							</p>
							<Link
								href="/"
								className="min-w-[12ch] mt-auto font-semibold mb-0"
								prefetch={false}
							>
								/ READ MORE /
							</Link>
						</div>
					</article>
					<article className="pb-6 border-b-2 border-dystopi-black mb-8 3xl:mb-12">
						<h3
							className={`${vanguard.className} mb-4 lg:mb-8 3xl:mb-12 text-4xl md:text-5xl lg:text-7xl 3xl:text-9xl`}
						>
							DYSEUM CURRENCY
						</h3>

						<div className="flex-col md:flex-row flex items-start gap-4 md:gap-24 text-sm md:text-base 3xl:text-3xl">
							<p className="3xl:max-w-3xl">
								..In the 314th year of the New Age an alien
								symbiotic species is coming to Earth: the mighty
								plant-like giants
							</p>
							<Link
								href="/"
								className="min-w-[12ch] mt-auto font-semibold mb-0"
								prefetch={false}
							>
								/ READ MORE /
							</Link>
						</div>
					</article>
					<article className="pb-6 border-b-2 border-dystopi-black mb-8 3xl:mb-12">
						<h3
							className={`${vanguard.className} mb-4 lg:mb-8 3xl:mb-12 text-4xl md:text-5xl lg:text-7xl 3xl:text-9xl`}
						>
							NFT ARMOR SET
						</h3>

						<div className="flex-col md:flex-row flex items-start gap-4 md:gap-24 text-sm md:text-base 3xl:text-3xl">
							<p className="3xl:max-w-3xl">
								..In the 314th year of the New Age an alien
								symbiotic species is coming to Earth: the mighty
								plant-like giants
							</p>
							<Link
								href="/"
								className="min-w-[12ch] mt-auto font-semibold mb-0"
								prefetch={false}
							>
								/ READ MORE /
							</Link>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export default GameMechanismContainer;
