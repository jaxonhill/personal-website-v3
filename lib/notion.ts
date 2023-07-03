import { Client } from "@notionhq/client";

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
        }
    });
    return response;

    // Catch any errors if not connected to Notion
    } catch (error: unknown) {
        throw new Error("Something went wrong with Notion.");
    }
}

