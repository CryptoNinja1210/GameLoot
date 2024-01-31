/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const Demo = () => {
	return (
		<div>
			{/* <!-- YouTube Video Modal --> */}
			<div className="modal lightbox fade show">
				<div className="modal-dialog modal-dialog-centered modal-xl w-full">
					<div className="modal-content border-0 bg-transparent">
						<div className="modal-body p-0 relative">
							<button
								type="button"
								className="btn-close position-absolute top-0 end-0 p-3"
								data-bs-dismiss="modal"
								aria-label="Close"
								style="z-index:2;background:none"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									style="position:relative;top:-5px"
									viewBox="0 0 16 16"
									fill="#fff"
								>
									<path d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"></path>
								</svg>
							</button>
							<div id="lightboxCarousel-d7ewe4ig" className="lightbox-carousel carousel">
								<div className="carousel-inner">
									<div className="carousel-item active" style="min-height:100px">
										<div className="position-absolute top-50 start-50 translate-middle text-white">
											<div
												className="spinner-border"
												style="width:3rem;height:3rem"
												role="status"
											></div>
										</div>
										<div className="ratio ratio-16x9" style="background-color:#000">
											<iframe
												src="https://www.youtube.com/embed/dQw4w9WgXcQ"
												title="YouTube video player"
												allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture"
											></iframe>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Demo;

// const container = $0;
// const objectData = [];
// const item = container.querySelectorAll('.border-jacarta-100');
// item.forEach((el, i) => {
// 	const title = el.querySelector('h3').innerText;
// 	const desc = el.querySelector('p').innerText;
// 	const experience = el.querySelector('span').innerText;
// 	const id = i + 1;

// 	const obj = {
// 		title,
// 		desc,
// 		experience,
// 		id,
// 	};
// 	objectData.push(obj);
// });

// console.log(objectData);
