"use client";

import { env } from "@/env";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { Label } from "./ui/label";

declare global {
	interface Window {
		// biome-ignore lint/suspicious/noExplicitAny: This is a global window object
		hbspt: any;
	}
}

const Fallback = () => {
	return (
		<div className="newsletter">
			<form className="hs-form-private hsForm_50900742-7171-4012-8cf8-78a60ef3255f hs-form-50900742-7171-4012-8cf8-78a60ef3255f hs-form-50900742-7171-4012-8cf8-78a60ef3255f_3feacd6f-e365-43e9-b014-a878fb8d3777 hs-form stacked">
				<div className="hs_email hs-email hs-fieldtype-text field hs-form-field">
					<Label className="">
						<span>Email</span>
						<span className="hs-form-required">*</span>
					</Label>
					<legend className="hs-field-desc" />
					<div className="input">
						<input className="hs-input" />
					</div>
				</div>
				<div className="hs_submit hs-submit">
					<div className="hs-field-desc" />
					<div className="actions">
						<input
							type="submit"
							className="hs-button primary large"
							value="Submit"
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export const NewsletterForm = ({ className }: { className?: string }) => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "//js.hsforms.net/forms/embed/v2.js";
		script.type = "text/javascript";
		script.onload = () => {
			if (window.hbspt) {
				window.hbspt.forms.create({
					region: env.NEXT_PUBLIC_HUBSPOT_REGION,
					portalId: env.NEXT_PUBLIC_HUBSPOT_PORTALID,
					formId: env.NEXT_PUBLIC_HUBSPOT_FORMID,
					target: "#hubspot-form",
				});
			}
		};
		document.body.appendChild(script);
	}, []);

	return (
		<div id="hubspot-form" className={cn("mt-4 mb-10", className)}>
			<Fallback />
		</div>
	);
};
