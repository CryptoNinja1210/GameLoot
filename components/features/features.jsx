import React from 'react';
import Features_carousel from '../carousel/features_carousel';

const Features = () => {
	return (
		<div>
			{/* <!-- Features --> */}
			<section className="features-section bg-[#010107] py-12 lg:py-24 overflow-hidden">
				<div className="container relative overflow-hidden xl:left-[calc((100vw-1202px)/4)] xl:max-w-[calc(1202px+((100vw-1202px)/2))] xl:pr-[calc((100vw-1176px)/2)]">
					<div className="mx-auto mb-12 max-w-lg text-center">
						<h2 className="mb-6 text-center font-display text-3xl font-medium text-white md:text-5xl">
							Fabulous Things To Enjoy
						</h2>
						<p className="text-lg text-jacarta-300">
							State-of-the-art technology to challenge global warming and trigger substantial
							change.
						</p>
					</div>

					{/* <!-- Slider --> */}
					<Features_carousel />
				</div>
			</section>
			{/* <!-- end features --> */}
		</div>
	);
};

export default Features;
