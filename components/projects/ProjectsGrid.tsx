import { Project } from "@/types";
import ProjectCard from "./project-card/ProjectCard";

interface ProjectsGridProps {
	projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
	return (
		<>
			{projects.map((project) => {
				return <ProjectCard project={project} />;
			})}
		</>
	);
}
