"use client";

import Link from "next/link";
import { NavElement } from "./Navbar";
import { usePathname } from "next/navigation";

interface RightsideNavProps {
	links: NavElement[];
}

export default function RightsideNav({ links }: RightsideNavProps) {
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
