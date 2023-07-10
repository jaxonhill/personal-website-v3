"use client";

import { NavElement } from "@/types";
import LinkFullSize from "./LinkFullSize";
import { usePathname } from "next/navigation";

interface LinksSectionFullSizeProps {
	links: NavElement[];
}

export default function LinksSectionFullSize({
	links,
}: LinksSectionFullSizeProps) {
	// Get pathname to check which nav link is active page in map function
	const pathname = usePathname();

	return (
		<>
			{links.map((link) => {
				const isActive = pathname.endsWith(link.href);
				return (
					<LinkFullSize
						key={link.text}
						isActive={isActive}
						link={link}
					/>
				);
			})}
		</>
	);
}
