import React, { useState } from 'react';
import Link from 'next/link';

const Accordion = ({ data }) => {
	const [selected, setSelected] = useState(null);
	const handleAccordion = (id) => {
		if (selected === id) {
			setSelected(null);
		} else {
			setSelected(id);
		}
	};
	return (
        <div>
			<h2 className="font-display text-jacarta-700 mb-10 text-center text-xl font-medium dark:text-white">
				Frequently asked questions
			</h2>
			<p className="text-jacarta-300 mx-auto mb-10 max-w-md text-center text-lg">
				Join our community now to get free updates and also alot of freebies are waiting for you Or{' '}
				<br />
				<Link href="/contact" className="text-accent">
					Contact Support
				</Link>
			</p>

			<div className="accordion mx-auto max-w-[35rem]" id="accordionFAQ">
				{data.map((item) => {
					const { id, title, text } = item;
					return (
						<div
							key={id}
							className="accordion-item dark:border-jacarta-600 border-jacarta-100 mb-5 overflow-hidden rounded-lg border"
						>
							<h2
								className="accordion-header"
								id="faq-heading-1"
								onClick={() => handleAccordion(id)}
							>
								<button
									className={
										selected === id
											? 'accordion-button dark:bg-jacarta-700 font-display text-jacarta-700 relative flex w-full items-center justify-between bg-white px-4 py-3 text-left dark:text-white '
											: 'accordion-button dark:bg-jacarta-700 font-display text-jacarta-700 collapsed relative flex w-full items-center justify-between bg-white px-4 py-3 text-left dark:text-white '
									}
									type="button"
								>
									<span>{title}</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="24"
										height="24"
										className="accordion-arrow fill-jacarta-700 h-4 w-4 shrink-0 transition-transform dark:fill-white"
									>
										<path fill="none" d="M0 0h24v24H0z"></path>
										<path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
									</svg>
								</button>
							</h2>
							<div
								id="faq-1"
								className={
									selected === id
										? 'accordion-collapse collapse show '
										: 'accordion-collapse collapse'
								}
								aria-labelledby="faq-heading-1"
								data-bs-parent="#accordionFAQ"
							>
								<div className="accordion-body dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 border-t bg-white p-4">
									<p className="dark:text-jacarta-200">{text}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
    );
};

export default Accordion;
