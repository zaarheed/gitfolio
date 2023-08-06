import NewProjectForm from "@/components/new-project-form";

export default async function NewProjectPage() {
	return (
		<section className="w-full">
            <div className="w-full max-w-5xl mx-auto flex flex-col py-12">
                <p className="text-3xl font-serif font-light">
                    Add new project
                </p>
                <hr className="border-black w-full my-6" />
                <NewProjectForm />
            </div>
        </section>
	);
}