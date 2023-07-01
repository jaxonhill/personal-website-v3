import { Bars3Icon, MoonIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
	return (
		<div className="text-slate-900 flex justify-between items-center my-6">
			<p className="font-semibold">jaxonhill.xyz</p>
			<div className="flex gap-4 items-center">
				<Bars3Icon className="w-6 h-6" />
				<MoonIcon className="w-6 h-6" />
			</div>
		</div>
	);
}
