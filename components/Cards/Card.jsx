import Link from "next/link";
import Image from "next/image";
import { ThirdwebNftMedia } from "@thirdweb-dev/react";

const Card = ({metadata}) => {
  return (
    <article key={metadata.id}>
      <div className="rounded-2.5xl border border-jacarta-100 bg-white  transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
        <div className="w-full flex justify-center rounded-t-lg relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <ThirdwebNftMedia metadata={metadata} className=" max-w-xs transition duration-300 ease-in-out hover:scale-110"/>
        </div>
        <Link
          href="/collection/avatar_1"
          className="mt-5 mb-2 flex items-center font-display text-base text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
        >
          {metadata.title}
          {metadata.verified && (
            <div
              className="flex h-[1.125rem] w-[1.125rem] ml-1 mb-px items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
              title="Verified Collection"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                className="h-[.875rem] w-[.875rem] fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
              </svg>
            </div>
          )}
        </Link>

        <div className="font-medium text-2xs text-jacarta-700 dark:text-white mb-2">
          {0}
        </div>
        <div className="font-medium text-2xs text-jacarta-500 dark:text-jacarta-300">
          Last Sale:{" "}
          <span className="text-jacarta-700 dark:text-white">
            {0}
          </span>
        </div>
      </div>
    </article>
  );
};

export default Card;
