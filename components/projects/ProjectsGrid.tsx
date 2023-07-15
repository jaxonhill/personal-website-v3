"use client";

import { Project } from "@/types";
import ProjectCard from "./project-card/ProjectCard";

interface ProjectsGridProps {
	projects: Project[];
	searchInput: string;
}

// Checks if the project meets the search and filter criteria
function doesMeetCriteria(project: Project, searchInput: string): boolean {
	// Lowercase and strip the searchInput to sanitize it
	searchInput = searchInput.toLowerCase().trim();
	if (searchInput === "") return true; // Empty searchInput should not filter

	// If search criteria matches any technology, then return true immediately
	for (const technology in project.technologies) {
		if (technology.includes(searchInput)) {
			return true;
		}
	}

	// Check if search criteria matches project title or description
	if (
		project.title.includes(searchInput) ||
		project.description.includes(searchInput)
	) {
		return true;
	}

	// Return false if search input not present in title, description, or technologies
	return false;
}

export default function ProjectsGrid({
	projects,
	searchInput,
}: ProjectsGridProps) {
	return (
		<main className="grid grid-flow-row grid-cols-1 w-full">
			{projects
				.filter((project) => {
					return doesMeetCriteria(project, searchInput);
				})
				.map((project) => {
					return <ProjectCard project={project} />;
				})}
		</main>
	);
}
