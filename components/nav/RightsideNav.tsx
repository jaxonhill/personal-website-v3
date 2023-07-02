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
		</div>
	);
}