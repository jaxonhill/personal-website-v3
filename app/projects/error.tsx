"use client";

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

// Catch error if Notion fails to fetch projects
export default function Error({ error }: { error: Error }) {
	return (
		<div className="w-full flex flex-col items-center gap-8 pt-48">
			<p className="font-bold text-4xl text-slate-100 text-center">
				{error.message}
			</p>
			<Link
				className="flex items-center gap-2 rounded-lg font-medium py-2 px-4 w-fit bg-slate-100 text-slate-950 hover:bg-slate-100/90"
				href={"/"}
			>
				<p>Go back to home</p>
				<ArrowLongRightIcon className="text-slate-950 w-6 h-6" />
			</Link>
		</div>
	);
}
