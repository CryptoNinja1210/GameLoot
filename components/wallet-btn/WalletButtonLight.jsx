import { useDispatch } from "react-redux";
import { walletModalShow } from "../../redux/counterSlice";
import { useMetaMask } from "metamask-react";

export default function WalletButtonLight() {
  const dispath = useDispatch();
  const { status, connect, account, chainId, ethereum } = useMetaMask();

  const walletHandler = () => {
    if (status === "unavailable") {
      dispath(walletModalShow());
    }
  };

  if (status === "initializing")
    return <div className="text-white">Ongoing...</div>;

  if (status === "unavailable")
    return (
      <button
        onClick={walletHandler}
        className="js-wallet border-jacarta-100  focus:bg-accent group hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          className=" h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-white"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
        </svg>
      </button>
    );

  if (status === "notConnected")
    return (
      <button
        onClick={connect}
        className="js-wallet border-jacarta-100  focus:bg-accent group hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          className=" h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-white"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
        </svg>
      </button>
    );

  if (status === "connecting")
    return <div className="text-white">Connecting...</div>;

  return null;
}
