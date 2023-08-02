import HomeSection from "@/components/home-section";
import { fetchSections } from "@/services/fetch";

export default async function HomePage() {
	const sections = await fetchSections();

	return (
		<div>
			{sections.map((section) => (<HomeSection key={section.id} section={section} />))}
		</div>
	)
}
