import { getAllProjects } from "@/lib/notion";

// Revalidate this route every hour (fetch new data)
export const revalidate = 3600;

export default async function Projects() {
	// Fetch projects
	const response = await getAllProjects();
	console.log(response);

	return <main className="text-slate-100">Projects here</main>;
}
