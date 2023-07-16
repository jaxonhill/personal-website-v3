import { Project, Technology } from "@/types";
import { getAllProjects } from "@/lib/notion";
import ProjectsMainSection from "@/components/projects/ProjectsMainSection";

// Revalidate this route every hour (fetch new data)
export const revalidate = 3600;

export default async function Projects() {
	// Fetch projects directly from Notion database (need this to be server component for this)
	const projects: Project[] = await getAllProjects();

	// Get technologies from projects in alphabetical order
	const technologies: Technology[] = sortTechnologiesAlphabetically(
		getFinalTechnologiesFromProjects(projects)
	);

	return (
		<>
			<ProjectsMainSection
				projects={projects}
				technologies={technologies}
			/>
		</>
	);
}

function getFinalTechnologiesFromProjects(projects: Project[]): Technology[] {
	let finalTechnologies: Technology[] = [];

	/* THIS IS O(n^3) but not sure if there is something more efficient */
	// For each project
	for (let i = 0; i < projects.length; i++) {
		let currProject: Project = projects[i];
		// For each technology in that project
		for (let j = 0; j < currProject.technologies.length; j++) {
			// Check if it is already in the list of finalTechnologies
			let currTechnology = currProject.technologies[j];
			let isInTechnologiesAlready = false;
			for (let k = 0; k < finalTechnologies.length; k++) {
				if (finalTechnologies[k].abbrev === currTechnology.abbrev) {
					isInTechnologiesAlready = true;
				}
			}
			// If it is not already in final technologies, add it
			if (!isInTechnologiesAlready) {
				finalTechnologies.push(currTechnology);
			}
		}
	}

	return finalTechnologies;
}

function sortTechnologiesAlphabetically(
	technologies: Technology[]
): Technology[] {
	technologies.sort((a, b) => {
		if (a.fullName.toLowerCase() < b.fullName.toLowerCase()) {
			return -1;
		}
		if (a.fullName.toLowerCase() > b.fullName.toLowerCase()) {
			return 1;
		}
		return 0;
	});
	return technologies;
}
