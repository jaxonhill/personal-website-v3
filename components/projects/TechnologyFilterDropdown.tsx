"use client";

import { Technology } from "@/types";
import Image from "next/image";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface TechnologyFilterDropdownProps {
	technologies: Technology[];
}

export default function TechnologyFilterDropdown({
	technologies,
}: TechnologyFilterDropdownProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="outline-none focus:outline-none">
				<AdjustmentsHorizontalIcon className="w-12 h-12 text-slate-600 p-2 border-2 border-slate-800 rounded-full hover:bg-slate-800 hover:text-slate-400 hover:cursor-pointer" />
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="end"
				className="mt-2 bg-slate-950 border border-slate-800 px-3 py-2 text-slate-500"
			>
				{technologies.map((technology) => {
					return (
						<DropdownMenuItem className="flex justify-between gap-4 cursor-pointer text-slate-500 w-full h-full hover:bg-slate-800 hover:text-slate-100">
							<p>{technology.fullName}</p>
							<div className="w-4 h-4 aspect-square relative">
								<Image
									src={technology.logoPath}
									alt={technology.fullName}
									fill
								/>
							</div>
						</DropdownMenuItem>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
