import Image from "next/image";
import LandingContainer from "./components/landing/LandingContainer";
import NftContainer from "./components/nft-container/NftContainer";
import TeamContainer from "./components/team/TeamContainer";
import TokenomicsContainer from "./components/tokenomics/TokenomicsContainer";
import GameMechanismContainer from "./components/game-mechanism/GameMechanismContainer";
import WhitePaperContainer from "./components/white-paper/WhitePaperContainer";
import SocialIconsContainer from "./components/social-icons/SocialIconsContainer";
import RoadmapContainer from "./components/roadmap/Roadmap";
import Footer from "./components/Footer";
import GalleryContainer from "./components/gallery-container/GalleryContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-[100vw] flex-col items-center justify-between overflow-x-hidden">
      <SocialIconsContainer />
      <LandingContainer />
      <GameMechanismContainer />
      <NftContainer />
      <GalleryContainer />
      <TokenomicsContainer />
      <RoadmapContainer />
      <TeamContainer />
      <WhitePaperContainer />
      <Footer />
    </main>
  );
}
