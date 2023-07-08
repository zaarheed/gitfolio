import { Suspense } from "react";
import Stats from "./stats";
import StatsLoading from "./stats-loading";

export default async function ProjectStats({ name, owner, stars, forks, url }) {
	const { login } = owner;

    return (
        <Suspense
            fallback={<StatsLoading />}
        >
            <Stats owner={login} name={name} stars={stars} forks={forks} url={url} />
        </Suspense>
    )
}