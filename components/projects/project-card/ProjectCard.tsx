"use client";

import { Project } from "@/types";
import { poppins } from "@/app/fonts";
import TechnologiesOnCardSection from "./TechnologiesOnCardSection";
import { projectCardClasses, projectImageClasses } from "../shared_classes";
import ButtonsSection from "./ButtonsSection";

interface ProjectCardProps {
	project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
	return (
		<div className={`${projectCardClasses} flex flex-col justify-between`}>
			<div>
				{project.imageURL ? (
					<img
						src={project.imageURL}
						alt={project.title}
						className={`${projectImageClasses} object-cover overflow-hidden rounded-lg`}
					/>
				) : (
					<div
						className={`${projectImageClasses} bg-gradient-to-br from-sky-400 to-blue-600`}
					></div>
				)}
				<p
					className={`${poppins.className} text-2xl font-bold text-slate-100 pt-6 pb-4`}
				>
					{project.title}
				</p>
				<TechnologiesOnCardSection project={project} />
				<p className="text-slate-400">{project.description}</p>
			</div>
			<ButtonsSection project={project} />
		</div>
	);
}
