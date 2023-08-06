"use client";
import TextInput from "@/components/text-input";

export default function NewProjectForm() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        const payload = JSON.stringify(data);

        const response = await fetch(`/api/projects`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: payload
        });

        const result = await response.json();

        console.log(result);
    }


    return (
        <form onSubmit={handleSubmit} method="post" className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextInput label="Project Name" name="name" />
            <TextInput label="Author" name="author" />
            <TextInput label="Repo" name="repo" />
            <TextInput label="Thumb URL" name="thumburl" />
            <TextInput label="Project Description" name="description" />
            <TextInput label="Category" name="category" />
            <TextInput label="Tags" name="tags" />            
            <button
                type="submit"
                className="w-full text-zinc-900 rounded-lg h-full hover:bg-green-500 hover:bg-opacity-10"
            >
                Submit
            </button>
        </form>
    )
}