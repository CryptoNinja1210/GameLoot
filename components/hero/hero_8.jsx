import Image from "next/image";
import Link from "next/link";

const Hero_8 = () => {
  return (
    <>
      {/* <!-- Hero --> */}
      <section className="hero relative py-20 md:pt-32">
        <picture className="pointer-events-none absolute inset-0 -z-10">
          <Image
            width={1519}
            height={773}
            priority
            className="h-full w-full"
            src="/images/gradient_dark.jpg"
            alt="gradient dark"
          />
        </picture>

        <Image
          width={613}
          height={415}
          src="/images/patterns/pattern_donut.png"
          alt="pattern donut"
          className="absolute right-0 top-0 -z-10"
        />

        <div className="container">
          <div className="mx-auto max-w-2xl pt-24 text-center">
            <h1 className="mb-6 font-display text-5xl text-white lg:text-6xl">
              Welcome to the Xhibiter Universe of Play!
            </h1>
            <p className="mx-auto mb-8 max-w-md text-lg leading-normal text-jacarta-50">
              A place where inspiration starts here. Play your favorite games
              and earn real money
            </p>
            <Link
              href="/profile/user_avatar"
              className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
            >
              Enter Account
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- end hero --> */}
    </>
  );
};

export default Hero_8;
