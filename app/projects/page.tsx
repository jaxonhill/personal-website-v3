import { getAllProjects } from "@/lib/notion";
import ProjectCard from "@/components/projects/ProjectCard";

// Revalidate this route every hour (fetch new data)
export const revalidate = 3600;

export default async function Projects() {
	// Fetch projects
	const projects = await getAllProjects();

	return (
		<main className="text-slate-100 pt-20">
			<div className="grid grid-flow-row grid-cols-1 w-full">
				{projects.map((project) => {
					return <ProjectCard project={project} />;
				})}
			</div>
		</main>
	);
}
