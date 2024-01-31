import Image from "next/image";
import Link from "next/link";
import DarkMode from "../mode/DarkMode";
import Logo from "./../../public/images/logo.png";
import WhiteLogo from "./../../public/images/gameloot.png";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import {
  isChildrenPageActive,
  isParentPageActive,
} from "../../utils/daynamicNavigation";
import { useEffect, useState } from "react";

import {
  useAddress,
  useUser,
  useLogin,
  useLogout,
  useMetamask,
} from "@thirdweb-dev/react";
import WalletConnectButton from "./WalletConnectButton";

//Thirdweb
import { ConnectWallet, useAuth } from "@thirdweb-dev/react";
import { ThirdwebAuth } from "@thirdweb-dev/auth";

export default function Header01() {
  const [toggle, setToggle] = useState(false);
  const [isCollapse, setCollapse] = useState(null);
  const address = useAddress();
  const connect = useMetamask();
  const { login } = useLogin();
  const { logout } = useLogout();
  const { user, isLoggedIn } = useUser();
  const [secret, setSecret] = useState();

  // window resize
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setToggle(false);
      }
    });
  });

  const route = useRouter();
  /* -------------------------------------------------------------------------- */
  /*                            daynamic navigations                            */
  /* -------------------------------------------------------------------------- */
  const home = {
    id: 1,
    name: "Home",
    pages: []
    /* pages: [
      {
        id: uuidv4(),
        name: "Home 1",
        path: "/",
      },
      {
        id: uuidv4(),
        name: "Home 2",
        path: "/home/home_2",
      },
      {
        id: uuidv4(),
        name: "Home 3",
        path: "/home/home_3",
      },
      {
        id: uuidv4(),
        name: "Home 4",
        path: "/home/home_4",
      },
      {
        id: uuidv4(),
        name: "Home 5",
        path: "/home/home_5",
      },
      {
        id: uuidv4(),
        name: "Home 6",
        path: "/home/home_6",
      },
      {
        id: uuidv4(),
        name: "Crypto Consultant",
        condition: true,
        path: "/home/home_7",
      },
      {
        id: uuidv4(),
        name: "NFT Game",
        condition: true,
        path: "/home/home_8",
      },
      {
        id: uuidv4(),
        name: "Dao Platform",
        condition: true,
        path: "/home/home_9",
      },
      {
        id: uuidv4(),
        name: "Crypto App",
        condition: true,
        path: "/home/home_10",
      },
      {
        id: uuidv4(),
        name: "Crypto Trading",
        condition: true,
        path: "/home/home_11",
      },
      {
        id: uuidv4(),
        name: "ICO Landing",
        condition: true,
        path: "/home/home_12",
      },
      {
        id: uuidv4(),
        name: "NFT Aggregator",
        condition: true,
        path: "/home/home_13",
      },
    ],*/
  };

  const page = {
    id: 2,
    name: "Pages",
    pages: [
      {
        id: uuidv4(),
        name: "Maintenance",
        condition: true,
        path: "/maintenance",
      },
      {
        id: uuidv4(),
        name: "Case Studies",
        condition: true,
        path: "/case-studies",
      },
      {
        id: uuidv4(),
        name: "Single Case Study",
        condition: true,
        path: "/case-studies/case_study_1",
      },
      {
        id: uuidv4(),
        name: "Careers",
        condition: true,
        path: "/careers",
      },
      {
        id: uuidv4(),
        name: "Item Details",
        path: "/item/item_20",
      },
      {
        id: uuidv4(),
        name: "Collections Wide",
        path: "/collections-wide",
        condition: true,
      },
      {
        id: uuidv4(),
        name: "Explore Collections",
        path: "/collection/explore_collection",
      },
      {
        id: uuidv4(),
        name: "Collection",
        path: "/collection/avatar_1",
      },
      {
        id: uuidv4(),
        name: "Activity",
        path: "/activity",
      },
      {
        id: uuidv4(),
        name: "Rankings",
        path: "/rankings",
      },
      {
        id: uuidv4(),
        name: "User",
        path: "/user/avatar_6",
      },
      {
        id: uuidv4(),
        name: "Edit Profile",
        path: "/profile/user_avatar",
      },
      {
        id: uuidv4(),
        name: "About",
        path: "/about",
      },
      {
        id: uuidv4(),
        name: "Contact",
        path: "/contact",
      },
      {
        id: uuidv4(),
        name: "Wallet",
        path: "/wallet",
      },
      {
        id: uuidv4(),
        name: "Login",
        path: "/login",
      },
      {
        id: uuidv4(),
        name: "Page 404",
        path: "/404",
      },
      {
        id: uuidv4(),
        name: "Terms of Service",
        path: "/tarms",
      },
    ],
  };

  const explore = {
    id: 3,
    name: "Explore",
    pages: [
      {
        id: uuidv4(),
        name: "All NFTs",
        path: "/collection/explore_collection",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="h-4 w-4 fill-jacarta-700"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M22 12.999V20a1 1 0 0 1-1 1h-8v-8.001h9zm-11 0V21H3a1 1 0 0 1-1-1v-7.001h9zM11 3v7.999H2V4a1 1 0 0 1 1-1h8zm10 0a1 1 0 0 1 1 1v6.999h-9V3h8z" />
          </svg>
        ),
      },
      {
        id: uuidv4(),
        name: "Photography",
        path: "/collection/explore_collection",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="h-4 w-4 fill-[#428AF8]"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6zm2 1v12h16V7H4zm10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM4 2h6v2H4V2z" />
          </svg>
        ),
      },
      {
        id: uuidv4(),
        name: "Art",
        path: "/art",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="h-4 w-4 fill-[#10B981]"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 2c5.522 0 10 3.978 10 8.889a5.558 5.558 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667 0 .422.167.811.422 1.1.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22 6.478 22 2 17.522 2 12S6.478 2 12 2zm-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.558 3.558 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972 3.648 3.648 0 0 1-.513-1.86zM7.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        ),
      },
      {
        id: uuidv4(),
        name: "Sports",
        path: "/sports",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="h-4 w-4 fill-[#737EF2]"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.366 11.366l-3.469 6.01a8.053 8.053 0 0 0 4.459.51 9.937 9.937 0 0 1 .784-5.494l-1.774-1.026zm3.518 2.031a7.956 7.956 0 0 0-.587 3.894 8.022 8.022 0 0 0 3.077-2.456l-2.49-1.438zm-7.025-4.055a9.95 9.95 0 0 1-4.365 3.428 8.01 8.01 0 0 0 2.671 3.604l3.469-6.008-1.775-1.024zm11.103-.13l-.258.12a7.947 7.947 0 0 0-2.82 2.333l2.492 1.439a7.975 7.975 0 0 0 .586-3.893zM4 12c0 .266.013.53.038.789a7.95 7.95 0 0 0 3.078-2.454L4.624 8.897A7.975 7.975 0 0 0 4 12zm12.835-6.374l-3.469 6.008 1.775 1.025a9.95 9.95 0 0 1 4.366-3.43 8.015 8.015 0 0 0-2.419-3.402l-.253-.201zM12 4c-.463 0-.916.04-1.357.115a9.928 9.928 0 0 1-.784 5.494l1.775 1.025 3.469-6.01A7.975 7.975 0 0 0 12 4zm-3.297.71l-.191.088a8.033 8.033 0 0 0-2.886 2.367l2.49 1.438a7.956 7.956 0 0 0 .587-3.893z" />
          </svg>
        ),
      },
      {
        id: uuidv4(),
        name: "Collectibles",
        path: "/collectibles",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="h-4 w-4 fill-[#FEB240]"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M17.5 2a4.5 4.5 0 0 1 2.951 7.897c.355.967.549 2.013.549 3.103A9 9 0 1 1 3.55 9.897a4.5 4.5 0 1 1 6.791-5.744 9.05 9.05 0 0 1 3.32 0A4.494 4.494 0 0 1 17.5 2zm0 2c-.823 0-1.575.4-2.038 1.052l-.095.144-.718 1.176-1.355-.253a7.05 7.05 0 0 0-2.267-.052l-.316.052-1.356.255-.72-1.176A2.5 2.5 0 1 0 4.73 8.265l.131.123 1.041.904-.475 1.295A7 7 0 1 0 19 13c0-.716-.107-1.416-.314-2.083l-.112-.33-.475-1.295 1.04-.904A2.5 2.5 0 0 0 17.5 4zM10 13a2 2 0 1 0 4 0h2a4 4 0 1 1-8 0h2z" />
          </svg>
        ),
      },
      {
        id: uuidv4(),
        name: "Trading Cards",
        path: "/tranding-cards",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="h-4 w-4 fill-[#8DD059]"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM4 5v14h16V5H4zm2 2h6v6H6V7zm2 2v2h2V9H8zm-2 6h12v2H6v-2zm8-8h4v2h-4V7zm0 4h4v2h-4v-2z" />
          </svg>
        ),
      },
      {
        id: uuidv4(),
        name: "Domain Names",
        path: "/domain-names",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="h-4 w-4 fill-[#8358FF]"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M5 15v4h4v2H3v-6h2zm16 0v6h-6v-2h4v-4h2zm-8.001-9l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3H6.6l4.399-11h2zm-1 2.885L10.752 12h2.492l-1.245-3.115zM9 3v2H5v4H3V3h6zm12 0v6h-2V5h-4V3h6z" />
          </svg>
        ),
      },
      {
        id: uuidv4(),
        name: "Utility",
        path: "/utility",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="h-4 w-4 fill-[#EF3D3D]"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M22 7h1v10h-1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3zm-2 10h-6a5 5 0 0 1 0-10h6V5H4v14h16v-2zm1-2V9h-7a3 3 0 0 0 0 6h7zm-7-4h3v2h-3v-2z" />
          </svg>
        ),
      },
      {
        id: uuidv4(),
        name: "Virtual Worlds",
        path: "/virtual-worlds",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="h-4 w-4 fill-[#46C7E3]"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z" />
          </svg>
        ),
      },
    ],
  };

  const resource = {
    id: 4,
    name: "Resources",
    pages: [
      {
        id: uuidv4(),
        name: "Help Center",
        path: "/help_center",
      },
      {
        id: uuidv4(),
        name: "Platform Status",
        path: "/platform_status",
      },
      {
        id: uuidv4(),
        name: "Partners",
        path: "/partners",
      },
      {
        id: uuidv4(),
        name: "Blog",
        path: "/blog",
      },
      {
        id: uuidv4(),
        name: "Single Post",
        path: "/single_post/post_1",
      },
      {
        id: uuidv4(),
        name: "Newsletter",
        path: "/newsletter",
      },
    ],
  };

  const mobileCollapse = (id) => {
    if (isCollapse === id) {
      return setCollapse(null);
    }
    setCollapse(id);
  };

  return (
    <>
      {/* main desktop menu sart*/}
      <header className="js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors">
        <div className="flex items-center px-6 py-6 xl:px-24 ">
          <Link className="shrink-0" href="/">
            <div className="dark:hidden">
              <Image
                src={Logo}
                height={28}
                width={130}
                alt="Xhibiter | NFT Marketplace"
                className="max-h-7 h-auto "
              />
            </div>
            <div className="hidden dark:block">
              <Image
                src={WhiteLogo}
                height={28}
                width={130}
                alt="Xhibiter | NFT Marketplace"
              />
            </div>
          </Link>
          {/* End  logo */}

          <form
            action="search"
            className="relative ml-12 mr-8 hidden basis-3/12 lg:block xl:ml-[8%]"
          >
            <input
              type="search"
              className="text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-[0.6875rem] px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
              placeholder="Search"
            />
            <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                className="fill-jacarta-500 h-4 w-4 dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
              </svg>
            </span>
          </form>
          {/* End Desktop search form */}

          <div className="js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent">
            <nav className="navbar w-full">
              <ul className="flex flex-col lg:flex-row">
                {/* home */}
                <li className="js-nav-dropdown group relative">
                  <Link href="/" passHref>
                    <button className="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full">
                      <span
                        className={
                          isParentPageActive(home.pages, route.asPath)
                            ? "text-accent  dark:text-accent"
                            : ""
                        }
                      >
                        Home
                      </span>
                      <i className="lg:hidden">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          className="h-4 w-4 dark:fill-white"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                        </svg>
                      </i>
                    </button>
                  </Link>
                  {/*<ul className="dropdown-menu group-hover:visible lg:invisible -left-6 top-[85%] z-10 hidden grid-flow-row grid-cols-[repeat(2,_1fr)] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:opacity-100 dark:bg-jacarta-800 lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-5 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2">
                  {home?.pages?.map((page) => (
                    <li key={page.id}>
                      <Link
                        href={page.path}
                        className="dark:hover:bg-jacarta-600  hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors justify-between "
                        >

                        <span
                          className={`font-display ${
                            isChildrenPageActive(page.path, route.asPath)
                              ? "text-accent dark:text-accent"
                              : "text-jacarta-700"
                          } text-sm dark:text-white`}
                        >
                          {page.name}
                        </span>
                        {page.condition ? (
                          <span className="rounded bg-green py-1 px-2 text-tiny font-bold uppercase leading-none text-white ml-4">
                            new
                          </span>
                        ) : undefined}

                      </Link>
                    </li>
                  ))}
                </ul>*/}
                </li>

                {/* page */}
                {/*<li className="js-nav-dropdown group relative">
                <button className="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full">
                  <span
                    className={
                      isParentPageActive(page.pages, route.asPath)
                        ? "text-accent dark:text-accent"
                        : ""
                    }
                  >
                    Pages
                  </span>
                  <i className="lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      className="h-4 w-4 dark:fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                    </svg>
                  </i>
                </button>
                <ul className="dropdown-menu left-0 top-[85%] z-10 hidden grid-flow-row grid-cols-[repeat(2,_1fr)] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 dark:bg-jacarta-800 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative">
                  {page?.pages?.map((page) => (
                    <li key={page.id}>
                      <Link
                        href={page.path}
                        className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors justify-between"
                        >

                        <span
                          className={`font-display ${
                            isChildrenPageActive(page.path, route.asPath)
                              ? "!text-accent !dark:text-accent"
                              : "text-jacarta-700 dark:text-white"
                          } text-sm `}
                        >
                          {page.name}
                        </span>
                        {page.condition ? (
                          <span className="rounded bg-green py-1 px-2 text-tiny font-bold uppercase leading-none text-white ml-4">
                            new
                          </span>
                        ) : undefined}

                      </Link>
                    </li>
                  ))}
                </ul>
              </li>*/}

                {/* explore */}
                <li className="js-nav-dropdown nav-item dropdown group relative">
                  <button className="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full">
                    <span
                      className={
                        isParentPageActive(explore.pages, route.asPath)
                          ? "text-accent dark:text-accent"
                          : ""
                      }
                    >
                      Explore
                    </span>
                    <i className="lg:hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="h-4 w-4 dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                      </svg>
                    </i>
                  </button>
                  <ul
                    className="dropdown-menu dark:bg-jacarta-800 -left-6 top-[85%] z-10 hidden grid-flow-col grid-rows-5 gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-5 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative"
                    aria-labelledby="navDropdown-1"
                  >
                    {explore?.pages?.map((page) => (
                      <li key={page.id}>
                        <Link
                          href="/"
                          className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                        >
                          <span className="bg-light-base mr-3 rounded-xl p-[0.375rem]">
                            {page?.icon}
                          </span>
                          <span className="font-display text-jacarta-700 text-sm dark:text-white">
                            {page?.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* resource */}
                {/* s<li className="js-nav-dropdown group relative">
                <button className="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full">
                  <span
                    className={
                      isParentPageActive(resource.pages, route.asPath)
                        ? "text-accent dark:text-accent"
                        : ""
                    }
                  >
                    Resources
                  </span>
                  <i className="lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      className="h-4 w-4 dark:fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                    </svg>
                  </i>
                </button>
                <ul
                  className="dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative"
                  aria-labelledby="navDropdown-4"
                >
                  {resource?.pages?.map?.((page) => (
                    <li key={page.id}>
                      <Link
                        href={page?.path}
                        className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                        >

                        <span
                          className={`font-display ${
                            isChildrenPageActive(page.path, route.asPath)
                              ? "text-accent dark:text-accent"
                              : "text-jacarta-700"
                          } text-sm dark:text-white`}
                        >
                          {page?.name}
                        </span>

                      </Link>
                    </li>
                  ))}
                </ul>
              </li>*/}

                {/* create */}

                <li className="group">
                  <Link href="/create">
                    <button className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">
                      <span
                        className={
                          isChildrenPageActive(route.asPath, "/create")
                            ? "text-accent dark:text-accent"
                            : ""
                        }
                      >
                        Create
                      </span>
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>
            {/* End menu for desktop */}
            <WalletConnectButton />
            {/* <ConnectWallet
              theme={"dark"}
              switchToActiveChain={true}
              modalSize={"compact"}
              welcomeScreen={{
                img: {
                  src: "",
                  width: 150,
                  height: 150,
                },
              }}
              modalTitleIconUrl={""}
              domains={["localhost"]}
              auth={{
                loginOptional: false,
                onLogin(token) {
                  login(token);
                  console.log("user logged in");
                  //signIn(token);
                },
                onLogout() {
                  console.log("user logged out");
                },
              }}
            /> */}
            {/*<div className="ml-8 hidden items-center lg:flex xl:ml-12">
            <WalletButton />
            {/* End metamask Wallet */}
            {/*
            <div className="js-nav-dropdown group-dropdown relative">
              <button className="dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
                </svg>
              </button>
              <div className="dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:shadow-2xl hidden lg:invisible lg:opacity-0">
                <div>
                  <button className="js-copy-clipboard font-display text-jacarta-700 my-4 flex select-none items-center whitespace-nowrap px-5 leading-none dark:text-white">
                    <span>0x7a86c0b06417100...</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      className="dark:fill-jacarta-300 fill-jacarta-500 ml-auto mb-px h-4 w-4"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z" />
                    </svg>
                  </button>
                </div>
                <div className="dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4">
                  <span className="dark:text-jacarta-200 text-sm font-medium tracking-tight">
                    Balance
                  </span>
                  <div className="flex items-center">
                    <svg className="icon icon-ETH -ml-1 mr-1 h-[1.125rem] w-[1.125rem]">
                      <use xlinkHref="/icons.svg#icon-ETH" />
                    </svg>
                    <span className="text-green text-lg font-bold">
                      10 ETH
                    </span>
                  </div>
                </div>
                <Link
                  href="/user/avatar_6"
                  className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors"
                  >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
                  </svg>
                  <span className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">
                    My Profile
                  </span>

                </Link>
                <Link
                  href="/profile/user_avatar"
                  className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors"
                  >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                  <span className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">
                    Edit Profile
                  </span>

                </Link>
                <Link
                  href="/login"
                  className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors"
                  >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z" />
                  </svg>
                  <span className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">
                    Sign out
                  </span>

                </Link>
              </div>
            </div>
            <DarkMode />
                    </div>*/}
            {/* End header right content (metamask and other) for desktop */}
          </div>
          {/* header menu conent end for desktop */}

          <div className="ml-auto flex lg:hidden">
            <Link
              href="/profile/user_avatar"
              className="border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
              aria-label="profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
              </svg>
            </Link>
            <DarkMode />
            <button
              className="js-mobile-toggle border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
              aria-label="open mobile menu"
              onClick={() => setToggle(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
              </svg>
            </button>
          </div>
          {/* End header right content  for mobile */}
        </div>
        {/* End flex item */}
      </header>
      {/* main desktop menu end */}

      {/* start mobile menu and it's other materials  */}
      <div
        className={`lg:hidden js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-20 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent ${
          toggle ? "nav-menu--is-open" : "hidden"
        }`}
      >
        <div className="t-0 dark:bg-jacarta-800 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 lg:hidden">
          <div className="dark:hidden">
            <Image
              src={Logo}
              height={28}
              width={130}
              alt="Xhibiter | NFT Marketplace"
              className="max-h-7 h-auto "
            />
          </div>

          <div className="hidden dark:block">
            <Image
              src={WhiteLogo}
              height={28}
              width={130}
              alt="Xhibiter | NFT Marketplace"
            />
          </div>

          <button
            className="js-mobile-close border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
            onClick={() => setToggle(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
            </svg>
          </button>
        </div>
        {/* mobile menu top header content */}

        <form action="search" className="relative mt-24 mb-8 w-full lg:hidden">
          <input
            type="search"
            className="text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-3 px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
            placeholder="Search"
          />
          <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="fill-jacarta-500 h-4 w-4 dark:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
            </svg>
          </span>
        </form>
        {/* End search form mobile menu  */}

        <nav className="navbar w-full">
          <ul className="flex flex-col lg:flex-row">
            <li className="js-nav-dropdown group relative">
              <button
                onClick={() => mobileCollapse(home.id)}
                className="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full"
              >
                <span
                  className={
                    isParentPageActive(home.pages, route.asPath)
                      ? "text-accent dark:text-accent"
                      : ""
                  }
                >
                  {home.name}
                </span>
                <i className="lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="h-4 w-4 dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                  </svg>
                </i>
              </button>

              <ul
                className={`dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative ${
                  isCollapse === home.id ? "block" : "hidden"
                }`}
              >
                {home?.pages?.map((page) => (
                  <li key={page.id} onClick={() => setToggle(false)}>
                    <Link
                      href={page.path}
                      className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors justify-between"
                    >
                      <span
                        className={`font-display ${
                          isChildrenPageActive(route.asPath, page.path)
                            ? "text-accent dark:text-accent"
                            : "text-jacarta-700"
                        } text-sm dark:text-white`}
                      >
                        {page.name}
                      </span>
                      {page.condition ? (
                        <span className="rounded bg-green py-1 px-2 text-tiny font-bold uppercase leading-none text-white ml-4">
                          new
                        </span>
                      ) : undefined}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="js-nav-dropdown group relative">
              <button
                onClick={() => mobileCollapse(page.id)}
                className="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full"
              >
                <span
                  className={
                    isParentPageActive(page.pages, route.asPath)
                      ? "text-accent dark:text-accent"
                      : ""
                  }
                >
                  {page.name}
                </span>
                <i className="lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="h-4 w-4 dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                  </svg>
                </i>
              </button>
              <ul
                className={`dropdown-menu left-0 top-[85%] z-10 grid-flow-row grid-cols-[repeat(2,_1fr)] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 dark:bg-jacarta-800 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative ${
                  isCollapse === page.id ? "block" : "hidden"
                }`}
              >
                {page?.pages?.map((page) => (
                  <li key={page.id} onClick={() => setToggle(false)}>
                    <Link
                      href={page.path}
                      className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors justify-between"
                    >
                      <span
                        className={
                          isChildrenPageActive(page.path, route.asPath)
                            ? "text-accent dark:text-accent"
                            : ""
                        }
                      >
                        {page.name}
                      </span>
                      {page.condition ? (
                        <span className="rounded bg-green py-1 px-2 text-tiny font-bold uppercase leading-none text-white ml-4">
                          new
                        </span>
                      ) : undefined}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="js-nav-dropdown nav-item dropdown group relative">
              <button
                onClick={() => mobileCollapse(explore.id)}
                className="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full"
              >
                <span
                  className={
                    isParentPageActive(explore.pages, route.asPath)
                      ? "text-accent dark:text-accent"
                      : ""
                  }
                >
                  {explore.name}
                </span>
                <i className="lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="h-4 w-4 dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                  </svg>
                </i>
              </button>
              <ul
                className={`dropdown-menu left-0 top-[85%] z-10 grid-flow-row grid-cols-[repeat(2,_1fr)] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 dark:bg-jacarta-800 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative ${
                  isCollapse === explore.id ? "block" : "hidden"
                }`}
                aria-labelledby="navDropdown-1"
              >
                {explore?.pages?.map((page) => (
                  <li key={page.id} onClick={() => setToggle(false)}>
                    <Link
                      href="/"
                      className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                    >
                      <span className="bg-light-base mr-3 rounded-xl p-[0.375rem]">
                        {page.icon}
                      </span>
                      <span className="font-display text-jacarta-700 text-sm dark:text-white">
                        {page.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="js-nav-dropdown group relative">
              <button
                onClick={() => mobileCollapse(resource.id)}
                className="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full"
              >
                <span
                  className={
                    isParentPageActive(resource.pages, route.asPath)
                      ? "text-accent dark:text-accent"
                      : ""
                  }
                >
                  {resource.name}
                </span>
                <i className="lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="h-4 w-4 dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                  </svg>
                </i>
              </button>
              <ul
                className={`dropdown-menu left-0 top-[85%] z-10 grid-flow-row grid-cols-[repeat(2,_1fr)] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 dark:bg-jacarta-800 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative ${
                  isCollapse === resource.id ? "block" : "hidden"
                }`}
                aria-labelledby="navDropdown-4"
              >
                {resource?.pages?.map((page) => (
                  <li key={page.id} onClick={() => setToggle(false)}>
                    <Link
                      href={page.path}
                      className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors"
                    >
                      <span
                        className={`font-display text-jacarta-700 text-sm dark:text-white ${
                          isChildrenPageActive(page.path, route.asPath)
                            ? "text-accent dark:text-accent"
                            : ""
                        }`}
                      >
                        {page.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="group" onClick={() => setToggle(false)}>
              <Link href="/create">
                <button className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">
                  <span
                    className={
                      isChildrenPageActive("/create", route.asPath)
                        ? "text-accent dark:text-accent"
                        : ""
                    }
                  >
                    Create
                  </span>
                </button>
              </Link>
            </li>
          </ul>
        </nav>
        {/* End navbar mobile menu  */}

        <div className="mt-10 w-full lg:hidden">
          <div className="js-wallet bg-accent shadow-accent-volume hover:bg-accent-dark block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all">
            MetaMask not available :
          </div>
          <hr className="dark:bg-jacarta-600 bg-jacarta-100 my-5 h-px border-0" />
          <div className="flex items-center justify-center space-x-5">
            <a className="group">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook"
                className="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
            </a>
            <a className="group">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter"
                className="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </a>
            <a className="group">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="discord"
                className="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
              </svg>
            </a>
            <a className="group">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                className="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            <a className="group">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="tiktok"
                className="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
              </svg>
            </a>
          </div>
        </div>
        {/* mt-10 w-full lg:hidden */}
      </div>
      {/* End mobile menu and it's other materials */}
    </>
  );
}
