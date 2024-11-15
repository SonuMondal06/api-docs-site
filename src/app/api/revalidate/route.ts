import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import crypto from "node:crypto";
import { githubDetails } from "@/constants/github";

function verifySignature(payload: string, signature: string) {
	const sigHashAlg = "sha256";
	const sigHash = crypto
		.createHmac(sigHashAlg, githubDetails.webhookSecret)
		.update(payload)
		.digest("hex");
	const expectedSignature = `${sigHashAlg}=${sigHash}`;
	return crypto.timingSafeEqual(
		Buffer.from(signature),
		Buffer.from(expectedSignature),
	);
}

export async function POST(request: Request) {
	const payload = await request.text();
	const headersList = await headers();

	// Get GitHub signature
	const signature = headersList.get("x-hub-signature-256");

	if (!signature) {
		return new NextResponse("No signature provided", { status: 401 });
	}

	// Verify webhook signature
	if (!verifySignature(payload, signature)) {
		return new NextResponse("Invalid signature", { status: 401 });
	}

	// biome-ignore lint/suspicious/noConsole lint/suspicious/noConsoleLog: Debugging
	console.log("Payload:", payload);

	const event = JSON.parse(payload);

	// Check if the push is to the correct branch
	if (
		event.ref === `refs/heads/${githubDetails.treeSha}` ||
		event.ref === githubDetails.treeSha
	) {
		// Revalidate all dynamic routes
		revalidatePath("/docs/[[...slug]]", "page");
		revalidatePath("/apis/[[...slug]]", "page");

		return new NextResponse("Revalidated", { status: 200 });
	}

	return new NextResponse("Ignored: Different branch", { status: 200 });
}
