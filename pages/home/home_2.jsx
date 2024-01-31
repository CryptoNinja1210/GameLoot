import React from "react";
import Hero_2 from "../../components/hero/hero_2";
import {
  Top_collection,
  Auctions_categories,
  NewseLatter,
  Feature_collections,
  Partners,
} from "../../components/component";
import Meta from "../../components/Meta";

const Home_2 = () => {
  return (
    <>
      <Meta title="Home 2" />
      <Hero_2 />
      <Top_collection />
      <Auctions_categories />
      <NewseLatter />
      <Feature_collections />
      <Partners />
    </>
  );
};

export default Home_2;
