"use client";

import { Project } from "@/types";
import { poppins } from "@/app/fonts";
import TechnologiesOnCardSection from "./TechnologiesOnCardSection";
import Image from "next/image";
import ButtonsSection from "./ButtonsSection";

interface ProjectCardProps {
	project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
	return (
		<div className="border-2 border-slate-800 p-6 rounded-2xl shadow-white">
			<div className="w-full aspect-video relative rounded-lg bg-gradient-to-br from-sky-400 to-blue-600">
				{/* <Image
					src={project.imageURL}
					alt={project.title}
					fill
					className="object-cover overflow-hidden rounded-lg"
				/> */}
			</div>
			<p
				className={`${poppins.className} text-2xl font-bold text-slate-100 pt-6 pb-4`}
			>
				{project.title}
			</p>
			<TechnologiesOnCardSection project={project} />
			<p className="text-slate-400">{project.description}</p>
			<ButtonsSection project={project} />
		</div>
	);
}
