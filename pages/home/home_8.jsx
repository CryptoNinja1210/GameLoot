import React, { useEffect } from "react";
import Meta from "../../components/Meta";
import { Partners } from "../../components/component";
import Hero_8 from "../../components/hero/hero_8";
import Intro_video from "../../components/intro_video";
import Characters from "../../components/characters";
import Statistic from "../../components/promo/statistic";
import Statistic_promo_2 from "../../components/promo/statistic_promo_2";
import Features from "../../components/features/features";
import Newsletter from "../../components/nwesletter/newsletter";
import { useTheme } from "next-themes";

const Home_8 = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  return (
    <>
      <Meta title="Home 8" />
      <Hero_8 />
      <Intro_video />
      <Characters />
      <Statistic />
      <Statistic_promo_2 />
      <Features />
      <Newsletter />
      <Partners />
    </>
  );
};

export default Home_8;
