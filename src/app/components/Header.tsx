import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="4xl:py-8 fixed z-50 flex w-full items-center justify-between bg-dystopi-black/30 px-[10%] py-6">
      <Link href="/">
        <Image src="/logo.png" width={18} height={24} alt="Dystopi logo" />
      </Link>
      <ul>
        <li>
          <Link
            href="https://forms.gle/uYBTeUG3PV5SArEt5"
            className="text-zinc-950 4xl:text-3xl rounded-full bg-dystopi-yellow px-10 py-2 text-dystopi-black"
            target="_blank"
            prefetch={false}
          >
            JOIN WHITELIST
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
