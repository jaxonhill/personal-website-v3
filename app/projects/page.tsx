import { getAllProjects } from "@/lib/notion";
import { poppins } from "../layout";
import Image from "next/image";

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
						<div className="border-2 border-slate-800 p-6 rounded-2xl">
							<div className="w-full aspect-video relative">
								{/* <Image
									src={project.imageURL}
									alt={project.title}
									fill
									className="object-cover overflow-hidden rounded-lg"
								/> */}
							</div>
							<div className="flex w-full gap-2">
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
							<p
								className={`${poppins.className} text-2xl font-bold text-slate-100 pt-4 pb-2`}
							>
								{project.title}
							</p>
							<p className="text-slate-400">
								{project.description}
							</p>
						</div>
					);
				})}
			</div>
		</main>
	);
}
