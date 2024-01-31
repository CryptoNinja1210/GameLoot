import Image from "next/image";
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
        <div className="text-2xs absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center space-x-1 rounded-full bg-white py-2.5 px-6 font-medium">
          <Image
            width={40}
            height={40}
            src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/23f3.png"
            alt="emoji"
            className="h-3.5 w-3.5 shrink-0 bg-contain bg-center"
          />
          <span className="js-countdown-timer text-jacarta-700 shrink-0 whitespace-nowrap">
            {days} : {hours} : {minutes} : {seconds}
          </span>
          <span
            className="js-countdown-left text-jacarta-700"
            data-countdownleft="left"
          >
            left
          </span>
        </div>
      </>
    );
  }
};

const Countdown_timer = ({ time }) => {
  return <Countdown date={Date.now() + time} renderer={renderer}></Countdown>;
};

export default Countdown_timer;
