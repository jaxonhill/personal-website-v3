"use client";

import { Project } from "@/types";
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
			<div className="flex w-full gap-2 pb-4 flex-wrap">
				{project.technologies.map((technology) => {
					return (
						<Tooltip key={technology.abbrev}>
							<TooltipTrigger>
								<div className="w-6 h-6 aspect-square relative">
									<img
										src={technology.logoPath}
										alt={technology.fullName}
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
