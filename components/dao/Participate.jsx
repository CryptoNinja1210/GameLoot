import Faq from "./Faq";
import VideoBlock from "./VideoBlock";

const Participate = () => {
  return (
    <>
      {/* <!-- Video / FAQ --> */}
      <section className="bg-light-base py-24 dark:bg-jacarta-800">
        <div className="container">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
              How to Participate
            </h2>
            <p className="text-lg dark:text-jacarta-300">
              NFTs can be used to represent items such as photos, videos, audio,
              and other types of digital files.
            </p>
          </div>
          <div className="lg:flex lg:flex-nowrap">
            <div className="lg:w-[59%]">
              <VideoBlock />
            </div>
            {/* End VideoBlock */}

            <div className="lg:w-[41%] lg:pl-24">
              <p className="mb-6 dark:text-jacarta-300">
                DAOs are said to be the future of work. As a concept and a
                technology, DAO can transform the structure of a legacy business
                by empowering member-owned communities and removing centralized
                leadership.
              </p>
              <a
                href="#"
                className="mb-8 inline-block text-sm font-bold text-accent"
              >
                Learn More
              </a>
              <Faq />
            </div>
            {/* End Faq */}
          </div>
        </div>
      </section>
      {/* <!-- end video / faq -->   */}
    </>
  );
};

export default Participate;
