import { SocialInfo } from "@/types";
import SocialLinkFullSize from "./SocialLinkFullSize";

interface SocialsSectionFullSizeProps {
	socials: SocialInfo[];
}

export default function SocialsSectionFullSize({
	socials,
}: SocialsSectionFullSizeProps) {
	return (
		<>
			{socials.map((social) => {
				return (
					<SocialLinkFullSize key={social.platform} social={social} />
				);
			})}
		</>
	);
}
