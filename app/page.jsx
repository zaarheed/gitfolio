import HomeSection from "@/components/home-section";
import sections from "@/data/projects";

export default function HomePage() {
	return (
		<div>
			{sections.map((section) => (<HomeSection key={section.id} section={section} />))}
		</div>
	)
}
