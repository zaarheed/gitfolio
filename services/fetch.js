import comments from "@/data/comments";
import contents from "@/data/contents";
import readme from "@/data/readme";
import repo from "@/data/repo";
import repos from "@/data/repos";

export async function fetchProjects() {
    // const res = await fetch(`https://api.github.com/users/zaarheed/repos`);
    // const json = await res.json();
    const json = repos;
    return json;
}

export async function fetchProject(name) {
    // const res = await fetch(`https://api.github.com/repos/${name}`);
    // const json = await res.json();
    const json = repo;
    return json;
}

export async function fetchReadme(name) {
    // const res = await fetch(`https://api.github.com/repos/${name}`);
    // const json = await res.json();
    await new Promise(resolve => setTimeout(resolve, 3000));
    const json = readme;
    return json;
}

export async function fetchContents(name) {
    // const res = await fetch(`https://api.github.com/repos/${name}/contents`);
    // const json = await res.json();
    const json = contents;
    return json;
}

export async function fetchComments(name) {
    // const res = await fetch(``);
    // const json = await res.json();
    const json = comments;
    return json;
}