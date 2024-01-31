import React from 'react';
import Link from 'next/link';
import { items_offer_data } from '../../data/items_tabs_data';

const OfferTab = () => {
	return <>
        {/* <!-- Offers --> */}
        <div
            className="tab-pane fade show active"
            id="offers"
            role="tabpanel"
            aria-labelledby="offers-tab"
        >
            <div
                role="table"
                className="scrollbar-custom dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 grid max-h-72 w-full grid-cols-5 overflow-y-auto rounded-lg rounded-tl-none border bg-white text-sm dark:text-white"
            >
                <div className="contents" role="row">
                    <div
                        className="dark:bg-jacarta-600 bg-light-base sticky top-0 py-2 px-4"
                        role="columnheader"
                    >
                        <span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
                            Price
                        </span>
                    </div>
                    <div
                        className="dark:bg-jacarta-600 bg-light-base sticky top-0 py-2 px-4"
                        role="columnheader"
                    >
                        <span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
                            USD Price
                        </span>
                    </div>
                    <div
                        className="dark:bg-jacarta-600 bg-light-base sticky top-0 py-2 px-4"
                        role="columnheader"
                    >
                        <span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
                            Floor Difference
                        </span>
                    </div>
                    <div
                        className="dark:bg-jacarta-600 bg-light-base sticky top-0 py-2 px-4"
                        role="columnheader"
                    >
                        <span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
                            Expiration
                        </span>
                    </div>
                    <div
                        className="dark:bg-jacarta-600 bg-light-base sticky top-0 py-2 px-4"
                        role="columnheader"
                    >
                        <span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
                            From
                        </span>
                    </div>
                </div>
                {items_offer_data.map((item) => {
                    const { ethPrice, id, usdPrice, difference, Expiration, user } = item;
                    return (
                        <div className="contents" role="row" key={id}>
                            <div
                                className="dark:border-jacarta-600 border-jacarta-100 flex items-center whitespace-nowrap border-t py-4 px-4"
                                role="cell"
                            >
                                <span className="-ml-1" data-tippy-content="ETH">
                                    <svg className="icon mr-1 h-4 w-4">
                                        <use xlinkHref="/icons.svg#icon-ETH"></use>
                                    </svg>
                                </span>
                                <span className="text-green text-sm font-medium tracking-tight">
                                    {ethPrice} ETH
                                </span>
                            </div>
                            <div
                                className="dark:border-jacarta-600 border-jacarta-100 flex items-center border-t py-4 px-4"
                                role="cell"
                            >
                                {usdPrice}
                            </div>
                            <div
                                className="dark:border-jacarta-600 border-jacarta-100 flex items-center border-t py-4 px-4"
                                role="cell"
                            >
                                {difference} below
                            </div>
                            <div
                                className="dark:border-jacarta-600 border-jacarta-100 flex items-center border-t py-4 px-4"
                                role="cell"
                            >
                                in {Expiration} months
                            </div>
                            <div
                                className="dark:border-jacarta-600 border-jacarta-100 flex items-center border-t py-4 px-4"
                                role="cell"
                            >
                                <Link href="#" className="text-accent" >
                                    {user}
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </>;
};

export default OfferTab;
