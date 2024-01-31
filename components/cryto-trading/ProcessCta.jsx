import CallToActions from "./CallToActions";
import SingleProcessBlock from "./SingleProcessBlock";

const ProcessCta = () => {
  return (
    <>
      {/* <!-- Process / CTA --> */}
      <section className="py-24 dark:bg-jacarta-800">
        <div className="container">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
              Get started in a few minutes
            </h2>
            <p className="text-lg dark:text-jacarta-300">
              Supports a variety of the most popular digital currencies.
            </p>
          </div>
          {/* End mx-auto */}

          <div className="mb-20 lg:flex lg:flex-nowrap lg:space-x-8">
            <SingleProcessBlock />
          </div>

          <CallToActions />
        </div>
      </section>
      {/* <!-- end process / cta -->  */}
    </>
  );
};

export default ProcessCta;
