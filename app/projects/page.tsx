import { getAllProjects } from "@/lib/notion";

type ProjectFromNotion = {
	status: {
		id: string;
		type: string;
		status: object;
	};
	github_url: {
		id: string;
		type: string;
		url: null;
	};
	created_at: {
		id: string;
		type: string;
		created_time: string;
	};
	description: {
		id: string;
		type: string;
		rich_text: Array<any>;
	};
	live_site_url: {
		id: string;
		type: string;
		url: null;
	};
	technologies: {
		id: string;
		type: string;
		multi_select: Array<any>;
	};
	image: {
		id: string;
		type: string;
		files: Array<any>;
	};
	title: {
		id: string;
		type: string;
		title: Array<any>;
	};
};

type Project = {
	title: string;
	description: string;
	imageURL: string;
	technologies: string[];
	github_url: string | null;
	live_site_url: string | null;
};

// TODO move all of this to server under a try and catch so you can catch errors

function extractInformationIntoType(
	projFromNotion: ProjectFromNotion
): Project {
	// Title
	const title: string = projFromNotion.title.title[0].plain_text;
	// Description
	const description: string =
		projFromNotion.description.rich_text[0].plain_text;
	// Image URL
	const imageURL: string = projFromNotion.image.files[0].file.url;
	// Technologies
	const technologies: string[] = projFromNotion.technologies.multi_select.map(
		(tech) => {
			return tech.name;
		}
	);
	// Github URL
	let github_url: string | null = projFromNotion.github_url.url;
	github_url = projFromNotion.github_url.url;
	// Live Site URL
	let live_site_url: string | null = projFromNotion.live_site_url.url;

	// Return formatted project
	return {
		title,
		description,
		imageURL,
		technologies,
		github_url,
		live_site_url,
	};
}

// Revalidate this route every hour (fetch new data)
export const revalidate = 3600;

export default async function Projects() {
	// Fetch projects
	const projects: ProjectFromNotion[] = await getAllProjects();
	console.log(projects[0].live_site_url.url);

	return <main className="text-slate-100">Projects here</main>;
}
