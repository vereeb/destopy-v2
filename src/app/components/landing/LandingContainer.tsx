import { headers } from "next/headers";
import { vanguard } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { FaStarOfLife } from "react-icons/fa";
import { Karla } from "next/font/google";
import CountdownTimer from "./CountDownTimer";
import { Suspense } from "react";
import InfiniteCarousel from "./InfiniteCarousel";

const karla = Karla({ subsets: ["latin"] });

const LandingContainer = () => {
  const headersList = headers();

  const userAgent = headersList.get("user-agent");

  const isMobile = /Mobile/.test(userAgent!);

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center lg:justify-end">
      <Image
        src="/images/landing-bg.png"
        alt="dystopi character"
        fill
        className="relative -z-10 object-cover object-center"
        priority
      />
      <div className="flex -translate-y-16 transform flex-col items-center justify-center p-6 lg:-translate-y-24 xl:-translate-y-48 4xl:absolute 4xl:left-1/2 4xl:top-1/2 4xl:-translate-x-1/2 4xl:-translate-y-1/2">
        <h1
          className={`${karla.className} text-7xl font-semibold md:text-[140px] lg:text-[180px] xl:text-[200px] xl:leading-[168px] 4xl:leading-[200px] 4xl:text-[480x]`}
        >
          DYSTOPI
        </h1>
        <div className="flex items-center justify-center gap-1 text-[0.5rem] md:text-sm lg:gap-2 lg:text-base 4xl:text-3xl">
          <FaStarOfLife />
          <p className="text-center opacity-80">
            New generation NFT GAME to save the earth from alien invaders
          </p>
          <FaStarOfLife />
        </div>
        <p
          className={`${vanguard.className} flex flex-wrap items-center justify-center text-3xl font-bold text-dystopi-yellow lg:text-6xl 2xl:text-8xl`}
        >
          <span className="mr-1 translate-y-1 transform font-mono lg:translate-y-2 3xl:lg:translate-y-3">
            
          </span>
          <span className="mr-2"></span>
          <span></span>
        </p>
        <p
          className={`${vanguard.className} mb-12 text-3xl font-bold md:text-6xl lg:mb-6 lg:text-6xl 2xl:text-8xl`}
        >
          WHITELIST
        </p>
        <Link
          href="https://forms.gle/uYBTeUG3PV5SArEt5"
          target="_blank"
          prefetch={false}
          className="text-zinc-950 mb-8 rounded-full bg-dystopi-yellow px-10 py-2 text-sm text-dystopi-black md:text-base 4xl:text-3xl"
        >
          JOIN WHITELIST
        </Link>

        <CountdownTimer />
      </div>
      <InfiniteCarousel />
    </section>
  );
};

export default LandingContainer;
