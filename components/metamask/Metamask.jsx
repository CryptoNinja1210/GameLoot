import React from "react";
import { useMetaMask } from "metamask-react";
import { useDispatch } from "react-redux";
import { walletModalShow } from "../../redux/counterSlice";
import Image from "next/image";

const Metamask_comp_text = () => {
  const dispatch = useDispatch();

  const { status, connect, account, chainId, ethereum } = useMetaMask();

  if (status === "initializing")
    return (
      <div className="js-wallet bg-accent shadow-accent-volume hover:bg-accent-dark block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all">
        Synchronisation with MetaMask ongoing...
      </div>
    );

  if (status === "unavailable")
    return (
      <div className="js-wallet bg-accent shadow-accent-volume hover:bg-accent-dark block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all">
        MetaMask not available :
      </div>
    );

  if (status === "notConnected")
    return (
      <button
        className="js-wallet bg-accent shadow-accent-volume hover:bg-accent-dark block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
        onClick={connect}
      >
        Connect Wallet
      </button>
    );

  if (status === "connecting")
    return (
      <div className="js-wallet bg-accent shadow-accent-volume hover:bg-accent-dark block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all">
        Connecting...
      </div>
    );

  if (status === "connected")
    return (
      <div>
        <button
          className="js-wallet bg-accent shadow-accent-volume hover:bg-accent-dark block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
          onClick={() => dispatch(walletModalShow())}
        >
          Connect Wallet
        </button>
      </div>
    );
};

const Metamask_comp_login = () => {
  const { status, connect, account, chainId, ethereum } = useMetaMask();

  if (status === "initializing")
    return (
      <button className="js-wallet bg-accent hover:bg-accent-dark mb-4 flex w-full items-center justify-center rounded-full border-2 border-transparent py-4 px-8 text-center font-semibold text-white transition-all">
        <Image
          src="/images/wallets/metamask_24.svg"
          className="mr-2.5 inline-block h-6 w-6 object-contain"
          alt="icon"
          height={24}
          width={24}
        />
        <span className="ml-2.5">Metamask initializing</span>
      </button>
    );

  if (status === "unavailable")
    return (
      <button className="js-wallet bg-accent hover:bg-accent-dark mb-4 flex w-full items-center justify-center rounded-full border-2 border-transparent py-4 px-8 text-center font-semibold text-white transition-all">
        <Image
          src="/images/wallets/metamask_24.svg"
          className="mr-2.5 inline-block h-6 w-6 object-contain"
          alt="icon"
          height={24}
          width={24}
        />
        <span className="ml-2.5">unavailable</span>
      </button>
    );

  if (status === "notConnected")
    return (
      <button
        className="js-wallet bg-accent hover:bg-accent-dark mb-4 flex w-full items-center justify-center rounded-full border-2 border-transparent py-4 px-8 text-center font-semibold text-white transition-all"
        onClick={connect}
      >
        <Image
          src="/images/wallets/metamask_24.svg"
          className="inline-block h-6 w-6"
          alt="icon"
          height={24}
          width={24}
        />
        <span className="ml-2.5">Sign in with Metamask</span>
      </button>
    );

  if (status === "connecting")
    return (
      <button className="js-wallet bg-accent hover:bg-accent-dark mb-4 flex w-full items-center justify-center rounded-full border-2 border-transparent py-4 px-8 text-center font-semibold text-white transition-all">
        <Image
          src="/images/wallets/metamask_24.svg"
          className="mr-2.5 inline-block h-6 w-6"
          alt="icon"
          height={24}
          width={24}
        />
        <span className="ml-2.5">Metamask connecting</span>
      </button>
    );

  if (status === "connected")
    return (
      <button className="js-wallet bg-accent hover:bg-accent-dark mb-4 flex w-full items-center justify-center rounded-full border-2 border-transparent py-4 px-8 text-center font-semibold text-white transition-all">
        <Image
          src="/images/wallets/metamask_24.svg"
          className=" inline-block h-6 w-6"
          alt="icon"
          height={24}
          width={24}
        />
        <span className="ml-2.5">Sign in with Metamask</span>
      </button>
    );
};

const Confirm_checkout = () => {
  const { status, connect, account, chainId, ethereum } = useMetaMask();

  if (status === "initializing")
    return (
      <button
        type="button"
        className="bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
      >
        initializing
      </button>
    );

  if (status === "unavailable")
    return (
      <button
        type="button"
        className="bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
      >
        unavailable
      </button>
    );

  if (status === "notConnected")
    return (
      <button
        type="button"
        className="bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
        onClick={connect}
      >
        Confirm Checkout
      </button>
    );

  if (status === "connecting")
    return (
      <button
        type="button"
        className="bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
      >
        connecting
      </button>
    );

  if (status === "connected")
    return (
      <button
        type="button"
        className="bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
      >
        Confirm Checkout
      </button>
    );
};

const Metamask_comp_icon = ({ prop }) => {
  const dispatch = useDispatch();
  const { status, connect, account, chainId, ethereum } = useMetaMask();

  if (status === "initializing")
    return (
      <div>
        <button
          className={
            prop.asPath === "/home/home_3"
              ? "js-wallet border-jacarta-100  focus:bg-accent group hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]"
              : "js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
          }
          // onClick={() => dispatch(walletModalShow())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className={
              prop.asPath === "/home/home_3"
                ? " h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-white"
                : "fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
            }
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"></path>
          </svg>
        </button>
      </div>
    );

  if (status === "unavailable")
    return (
      <div>
        <button
          className={
            prop.asPath === "/home/home_3"
              ? "js-wallet border-jacarta-100  focus:bg-accent group hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]"
              : "js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
          }
          // onClick={() => dispatch(walletModalShow())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className={
              prop.asPath === "/home/home_3"
                ? " h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-white"
                : "fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
            }
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"></path>
          </svg>
        </button>
      </div>
    );

  if (status === "notConnected")
    return (
      <button
        className={
          prop.asPath === "/home/home_3"
            ? "js-wallet border-jacarta-100  focus:bg-accent group hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]"
            : "js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
        }
        // onClick={() => dispatch(walletModalShow())}
        onClick={connect}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className={
            prop.asPath === "/home/home_3"
              ? " h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-white"
              : "fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
          }
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"></path>
        </svg>
      </button>
    );

  if (status === "connecting")
    return (
      <div>
        <button
          className={
            prop.asPath === "/home/home_3"
              ? "js-wallet border-jacarta-100  focus:bg-accent group hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]"
              : "js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
          }
          // onClick={() => dispatch(walletModalShow())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className={
              prop.asPath === "/home/home_3"
                ? " h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-white"
                : "fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
            }
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"></path>
          </svg>
        </button>
      </div>
    );

  if (status === "connected")
    return (
      <div>
        <button
          className={
            prop.asPath === "/home/home_3"
              ? "js-wallet border-jacarta-100  focus:bg-accent group hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]"
              : "js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
          }
          onClick={() => dispatch(walletModalShow())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className={
              prop.asPath === "/home/home_3"
                ? " h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-white"
                : "fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
            }
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"></path>
          </svg>
        </button>
      </div>
    );
};

export {
  Metamask_comp_text,
  Metamask_comp_icon,
  Metamask_comp_login,
  Confirm_checkout,
};
