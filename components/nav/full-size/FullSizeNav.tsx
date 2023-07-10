import { NavElement, SocialInfo } from "@/types";
import LinksSectionFullSize from "./LinksSectionFullSize";
import SocialsSectionFullSize from "./SocialsSectionFullSize";

interface RightsideNavProps {
	links: NavElement[];
	socials: SocialInfo[];
}

export default function RightsideNav({ links, socials }: RightsideNavProps) {
	return (
		<div className="gap-6 items-center hidden md:flex">
			<LinksSectionFullSize links={links} />
			<SocialsSectionFullSize socials={socials} />
		</div>
	);
}
