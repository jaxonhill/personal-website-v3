"use client";

import { NavElement } from "@/types";
import Link from "next/link";

interface LinkFullSizeProps {
	isActive: boolean;
	link: NavElement;
}

export default function LinkFullSize({ isActive, link }: LinkFullSizeProps) {
	return (
		<Link
			href={link.href}
			className={`${
				isActive
					? "text-slate-100"
					: "text-slate-500 hover:text-slate-100"
			}`}
		>
			{link.text}
		</Link>
	);
}
