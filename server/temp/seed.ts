require('dotenv').config();

import { ObjectId } from 'mongodb';
import { connectDatabase } from '../src/database';
import { Listing } from '../src/lib/types';

const seed = async () => {
	try {
		console.log(`[Seed]: Running...`);

		const db = await connectDatabase();
		const listings: Listing[] = [
			{
				_id: new ObjectId(),
				title: 'A House l : Cozy House with 3BR & Fast WiFi',
				image:
					'https://a0.muscache.com/im/pictures/62965eee-8329-4f88-90c0-ce1d0f2ab213.jpg',
				address: 'Kabupaten Sleman, Daerah Istimewa Yogyakarta, Indonesia',
				price: 10000,
				numOfGuests: 8,
				numOfBeds: 7,
				numOfBaths: 2,
				rating: 4.9,
			},
			{
				_id: new ObjectId(),
				title: 'Niwa House 1.0',
				image:
					'https://a0.muscache.com/im/pictures/e2cc3e43-f9d4-4cd2-80c1-53fd04ba249d.jpg',
				address: 'Ngaglik, Daerah Istimewa Yogyakarta, Indonesia',
				price: 15000,
				numOfGuests: 6,
				numOfBeds: 7,
				numOfBaths: 2,
				rating: 4.7,
			},
			{
				_id: new ObjectId(),
				title: 'Spacious 3 Bedroom Villa near Finns Club',
				image:
					'https://a0.muscache.com/im/pictures/miso/Hosting-48303571/original/666e9313-e145-4a4d-9b38-a377e2026c9e.jpeg?im_w=1200',
				address: 'Kecamatan Kuta Selatan, Bali, Indonesia',
				price: 25000,
				numOfGuests: 6,
				numOfBeds: 4,
				numOfBaths: 3,
				rating: 4.3,
			},
		];

		for (const listing of listings) {
			await db.listings.insertOne(listing);
		}

		console.log(`[Seed]: Success!`);
	} catch (error) {
		throw new Error('Failed to seed database!');
	}
};

seed();
