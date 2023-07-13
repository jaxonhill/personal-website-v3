"use client";

import { Project, Technologies } from "@/types";
import Image from "next/image";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

// Hash Table / Object for logo pngs and more information
const technologies: Technologies = {
	nextjs: {
		logoPath: "/images/nextjs.svg",
		fullName: "Next.js",
	},
	react: {
		logoPath: "/images/react.png",
		fullName: "React",
	},
	typescript: {
		logoPath: "/images/typescript.png",
		fullName: "TypeScript",
	},
	tailwind: {
		logoPath: "/images/tailwind.png",
		fullName: "Tailwind CSS",
	},
	shadcn_ui: {
		logoPath: "/images/shadcn.jpg",
		fullName: "shadcn ui",
	},
	framer_motion: {
		logoPath: "/images/framer.svg",
		fullName: "Framer Motion",
	},
	vercel: {
		logoPath: "/images/vercel.svg",
		fullName: "Vercel",
	},
	python: {
		logoPath: "/images/python.png",
		fullName: "Python",
	},
	planetscale: {
		logoPath: "/images/planetscale.svg",
		fullName: "PlanetScale",
	},
	next_auth: {
		logoPath: "/images/nextauth.png",
		fullName: "NextAuth",
	},
	prisma: {
		logoPath: "/images/prisma.svg",
		fullName: "Prisma",
	},
};

interface TechnologiesOnCardSectionProps {
	project: Project;
}

export default function TechnologiesOnCardSection({
	project,
}: TechnologiesOnCardSectionProps) {
	return (
		<TooltipProvider>
			<div className="flex w-full gap-2 pb-4">
				{project.technologies.map((technology) => {
					return (
						<Tooltip>
							<TooltipTrigger>
								<div className="w-6 h-6 aspect-square relative">
									<Image
										src={technologies[technology].logoPath}
										alt={technologies[technology].fullName}
										fill
										className=""
									/>
								</div>
							</TooltipTrigger>
							<TooltipContent>
								{technologies[technology].fullName}
							</TooltipContent>
						</Tooltip>
					);
				})}
			</div>
		</TooltipProvider>
	);
}
