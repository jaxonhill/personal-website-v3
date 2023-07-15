"use client";

import { Project } from "@/types";
import Searchbar from "./Searchbar";
import ProjectsGrid from "./ProjectsGrid";
import { useState } from "react";

interface ProjectsMainSectionProps {
	projects: Project[];
}

export default function ProjectsMainSection({
	projects,
}: ProjectsMainSectionProps) {
	const [searchInput, setSearchInput] = useState<string>("");

	return (
		<>
			<Searchbar
				searchInput={searchInput}
				setSearchInput={setSearchInput}
			/>
			<ProjectsGrid projects={projects} searchInput={searchInput} />
		</>
	);
}
