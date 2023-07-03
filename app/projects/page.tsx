import { getAllProjects } from "@/lib/notion";

// Revalidate this route every hour (fetch new data)
export const revalidate = 3600;

export default async function Projects() {
	// Fetch projects
	const projects = await getAllProjects();
	console.log(projects);

	return <main className="text-slate-100">Projects here</main>;
}
