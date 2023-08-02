import HomeSection from "@/components/home-section";
import _sections from "@/data/sections";

async function fetchSections() {
    const res = await fetch(`http://localhost:3000/api/categories`);
    const json = await res.json();
    return json.categories;
}

export default async function HomePage() {
	const sections = await fetchSections() || [];

	return (
		<div>
			{sections.map((section) => (<HomeSection key={section.id} section={section} />))}
		</div>
	)
}
