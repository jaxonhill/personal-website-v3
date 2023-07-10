"use client";

import { NavElement } from "@/types";
import LinkButtonDropdown from "./LinkButtonDropdown";
import { usePathname } from "next/navigation";

interface LinksSectionDropdownProps {
	links: NavElement[];
}

export default function LinksSectionDropdown({
	links,
}: LinksSectionDropdownProps) {
	// Get pathname to check which nav link is active page in map function
	const pathname = usePathname();

	return (
		<>
			{links.map((link) => {
				const isActive = pathname.endsWith(link.href);
				return <LinkButtonDropdown isActive={isActive} link={link} />;
			})}
		</>
	);
}
