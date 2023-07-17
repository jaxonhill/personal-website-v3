import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import { inter } from "./fonts";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} p-6 md:px-16 xl:px-48 bg-slate-950 min-h-screen`}
			>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
}
