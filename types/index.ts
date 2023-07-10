export type NavElement = {
	text: string;
	href: string;
};

export type SocialInfo = {
	platform: string;
	svgElement: JSX.Element;
	href: string;
};

export type Technology = {
	logoPath: string;
	fullName: string;
};

export type Technologies = {
	[key: string]: Technology;
};

export type Project = {
	title: string;
	description: string;
	imageURL: string;
	technologies: string[];
	github_url: string | null;
	live_site_url: string | null;
};