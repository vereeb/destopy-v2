import Image from 'next/image';
import LandingContainer from './components/landing/LandingContainer';
import NftContainer from './components/nft-container/NftContainer';
import TeamContainer from './components/team/TeamContainer';
import TokenomicsContainer from './components/tokenomics/TokenomicsContainer';
import GameMechanismContainer from './components/game-mechanism/GameMechanismContainer';
import WhitePaperContainer from './components/white-paper/WhitePaperContainer';
import SocialIconsContainer from './components/social-icons/SocialIconsContainer';
import RoadmapContainer from './components/roadmap/Roadmap';

export default function Home() {
	return (
		<main className="max-w-[100vw] overflow-x-hidden flex min-h-screen flex-col items-center justify-between">
			<SocialIconsContainer />
			<LandingContainer />
			<GameMechanismContainer />
			<NftContainer />
			<TokenomicsContainer />
			<TeamContainer />
			<RoadmapContainer />
			<WhitePaperContainer />
		</main>
	);
}
