"use client";

import { Project, Technology } from "@/types";
import Searchbar from "./Searchbar";
import ProjectsGrid from "./ProjectsGrid";
import { topSectionClasses } from "./shared_classes";
import { useState } from "react";

interface ProjectsMainSectionProps {
	projects: Project[];
	technologies: Technology[];
}

export default function ProjectsMainSection({
	projects,
	technologies,
}: ProjectsMainSectionProps) {
	const [searchInput, setSearchInput] = useState<string>("");

	return (
		<>
			<div className={topSectionClasses}>
				<Searchbar
					searchInput={searchInput}
					setSearchInput={setSearchInput}
				/>
			</div>
			<ProjectsGrid projects={projects} searchInput={searchInput} />
		</>
	);
}
