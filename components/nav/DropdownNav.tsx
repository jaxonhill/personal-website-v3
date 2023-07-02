"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavElement, SocialInfo } from "./Navbar";
import { usePathname } from "next/navigation";

interface DropdownNavProps {
	links: NavElement[];
	socials: SocialInfo[];
}

export default function DropdownNav({ links, socials }: DropdownNavProps) {
	// Get pathname to check which nav link is active page in map function
	const pathname = usePathname();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="outline-none focus:outline-none md:hidden">
				<Bars3Icon className="w-6 h-6 text-slate-100" />
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="end"
				className="mt-2 bg-slate-950 border border-slate-800 px-3 py-2"
			>
				{links.map((link) => {
					const isActive = pathname.endsWith(link.href);

					return (
						<DropdownMenuItem
							asChild
							key={link.text}
							className="hover:bg-slate-800 cursor-pointer"
						>
							<Link
								href={link.href}
								className={`
									${isActive ? "text-slate-100" : "text-slate-500"} w-full h-full
								`}
							>
								{link.text}
							</Link>
						</DropdownMenuItem>
					);
				})}
				{socials.map((social) => {
					return (
						<DropdownMenuItem
							asChild
							key={social.platform}
							className="hover:bg-slate-800 cursor-pointer"
						>
							<div className="w-full h-full flex justify-between items-center">
								<a
									className="w-full h-full text-slate-500"
									href={social.href}
									target="_blank"
								>
									{social.platform}
								</a>
								<i className="w-4 h-4 fill-slate-500">
									{social.svgElement}
								</i>
							</div>
						</DropdownMenuItem>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
