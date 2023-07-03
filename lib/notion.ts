import { Client } from "@notionhq/client";

type NotionResponse = {
    results: NotionResultsObject[];
}

type NotionResultsObject = {
    properties: any;
}

export async function getAllProjects() {
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
    const results: NotionResultsObject[] = response.results;

    // Map over the results and only get the information needed
    return results.map((result) => {
        return result.properties;
    });

    // Catch any errors if not connected to Notion
    } catch (error: unknown) {
        throw new Error("Something went wrong with Notion.");
    }
}

