import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowForward } from "react-icons/md";
import { vanguard } from "@/app/fonts";

const WhitePaperContainer = () => {
  return (
    <section
      aria-labelledby="white-paper-section"
      className="relative z-10 grid w-full grid-cols-1 pt-20 xl:grid-cols-2"
    >
      <div className="relative mb-20 px-[8%] pt-28 xl:mb-0 4xl:px-[20%] 4xl:pt-56">
        <Image
          className="-z-10 min-h-[100vh] object-cover brightness-50 filter"
          src="/images/whitepaper-bg.png"
          fill
          alt="dystopi city"
        />
        <h2
          className={`${vanguard.className} mb-56 text-7xl lg:mb-96 lg:text-9xl 4xl:text-[12rem]`}
          id="white-paper-section"
        >
          WHITEPAPER
        </h2>
        <p className="mb-8 max-w-md text-sm md:text-base 4xl:max-w-2xl 4xl:text-3xl">
          The vision of Dystopi&apos;s creators is to create a new level of
          innovation in the gaming industry through the integration of
          blockchain technology and NFTs. The mission is to offer players the
          opportunity to play, earn and collect unique digital assets, while
          engaging in a battle against alien invaders.
        </p>
        <Link
          target="_blank"
          className="font-semibold 4xl:text-3xl"
          href="https://dystopi.gitbook.io/dystopi-whitepaper-1/"
          prefetch={false}
        >
          / CHECK WHITEPAPER /
        </Link>
      </div>

      <div className="flex min-h-[100vh] w-full items-center bg-dystopi-sand px-8 pt-28 text-dystopi-black md:px-20">
        <article className="mx-auto flex flex-col items-start justify-start">
          <div className="mb-4 flex w-full flex-wrap items-end justify-start gap-4 border-b-2 pb-4 4xl:min-w-[40vw]">
            <h3
              className={`${vanguard.className} text-3xl font-semibold text-dystopi-black md:text-5xl 4xl:text-8xl`}
            >
              WHAT IS DYSTOPI
            </h3>
            <p className="rounded-full border px-4 py-0.5 text-sm md:text-base 4xl:text-3xl">
              #plot
            </p>
            <Link
              target="_blank"
              href="https://dystopi.gitbook.io/dystopi-whitepaper-1/what-is-dystopi"
              className="ml-auto mr-0 4xl:scale-[240%] 4xl:transform"
              prefetch={false}
            >
              <MdOutlineArrowForward
                size={24}
                className="rotate-45 transform"
              />
            </Link>
          </div>
          <div className="mb-4 flex w-full flex-wrap items-end justify-start gap-4 border-b-2 pb-4 4xl:min-w-[40vw]">
            <h3
              className={`${vanguard.className} text-3xl font-semibold text-dystopi-black md:text-5xl 4xl:text-8xl`}
            >
              GAME PILLARS
            </h3>
            <p className="rounded-full border px-4 py-0.5 text-sm md:text-base 4xl:text-3xl">
              #blockchain
            </p>
            <p className="rounded-full border px-4 py-0.5 text-sm md:text-base 4xl:text-3xl">
              #nft
            </p>
            <p className="rounded-full border px-4 py-0.5 text-sm md:text-base 4xl:text-3xl">
              #game_mechanics
            </p>
            <Link
              target="_blank"
              href="https://dystopi.gitbook.io/dystopi-whitepaper-1/game-pillars"
              className="ml-auto mr-0 4xl:scale-[240%] 4xl:transform"
              prefetch={false}
            >
              <MdOutlineArrowForward
                size={24}
                className="rotate-45 transform"
              />
            </Link>
          </div>
          <div className="mb-4 flex w-full flex-wrap items-end justify-start gap-4 border-b-2 pb-4 4xl:min-w-[40vw]">
            <h3
              className={`${vanguard.className} text-3xl font-semibold text-dystopi-black md:text-5xl 4xl:text-8xl`}
            >
              TOKENOMICS
            </h3>
            <p className="rounded-full border px-4 py-0.5 text-sm md:text-base 4xl:text-3xl">
              #dyseum
            </p>
            <Link
              target="_blank"
              href="https://dystopi.gitbook.io/dystopi-whitepaper-1/tokenomics"
              className="ml-auto mr-0 4xl:scale-[240%] 4xl:transform"
              prefetch={false}
            >
              <MdOutlineArrowForward
                size={24}
                className="rotate-45 transform"
              />
            </Link>
          </div>
          <div className="mb-4 flex w-full flex-wrap items-end justify-start gap-4 border-b-2 pb-4 4xl:min-w-[40vw]">
            <h3
              className={`${vanguard.className} max-w-fit text-3xl font-semibold text-dystopi-black md:text-5xl 4xl:text-8xl`}
            >
              MARKET RESEARCH
            </h3>
            <p className="rounded-full border px-4 py-0.5 text-sm md:text-base 4xl:text-3xl">
              #esport
            </p>
            <p className="rounded-full border px-4 py-0.5 text-sm md:text-base 4xl:text-3xl">
              #blockchain_games
            </p>
            <p className="rounded-full border px-4 py-0.5 text-sm md:text-base 4xl:text-3xl">
              #target
            </p>
            <Link
              target="_blank"
              href="https://dystopi.gitbook.io/dystopi-whitepaper-1/market-research"
              className="ml-auto mr-0 4xl:scale-[240%] 4xl:transform"
              prefetch={false}
            >
              <MdOutlineArrowForward
                size={24}
                className="rotate-45 transform"
              />
            </Link>
          </div>
          <div className="mb-4 flex w-full flex-wrap items-end justify-start gap-4 border-b-2 pb-4 4xl:min-w-[40vw]">
            <h3
              className={`${vanguard.className} text-3xl font-semibold text-dystopi-black md:text-5xl 4xl:text-8xl`}
            >
              ROADMAP
            </h3>
            <p className="rounded-full border px-4 py-0.5 text-sm md:text-base 4xl:text-3xl">
              #phases
            </p>
            <Link
              target="_blank"
              href="https://dystopi.gitbook.io/dystopi-whitepaper-1/roadmap"
              className="ml-auto mr-0 4xl:scale-[240%] 4xl:transform"
              prefetch={false}
            >
              <MdOutlineArrowForward
                size={24}
                className="rotate-45 transform"
              />
            </Link>
          </div>
          <div className="mb-4 flex w-full flex-wrap items-end justify-start gap-4 border-b-2 pb-4 4xl:min-w-[40vw]">
            <h3
              className={`${vanguard.className} text-3xl font-semibold text-dystopi-black md:text-5xl 4xl:text-8xl`}
            >
              TEAM
            </h3>
            <p className="rounded-full border px-4 py-0.5 text-sm md:text-base 4xl:text-3xl">
              #members
            </p>
            <p className="rounded-full border px-4 py-0.5 text-sm md:text-base 4xl:text-3xl">
              #partners
            </p>
            <Link
              target="_blank"
              href="https://dystopi.gitbook.io/dystopi-whitepaper-1/team"
              className="ml-auto mr-0 4xl:scale-[240%] 4xl:transform"
              prefetch={false}
            >
              <MdOutlineArrowForward
                size={24}
                className="rotate-45 transform"
              />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default WhitePaperContainer;
