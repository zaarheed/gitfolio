import ProjectNav from "@/components/project-nav";
import ProjectStats from "@/components/project-stats";
import { fetchProject } from "@/services/fetch";

export default async function SingeProjectLayout({ children }) {
	const project = await fetchProject();
	const { owner, name, stargazers_count: stars, forks, html_url: url } = project;
	const { login } = owner;

	return (
		<div className="">
			<div className="">
				<ProjectStats
					name={name}
					stars={stars}
					forks={forks}
					url={url}
					owner={owner}
				/>
				<ProjectNav />
				<section className="default-section">
					<div className="w-full max-w-6xl mx-auto">
						{children}
					</div>
				</section>
			</div>
		</div>
	);
}
