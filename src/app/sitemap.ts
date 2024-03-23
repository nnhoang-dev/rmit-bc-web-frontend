/** @format */

import { event } from './../lib/interface';
/** @format */

import { MetadataRoute } from 'next';
import { allEvents } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
	let res = [
		{
			url: 'https://www.rmitbusinessclub.com/',
			lastModified: new Date(),
			// changeFrequency: 'yearly',
			// priority: 1,
		},
		{
			url: 'https://www.rmitbusinessclub.com/about',
			lastModified: new Date(),
			// changeFrequency: 'monthly',
			// priority: 0.8,
		},
		{
			url: 'https://www.rmitbusinessclub.com/recruiment',
			lastModified: new Date(),
			// changeFrequency: 'weekly',
			// priority: 0.5,
		},
		{
			url: 'https://www.rmitbusinessclub.com/human-of-bc',
			lastModified: new Date(),
			// changeFrequency: 'weekly',
			// priority: 0.5,
		},
		{
			url: 'https://www.rmitbusinessclub.com/our-projects',
			lastModified: new Date(),
			// changeFrequency: 'weekly',
			// priority: 0.5,
		},
	];

	allEvents.map((v, i) => {
		res = [
			...res,
			{
				url: `https://www.rmitbusinessclub.com/our-projects/${v.slug}`,
				lastModified: new Date(),
			},
		];
	});

	return res;
}
