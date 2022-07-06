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
				title: 'Clean and fully furnished apartment. 5 min away from CN Tower',
				image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
				address: '3210 Scotchmere Dr W, Toronto, ON, CA',
				price: 10000,
				numOfGuests: 2,
				numOfBeds: 1,
				numOfBaths: 2,
				rating: 5,
			},
			{
				_id: new ObjectId(),
				title: 'Luxurious home with private pool',
				image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
				address: '100 Hollywood Hills Dr, Los Angeles, California',
				price: 15000,
				numOfGuests: 2,
				numOfBeds: 1,
				numOfBaths: 1,
				rating: 4,
			},
			{
				_id: new ObjectId(),
				title: '5 bedroom located in the heart of downtown San Fransisco',
				image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80',
				address: '200 Sunnyside Rd, San Fransisco, California',
				price: 25000,
				numOfGuests: 3,
				numOfBeds: 2,
				numOfBaths: 2,
				rating: 3,
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