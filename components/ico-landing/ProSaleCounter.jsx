import Countdown from "react-countdown";

const Completionist = () => {
  return (
    <div className="text-2xs absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center space-x-1 rounded-full bg-white py-2.5 px-6 font-medium">
      <span
        className="js-countdown-timer text-jacarta-700 shrink-0 whitespace-nowrap"
        data-countdown="2022-05-14T10:45:30"
        data-expired="This auction has ended"
      >
        This auction has ended
      </span>
    </div>
  );
};

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <>
        <div className="js-countdown-single-timer mb-10 flex space-x-2 text-center md:space-x-4">
          <span className="countdown-days flex h-[100px] w-[100px] flex-col justify-center rounded-2lg border border-jacarta-100 bg-white text-jacarta-700 dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white">
            <span className="js-countdown-days-number font-display text-xl font-medium md:text-3xl">
              {days}
            </span>
            <span className="text-md tracking-tight text-jacarta-500 dark:text-jacarta-300">
              Days
            </span>
          </span>
          {/* End days count */}

          <span className="countdown-hours flex h-[100px] w-[100px] flex-col justify-center rounded-2lg border border-jacarta-100 bg-white text-jacarta-700 dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white">
            <span className="js-countdown-hours-number font-display text-xl font-medium md:text-3xl">
              {hours}
            </span>
            <span className="text-md tracking-tight text-jacarta-500 dark:text-jacarta-300">
              Hrs
            </span>
          </span>
          {/* End Hrs Count count */}

          <span className="countdown-minutes flex h-[100px] w-[100px] flex-col justify-center rounded-2lg border border-jacarta-100 bg-white text-jacarta-700 dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white">
            <span className="js-countdown-minutes-number font-display text-xl font-medium md:text-3xl">
              {minutes}
            </span>
            <span className="text-md tracking-tight text-jacarta-500 dark:text-jacarta-300">
              Min
            </span>
          </span>
          {/* End Min count */}

          <span className="countdown-seconds flex h-[100px] w-[100px] flex-col justify-center rounded-2lg border border-jacarta-100 bg-white text-jacarta-700 dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white">
            <span className="js-countdown-seconds-number font-display text-xl font-medium md:text-3xl">
              {seconds}
            </span>
            <span className="text-md tracking-tight text-jacarta-500 dark:text-jacarta-300">
              Sec
            </span>
          </span>
          {/* End Sec count */}
        </div>
      </>
    );
  }
};

const ProSaleCounter = ({ time = 50000000 }) => {
  const targetDate = new Date(Date.UTC(2023, 12, 1));
  return <Countdown date={targetDate.getTime() + time} renderer={renderer} />;
};

export default ProSaleCounter;
