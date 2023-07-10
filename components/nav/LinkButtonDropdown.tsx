"use client";

import { NavElement } from "@/types";
import Link from "next/link";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

interface LinkDropdownButtonProps {
	isActive: boolean;
	link: NavElement;
}

export default function LinkButtonDropdown({
	isActive,
	link,
}: LinkDropdownButtonProps) {
	return (
		<DropdownMenuItem
			asChild
			key={link.text}
			className="hover:bg-slate-800 cursor-pointer"
		>
			<Link
				href={link.href}
				className={`
                    ${
						isActive ? "text-slate-100" : "text-slate-500"
					} w-full h-full
                `}
			>
				{link.text}
			</Link>
		</DropdownMenuItem>
	);
}
