import { vanguard } from '@/app/fonts';
import { FaArtstation, FaLinkedin, FaUser } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

type TeamCardProps = {
	imageUrl: string;
	name: string;
	rank: string;
	experiences: string[];
	linkedInUrl?: string;
	hasBorder?: boolean;
};

type UserIconWithLinkProps = {
	linkUrl: string;
	iconType: 'linkedIn' | 'artStation';
};

const UserIconWithArtStationLink = ({
	linkUrl,
	iconType
}: UserIconWithLinkProps) => (
	<div className="relative">
		<Link target="_blank" href={linkUrl} prefetch={false}>
			<FaUser size={48} />
			{iconType === 'artStation' ? (
				<FaArtstation className="bg-dystopi-black absolute bottom-0 left-1/2 p-0.5 w-4 h-4 transform -translate-x-1/2"></FaArtstation>
			) : (
				<FaLinkedin className="bg-dystopi-sand text-dystopi-black absolute bottom-0 left-1/2 w-4 h-4 transform -translate-x-1/2"></FaLinkedin>
			)}
		</Link>
	</div>
);

const TeamCard = ({
	experiences,
	hasBorder,
	imageUrl,
	name,
	rank,
	linkedInUrl
}: TeamCardProps) => (
	<div
		className={`mb-8 lg:mb-0 ${
			hasBorder && 'lg:border-r-2 border-dystopi-sand lg:mr-8 3xl:pr-4'
		}`}
	>
		<div className="w-16 h-16 lg:w-auto lg:h-auto flex items-start justify-start gap-2 mb-4 lg:mb-12">
			<Image
				width={144}
				height={144}
				className="object-cover rounded-full border-2 border-dystopi-yellow"
				src={imageUrl}
				alt={name}
			/>
			<div className="flex flex-col">
				<p
					className={`${vanguard.className} font-semibold text-sm leading-4 lg:text-3xl 3xl:text-6xl w-1/2`}
				>
					{name}
				</p>
				<p className="mb-0 md:mb-2 lg:mb-4 text-dystopi-yellow text-xs lg:text-sm 3xl:text-2xl min-w-[15ch]">
					{rank}
				</p>

				{linkedInUrl && (
					<Link target="_blank" href={linkedInUrl} prefetch={false}>
						<FaLinkedin className="w-4 h-4 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8" />
					</Link>
				)}
			</div>
		</div>
		<ul className="text-[10px] md:text-sm lg:text-base 3xl:text-3xl list-disc list-outside text-dystopi-yellow">
			{experiences.map((experience: string, index: number) => (
				<li key={index}>
					<span className="text-dystopi-sand">{experience}</span>
				</li>
			))}
		</ul>
	</div>
);

const TeamContainer = () => {
	return (
		<section className="3xl:max-w-[80%] pl-[24px] lg:pl-[10%] 3xl:pl-[1%] pr-[4%] w-full py-32 3xl:py-64 relative">
			<Image
				src="/images/nft-bg.png"
				alt="dystopi game mechanism"
				fill
				className="lg:hidden max-h-[50%] object-cover absolute top-0 right-0 -z-10 brightness-[0.35] transform translate-x-32 translate-y-32 scale-x-[-1]"
			/>
			<h2
				className={`${vanguard.className} mb-12 lg:mb-24 2xl:mb-0 font-semibold text-7xl lg:text-9xl 3xl:text-[12rem] text-dystopi-yellow`}
			>
				TEAM
			</h2>

			<div className="flex flex-col xl:flex-row items-start justify-center gap-16">
				<div>
					<div className="max-w-max mb-2 lg:mb-16">
						<p className="mb-4 lg:mb-8 ml-0 mr-auto lg:ml-auto 3xl:text-3xl w-48 3xl:w-72 text-center font-semibold text-dystopi-black bg-dystopi-yellow rounded-sm">
							MANAGEMENT
						</p>

						<div className="gap-5 grid grid-cols-2 lg:flex lg:items-start lg:justify-start">
							<TeamCard
								experiences={[
									'9+ years of entrepreneurship',
									'6+ years in crypto'
								]}
								hasBorder={true}
								imageUrl="/images/team/Bence.jpg"
								name="BENCE VEREBELYI"
								rank="Founder & CEO"
								linkedInUrl="https://www.linkedin.com/in/vereeb-dystopi/"
							/>
							<TeamCard
								experiences={[
									'8+ years in crypto and sales',
									'6+ years in leadership'
								]}
								hasBorder={true}
								imageUrl="/images/team/Patrik.jpg"
								name="PATRIK SZABO"
								rank="Founder & COO"
								linkedInUrl="https://www.linkedin.com/in/szabó-patrik-a59b20244/"
							/>
							<TeamCard
								experiences={[
									'5+ years in hedge fund management',
									'Crypto investor for 7years'
								]}
								imageUrl="/images/team/Richy Rich E_edit.jpg"
								name="RICHARD BARATH"
								rank="Co-Founder & CFO"
								linkedInUrl="https://www.linkedin.com/in/richard-barath-958799264/"
							/>
						</div>
					</div>

					<div className="max-w-max">
						<p className="mb-4 lg:mb-8 ml-0 mr-auto lg:ml-auto 3xl:text-3xl w-48 3xl:w-72 text-center font-semibold text-dystopi-black bg-dystopi-yellow rounded-sm">
							TECHNOLOGY
						</p>

						<div className="flex flex-col lg:flex-row items-start justify-start gap-8">
							<div className="gap-5 flex items-start justify-start">
								<TeamCard
									experiences={[
										'30k+ hours of gaming experience',
										'6+ years in crypto'
									]}
									hasBorder={true}
									imageUrl="/images/team/Marci.jpg"
									name="MARCELL LAPOS"
									rank="Co-Founder & Game Mechanics"
								/>
								<TeamCard
									experiences={[
										'10+ years of developer XP',
										'CEO of Mindtech Apps'
									]}
									imageUrl="/images/team/Kralikphd.jpg"
									name="TAMAS KRALIK"
									rank="CTO"
									linkedInUrl="https://www.linkedin.com/in/kralik-tamas-08a911a3/"
								/>
							</div>

							<div className="max-w-max transform lg:-translate-y-[52px]">
								<p className="mb-4 lg:mb-8 ml-0 mr-auto lg:ml-auto 3xl:text-3xl w-48 3xl:w-72 text-center font-semibold text-dystopi-black bg-dystopi-yellow rounded-sm">
									ART
								</p>

								<div className="flex items-start justify-start">
									<TeamCard
										experiences={[
											'25 years of experience in drawing',
											'Professional artists since 2015'
										]}
										imageUrl="/images/team/Beregi.jpg"
										name="BENCE BEREGI"
										rank="Art Director"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-12">
					<div className="max-w-max">
						<p className="mb-8 ml-0 mr-auto 3xl:text-3xl w-48 3xl:w-72 text-center font-semibold text-dystopi-black bg-dystopi-yellow rounded-sm">
							ART DEPARTMENT
						</p>

						<div className="grid grid-cols-7 gap-2">
							<UserIconWithArtStationLink
								iconType="artStation"
								linkUrl="https://www.artstation.com/everlite"
							/>
							<UserIconWithArtStationLink
								iconType="artStation"
								linkUrl="https://www.artstation.com/nikitavasilkov"
							/>
							<UserIconWithArtStationLink
								iconType="artStation"
								linkUrl="https://www.artstation.com/gundandras"
							/>
							<UserIconWithArtStationLink
								iconType="artStation"
								linkUrl="https://www.artstation.com/dsmile"
							/>
							<UserIconWithArtStationLink
								iconType="artStation"
								linkUrl="https://www.artstation.com/bescarellus"
							/>
							<UserIconWithArtStationLink
								iconType="artStation"
								linkUrl="https://www.artstation.com/tiger_999"
							/>
							<UserIconWithArtStationLink
								iconType="artStation"
								linkUrl="https://www.artstation.com/guraziu"
							/>
							<FaUser size={48} />
							<FaUser size={48} />
							<FaUser size={48} />
							<FaUser size={48} />
							<FaUser size={48} />
							<FaUser size={48} />
							<FaUser size={48} />
						</div>
					</div>

					<div className="max-w-max">
						<p className="mb-8 ml-0 mr-auto 3xl:text-3xl w-48 3xl:w-72 text-center font-semibold text-dystopi-black bg-dystopi-yellow rounded-sm">
							DEVELOPMENT TEAM
						</p>

						<div className="grid grid-cols-6 gap-2">
							<UserIconWithArtStationLink
								iconType="linkedIn"
								linkUrl="https://www.linkedin.com/in/g%C3%A1sp%C3%A1r-huba-4a588249/"
							/>
							<UserIconWithArtStationLink
								iconType="linkedIn"
								linkUrl="https://www.linkedin.com/in/m%C3%A1rton-volosin-5b1569112/"
							/>
							<UserIconWithArtStationLink
								iconType="linkedIn"
								linkUrl="https://www.linkedin.com/in/pannapetrazsoldos/"
							/>
							<UserIconWithArtStationLink
								iconType="linkedIn"
								linkUrl="https://www.linkedin.com/in/%C3%A1d%C3%A1m-farkas-732977143/"
							/>
							<UserIconWithArtStationLink
								iconType="linkedIn"
								linkUrl="https://www.linkedin.com/in/mil%C3%A1n-n%C3%A9ninger-bb2030a5/"
							/>
							<UserIconWithArtStationLink
								iconType="linkedIn"
								linkUrl="https://www.linkedin.com/in/mark-ertinger-b434b913a/"
							/>
							<FaUser size={48} />
							<FaUser size={48} />
							<FaUser size={48} />
							<FaUser size={48} />
						</div>
					</div>

					<div className="max-w-max">
						<p className="mb-8 ml-0 mr-auto 3xl:text-3xl w-48 3xl:w-72 text-center font-semibold text-dystopi-black bg-dystopi-yellow rounded-sm">
							MARKETING
						</p>

						<div className="grid grid-cols-5 gap-2">
							<UserIconWithArtStationLink
								iconType="linkedIn"
								linkUrl="https://www.linkedin.com/in/sztan%C3%B3-csaba-46684297/"
							/>
							<FaUser size={48} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamContainer;
