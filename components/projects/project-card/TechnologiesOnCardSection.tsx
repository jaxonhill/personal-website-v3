"use client";

import { Project, Technologies } from "@/types";
import Image from "next/image";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

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
										src={technology.logoPath}
										alt={technology.fullName}
										fill
									/>
								</div>
							</TooltipTrigger>
							<TooltipContent className="font-medium">
								{technology.fullName}
							</TooltipContent>
						</Tooltip>
					);
				})}
			</div>
		</TooltipProvider>
	);
}
