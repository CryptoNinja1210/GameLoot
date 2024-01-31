import Link from "next/link";
import React from "react";
import { careers_positions_data } from "../../data/careers_positions_data";

const Positions = () => {
  return (
    <div>
      {/* <!-- Positions --> */}
      <section className="relative pb-24">
        <div className="container">
          <div className="grid gap-7 md:grid-cols-3">
            {careers_positions_data.map((item) => {
              const { id, title, experience, desc } = item;
              return (
                <div
                  key={id}
                  className="rounded-2.5xl border border-jacarta-100 bg-white p-12 text-center transition-shadow hover:shadow-xl dark:border-jacarta-600 dark:bg-jacarta-700"
                >
                  <h3 className="mb-1 font-display text-lg text-jacarta-700 dark:text-white">
                    {title}
                  </h3>
                  <span className="mb-4 block text-xs text-jacarta-400 dark:text-jacarta-300">
                    {experience}
                  </span>
                  <p className="mb-8 dark:text-jacarta-300">{desc}</p>
                  <Link
                    href="/contact"
                    className="text-sm font-bold text-accent"
                  >
                    Apply Now
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="mx-auto mt-20 max-w-md rounded-2lg bg-light-base py-5 px-10 text-center dark:bg-jacarta-700 sm:flex sm:items-center sm:text-left">
            <h4 className="mb-2 text-center font-display font-semibold text-jacarta-700 dark:text-white sm:mb-0 sm:text-left">
              Didn’t see your dream job?
            </h4>
            <Link
              href="/contact"
              className="ml-auto inline-block rounded-full bg-accent py-2.5 px-8 text-center text-sm font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
              
            >
              <span>Get In Touch</span>
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- end positions --> */}
    </div>
  );
};

export default Positions;
