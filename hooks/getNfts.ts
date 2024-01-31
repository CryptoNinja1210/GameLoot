import axios from 'axios'

export default async function Nfts() {
	console.log('start')
	let nfts = [];
  const url = 'https://ipfs.io/ipfs/QmePTa6gYg6kojb81v6Ya7e5G1cymB7CFvixt3fARPqm5m/';
	const max = 732;
	for (let i = 1; i <= max; i++) {
		const data = await axios.get(url + i)
		nfts = [...nfts, data]
	}
	console.log('end')
	return nfts;
}

// const sdk = require('api')('@reservoirprotocol/v3.0#5cgv3o1jlqgzs628');

// sdk.auth('93db9887-ea1a-5cc0-8421-11bc70b8dac2');
// sdk.server('https://api-arbitrum.reservoir.tools');
// sdk.getCollectionsV5({accept: '*/*'})
//   .then(({ data }) => {console.log(data); return data;})
//   .catch(err => console.error(err));