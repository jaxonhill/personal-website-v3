"use client";

import { searchClasses } from "./shared_classes";

interface SearchbarProps {
	searchInput: string;
	setSearchInput: Function;
}

export default function Searchbar({
	searchInput,
	setSearchInput,
}: SearchbarProps) {
	return (
		<input
			className={`${searchClasses} text-slate-100 placeholder:text-slate-600`}
			value={searchInput}
			onChange={(e) => setSearchInput(e.target.value)}
			placeholder="Search for a project or technology"
		/>
	);
}
