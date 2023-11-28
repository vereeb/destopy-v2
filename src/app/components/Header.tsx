import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
	return (
		<header className="fixed w-full bg-dystopi-black/30 flex justify-between items-center py-6 3xl:py-8 px-[10%] z-50">
			<Link href="/">
				<Image
					src="/logo.png"
					width={18}
					height={24}
					alt="Dystopi logo"
				/>
			</Link>
			<ul>
				<li>
					<Link
						href="/"
						className="3xl:text-3xl text-zinc-950 py-2 px-10 rounded-full bg-dystopi-yellow text-dystopi-black"
					>
						JOIN WHITELIST
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
