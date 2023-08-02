export default async function SingeProjectLayout({ children }) {
	return (
		<div className="">
            <section className="default-section">
                <div className="w-full max-w-6xl mx-auto">
                    {children}
                </div>
            </section>
		</div>
	);
}
