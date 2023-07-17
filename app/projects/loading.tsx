import { Skeleton } from "@/components/ui/skeleton";
import {
	topSectionClasses,
	searchClasses,
	projectGridClasses,
	projectCardClasses,
	projectImageClasses,
} from "@/components/projects/shared_classes";

const dummyArrayThree = [0, 0, 0];
const dummyArrayFive = [0, 0, 0, 0, 0];

export default function ProjectsLoading() {
	return (
		<>
			<div className={topSectionClasses}>
				{/* Search Bar */}
				<input
					disabled
					className={`${searchClasses} placeholder:text-slate-800 cursor-not-allowed`}
					placeholder="Search for a project"
				/>
			</div>
			<div className={projectGridClasses}>
				{dummyArrayThree.map(() => {
					return (
						<div className={projectCardClasses}>
							<Skeleton className={projectImageClasses} />
							<Skeleton className="mt-6 mb-4 w-2/3 h-8" />
							<div className="flex w-full gap-2 mb-4">
								{dummyArrayFive.map(() => {
									return (
										<Skeleton className="w-6 h-6 aspect-square relative rounded-full" />
									);
								})}
							</div>
							<div className="flex flex-col gap-2">
								<Skeleton className="w-full h-6" />
								<Skeleton className="w-full h-6" />
								<Skeleton className="w-3/4 h-6" />
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
