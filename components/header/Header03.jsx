import Image from "next/image";
import Link from "next/link";
import Logo from "./../../public/images/logo.png";
import WhiteLogo from "./../../public/images/gameloot.png";

export default function Header03() {
  return <>
    <header className="js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors">
      <div className="container">
        <div className="flex items-center py-[1.5625rem] lg:py-[1.8125rem]">
          <Link href="/" className="shrink-0 lg:mr-14" >

            <div className="max-h-7 dark:hidden">
              <Image
                src={Logo}
                height={28}
                width={130}
                alt="Xhibiter | NFT Marketplace"
              />
            </div>
            <div className="hidden max-h-7 dark:block">
              <Image
                src={WhiteLogo}
                height={28}
                width={130}
                alt="Xhibiter | NFT Marketplace"
              />
            </div>

          </Link>
          {/* End logo */}

          <span className="font-display mt-1 hidden text-lg font-semibold lg:inline-block">
            Status
          </span>

          <a
            href="#"
            className="bg-accent shadow-accent-volume hover:bg-accent-dark ml-auto inline-block rounded-full py-2.5 px-8 text-center text-sm font-semibold text-white transition-all"
          >
            <span className="hidden lg:block">Subscribe to Updates</span>
            <span className="lg:hidden">Subscribe</span>
          </a>
          {/* right content */}
        </div>
      </div>
    </header>
  </>;
}
