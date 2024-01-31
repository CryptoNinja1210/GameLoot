import Image from "next/image";

const Team = () => {
  const teamContent = [
    {
      id: 1,
      avatar: "/images/team/team_1.jpg",
      name: "Alex Grey",
      designation: "CEO, Director",
      linkedinLink: "https://www.linkedin.com/",
      twitterLink: "https://twitter.com/",
    },
    {
      id: 2,
      avatar: "/images/team/team_2.jpg",
      name: "Ashton Kutsher",
      designation: "Entrepreneur & Author",
      linkedinLink: "https://www.linkedin.com/",
      twitterLink: "https://twitter.com/",
    },
    {
      id: 3,
      avatar: "/images/team/team_3.jpg",
      name: "John Ferris",
      designation: "Developer & Investor",
      linkedinLink: "https://www.linkedin.com/",
      twitterLink: "https://twitter.com/",
    },
    {
      id: 4,
      avatar: "/images/team/team_4.jpg",
      name: "Belinda Bing",
      designation: "Former COO Shopee",
      linkedinLink: "https://www.linkedin.com/",
      twitterLink: "https://twitter.com/",
    },
    {
      id: 5,
      avatar: "/images/team/team_5.jpg",
      name: "Camille Alforque",
      designation: "Chief Creative Officer",
      linkedinLink: "https://www.linkedin.com/",
      twitterLink: "https://twitter.com/",
    },
  ];

  return (
    <section className="relative py-24">
      <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <Image
          width={1519}
          height={773}
          priority
          src="/images/gradient_light.jpg"
          alt="gradient"
          className="h-full w-full object-cover"
        />
      </picture>
      <picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
        <Image
          width={1519}
          height={773}
          priority
          src="/images/gradient_dark.jpg"
          alt="gradient dark"
          className="h-full w-full object-cover"
        />
      </picture>

      <div className="container">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
            Meet our Crypto Experts
          </h2>
          <p className="text-lg dark:text-jacarta-200">
            NFTs can be used to represent items such as photos, videos, audio,
            and other types of digital files.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-[1.875rem] lg:grid-cols-5">
          {teamContent.map((item) => (
            <div
              className="rounded-2lg border border-jacarta-100 bg-white p-8 text-center transition-shadow hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-700"
              key={item.id}
            >
              <Image
                width={130}
                height={130}
                src={item.avatar}
                className="mx-auto mb-6 h-[8.125rem] w-[8.125rem] rounded-2.5xl object-cover"
                alt="team"
              />
              <h3 className="font-display text-md text-jacarta-700 dark:text-white">
                {item.name}
              </h3>
              <span className="text-2xs font-medium tracking-tight text-jacarta-400">
                {item.designation}
              </span>
              <div className="mt-3 flex justify-center space-x-5">
                <a
                  href={item.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin"
                    className="h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                  </svg>
                </a>
                <a
                  href={item.twitterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter"
                    className="h-4 w-4 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
