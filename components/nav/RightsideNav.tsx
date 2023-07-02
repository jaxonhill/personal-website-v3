"use client";

import Link from "next/link";
import { NavElement, SocialInfo } from "./Navbar";
import { usePathname } from "next/navigation";

interface RightsideNavProps {
	links: NavElement[];
	socials: SocialInfo[];
}

export default function RightsideNav({ links, socials }: RightsideNavProps) {
	const pathname = usePathname();

	return (
		<div className="gap-6 items-center hidden md:flex">
			{links.map((link) => {
				const isActive = pathname.endsWith(link.href);

				return (
					<Link
						href={link.href}
						className={`${
							isActive
								? "text-slate-100"
								: "text-slate-500 hover:text-slate-100"
						}`}
					>
						{link.text}
					</Link>
				);
			})}
			{socials.map((social) => {
				return (
					<a
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
