export default function PageIntro({ title, description }) {
    return (
        <section className="default-section">
            <div className="w-full flex flex-col max-w-6xl mx-auto my-10">
                <p className="text-2xl mb-2">
                    {title}
                </p>
                <div className="w-full">
                    {description}
                </div>
            </div>
        </section>
    )
}