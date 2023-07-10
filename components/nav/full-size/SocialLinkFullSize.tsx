import { SocialInfo } from "@/types";

interface SocialLinkFullSizeProps {
	social: SocialInfo;
}

export default function SocialLinkFullSize({
	social,
}: SocialLinkFullSizeProps) {
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
}
