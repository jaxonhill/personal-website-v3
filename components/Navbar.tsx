import { poppins } from "@/app/layout";
import DropdownNav from "./DropdownNav";
import RightsideNav from "./RightsideNav";

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
			<RightsideNav links={links} />
		</nav>
	);
}
