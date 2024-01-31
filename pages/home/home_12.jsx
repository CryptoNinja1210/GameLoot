import React, { useEffect } from "react";
import Hero_12 from "../../components/hero/hero_12";
import Meta from "../../components/Meta";
import TrustedPartner from "../../components/dao/TrustedPartner";
import ProSaleBanner from "../../components/ico-landing/ProSaleBanner";
import CallToActions from "../../components/ico-landing/CallToActions";
import Testimonial2 from "../../components/testimonial/Testimonial2";
import RoadMap from "../../components/ico-landing/RoadMap";
import Team from "../../components/ico-landing/Team";
import Faq from "../../components/ico-landing/faq";
import Benifits from "../../components/ico-landing/Benifits";

const Home_12 = () => {
  useEffect(() => {
    const header = document.querySelector("header");
    header.classList.add("bg-white/[.15]");
  }, []);

  return (
    <>
      <Meta title="Home 12" />
      <Hero_12 />
      <ProSaleBanner />
      <TrustedPartner />
      <Faq />
      <Benifits />
      <Team />
      <RoadMap />
      <Testimonial2 />
      <CallToActions />
    </>
  );
};

export default Home_12;
