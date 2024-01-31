/* eslint-disable react-hooks/exhaustive-deps */
import React, { PropsWithChildren, useEffect, useState } from "react"
import Tippy from "@tippyjs/react";
import Countdown_timer from "../Countdown_timer";
import Auctions_dropdown from "../dropdown/Auctions_dropdown";
import Link from "next/link";
import { bidsModalShow } from "../../redux/counterSlice";
import "tippy.js/themes/light.css";
import { useDispatch } from "react-redux";
import Image from "next/image";
import Likes from "../likes";

export interface CardProps extends PropsWithChildren {
	item: {
		itemLink: string,
		data: {
			edition: number
		},
		creatorImage: string,
		ownerImage: string,
		bigImage: string,
		auction_timer: string,
		symbol: string,
		title: string,
		price: number,
		likes: number
	},
	position: {
		x: number,
		y: number,
	},
	size: {
		x: number,
		y: number
	},
	focus: Boolean
}

export default function Card(props: CardProps) {
	const dispatch = useDispatch();
	const { item, position, focus } = props
	const initGlareStyle = {
		backgroundImage: `radial-gradient( farthest-corner circle at 0% 0%, hsla(0, 0%, 100%, 0.8) 10%, hsla(0, 0%, 100%, 0.65) 20%, hsla(0, 0%, 0%, 0.5) 90% )`,
		opacity: '1',
	}
	const [glareStyle, setGlareStyle] = useState(initGlareStyle)

	useEffect(() => {
		const style = { ...glareStyle }
		style.opacity = focus ? '1' : '0'
		style.backgroundImage = `radial-gradient( farthest-corner circle at ${position.x}% ${position.y}%, hsla(0, 0%, 100%, 0.8) 10%, hsla(0, 0%, 100%, 0.65) 20%, hsla(0, 0%, 0%, 0.5) 90% )`
		setGlareStyle(style);
	}, [position.x, position.y, focus])

	return (
		<article key={item.data.edition}>
			<div className="card_glare" style={glareStyle}></div>
			<div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
				<div className="mb-4 flex items-center justify-between relative">
					{/* <div className="flex -space-x-2 ">
						<Tippy
							theme="tomato"
							content={
								<span className="py-1 px-2 block">
									Creator: Sussygirl
								</span>
							}
						>
							<Link href={/item/ + item.itemLink}>
								<Image
									src={item.creatorImage}
									alt="creator"
									className="h-6 w-6 rounded-full"
									height={24}
									width={24}
								/>
							</Link>
						</Tippy>
						<Tippy
							content={
								<span className="py-1 px-2 block">
									Owner: Sussygirl
								</span>
							}
						>
							<Link href={/item/ + item.itemLink}>
								<Image
									src={item.ownerImage}
									alt="creator"
									className="h-6 w-6 rounded-full"
									height={24}
									width={24}
								/>
							</Link>
						</Tippy>
					</div> */}

					{/* auction dropdown */}
					{/* <Auctions_dropdown classes="dark:hover:bg-jacarta-600 dropdown hover:bg-jacarta-100 rounded-full " /> */}
				</div>
				<figure className="relative">
					<Link href={/item/ + item.itemLink}>
						<Image
							src={item.bigImage}
							alt="item 8"
							className="w-full rounded-[0.625rem]"
							loading="lazy"
							width={800}
							height={800}
						/>
						<div className="card_shine"></div>
					</Link>
					{/* <Countdown_timer time={+item.auction_timer} /> */}
				</figure>
				<div className="mt-7 flex items-center justify-between">
					<Link href={/item/ + item.itemLink}>
						<span className="font-display text-jacarta-700 hover:text-accent text-base dark:text-white">
							{item.title}
						</span>
					</Link>
					<span className="dark:border-jacarta-600 border-jacarta-100 flex items-center whitespace-nowrap rounded-md border py-1 px-2">
						<span>
							<Tippy
								content={
									<span className="py-1 px-2 block">ETH</span>
								}
							>
								<svg className="h-4 w-4">
									<use xlinkHref="/icons.svg#icon-ETH"></use>
								</svg>
							</Tippy>
						</span>
					</span>
				</div>
				<div className="mt-2 text-sm">
					<span className="dark:text-jacarta-300">Price: {item.price}{item.symbol}</span><br />
					<span className="dark:text-jacarta-100 text-jacarta-700">
						Rarity: {item.likes}
					</span>
				</div>

				{/* <div className="mt-8 flex items-center justify-between">
					<button
						className="text-accent font-display text-sm font-semibold"
						onClick={() => dispatch(bidsModalShow())}
					>
						Place bid
					</button>

					<Likes
						like={item.likes}
						classes="flex items-center space-x-1"
					/>
				</div> */}
			</div>
		</article>
	)
}