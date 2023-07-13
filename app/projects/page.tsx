import { Project } from "@/types";
import { getAllProjects } from "@/lib/notion";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

// Revalidate this route every hour (fetch new data)
export const revalidate = 3600;

export default async function Projects() {
	// Fetch projects
	const projects: Project[] = await getAllProjects();

	return (
		<main className="text-slate-100 pt-8">
			<div className="grid grid-flow-row grid-cols-1 w-full">
				<ProjectsGrid projects={projects} />
			</div>
		</main>
	);
}
