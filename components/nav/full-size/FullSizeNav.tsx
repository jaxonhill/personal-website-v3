"use client";

import { NavElement, SocialInfo } from "@/types";
import LinksSectionFullSize from "./LinksSectionFullSize";

interface RightsideNavProps {
	links: NavElement[];
	socials: SocialInfo[];
}

export default function RightsideNav({ links, socials }: RightsideNavProps) {
	return (
		<div className="gap-6 items-center hidden md:flex">
			<LinksSectionFullSize links={links} />
			{socials.map((social) => {
				return (
					<a
						key={social.platform}
						href={social.href}
						target="_blank"
						className="group w-full h-full flex gap-2 items-center"
					>
						<p className="w-full h-full text-slate-500 group-hover:text-slate-100">
							{social.platform}
						</p>
						<i className="w-4 h-4 fill-slate-500 group-hover:fill-slate-100">
							{social.svgElement}
						</i>
					</a>
				);
			})}
		</div>
	);
}
