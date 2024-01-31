import HeadLine from "../headLine";
import Image from "next/image";
import DaoBlock from "./DaoBlock";

const NewseLatter2 = () => {
  return (
    <section className="relative py-24">
      <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <Image
          width={1519}
          height={935}
          src="/images/gradient.jpg"
          alt="gradient"
          className="h-full w-full object-cover"
        />
      </picture>
      <picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
        <Image
          width={1519}
          height={935}
          src="/images/gradient_dark.jpg"
          alt="gradient dark"
          className="h-full w-full object-cover"
        />
      </picture>

      <div className="container">
        {/* Start global distribute and dao idea */}
        <div className="lg:flex lg:space-x-12">
          <DaoBlock />
        </div>
        {/* End global distribute and dao idea */}

        {/* start call to action weekly digest */}
        <div className="rounded-2.5xl bg-white px-12 py-20 text-center dark:bg-jacarta-700">
          <HeadLine
            text=" Weekly Digest"
            classes="mb-5 font-display text-3xl text-jacarta-700 dark:text-white"
          />

          <p className="mx-auto max-w-2xl text-center text-lg text-jacarta-700 dark:text-white">
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating Xhibiter
          </p>

          <div className="mx-auto mt-7 max-w-md text-center">
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="dark:bg-jacarta-700 dark:border-jacarta-600 focus:ring-accent border-jacarta-100 w-full rounded-full border py-3 px-4 dark:text-white dark:placeholder-white"
              />
              <button className="hover:bg-accent-dark font-display bg-accent absolute top-2 right-2 rounded-full px-6 py-2 text-sm text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* end call to action weekly digest */}
      </div>
    </section>
  );
};

export default NewseLatter2;
