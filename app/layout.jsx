import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export const metadata = {
	title: 'Gitfolio'
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Nav />
				{children}
				<Footer />
				<div id="modal" />
			</body>
		</html>
	)
}
