import ProjectContents from "@/components/project-contents";
import { fetchContents, fetchGithubRepo, fetchProject, fetchReadme } from "@/services/fetch";
import { FaCodeBranch, FaGithub, FaStar } from "react-icons/fa";

export default async function SingeProjectPage({ params }) {
	const { id } = params;
	const project = await fetchProject(id);
	const contents = await fetchContents("");
	const { thumburl, name, tags = [], description, author } = project;
	const repo = await fetchGithubRepo(`${author}/${name}`);
	const { forks, stargazers_count: stars, html_url: url } = repo;

	if (!project) {
		throw new Error("Project not found");
	}

	return (
		<div className="w-full prose py-10">
			<div className="w-full flex flex-row space-x-4">
				<div className="w-6/12 relative">
					<figure className="w-full bg-gray-100 rounded-lg overflow-hidden aspect-square">
						<img src={thumburl} className="w-full object-cover object-center" />
					</figure>
				</div>
				<div className="relative w-6/12">
					<div className="w-full flex flex-col space-y-3">
						<p className="font-light text-xl">
							{name}
						</p>
						<p className="font-light uppercase text-sm">
							{tags.join(", ")}
						</p>
						<p className="w-full font-serif text-3xl">
							{description}
						</p>
						<div className="w-full grid grid-cols-3 gap-4">
							<div className="bg-white border-gray-300 border rounded-lg px-3 py-2 flex flex-row items-center justify-center group one opacity-0 w-full">
								<FaStar className="text-yellow-500 group-hover:scale-125 duration-200" />
								<span className="ml-2">{stars} stars</span>
							</div>
							<div className="bg-white border-gray-300 border rounded-lg px-3 py-2 flex flex-row items-center justify-center group two opacity-0 w-full">
								<FaCodeBranch className="text-green-600 group-hover:scale-125 duration-200" />
								<span className="ml-2">{forks} forks</span>
							</div>
							<a type="button" href={url} className="bg-white border-gray-300 hover:bg-gray-100 border rounded-lg px-3 py-2 flex flex-row items-center justify-center group three opacity-0 w-full">
								<FaGithub className="group-hover:scale-125 duration-200" />
								<span className="ml-2">Source</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<ProjectContents contents={contents} />
		</div>
	)
}
