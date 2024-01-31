import Partners2 from "../../components/partners/Partners2";
import CryptoCounter from "../../components/cryto-trading/CryptoCounter";
import CryptoPrice from "../../components/cryto-trading/price";
import Features from "../../components/cryto-trading/Features";
import InvestEarn from "../../components/cryto-trading/invest-earn";
import ProcessCta from "../../components/cryto-trading/ProcessCta";
import Hero_11 from "../../components/hero/hero_11";
import Meta from "../../components/Meta";

const Home_1 = () => {
  return (
    <main>
      <Meta title="Home 11" />
      <Hero_11 />
      <CryptoPrice />
      <CryptoCounter />
      <Features />
      <InvestEarn />
      <ProcessCta />
      <Partners2 />
    </main>
  );
};

export default Home_1;
