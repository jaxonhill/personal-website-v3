import { poppins } from "./fonts";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const metadata = {
	title: "Home",
	openGraph: {
		title: "Home",
		description: "See the home page of jaxonhill.xyz",
	},
};

export default function Home() {
	return (
		<div className="w-full flex flex-col pt-36 sm:items-center">
			<h1
				className={`${poppins.className} mb-4 font-bold text-4xl text-slate-100 sm:text-center sm:text-5xl md:text-6xl`}
			>
				Jaxon Hill
			</h1>
			<p className="text-slate-400 mb-8 text-lg sm:text-center sm:text-xl sm:w-5/6 max-w-4xl">
				I'm a{" "}
				<span className="text-sky-400">Computer Science student</span>{" "}
				who is{" "}
				<span className="text-sky-400">building side projects</span> on
				the Internet with modern web development technologies. Check out
				my{" "}
				<Link
					className="text-sky-400 font-semibold hover:underline hover:cursor-pointer"
					href={"/projects"}
				>
					projects
				</Link>{" "}
				to see what I'm working on.
			</p>
		</div>
	);
}
