/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const FaqAccordion = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="mb-14">
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600"
        open={open === 1}
        icon={<Icon id={1} open={open} />}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white text-md"
          onClick={() => handleOpen(1)}
        >
          What is tax and legal advisory?
        </AccordionHeader>
        <AccordionBody className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700 text-base h-full">
          Learn how to create your very first NFT and how to create your NFT
          collections. Unique, fully 3D and built to unite the design
          multiverse. Designed and styled by Digimental.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600"
        open={open === 2}
        icon={<Icon id={2} open={open} />}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white text-md"
          onClick={() => handleOpen(2)}
        >
          How can I stay safe and protect my NFTs ?
        </AccordionHeader>
        <AccordionBody className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700 h-full text-base">
          Learn how to create your very first NFT and how to create your NFT
          collections. Unique, fully 3D and built to unite the design
          multiverse. Designed and styled by Digimental.
        </AccordionBody>
      </Accordion>
      <Accordion
        className="mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600"
        open={open === 3}
        icon={<Icon id={3} open={open} />}
      >
        <AccordionHeader
          className="accordion-button relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-jacarta-700 dark:bg-jacarta-700 dark:text-white text-md"
          onClick={() => handleOpen(3)}
        >
          Do you give guarantee and after sales service?
        </AccordionHeader>
        <AccordionBody className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700 h-full text-base">
          Learn how to create your very first NFT and how to create your NFT
          collections. Unique, fully 3D and built to unite the design
          multiverse. Designed and styled by Digimental.
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
