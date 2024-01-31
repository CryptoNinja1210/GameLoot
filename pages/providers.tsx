import { ThemeProvider as MaterialTailwindThemeProvider } from "@material-tailwind/react";
import {
  ReservoirKitProvider,
} from '@reservoir0x/reservoir-kit-ui';
import { MetaMaskProvider } from "metamask-react";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren, useRef } from "react";
import { Provider } from "react-redux";
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import * as allChains from 'wagmi/chains';
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { alchemyProvider } from 'wagmi/providers/alchemy';
import UserContext from "../components/UserContext";
import { store } from "../redux/store";

import { reservoirChains } from "@reservoir0x/reservoir-sdk";
import {
  ChainId,
  ThirdwebProvider
} from "@thirdweb-dev/react";
import { ALCHEMY_ID, RESERVOIR_API_KEY } from "../constants/environments";

// wagmi config
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [allChains.arbitrum],
  [
    alchemyProvider({ apiKey: ALCHEMY_ID }),
  ]
);

const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [
    new MetaMaskConnector({ chains }),
  ]
})

interface ProvidersProps extends PropsWithChildren { }

export default function Providers({ children }: ProvidersProps) {
  const activeChain = ChainId.Arbitrum;
  const scrollRef = useRef({
    scrollPos: 0,
  });

  return (
    <ThirdwebProvider
      authConfig={{
        authUrl: "/api/auth",
        domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN,
      }
      }
      activeChain={activeChain}
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
    // supportedWallets={[
    //   metamaskWallet(),
    //   coinbaseWallet(),
    //   walletConnect(),
    //   localWallet(),
    //   embeddedWallet({
    //     auth: {
    //       options: [
    //         "email",
    //         "google",
    //       ],
    //     },
    //   })
    // ]}
    >
      <Provider store={store}>
        <ThemeProvider enableSystem={false} defaultTheme="dark" attribute="class" >
          <MaterialTailwindThemeProvider>
            <MetaMaskProvider>
              <WagmiConfig config={wagmiConfig}>
                <ReservoirKitProvider
                  options={{
                    apiKey: RESERVOIR_API_KEY,
                    chains: [{
                      ...reservoirChains.mainnet,
                      active: true,
                    }],
                    source: "YOUR_SOURCE"
                  }}
                >
                  <UserContext.Provider value={{ scrollRef: scrollRef }}>
                    {children}
                  </UserContext.Provider>
                </ReservoirKitProvider>
              </WagmiConfig>
            </MetaMaskProvider>
          </MaterialTailwindThemeProvider>
        </ThemeProvider>
      </Provider>
    </ThirdwebProvider>
  )
}