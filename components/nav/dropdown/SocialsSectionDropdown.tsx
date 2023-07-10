"use client";

import { SocialInfo } from "@/types";
import SocialButtonDropdown from "./SocialButtonDropdown";

interface SocialsSectionDropdownProps {
	socials: SocialInfo[];
}

export default function SocialsSectionDropdown({
	socials,
}: SocialsSectionDropdownProps) {
	return (
		<>
			{socials.map((social) => {
				return (
					<SocialButtonDropdown
						key={social.platform}
						social={social}
					/>
				);
			})}
		</>
	);
}
