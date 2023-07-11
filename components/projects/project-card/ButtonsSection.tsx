import LiveSiteButton from "./LiveSiteButton";
import GithubLinkButton from "./GithubLinkButton";
import { Project } from "@/types";

interface ButtonsSectionProps {
	project: Project;
}

export default function ButtonsSection({ project }: ButtonsSectionProps) {
	return (
		<>
			{(project.live_site_url || project.github_url) && (
				<div className="w-full flex justify-end gap-4 pt-6">
					<LiveSiteButton project={project} />
					<GithubLinkButton project={project} />
				</div>
			)}
		</>
	);
}
