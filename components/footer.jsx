import Link from "next/link";
import { footerMenuList, socialIcons } from "../data/footer_data";
import Image from "next/image";

const footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}

      <footer className="dark:bg-jacarta-900 page-footer bg-white">
        <div className="container">
          <div className="grid grid-cols-6 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12">
            <div className="col-span-3 md:col-span-4">
              {/* <!-- Logo --> */}
              <Link href="#" className="mb-6 inline-block">
                <Image
                  width={130}
                  height={28}
                  src="/images/logo.png"
                  className="max-h-7 dark:hidden"
                  alt="Gameloot"
                />
              </Link>

              <Link href="#" className=" mb-6 inline-block">
                <Image
                  width={130}
                  height={28}
                  src="/images/gameloot.png"
                  className="hidden max-h-7 dark:block mb-6"
                  alt="GameLoot"
                />
              </Link>
              <p className="dark:text-jacarta-300 mb-12">
                Create, sell and collect truly rare digital artworks. Powered by
                blockchain technology.
              </p>

              {/* <!-- Socials --> */}
              <div className="flex space-x-5">
                {socialIcons.map((item) => {
                  const { id, href, text } = item;
                  return (
                    <Link
                      href={href}
                      key={id}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group cursor-pointer"
                    >
                      <svg className="icon group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white">
                        <use xlinkHref={`/icons.svg#icon-${text}`}></use>
                      </svg>
                    </Link>
                  );
                })}
              </div>
            </div>

            {footerMenuList.map((single) => (
              <div
                className={`col-span-full sm:col-span-3 md:col-span-2 ${single.diffClass}`}
                key={single.id}
              >
                <h3 className="font-display text-jacarta-700 mb-6 text-sm dark:text-white">
                  {single.title}
                </h3>
                <ul className="dark:text-jacarta-300 flex flex-col space-y-1">
                  {single.list.map((item) => {
                    const { id, href, text } = item;
                    return (
                      <li key={id}>
                        <Link
                          href={href}
                          className="hover:text-accent dark:hover:text-white"
                        >
                          {text}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0">
            <span className="dark:text-jacarta-400 text-sm">
              <span>© {new Date().getFullYear()} Gameloot</span>
            </span>

            <ul className="dark:text-jacarta-400 flex flex-wrap space-x-4 text-sm">
              <li>
                <Link
                  href="/tarms"
                  className="hover:text-accent dark:hover:text-white"
                >
                  Terms and conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/tarms"
                  className="hover:text-accent dark:hover:text-white"
                >
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
