import { vanguard } from "@/app/fonts";
import { FaArtstation, FaLinkedin, FaUser } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

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
  iconType: "linkedIn" | "artStation";
};

const UserIconWithArtStationLink = ({
  linkUrl,
  iconType,
}: UserIconWithLinkProps) => (
  <div className="relative">
    <Link target="_blank" href={linkUrl} prefetch={false}>
      <FaUser size={48} />
      {iconType === "artStation" ? (
        <FaArtstation className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 transform bg-dystopi-black p-0.5"></FaArtstation>
      ) : (
        <FaLinkedin className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 transform bg-dystopi-sand text-dystopi-black"></FaLinkedin>
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
  linkedInUrl,
}: TeamCardProps) => (
  <div
    className={`mb-8 lg:mb-0 ${
      hasBorder &&
      "4xl:pr-4 4xl:max-w-md border-dystopi-sand lg:mr-8 lg:max-w-[270px] lg:border-r-2 xl:max-w-xs 3xl:max-w-xs"
    }`}
  >
    <div className="mb-4 flex h-16 w-16 items-start justify-start gap-2 lg:mb-12 lg:h-auto lg:w-auto">
      <Image
        width={144}
        height={144}
        className="rounded-full border-2 border-dystopi-yellow object-cover"
        src={imageUrl}
        alt={name}
      />
      <div className="flex flex-col">
        <p
          className={`${vanguard.className} 4xl:text-6xl w-1/2 text-sm font-semibold leading-4 lg:text-3xl`}
        >
          {name}
        </p>
        <p className="4xl:text-2xl mb-0 min-w-[15ch] text-xs text-dystopi-yellow md:mb-2 lg:mb-4 lg:text-sm">
          {rank}
        </p>

        {linkedInUrl && (
          <Link target="_blank" href={linkedInUrl} prefetch={false}>
            <FaLinkedin className="h-4 w-4 lg:h-6 lg:w-6 2xl:h-8 2xl:w-8" />
          </Link>
        )}
      </div>
    </div>
    <ul className="4xl:text-3xl list-outside list-disc text-[10px] text-dystopi-yellow md:text-sm lg:text-base">
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
    <section className="4xl:max-w-[80%] 4xl:pl-[1%] 4xl:py-64 relative w-full py-32 pl-[24px] pr-[4%] lg:pl-[10%]">
      <Image
        src="/images/nft-bg.png"
        alt="dystopi game mechanism"
        fill
        className="absolute right-0 top-0 -z-10 max-h-[50%] translate-x-32 translate-y-32 scale-x-[-1] transform object-cover brightness-[0.35] lg:hidden"
      />
      <h2
        className={`${vanguard.className} 4xl:text-[12rem] mb-12 text-7xl font-semibold text-dystopi-yellow lg:mb-24 lg:text-9xl 2xl:mb-0`}
      >
        TEAM
      </h2>

      <div className="flex flex-col items-start justify-center gap-16 2xl:flex-row">
        <div>
          <div className="mb-2 max-w-max lg:mb-16">
            <p className="4xl:text-3xl 4xl:w-72 mb-4 ml-0 mr-auto w-48 rounded-sm bg-dystopi-yellow text-center font-semibold text-dystopi-black lg:mb-8 lg:ml-auto">
              MANAGEMENT
            </p>

            <div className="grid grid-cols-2 gap-5 lg:flex lg:items-start lg:justify-start">
              <TeamCard
                experiences={[
                  "9+ years of entrepreneurship",
                  "6+ years in crypto",
                ]}
                hasBorder={true}
                imageUrl="/images/team/Bence.jpg"
                name="BENCE VEREBELYI"
                rank="Founder & CEO"
                linkedInUrl="https://www.linkedin.com/in/vereeb-dystopi/"
              />
              <TeamCard
                experiences={[
                  "8+ years in crypto and sales",
                  "6+ years in leadership",
                ]}
                hasBorder={true}
                imageUrl="/images/team/Patrik.jpg"
                name="PATRIK SZABO"
                rank="Founder & COO"
                linkedInUrl="https://www.linkedin.com/in/szabó-patrik-a59b20244/"
              />
              <TeamCard
                experiences={[
                  "5+ years in hedge fund management",
                  "Crypto investor for 7years",
                ]}
                imageUrl="/images/team/Richy Rich E_edit.jpg"
                name="RICHARD BARATH"
                rank="Co-Founder & CFO"
                linkedInUrl="https://www.linkedin.com/in/richard-barath-958799264/"
              />
            </div>
          </div>

          <div className="max-w-max">
            <p className="4xl:text-3xl 4xl:w-72 mb-4 ml-0 mr-auto w-48 rounded-sm bg-dystopi-yellow text-center font-semibold text-dystopi-black lg:mb-8 lg:ml-auto">
              TECHNOLOGY
            </p>

            <div className="flex flex-col items-start justify-start gap-8 lg:flex-row">
              <div className="flex items-start justify-start gap-5">
                <TeamCard
                  experiences={[
                    "30k+ hours of gaming experience",
                    "6+ years in crypto",
                  ]}
                  hasBorder={true}
                  imageUrl="/images/team/Marci.jpg"
                  name="MARCELL LAPOS"
                  rank="Co-Founder & Game Mechanics"
                />
                <TeamCard
                  experiences={[
                    "10+ years of developer XP",
                    "CEO of Mindtech Apps",
                  ]}
                  imageUrl="/images/team/Kralikphd.jpg"
                  name="TAMAS KRALIK"
                  rank="CTO"
                  linkedInUrl="https://www.linkedin.com/in/kralik-tamas-08a911a3/"
                />
              </div>

              <div className="max-w-max transform lg:-translate-y-[52px]">
                <p className="4xl:text-3xl 4xl:w-72 mb-4 ml-0 mr-auto w-48 rounded-sm bg-dystopi-yellow text-center font-semibold text-dystopi-black lg:mb-8 lg:ml-auto">
                  ART
                </p>

                <div className="flex items-start justify-start">
                  <TeamCard
                    experiences={[
                      "25 years of experience in drawing",
                      "Professional artists since 2015",
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
            <p className="4xl:text-3xl 4xl:w-72 mb-8 ml-0 mr-auto w-48 rounded-sm bg-dystopi-yellow text-center font-semibold text-dystopi-black">
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
            <p className="4xl:text-3xl 4xl:w-72 mb-8 ml-0 mr-auto w-48 rounded-sm bg-dystopi-yellow text-center font-semibold text-dystopi-black">
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
            <p className="4xl:text-3xl 4xl:w-72 mb-8 ml-0 mr-auto w-48 rounded-sm bg-dystopi-yellow text-center font-semibold text-dystopi-black">
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
