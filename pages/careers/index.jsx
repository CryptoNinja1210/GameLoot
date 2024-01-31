import React from 'react';
import Careers_title from '../../components/careers/careers_title';
import Positions from '../../components/careers/positions';
import Meta from '../../components/Meta';
import Parks from '../../components/careers/parks';
import { Partners } from '../../components/component';

const Careers = () => {
	return (
		<div className="mt-[95px]">
			<Meta title="Careers || Xhibiter | NFT Marketplace Next.js Template" />
			<Careers_title />
			<Positions />
			<Parks />
			<Partners />
		</div>
	);
};

export default Careers;
