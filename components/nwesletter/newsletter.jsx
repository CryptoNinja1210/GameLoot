import React from "react";

const Newsletter = () => {
  return (
    <div>
      {/* <!-- Newsletter --> */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-32 after:absolute after:inset-0 after:bg-[#000000]/50"
        // style="background-image: url(img/nft-game/newsletter.jpg)"
        style={{
          backgroundImage: `url("/images/nft-game/newsletter.jpg")`,
        }}
      >
        <div className="container relative z-10">
          <h2 className="mx-auto mb-6 max-w-lg text-center font-display text-2xl text-white">
            Ready to be a Part of Our Journey? Make the Most of Your World
          </h2>

          <p className="mx-auto max-w-md text-center text-lg text-white">
            Be part of our amazing community and development updates, giveaways,
            events. Stay tuned for the news.more!
          </p>

          <div className="mx-auto mt-10 max-w-md text-center">
            <form className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-full border border-jacarta-600 bg-jacarta-700 py-3 px-4 text-white placeholder-white focus:ring-accent"
              />
              <button className="absolute top-2 right-2 rounded-full bg-accent px-6 py-2 font-display text-sm text-white hover:bg-accent-dark">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* <!-- end newsletter --> */}
    </div>
  );
};

export default Newsletter;
