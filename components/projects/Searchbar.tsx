"use client";

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
			className="mt-4 mb-8 text-slate-100 bg-transparent border-2 border-slate-800 py-2 px-4 rounded-full placeholder:text-slate-600 focus:outline-none focus:ring-0"
			value={searchInput}
			onChange={(e) => setSearchInput(e.target.value)}
			placeholder="Search for a project"
		/>
	);
}
