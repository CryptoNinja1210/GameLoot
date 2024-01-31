import React, { useState } from 'react';
import Recently_added_dropdown from '../dropdown/recently_added_dropdown';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';

const Collection_category_filter = () => {
	const [propertiesModal, setPropertiesModal] = useState(false);
	const [propetiesAccordionValue, setPropetiesAccordionValue] = useState(null);

	const handlePropartiesAccordion = (parentId, e) => {
		setPropetiesAccordionValue(parentId);
		const target = e.target.closest('.accordion-item');
		target.classList.toggle('show-accordion');
	};

	const sortText = [
		{
			id: 1,
			text: 'Recently Added',
		},
		{
			id: 2,
			text: 'Price: Low to High',
		},
		{
			id: 3,
			text: 'Price: high to low',
		},
		{
			id: 4,
			text: 'Auction Ending Soon',
		},
	];
	const blockchainText = [
		{
			id: 1,
			text: 'Ethereum',
		},
		{
			id: 2,
			text: 'Polygon',
		},
		{
			id: 3,
			text: 'Flow',
		},
		{
			id: 4,
			text: 'Tezos',
		},
	];
	const categoryText = [
		{
			id: 1,
			text: 'All',
		},
		{
			id: 2,
			text: 'Art',
		},
		{
			id: 3,
			text: 'Collectibles',
		},
		{
			id: 4,
			text: 'Domain',
		},
		{
			id: 5,
			text: 'Music',
		},
		{
			id: 6,
			text: 'Photography',
		},
		{
			id: 7,
			text: 'Virtual World',
		},
	];
	const saleTypeText = [
		{
			id: 1,
			text: 'Timed auction',
		},
		{
			id: 2,
			text: 'Fixed price',
		},
		{
			id: 3,
			text: 'Not for sale',
		},
		{
			id: 4,
			text: 'Open for offers',
		},
	];

	const propertiesText = [
		{
			parentId: 1,
			titleText: 'Background',
			properties: [
				{
					id: 1,
					color: 'red',
					point: '14',
				},
				{
					id: 2,
					color: 'green',
					point: '56',
				},
				{
					id: 3,
					color: 'blue',
					point: '11',
				},
				{
					id: 4,
					color: 'white',
					point: '25',
				},
			],
		},
		{
			parentId: 2,
			titleText: 'Eyes',
			properties: [
				{
					id: 1,
					color: 'red',
					point: '14',
				},
				{
					id: 2,
					color: 'green',
					point: '56',
				},
				{
					id: 3,
					color: 'blue',
					point: '11',
				},
				{
					id: 4,
					color: 'white',
					point: '25',
				},
			],
		},
		{
			parentId: 3,
			titleText: 'face',
			properties: [
				{
					id: 1,
					color: 'red',
					point: '14',
				},
				{
					id: 2,
					color: 'green',
					point: '56',
				},
				{
					id: 3,
					color: 'blue',
					point: '11',
				},
				{
					id: 4,
					color: 'white',
					point: '25',
				},
			],
		},
	];

	return (
		<>
			{/* <!-- Filter --> */}
			<div className="mb-8 flex flex-wrap items-center justify-between">
				<div className="flex flex-wrap items-center">
					{/* <!-- Blockchain --> */}
					<Recently_added_dropdown data={blockchainText} dropdownFor="blockchain" />

					{/* <!-- Category --> */}
					<Recently_added_dropdown data={categoryText} dropdownFor="category" />

					{/* <!-- Properties --> */}
					<div className="my-1 mr-2.5">
						<button
							className="group dropdown-toggle dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white"
							onClick={() => setPropertiesModal(true)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24"
								height="24"
								className="fill-jacarta-700 dark:fill-jacarta-100 mr-1 h-4 w-4 transition-colors group-hover:fill-white"
							>
								<path fill="none" d="M0 0h24v24H0z"></path>
								<path d="M6.17 18a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2v-2h4.17zm6-7a3.001 3.001 0 0 1 5.66 0H22v2h-4.17a3.001 3.001 0 0 1-5.66 0H2v-2h10.17zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2V4h4.17z"></path>
							</svg>
							<span>Properties</span>
						</button>

						{/* <!-- Properties Modal --> */}
						<div
							className={propertiesModal ? 'modal fade show block' : 'modal fade'}
							id="propertiesModal"
						>
							<div className="modal-dialog max-w-md">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title" id="propertiesModalLabel">
											Properties
										</h5>
										<button
											type="button"
											className="btn-close"
											onClick={() => setPropertiesModal(false)}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												width="24"
												height="24"
												className="fill-jacarta-700 h-6 w-6 dark:fill-white"
											>
												<path fill="none" d="M0 0h24v24H0z"></path>
												<path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
											</svg>
										</button>
									</div>

									{/* <!-- Body --> */}
									<div className="modal-body">
										<div className="accordion" id="accordionProps">
											<div className="accordion-item dark:border-jacarta-600 border-jacarta-100 border-b">
												<Accordion>
													{propertiesText.map((item) => {
														const { parentId, titleText, properties } = item;
														return (
															<AccordionItem key={parentId}>
																<AccordionItemHeading>
																	<AccordionItemButton>
																		<h2 className="accordion-header" id="prop-heading-1">
																			<button className="accordion-button collapsed dark:bg-jacarta-700 font-display text-jacarta-700 relative flex w-full items-center justify-between bg-white px-6 py-5 dark:text-white">
																				<span>{titleText}</span>
																				<svg
																					xmlns="http://www.w3.org/2000/svg"
																					viewBox="0 0 24 24"
																					width="24"
																					height="24"
																					className="accordion-arrow fill-jacarta-700 h-4 w-4 transition-transform dark:fill-white"
																				>
																					<path fill="none" d="M0 0h24v24H0z"></path>
																					<path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
																				</svg>
																			</button>
																		</h2>
																	</AccordionItemButton>
																</AccordionItemHeading>
																<AccordionItemPanel>
																	<div id="prop-background" className="accordion-collapse">
																		{properties.map((proparty) => {
																			const { id, color, point } = proparty;
																			return (
																				<div className="accordion-body px-2 pb-4" key={id}>
																					<div className="flex flex-col">
																						<button className="dark:hover:bg-jacarta-600 dark:text-jacarta-200 hover:bg-jacarta-50 flex items-center justify-between rounded-xl px-4 py-2">
																							<span>{color}</span>
																							<span>{point}</span>
																						</button>
																					</div>
																				</div>
																			);
																		})}
																	</div>
																</AccordionItemPanel>
															</AccordionItem>
														);
													})}
												</Accordion>
											</div>
										</div>
									</div>
									{/* <!-- end body --> */}

									<div className="modal-footer">
										<div className="flex items-center justify-center space-x-4">
											<button
												type="button"
												className="text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume w-36 rounded-full bg-white py-3 px-8 text-center font-semibold transition-all hover:text-white"
											>
												Clear All
											</button>
											<button
												type="button"
												className="bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
											>
												Apply
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- end properties modal --> */}

						<div
							className="dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl"
							aria-labelledby="propertiesFilter"
						>
							<ul className="flex flex-col flex-wrap">
								<li>
									<a
										href="#"
										className="dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white"
									>
										<span className="text-jacarta-700 dark:text-white">All</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="24"
											height="24"
											className="fill-accent mb-[3px] h-4 w-4"
										>
											<path fill="none" d="M0 0h24v24H0z"></path>
											<path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
										</svg>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white"
									>
										Art
									</a>
								</li>
								<li>
									<a
										href="#"
										className="dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white"
									>
										Collectibles
									</a>
								</li>
								<li>
									<a
										href="#"
										className="dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white"
									>
										Domain
									</a>
								</li>
								<li>
									<a
										href="#"
										className="dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white"
									>
										Music
									</a>
								</li>
								<li>
									<a
										href="#"
										className="dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white"
									>
										Photography
									</a>
								</li>
								<li>
									<a
										href="#"
										className="dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white"
									>
										Virtual World
									</a>
								</li>
							</ul>
						</div>
					</div>

					{/* <!-- Sale Type --> */}
					<Recently_added_dropdown data={saleTypeText} dropdownFor="sale-type" />

					{/* <!-- Price Range --> */}
					<Recently_added_dropdown data={saleTypeText} dropdownFor="price-range" />
				</div>

				{/* <!-- Sort --> */}
				<Recently_added_dropdown data={sortText} dropdownFor="recently_added" />
			</div>
		</>
	);
};

export default Collection_category_filter;
