import { poppins } from "./fonts";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
	return (
		<div className="w-full flex flex-col pt-36 items-center">
			<h1
				className={`${poppins.className} mb-4 font-bold text-4xl text-slate-100 sm:text-center sm:text-5xl`}
			>
				Jaxon Hill
			</h1>
			<p className="text-slate-400 mb-8 text-lg sm:text-center sm:text-xl sm:w-4/5 max-w-3xl">
				I'm a{" "}
				<span className="text-sky-400">Computer Science student</span>{" "}
				on the journey to becoming a founder by{" "}
				<span className="text-sky-400">building side projects</span> on
				the Internet with modern web development technologies.
			</p>
			<Link
				className="flex items-center gap-2 rounded-lg font-medium py-2 px-4 w-fit bg-slate-100 text-slate-950 hover:bg-slate-100/90"
				href={"/projects"}
			>
				<p className="sm:text-xl">See my projects</p>
				<ArrowLongRightIcon className="text-slate-950 w-6 h-6" />
			</Link>
		</div>
	);
}
