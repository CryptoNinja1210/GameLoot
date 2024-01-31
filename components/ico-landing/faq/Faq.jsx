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
      } h-4 w-4 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const itemContent = [
  {
    id: 1,
    title: "How an Initial Coin Offering (ICO) Works",
    descriptions: ` Learn how to create your very first NFT and how to create your NFT
    collections. Unique, fully 3D and built to unite the design
    multiverse. Designed and styled by Digimental.`,
  },
  {
    id: 2,
    title: " White Paper Release",
    descriptions: ` Learn how to create your very first NFT and how to create your NFT
    collections. Unique, fully 3D and built to unite the design
    multiverse. Designed and styled by Digimental.`,
  },
  {
    id: 3,
    title: " What Happens to the Funds?",
    descriptions: ` Learn how to create your very first NFT and how to create your NFT
    collections. Unique, fully 3D and built to unite the design
    multiverse. Designed and styled by Digimental.`,
  },
  {
    id: 4,
    title: " Who Can Launch an ICO?",
    descriptions: ` Learn how to create your very first NFT and how to create your NFT
    collections. Unique, fully 3D and built to unite the design
    multiverse. Designed and styled by Digimental.`,
  },
  {
    id: 5,
    title: " Buying Into an ICO",
    descriptions: ` Learn how to create your very first NFT and how to create your NFT
    collections. Unique, fully 3D and built to unite the design
    multiverse. Designed and styled by Digimental.`,
  },
];

const FaqAccordion = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      {itemContent.map((item) => (
        <Accordion
          className="accordion-item mb-5 overflow-hidden rounded-lg border border-jacarta-100 dark:border-jacarta-600 h-auto"
          key={item.id}
          open={open === item.id}
          icon={<Icon id={item.id} open={open} />}
        >
          <AccordionHeader
            className="accordion-button collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left font-display text-sm text-jacarta-700 dark:bg-jacarta-700 dark:text-white"
            onClick={() => handleOpen(item.id)}
          >
            {item.title}
          </AccordionHeader>
          <div className="hidden-style">
            <AccordionBody className="accordion-body border-t border-jacarta-100 bg-white p-4 dark:border-jacarta-600 dark:bg-jacarta-700">
              {item.descriptions}
            </AccordionBody>
          </div>
        </Accordion>
      ))}
    </>
  );
};

export default FaqAccordion;
