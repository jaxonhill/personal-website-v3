import { Project, Technologies, Technology } from "@/types";
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

// Hash Table / Object for logo pngs and more information
const technologiesInfo: Technologies = {
	nextjs: {
		abbrev: "nextjs",
		logoPath: "/images/nextjs.svg",
		fullName: "Next.js",
	},
	react: {
		abbrev: "react",
		logoPath: "/images/react.png",
		fullName: "React",
	},
	typescript: {
		abbrev: "typescript",
		logoPath: "/images/typescript.png",
		fullName: "TypeScript",
	},
	tailwind: {
		abbrev: "tailwind",
		logoPath: "/images/tailwind.png",
		fullName: "Tailwind CSS",
	},
	shadcn_ui: {
		abbrev: "shadcn_ui",
		logoPath: "/images/shadcn.jpg",
		fullName: "shadcn ui",
	},
	framer_motion: {
		abbrev: "framer_motion",
		logoPath: "/images/framer.svg",
		fullName: "Framer Motion",
	},
	vercel: {
		abbrev: "vercel",
		logoPath: "/images/vercel.svg",
		fullName: "Vercel",
	},
	python: {
		abbrev: "python",
		logoPath: "/images/python.png",
		fullName: "Python",
	},
	planetscale: {
		abbrev: "planetscale",
		logoPath: "/images/planetscale.svg",
		fullName: "PlanetScale",
	},
	next_auth: {
		abbrev: "next_auth",
		logoPath: "/images/nextauth.png",
		fullName: "NextAuth",
	},
	prisma: {
		abbrev: "prisma",
		logoPath: "/images/prisma.svg",
		fullName: "Prisma",
	},
};

export async function getAllProjects() {
	// Create a promise that resolves after 5 seconds
	// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
	// await delay(2000); // Add a 5-second delay

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
	const technologies: Technology[] = projFromNotion.technologies.multi_select.map(
		(tech) => {
			return technologiesInfo[tech.name];
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