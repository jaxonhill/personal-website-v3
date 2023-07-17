import { Skeleton } from "@/components/ui/skeleton";

const dummyArrayThree = [0, 0, 0];
const dummyArrayFive = [0, 0, 0, 0, 0];

export default function ProjectsLoading() {
	return (
		<>
			<div className="w-full mt-4 mb-8 flex gap-2">
				{/* Search Bar */}
				<input
					disabled
					className="w-3/4 max-w-sm bg-transparent border-2 border-slate-800 h-12 py-2 px-4 rounded-full placeholder:text-slate-800 focus:outline-none focus:ring-0 cursor-not-allowed"
					placeholder="Search for a project"
				/>
			</div>
			<div className="grid gap-6 grid-flow-row grid-cols-1 w-full md:grid-cols-2 2xl:grid-cols-3">
				{dummyArrayThree.map(() => {
					return (
						<div className="border-2 border-slate-800 p-6 rounded-2xl shadow-white">
							<Skeleton className="w-full aspect-video relative rounded-lg" />
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
