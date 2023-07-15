import { poppins } from "../fonts";

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<h1
				className={`${poppins.className} pt-16 font-bold text-4xl text-slate-100`}
			>
				Projects
			</h1>
			{children}
		</>
	);
}
