/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { TokensQuery, useTokens } from "@reservoir0x/reservoir-kit-ui";
import { useRouter } from "next/router";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Collection_dropdown2 from '../../../components/dropdown/collection_dropdown';
import Card from '../../../components/collections/3DEffect';
import { PRICE_LIST } from '../../../lib/constants/base';

const sortByOpions: Array<TokensQuery["sortBy"]> = ['floorAskPrice', 'floorAskPrice', 'rarity', 'rarity'];
const sortDirectionOptions: Array<TokensQuery["sortDirection"]> = ['desc', 'asc', 'desc', 'asc'];

export default function NFTCollectionsPage() {
	const route = useRouter();
	const collection = route.query.collectionAddress as string;
	const [sortOption, setSortOption] = useState(0);
	const { data: tokens, fetchNextPage } = useTokens({
		collection: collection,
		sortBy: sortByOpions[sortOption],
		sortDirection: sortDirectionOptions[sortOption]
	})
	console.log(">>> ~ tokens:", tokens);

	return (
		<>
			<section className="mt-[88px] lg:mt-[96px] px-6 xl:px-24">
				<div className="container min-h-screen">
					<form className='flex justify-end w-full items-center p-12'>
						<Collection_dropdown2
							data={PRICE_LIST}
							value={PRICE_LIST[sortOption].text}
							select={(i: number) => { setSortOption(i) }}
						/>
					</form>
					<InfiniteScroll
						className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4 w-full h-full px-6 py-10"
						dataLength={tokens.length}
						next={fetchNextPage}
						hasMore={true}
						loader={<h4>Loading...</h4>}
					>
						{tokens.length && tokens?.map((item) => {
							// const itemLink = image
							// 	.split("/")
							// 	.slice(-1)
							// 	.toString()
							// 	.replace(".jpg", "")
							// 	.replace(".gif", "");
							// const bigImage = image.replace("ipfs://", "https://ipfs.io/ipfs/")
							return (
								<Card key={item?.token?.tokenId} item={{
									itemLink: item?.token?.imageSmall,
									data: {
										edition: 0
									},
									creatorImage: "",
									ownerImage: "",
									bigImage: item?.token?.imageLarge,
									auction_timer: "",
									title: item?.token?.name,
									price: item?.market?.floorAsk?.price?.amount?.native,
									symbol: item?.market?.floorAsk?.price?.currency?.symbol,
									likes: item?.token?.rarityRank
								}} />
							);
						})}
					</InfiniteScroll>
				</div>
			</section>
		</>
	)
}