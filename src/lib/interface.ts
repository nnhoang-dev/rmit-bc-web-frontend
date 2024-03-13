/** @format */

export interface event {
	projectName: string;
	picture: string;
	date: string;
	time: string;
	status: string;
	audience: string;
	location: string;
	introduction: string;
	keyTakeaways: string[];
	speakers: speaker[];
	agenda: string[];
	recap: string;
	typeRecap: string;
	partner: string;
	slug: string;
}

interface speaker {
	name: string;
	desc: string;
	imgLink: string;
}

export interface partner {
	alt: string;
	link: string;
}
