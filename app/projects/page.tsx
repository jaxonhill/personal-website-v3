import { getAllProjects } from "@/lib/notion";
import { poppins } from "../layout";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

type Technology = {
	logoPath: string;
	fullName: string;
};

type Technologies = {
	[key: string]: Technology;
};

// Hash Table / Object for logo pngs and more information
const technologies: Technologies = {
	nextjs: {
		logoPath: "/images/nextjs.svg",
		fullName: "Next.js",
	},
	react: {
		logoPath: "/images/react.png",
		fullName: "React",
	},
	typescript: {
		logoPath: "/images/typescript.png",
		fullName: "TypeScript",
	},
	tailwind: {
		logoPath: "/images/tailwind.png",
		fullName: "Tailwind CSS",
	},
	shadcn_ui: {
		logoPath: "/images/shadcn.jpg",
		fullName: "shadcn ui",
	},
	framer_motion: {
		logoPath: "/images/framer.svg",
		fullName: "Framer Motion",
	},
	vercel: {
		logoPath: "/images/vercel.svg",
		fullName: "Vercel",
	},
	python: {
		logoPath: "/images/python.png",
		fullName: "Python",
	},
	planetscale: {
		logoPath: "/images/planetscale.svg",
		fullName: "PlanetScale",
	},
	next_auth: {
		logoPath: "/images/nextauth.png",
		fullName: "NextAuth",
	},
	prisma: {
		logoPath: "/images/prisma.svg",
		fullName: "Prisma",
	},
};

// Revalidate this route every hour (fetch new data)
export const revalidate = 3600;

export default async function Projects() {
	// Fetch projects
	const projects = await getAllProjects();
	console.log(projects);

	return (
		<main className="text-slate-100 pt-20">
			<div className="grid grid-flow-row grid-cols-1 w-full">
				{projects.map((project) => {
					return (
						<div className="border-2 border-slate-800 p-6 rounded-2xl shadow-white">
							<div className="w-full aspect-video relative">
								<Image
									src={project.imageURL}
									alt={project.title}
									fill
									className="object-cover overflow-hidden rounded-lg"
								/>
							</div>
							<p
								className={`${poppins.className} text-2xl font-bold text-slate-100 pt-6 pb-4`}
							>
								{project.title}
							</p>
							<div className="flex w-full gap-2 pb-4">
								{project.technologies.map((technology) => {
									return (
										<div className="w-6 h-6 aspect-square relative">
											<Image
												src={
													technologies[technology]
														.logoPath
												}
												alt={
													technologies[technology]
														.fullName
												}
												fill
												className=""
											/>
										</div>
									);
								})}
							</div>
							<p className="text-slate-400 pb-6">
								{project.description}
							</p>
							<div className="w-full flex justify-end gap-4">
								{project.live_site_url ? (
									<a
										href={project.live_site_url}
										className="flex items-center gap-2 rounded-lg font-medium py-2 px-4 w-fit bg-slate-100 text-slate-950 hover:bg-slate-100/90"
									>
										<p className="text-slate-950">
											Live Site
										</p>
										<ArrowUpRightIcon className="text-slate-950 w-4 h-4" />
									</a>
								) : (
									<div className="flex items-center gap-2 rounded-lg font-medium py-2 px-4 w-fit opacity-30 bg-slate-100 text-slate-950 cursor-not-allowed">
										<p className="text-slate-950">
											Live Site
										</p>
										<ArrowUpRightIcon className="w-4 h-4 text-slate-950" />
									</div>
								)}
								{project.github_url ? (
									<a
										href={project.github_url}
										className="flex items-center gap-2 rounded-lg font-medium py-2 px-4 w-fit bg-slate-100 text-slate-950 hover:bg-slate-100/90"
									>
										<p className="text-slate-950">Github</p>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											className="fill-slate-950"
										>
											<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
										</svg>
									</a>
								) : (
									<div className="flex items-center gap-2 rounded-lg font-medium py-2 px-4 w-fit opacity-30 bg-slate-100 text-slate-950 cursor-not-allowed">
										<p className="text-slate-950">Github</p>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											className="fill-slate-950"
										>
											<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
										</svg>
									</div>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</main>
	);
}
