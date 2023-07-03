import { Client } from "@notionhq/client";

type NotionResponse = {
    results: NotionResultsObject[];
}

type NotionResultsObject = {
    properties: any;
}

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

export async function getAllProjects() {
    let results: NotionResultsObject[];
    try {
    // Connect to Notion
    const notion = new Client({
        // Integration token
        auth: process.env.NOTION_SECRET_KEY,
    });

    // Filter by published projects
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID!, // PURPOSEFUL ERROR HERE
        filter: {
            property: "status",
            status: {
                equals: "published",
            }
        },
        sorts: [
            {
                property: "created_at",
                direction: "ascending",
            }
        ]
    }) as NotionResponse;

    // Get the results from the response
    results = response.results;

    // Catch any errors if not connected to Notion
    } catch (error: unknown) {
        throw new Error("Something went wrong with Notion.");
    }

    try {
    // Map over the results and only get the information needed
    const projectsFromNotion: ProjectFromNotion[] = results.map((result) => {
        return result.properties;
    });

    // Return projects in correct format
    return projectsFromNotion.map((notionProject: ProjectFromNotion) => {
        return extractInformationIntoType(notionProject);
    });
    } catch (error: unknown) {
        throw new Error("One of the projects does not meet the schema.");
    }
}

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