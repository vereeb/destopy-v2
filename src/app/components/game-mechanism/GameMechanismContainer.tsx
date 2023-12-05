import Link from "next/link";
import { vanguard } from "@/app/fonts";
import Image from "next/image";

const GameMechanismContainer = () => {
  return (
    <section
      aria-labelledby="game-mechanism-section"
      className="grid w-full grid-cols-1 pb-36 xl:grid-cols-12"
    >
      <div className="relative mb-20 px-[10%] lg:pt-[7%] xl:col-span-7 xl:mb-0 4xl:px-[24%]">
        <Image
          src="/images/game-mechanism-bg-2.png"
          alt="dystopi game mechanism"
          fill
          className="relative -z-10 object-cover brightness-[0.35]"
        />

        <h2
          className={`${vanguard.className} mb-10 max-w-[12ch] text-6xl md:text-7xl lg:mb-16 lg:text-9xl 4xl:text-[12rem]`}
          id="game-mechanism-section"
        >
          <span className="text-dystopi-yellow">GAME</span> MECHANISM
        </h2>

        <p
          className={`${vanguard.className} mb-8 text-2xl md:text-3xl 4xl:text-6xl`}
        >
          DYSEUM
        </p>

        <div className="flex max-w-screen-sm flex-col items-start justify-between gap-4 pb-48 text-sm md:flex-row md:gap-20 md:text-base 4xl:max-w-screen-lg 4xl:text-3xl">
          <p>
            Get ready to be rewarded for your bravery in the war for Dyseum
            tokens! Dyseum is a currency that is accepted by all four members of
            the alliance, making it the perfect tool for financing the war,
            producing weapons, and distributing rewards. Made of a special
            alloy, there is a limited supply of Dyseum, with only 1,000,000,000
            tokens in existence.
          </p>
          <div>
            <p className="mb-4">
              70% of these tokens have been set aside to finance the costs of
              the war, and if you join the fight, you can benefit from the prize
              pool.
            </p>
            <p>
              The alliance has divided the war budget into two-year periods,
              with 479,452 Dyseum tokens being distributed daily to the bravest
              warriors in the first two years. Each subsequent two-year period,
              the daily reward will be halved, so don&apos;t miss your chance to
              be a part of this exciting adventure and earn your share of the
              Dyseum tokens!
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center bg-dystopi-sand px-8 py-8 text-dystopi-black lg:px-12 lg:py-28 xl:col-span-5 4xl:py-64">
        <div className="mb-8 flex flex-col items-start justify-start xl:min-w-[40vw] 4xl:pl-24">
          <article className="mb-8 border-b-2 border-dystopi-black pb-6 4xl:mb-12">
            <h3
              className={`${vanguard.className} mb-4 text-4xl md:text-5xl lg:mb-8 lg:text-7xl 4xl:mb-12 4xl:text-9xl`}
            >
              SHORT STORY
            </h3>

            <div className="flex flex-col items-start gap-4 text-sm sm:gap-8 md:flex-row md:gap-24 md:text-base xl:gap-2 2xl:gap-4 4xl:gap-24 4xl:text-3xl">
              <p className="xl:max-w-xs 4xl:max-w-3xl">
                In year 312 of New Age, a symbiotic olien species colled Meer
                visits our plonet. Their purpose was to make contact and warn us
                of the impending danger as well as to find refuge among us. The
                danger comes from
              </p>
              <Link
                href="/"
                className="mb-0 mt-auto min-w-[12ch] font-semibold"
                prefetch={false}
              >
                / READ MORE /
              </Link>
            </div>
          </article>
          <article className="mb-8 border-b-2 border-dystopi-black pb-6 4xl:mb-12">
            <h3
              className={`${vanguard.className} mb-4 text-4xl md:text-5xl lg:mb-8 lg:text-7xl 4xl:mb-12 4xl:text-9xl`}
            >
              DYSEUM CURRENCY
            </h3>

            <div className="flex flex-col items-start gap-4 text-sm sm:gap-8 md:flex-row md:gap-24 md:text-base xl:gap-2 2xl:gap-4 4xl:gap-24 4xl:text-3xl">
              <p className="xl:max-w-xs 4xl:max-w-3xl">
                Dyseum plays a dual role in Dystopi: it is on in-game currency
                and a versatile crypto token that provides the Play&Earn noture
                of the game. A fixed amount of daily Dyseum reword is divided
                among the players
              </p>
              <Link
                href="/"
                className="mb-0 mt-auto min-w-[12ch] font-semibold"
                prefetch={false}
              >
                / READ MORE /
              </Link>
            </div>
          </article>
          <article className="mb-8 border-b-2 border-dystopi-black pb-6 4xl:mb-12">
            <h3
              className={`${vanguard.className} mb-4 text-4xl md:text-5xl lg:mb-8 lg:text-7xl 4xl:mb-12 4xl:text-9xl`}
            >
              NFT ARMOR SET
            </h3>

            <div className="flex flex-col items-start gap-4 text-sm sm:gap-8 md:flex-row md:gap-24 md:text-base xl:gap-2 2xl:gap-4 4xl:gap-24 4xl:text-3xl">
              <p className="xl:max-w-xs 4xl:max-w-3xl">
                NFTs, or Non-Fungible Tokens, are unique digitol assets that ore
                stored on a blockchain network. They represent ownership and
                authenticity of a particular item or collectable and are
                becoming increasingly
              </p>
              <Link
                href="/"
                className="mb-0 mt-auto min-w-[12ch] font-semibold"
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
