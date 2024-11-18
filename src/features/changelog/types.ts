export type ReleaseItem = {
	id: string;
	entryName: string;
	isWorkInProgress: boolean;
	service: {
		name: string;
		href: string;
	};
	tags: string[];
	releaseDate: string;
	slug: string;
	log: {
		contentType: "image" | "mdx";
		entryName: string;
		mdx?: string;
		image?: {
			src: string;
			alt: string;
		};
	}[];
	githubUrls: string[];
	releaseNotesMDX: {
		name: string;
		description: string;
	}[];
};

export type NavigatorProps = {
	page: number;
	totalPages: number;
};
