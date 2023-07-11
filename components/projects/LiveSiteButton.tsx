import { Project } from "@/types";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

interface LiveSiteButtonProps {
	project: Project;
}

export default function LiveSiteButton({ project }: LiveSiteButtonProps) {
	return (
		<>
			{project.live_site_url && (
				<a
					href={project.live_site_url}
					target="_blank"
					className="group flex items-center gap-2 rounded-lg font-medium py-2 px-4 w-fit border-2 border-slate-800 bg-slate-950 hover:bg-slate-800 group-hover:text-slate-50 hover:cursor-pointer"
				>
					<p className="text-slate-300 group-hover:text-slate-50">
						Live Site
					</p>
					<ArrowUpRightIcon className="text-slate-300 w-4 h-4 stroke-2 group-hover:text-slate-50" />
				</a>
			)}
		</>
	);
}
