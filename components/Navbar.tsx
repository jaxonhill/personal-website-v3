import { poppins } from "@/app/layout";
import Link from "next/link";
import DropdownNav from "./DropdownNav";

export type NavElement = {
	text: string;
	href: string;
};

const links: NavElement[] = [
	{
		text: "Home",
		href: "/",
	},
	{
		text: "Projects",
		href: "/projects",
	},
];

export default function Navbar() {
	return (
		<nav className="flex justify-between items-center">
			<p className={`${poppins.className} text-slate-100 font-semibold`}>
				jaxonhill.xyz
			</p>
			<DropdownNav links={links} />
			<div className="gap-6 items-center hidden md:flex">
				<Link href={"/"} className="text-slate-100">
					Home
				</Link>
				<Link href={"/projects"} className="text-slate-500">
					Projects
				</Link>
			</div>
		</nav>
	);
}
