import { Project, Technology } from "@/types";
import { getAllProjects } from "@/lib/notion";
import ProjectsMainSection from "@/components/projects/ProjectsMainSection";

// Revalidate this route every hour (fetch new data)
export const revalidate = 3600;

export const metadata = {
	title: "Projects",
	openGraph: {
		title: "Projects",
		description: "See Jaxon's projects on jaxonhill.xyz",
	},
};

export default async function Projects() {
	// Fetch projects directly from Notion database (need this to be server component for this)
	const projects: Project[] = await getAllProjects();

	return (
		<>
			<ProjectsMainSection projects={projects} />
		</>
	);
}
