export default async function StatsLoading() {
    return (
        <section className="default-section">
            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between py-4">
                <div className="flex flex-row items-center mb-4 md:mb-0">
                    <span className="ml-2 bg-gray-200 h-6 w-96 rounded" />
                </div>
                <div className="flex space-x-2 hidden md:flex">
                    <div className="flex flex-row">
                        <div className="rounded rounded-r-none border bg-gray-200 h-9 w-20" />
                        <div className="ml-px rounded rounded-l-none border bg-gray-200 h-9 w-10" />
                    </div>
                    <div className="flex flex-row">
                        <div className="rounded rounded-r-none border bg-gray-200 h-9 w-20" />
                        <div className="ml-px rounded rounded-l-none border bg-gray-200 h-9 w-10" />
                    </div>
                    <div className="flex flex-row">
                        <div className="rounded rounded-r-none border bg-gray-200 h-9 w-20" />
                        <div className="ml-px rounded rounded-l-none border bg-gray-200 h-9 w-10" />
                    </div>
                </div>
            </div>
        </section>
    )
}