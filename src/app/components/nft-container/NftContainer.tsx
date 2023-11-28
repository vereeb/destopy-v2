import { vanguard } from '@/app/fonts';

const NftContainer = () => {
	return (
		<section className="3xl:pl-[11%] px-[10%] py-36">
			<h2
				className={`${vanguard.className} mb-12 md:mb-36 lg:mb-48 font-semibold text-3xl md:text-6xl lg:text-8xl 3xl:text-9xl lg:w-4/5`}
			>
				UNLEASH YOUR STRATEGIC SKILLS AND EQUIP YOUR HERO WITH{' '}
				<span className="text-dystopi-yellow">POWERFUL NFT</span> ARMOR
				SETS AND WEAPONS
			</h2>
			<div className="3xl:text-3xl">
				<p className="mb-16 lg:mb-20 max-w-md 3xl:max-w-3xl">
					The right combination of NFT armor will greatly impact your
					hero&apos;s combat points, determining your resilence,
					attack power, supply capacity, and ability to fight solo or
					as part of a larger group.
				</p>
				<p className="max-w-md 3xl:max-w-3xl">
					With special armor, you&apos;ll be able to access areas of
					the map that would otherwise be out of reach. So, choose
					your NFT armor wisely and watch your hero&apos;s rewards
					soar at the end of each day! Get ready to dominate the
					battlefield and claim your share of glory!
				</p>
			</div>
		</section>
	);
};

export default NftContainer;
