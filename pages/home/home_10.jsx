import { Partners } from "../../components/component";
import DownloadAppBanner from "../../components/crypto/DownloadAppBanner";
import FancyBlock from "../../components/crypto/FancyBlock";
import Feature from "../../components/crypto/feature";
import WalletFeature from "../../components/crypto/wallet-feature";
import NeedHelpBlock from "../../components/crypto/nee-help-block";
import Hero_10 from "../../components/hero/hero_10";
import Meta from "../../components/Meta";
import Testimonial from "../../components/testimonial/Testimonial";

const Home_1 = () => {
  return (
    <main>
      <Meta title="Home 10" />
      <Hero_10 />
      <Feature />
      <FancyBlock />
      <Partners />
      <WalletFeature />
      <Testimonial />
      <DownloadAppBanner />
      <NeedHelpBlock />
    </main>
  );
};

export default Home_1;
