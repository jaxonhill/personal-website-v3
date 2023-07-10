"use client";

import { SocialInfo } from "@/types";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

interface SocialButtonDropdownProps {
	social: SocialInfo;
}

export default function SocialButtonDropdown({
	social,
}: SocialButtonDropdownProps) {
	return (
		<DropdownMenuItem asChild className="hover:bg-slate-800 cursor-pointer">
			<a
				href={social.href}
				target="_blank"
				className="group w-full h-full flex justify-between items-center"
			>
				<p className="w-full h-full text-slate-500 group-hover:text-slate-100 group-focus:text-slate-100">
					{social.platform}
				</p>
				<i className="w-4 h-4 fill-slate-500 group-hover:fill-slate-100 group-focus:fill-slate-100">
					{social.svgElement}
				</i>
			</a>
		</DropdownMenuItem>
	);
}
