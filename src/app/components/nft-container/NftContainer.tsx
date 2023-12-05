import { vanguard } from "@/app/fonts";
import Image from "next/image";

const DecorCircle = () => (
  <div className="5xl:-translate-y-[40%] 5xl:-translate-x-[48%] absolute left-1/2 top-1/2 -z-10 -translate-x-[47%] -translate-y-1/2 -rotate-[110deg] transform md:-translate-x-[50%] lg:-translate-x-[47%] xl:rotate-0">
    <svg
      className="5xl:h-[1024px] 5xl:w-[1024px] h-[320] w-[320px] md:h-[560px] md:w-[560px] lg:h-[380px] lg:w-[380px] xl:h-[380px] xl:w-[380px] 3xl:h-[560px] 3xl:w-[560px] 4xl:h-[768px] 4xl:w-[768px]"
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
        strokeWidth="3"
      />
      <line
        x1="307.047"
        y1="316.148"
        x2="389.032"
        y2="398.132"
        stroke="#FFB800"
        strokeWidth="3"
      />
      <circle cx="390.211" cy="399.547" r="12.4534" fill="#FFB800" />
    </svg>
  </div>
);

type NftCharacterProps = {
  className: string;
};

const NftCharacter = ({ className }: NftCharacterProps) => (
  <div
    className={`5xl:min-w-[1024px] 5xl:right-32 relative mb-40 flex flex-col items-center justify-center md:mb-64 xl:-top-16 xl:right-0 xl:mb-0 xl:min-w-[256px] 4xl:right-0 4xl:top-0 4xl:min-w-[880px] ${className}`}
  >
    <div className="absolute -top-4 left-4 right-auto flex flex-col items-start justify-start md:top-4 xl:-right-24 xl:left-auto xl:top-24">
      <div className="flex items-baseline justify-start font-bold">
        <p
          className={`${vanguard.className} text-3xl font-bold text-dystopi-yellow md:text-5xl lg:text-7xl 2xl:text-8xl`}
        >
          10K
        </p>
        <p className="font-chillax text-3xl text-dystopi-sand lg:text-4xl">+</p>
      </div>
      <p className="text-base md:text-2xl lg:text-4xl">COLLECTION</p>
    </div>
    <DecorCircle />
    <Image
      src="/images/nft-character.png"
      alt="dystopi nft character"
      width={1024}
      height={1738}
      // width={512}
      // height={869}
      className="5xl:max-w-5xl mx-auto lg:max-w-sm xl:max-w-md 2xl:max-w-xl 3xl:max-w-2xl 4xl:max-w-3xl"
    />
    <Image
      src="/images/nft-pants-and-shoulder.png"
      alt="dystopi nft armors"
      width={880}
      height={939}
      className="5xl:max-w-[880px] 5xl:translate-x-20 absolute right-1/2 top-3/4 max-w-sm -translate-y-1/4 translate-x-1/2 transform md:translate-x-1/3 lg:max-w-[480px] lg:translate-x-[50%] xl:right-full xl:top-1/2 xl:max-w-[340px] xl:translate-x-36 2xl:max-w-lg 3xl:translate-x-12 4xl:max-w-[600px] 4xl:translate-x-40"
    />
    <p
      className={`${vanguard.className} absolute bottom-auto right-0 top-0 text-3xl font-bold md:right-12 md:top-12 lg:text-5xl xl:-right-24 xl:bottom-24 xl:top-auto`}
    >
      ATLANTEAN
    </p>
  </div>
);

const NftContainer = () => {
  return (
    <section className="relative px-[10%] py-36 4xl:pl-[11%]">
      <Image
        src="/images/nft-bg-2.png"
        alt="dystopi game mechanism"
        height={1017}
        width={1024}
        className="absolute left-0 top-16 -z-10 hidden object-cover brightness-[0.5] lg:block"
      />

      <div className="flex flex-col items-start justify-start lg:flex-row">
        <div>
          <h2
            className={`${vanguard.className} mb-12 text-3xl font-semibold md:mb-36 md:text-6xl lg:mb-24 lg:text-5xl xl:max-w-[30ch] 2xl:text-7xl 4xl:max-w-none 4xl:text-9xl`}
          >
            UNLEASH YOUR STRATEGIC SKILLS AND EQUIP YOUR HERO WITH{" "}
            <span className="text-dystopi-yellow">POWERFUL NFT</span> ARMOR SETS
            AND WEAPONS
          </h2>

          <NftCharacter className="block xl:hidden" />

          <div className="flex flex-col-reverse items-start justify-start lg:flex-row">
            <div className="4xl:text-3xl">
              <p className="mb-16 max-w-md lg:mb-20 4xl:max-w-3xl">
                The right combination of NFT armor will greatly impact your
                hero&apos;s combat points, determining your resilence, attack
                power, supply capacity, and ability to fight solo or as part of
                a larger group.
              </p>
              <p className="max-w-md 4xl:max-w-3xl">
                With special armor, you&apos;ll be able to access areas of the
                map that would otherwise be out of reach. So, choose your NFT
                armor wisely and watch your hero&apos;s rewards soar at the end
                of each day! Get ready to dominate the battlefield and claim
                your share of glory!
              </p>
            </div>
          </div>
        </div>
        <NftCharacter className="hidden xl:block" />
      </div>
    </section>
  );
};

export default NftContainer;
