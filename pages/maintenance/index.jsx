import Image from "next/image";
import Meta from "../../components/Meta";

const index = () => {
  return (
    <>
      <Meta title="Maintenance" />
      {/* End page title */}

      <section className="relative h-screen after:absolute after:inset-0 after:bg-jacarta-900/50">
        <Image
          width={1519}
          height={722}
          priority
          src="/images/maintenance.jpg"
          alt="maintanance"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="container relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-8 text-lg leading-normal text-white">
              We will be back soon...
            </p>
            <h1 className="mb-6 font-display text-4xl text-white md:text-6xl">
              Website Is Under Maintanance
            </h1>
            <a
              href="index.html"
              className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
