import { env } from "@/env";
import { parseBody } from "next-sanity/webhook";
import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const { body, isValidSignature } = await parseBody<{
			_id: string;
			_type: string;
			entryName: string;
			slug?: string;
		}>(req, env.NEXT_PUBLIC_SANITY_HOOK_SECRET);

		if (!isValidSignature) {
			return new Response("Invalid Signature", { status: 401 });
		}

		if (!body?._type) {
			return new Response("Bad Request", { status: 400 });
		}

		revalidateTag(body._type);
		return NextResponse.json({
			status: 200,
			revalidated: true,
			now: Date.now(),
			body,
		});
	} catch (e) {
		// biome-ignore lint/suspicious/noConsole: Error debugging
		console.error(e);
		return new Response("Some error occurred while revalidating!", {
			status: 500,
		});
	}
}
