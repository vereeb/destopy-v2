import { vanguard } from "@/app/fonts";
import Image from "next/image";

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
  margin,
}: TokenomicCardProps) => (
  <div className="mb-1 grid grid-cols-2 gap-1 md:mb-4 lg:mb-0">
    <div className="mb-2 flex">
      <p
        className={`${vanguard.className} ${color} ${
          margin && margin
        } 4xl:text-9xl text-6xl font-semibold md:text-7xl`}
      >
        {percent}
      </p>
      <div className="flex flex-col justify-end">
        <p
          className={`4xl:text-5xl text-xl font-semibold md:text-2xl ${color}`}
        >
          %
        </p>
        <p className="4xl:text-3xl text-sm text-dystopi-yellow md:text-base">
          {category}
        </p>
      </div>
    </div>

    <div className="4xl:text-3xl flex flex-col justify-end text-sm md:text-base">
      <p>{text}</p>
      <p className="text-dystopi-yellow">{subtext}</p>
    </div>
  </div>
);

const TokenomicsContainer = () => {
  return (
    <section
      aria-labelledby="tokenomics-container-title"
      className="4xl:max-w-[80%] 4xl:px-[1%] relative grid w-full grid-cols-1 px-4 py-16 md:px-[10%] lg:grid-cols-2 lg:py-36"
    >
      <div className="absolute -z-20 h-full w-full">
        <Image
          src="/images/tokenomics-bg.png"
          alt="dystopi tokemonics"
          fill
          className="object-cover brightness-[0.35] lg:brightness-50"
        />
        <div className="absolute right-0 z-10 hidden h-full w-1/4 bg-gradient-to-r from-dystopi-black/0 via-dystopi-black/80 to-dystopi-black/100 lg:block"></div>
      </div>

      <div>
        <div>
          <h2
            className={`${vanguard.className} 4xl:text-[12rem] text-6xl font-semibold md:text-7xl lg:text-9xl`}
            id="tokenomics-container-title"
          >
            TOKENOMICS
          </h2>
          <div className="flex items-end justify-start gap-2">
            <p
              className={`${vanguard.className} 4xl:text-9xl text-4xl font-semibold text-dystopi-yellow md:text-5xl lg:text-7xl`}
            >
              1B
            </p>
            <div className="4xl:text-3xl text-xs md:text-sm">
              <p>Total Supply</p>
              <p className="text-dystopi-yellow">TOKENS</p>
            </div>
          </div>
        </div>
        <div className="relative max-w-max">
          <Image
            width={800}
            height={800}
            src="/images/Diagram-01.svg"
            alt="dystopi token supply chart"
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <p className="4xl:text-3xl text-center text-sm text-dystopi-yellow md:text-base">
              1 0000 000 000
            </p>
            <p className="4xl:text-3xl text-center text-sm text-dystopi-yellow md:text-base">
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
            text="5% after Public sale 100 Weeks WLV"
            margin="sm:ml-[1.5ch]"
          />
          <TokenomicCard
            category="Presale"
            color="text-[#E0C3DE]"
            percent="0.5"
            subtext="5 000 000 tokens"
            text="35 WeeksW LV"
          />
          <TokenomicCard
            category="Strategic"
            color="text-[#E0463C]"
            percent="5"
            subtext="50 000 000 tokens"
            text="5% after Public sale then 100 Weeks WLV"
            margin="sm:ml-[1.5ch]"
          />
          <TokenomicCard
            category="Development"
            color="text-[#FFB800]"
            percent="5"
            subtext="50 000 000 tokens"
            text="100 Weeks WLV"
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
            text="100 Weeks WLV"
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
            text="52 Week cliff, then 100 Weeks WLV"
            margin="sm:ml-[1.5ch]"
          />
          <TokenomicCard
            category="Team"
            color="text-[#E67C74]"
            percent="9"
            subtext="90 000 000 tokens"
            text="52 Week cliff, then 100 Weeks WLV"
            margin="sm:ml-[1.5ch]"
          />
          <TokenomicCard
            category="Airdrop"
            color="text-[#7CC387]"
            percent="2"
            subtext="20 000 000 tokens"
            text="No vesting"
            margin="sm:ml-[1.5ch]"
          />
        </div>
      </div>
    </section>
  );
};

export default TokenomicsContainer;
