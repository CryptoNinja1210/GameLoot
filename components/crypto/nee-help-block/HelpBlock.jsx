const HelpBlock = () => {
  return (
    <>
      <div className="mt-12 md:flex md:space-x-8 lg:justify-end">
        <div className="relative mb-8 flex-1 self-end rounded-2.5xl bg-green p-8 shadow-2xl">
          <div className="absolute right-4 top-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="h-12 w-12 fill-white/50"
            >
              <path fill="none" d="M0 0L24 0 24 24 0 24z" />
              <path d="M20 2c.552 0 1 .448 1 1v3.757l-2 2V4H5v16h14v-2.758l2-2V21c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V3c0-.552.448-1 1-1h16zm1.778 6.808l1.414 1.414L15.414 18l-1.416-.002.002-1.412 7.778-7.778zM13 12v2H8v-2h5zm3-4v2H8V8h8z" />
            </svg>
          </div>
          <div>
            <span className="mb-2 block font-display text-lg text-white">
              Blog
            </span>
            <p className="mb-4 text-white">
              Stay up to date with the latest stories and commentary.
            </p>
            <a href="#" className="font-bold text-white underline">
              Learn More
            </a>
          </div>
        </div>
        <div className="relative mb-8 flex-1 self-end rounded-2.5xl bg-accent p-8 py-16 shadow-2xl">
          <div className="absolute right-4 top-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="h-12 w-12 fill-white/50"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M22 17.002a6.002 6.002 0 0 1-4.713 5.86l-.638-1.914A4.003 4.003 0 0 0 19.465 19H17a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.938a8.001 8.001 0 0 0-15.876 0H7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5C2 6.477 6.477 2 12 2s10 4.477 10 10V17.002zM20 17v-4h-3v4h3zM4 13v4h3v-4H4z" />
            </svg>
          </div>
          <div>
            <span className="mb-2 block font-display text-lg text-white">
              24/7 Chat Support
            </span>
            <p className="mb-4 text-white">
              Get our friendly customer service agents at your service.
            </p>
            <a href="#" className="font-bold text-white underline">
              Chat Now
            </a>
          </div>
        </div>
      </div>
      {/* End ."mt-12 */}

      <div className="relative">
        <div className="relative mx-auto self-start rounded-2.5xl bg-blue p-8 shadow-2xl md:max-w-xs">
          <div className="absolute right-4 top-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="h-12 w-12 fill-white/50"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M5.455 15L1 18.5V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v12H5.455zm-.692-2H16V4H3v10.385L4.763 13zM8 17h10.237L20 18.385V8h1a1 1 0 0 1 1 1v13.5L17.545 19H9a1 1 0 0 1-1-1v-1z" />
            </svg>
          </div>

          <div>
            <span className="mb-2 block font-display text-lg text-white">
              FAQs
            </span>
            <p className="mb-4 text-white">
              View FAQs for detailed instructions on specific features.
            </p>
            <a href="#" className="font-bold text-white underline">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpBlock;
