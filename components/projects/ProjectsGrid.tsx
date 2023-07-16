"use client";

import { Project, Technology } from "@/types";
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
	for (let i = 0; i < project.technologies.length; i++) {
		let currentTechnology: Technology = project.technologies[i];
		if (
			// Check abbreviation and full name
			currentTechnology.abbrev.toLowerCase().includes(searchInput) ||
			currentTechnology.fullName.toLowerCase().includes(searchInput)
		) {
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
	// Figure out which projects to display
	const projectsToDisplay: Project[] = projects.filter((project) => {
		return doesMeetCriteria(project, searchInput);
	});

	console.log(projectsToDisplay);

	return (
		<>
			{projectsToDisplay.length === 0 ? (
				<p className="w-full font-bold text-4xl text-center text-slate-600 pt-32">
					No projects match the criteria.
				</p>
			) : (
				<main className="grid gap-6 grid-flow-row grid-cols-1 w-full md:grid-cols-2 2xl:grid-cols-3">
					{projectsToDisplay.map((project) => {
						return <ProjectCard project={project} />;
					})}
				</main>
			)}
		</>
	);
}
