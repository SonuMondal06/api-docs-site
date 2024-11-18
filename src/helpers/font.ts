const fetchFont = async (url: string) => {
	const response = await fetch(new URL(url));
	return await response.arrayBuffer();
};

export async function getFontArrayBuffers<T extends Record<string, string>>(
	fontUrls: T,
): Promise<{ [K in keyof T]: ArrayBuffer }> {
	const result = {} as { [K in keyof T]: ArrayBuffer };

	for (const [key, url] of Object.entries(fontUrls)) {
		const response = await fetchFont(url);
		result[key as keyof T] = response;
	}
	return result;
}
