import { useRouter } from "next/router";
import Meta from "../components/Meta";
import Layout from "../components/layout";
import "../styles/globals.css";
import "../styles/slick-theme.css";
import "../styles/slick.css";
import Providers from "./providers";
// Setup: npm install alchemy-sdk

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pid = router.asPath;

  return (
    <>
      <Meta title="Home" />
      <Providers>
        {pid === "/login" ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </Providers>
    </>
  );
}

export default MyApp;
