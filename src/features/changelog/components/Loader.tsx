import { Skeleton } from "@/components/ui/skeleton";

export const ReleaseItemLoader = () => {
	return (
		<div className="flex flex-col gap-y-8 py-16 md:flex-row">
			<div className="w-full md:w-96">
				<Skeleton className="h-8 w-48 rounded-md bg-gray-300" />
			</div>
			<div className="flex max-w-3xl flex-1 flex-col gap-y-4">
				<div className="flex gap-x-4">
					<Skeleton className="h-4 w-16 rounded-full bg-gray-300" />
					<Skeleton className="h-4 w-16 rounded-full bg-gray-300" />
				</div>
				<Skeleton className="h-10 w-full bg-gray-300" />
				<Skeleton className="h-10 w-1/2 bg-gray-300" />
				<Skeleton className="h-96 w-full rounded-md bg-gray-300" />
				<Skeleton className="h-6 w-full bg-gray-300" />
				<Skeleton className="h-6 w-full bg-gray-300" />
				<Skeleton className="h-6 w-1/3 bg-gray-300" />
			</div>
		</div>
	);
};
