export default function SingleProjectLoader() {
    return (
		<div className="w-full prose py-10">
			<div className="w-full flex flex-row space-x-4">
				<div className="w-6/12 relative">
					<figure className="w-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden aspect-square animate-pulse" />
				</div>
				<div className="relative w-6/12">
					<div className="w-full flex flex-col space-y-3">
						<div className="font-light text-xl w-42 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded animate-pulse" />
						<div className="w-full flex flex-row space-x-2 my-4">
							<div className="h-5 w-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded animate-pulse" />
							<div className="h-5 w-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded animate-pulse" />
							<div className="h-5 w-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded animate-pulse" />
						</div>
						<div className="w-full flex flex-col space-y-2">
							<div className="font-light text-xl w-full h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded animate-pulse" />
							<div className="font-light text-xl w-full h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded animate-pulse" />
							<div className="font-light text-xl w-7/12 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded animate-pulse" />
						</div>
						<div className="w-full grid grid-cols-3 gap-4 mt-12">
							<div className="rounded-lg h-12 w-full bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
							<div className="rounded-lg h-12 w-full bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
							<div className="rounded-lg h-12 w-full bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}