import { server } from '../../lib/api/server';

import { ListingData } from './types';

const LISTINGS = `
    query Listings {
        listings {
            id
            title
            image
            address
        }
    }
`;

interface Props {
	title: string;
}

export const Listings = ({ title }: Props) => {
	const fetchListings = async () => {
		const data = await server.fetch<ListingData>({ query: LISTINGS });
		console.log(data);
	};
	return (
		<>
			<pre>{title}</pre>
			<button onClick={fetchListings}>Query Listings!</button>
		</>
	);
};
