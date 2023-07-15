import { Project } from "@/types";
import { getAllProjects } from "@/lib/notion";
import ProjectsMainSection from "@/components/projects/ProjectsMainSection";

// Revalidate this route every hour (fetch new data)
export const revalidate = 3600;

export default async function Projects() {
	// Fetch projects directly from Notion database (need this to be server component for this)
	const projects: Project[] = await getAllProjects();

	return (
		<main className="text-slate-100 pt-8">
			<ProjectsMainSection projects={projects} />
		</main>
	);
}
