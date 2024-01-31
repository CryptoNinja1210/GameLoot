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
        <div
          className="js-countdown-single-timer mt-3 flex space-x-4"
          data-countdown="2022-09-07T19:40:30"
          data-expired="This auction has ended"
        >
          <span className="countdown-days text-jacarta-700 dark:text-white">
            <span className="js-countdown-days-number text-lg font-medium lg:text-[1.5rem]">
              {days}
            </span>
            <span className="block text-xs font-medium tracking-tight">
              Days
            </span>
          </span>
          <span className="countdown-hours text-jacarta-700 dark:text-white">
            <span className="js-countdown-hours-number text-lg font-medium lg:text-[1.5rem]">
              {hours}
            </span>
            <span className="block text-xs font-medium tracking-tight">
              Hrs
            </span>
          </span>
          <span className="countdown-minutes text-jacarta-700 dark:text-white">
            <span className="js-countdown-minutes-number text-lg font-medium lg:text-[1.5rem]">
              {minutes}
            </span>
            <span className="block text-xs font-medium tracking-tight">
              Min
            </span>
          </span>
          <span className="countdown-seconds text-jacarta-700 dark:text-white">
            <span className="js-countdown-seconds-number text-lg font-medium lg:text-[1.5rem]">
              {seconds}
            </span>
            <span className="block text-xs font-medium tracking-tight">
              Sec
            </span>
          </span>
        </div>
      </>
    );
  }
};

const items_Countdown_timer = ({ time = 500000 }) => {
  return <Countdown date={Date.now() + time} renderer={renderer}></Countdown>;
};

export default items_Countdown_timer;
