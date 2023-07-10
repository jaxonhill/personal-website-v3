"use client";

import { NavElement, SocialInfo } from "@/types";
import LinksSectionDropdown from "./LinksSectionDropdown";
import SocialsSectionDropdown from "./SocialsSectionDropdown";
import { Bars3Icon } from "@heroicons/react/24/outline";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DropdownNavProps {
	links: NavElement[];
	socials: SocialInfo[];
}

export default function DropdownNav({ links, socials }: DropdownNavProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="outline-none focus:outline-none md:hidden">
				<Bars3Icon className="w-6 h-6 text-slate-100" />
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="end"
				className="mt-2 bg-slate-950 border border-slate-800 px-3 py-2"
			>
				<LinksSectionDropdown links={links} />
				<SocialsSectionDropdown socials={socials} />
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
