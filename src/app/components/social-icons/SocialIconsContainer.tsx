import {
	FaTelegram,
	FaMedium,
	FaReddit,
	FaTwitter,
	FaFacebook
} from 'react-icons/fa';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import Link from 'next/link';

const SocialIconsContainer = () => {
	return (
		<aside className="gap-8 flex flex-row lg:flex-col text-dystopi-sand mix-blend-difference fixed bottom-6 lg:bottom-auto right-1/2 transform translate-x-1/2 lg:translate-x-0 lg:top-60 lg:right-6 z-30">
			<Link href="/">
				<FaTelegram size={24} className="mb-4 3xl-mb-8" />
			</Link>

			<Link href="/">
				<FaMedium size={24} className="mb-4 3xl-mb-8" />
			</Link>

			<Link href="/">
				<FaReddit size={24} className="mb-4 3xl-mb-8" />
			</Link>

			<Link href="/">
				<FaTwitter size={24} className="mb-4 3xl-mb-8" />
			</Link>

			<Link href="/">
				<BiLogoInstagramAlt size={24} className="mb-4 3xl-mb-8" />
			</Link>

			<Link href="/">
				<FaFacebook size={24} className="mb-4 3xl-mb-8" />
			</Link>
		</aside>
	);
};

export default SocialIconsContainer;
