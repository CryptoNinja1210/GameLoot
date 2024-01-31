import Image from "next/image";

const headLine = ({ text, classes, image, pera }) => {
  return (
    <div>
      <h2 className={classes}>
        {image && (
          <Image
            width={80}
            height={80}
            src={image}
            alt="headling"
            className={"mr-1 inline-block h-6 w-6 bg-contain bg-center text-xl"}
          />
        )}

        {text}
      </h2>
      {pera && (
        <p className="dark:text-jacarta-300 mt-6">
          While we take pride in being the first and largest marketplace and in
          our robust feature set, we also help our partners succeed with the
          following...
        </p>
      )}
    </div>
  );
};

export default headLine;
