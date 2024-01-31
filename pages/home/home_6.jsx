import React from "react";
import Meta from "../../components/Meta";
import Download from "../../components/blog/download";
import {
  Auctions_categories,
  Bids,
  Browse_category,
  Partners,
} from "../../components/component";
import Collection_category from "../../components/collectrions/collection_category";
import Hero_6 from "../../components/hero/hero_6";
import Testimonial from "../../components/blog/Testimonial";

const Home_6 = () => {
  return (
    <>
      <Meta title="Home 6" />
      <Hero_6 />
      <Bids />
      <Collection_category bgWhite={true} />
      <Auctions_categories />
      <Browse_category bgWhite={true} />
      <Testimonial bgWhite={true} />
      <Partners />
      <Download />
    </>
  );
};

export default Home_6;
