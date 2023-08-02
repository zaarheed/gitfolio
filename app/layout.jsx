import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata = {
	title: "Gitfolio"
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header />
				{children}
				<Footer />
				<div id="modal" />
			</body>
		</html>
	)
}
