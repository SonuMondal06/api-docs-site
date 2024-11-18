"use client";

/* -----------------Components--------------- */
import Icon from "@/components/Icon";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import Link from "next/link";
/* -----------------Globals--------------- */
import { useState } from "react";

/* -----------------Types--------------- */
import type { Frequency, PricingProps, Tier } from "../../types";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";

const TierCard = ({
	tier,
	frequency,
}: {
	tier: Tier;
	frequency?: Frequency;
}) => {
	const purchaseUrl = frequency
		? `/purchase?tierId=${tier.id}&frequency=${frequency.value}`
		: `/purchase?tierId=${tier.id}`;

	return (
		<div
			className={cn("w-full max-w-sm rounded-3xl p-8", {
				"ring-2 ring-primary": tier.featured,
				"ring-1 ring-gray-200": !tier.featured,
			})}
		>
			<h2
				id={tier.id}
				className={cn("font-semibold text-4xl leading-8", {
					"text-primary": tier.featured,
					"text-gray-900": !tier.featured,
				})}
			>
				{tier.name}
			</h2>
			<p className="mt-4 text-gray-600 text-sm leading-6">{tier.description}</p>
			{!!frequency && (
				<p className="mt-6 flex items-baseline gap-x-1">
					<span className="font-bold text-4xl text-gray-900 tracking-tight">
						{tier.price[frequency.value]}
					</span>
					<span className="font-semibold text-gray-600 text-sm leading-6">
						{frequency.priceSuffix}
					</span>
				</p>
			)}
			<Link
				href={purchaseUrl}
				aria-describedby={tier.id}
				className={cn(
					"mt-6 block rounded-md px-3 py-2 text-center font-semibold text-sm leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
					{
						"bg-primary text-white shadow-sm hover:bg-primary": tier.featured,
						"text-primary ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300":
							!tier.featured,
					},
				)}
			>
				Contact Sales
			</Link>
			<ul className="mt-8 space-y-3 text-gray-600 text-sm leading-6">
				{tier.mainFeatures.map((feature) => (
					<li key={feature} className="flex gap-x-3">
						<Icon
							name="Check"
							className="h-6 w-5 flex-none text-primary"
							aria-hidden="true"
						/>
						{feature}
					</li>
				))}
			</ul>
		</div>
	);
};

const PricingTiers = ({ pricing }: { pricing: PricingProps }) => {
	const [frequency, setFrequency] = useState<Frequency>(
		pricing.frequencies[0]!,
	);

	return (
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			{pricing.frequencies.length > 1 && (
				<div className="mt-16 flex items-center justify-center space-x-2 px-2">
					<Label className="font-bold text-base" htmlFor="airplane-mode">
						Switch to Annual Plans
					</Label>
					<Switch
						id="annual-plans"
						checked={frequency.value === "annually"}
						onCheckedChange={() => {
							setFrequency((prevFrequency) =>
								prevFrequency.value === "annually"
									? pricing.frequencies[0]!
									: pricing.frequencies[1]!,
							);
						}}
					/>
				</div>
			)}
			<div
				className={cn(
					"mx-auto flex max-w-md flex-wrap justify-center gap-8 pt-8 pb-16 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl lg:pt-16 lg:pb-24 xl:mx-0 xl:max-w-none",
				)}
			>
				{pricing.tiers.map((tier) => (
					<TierCard key={tier.id} tier={tier} frequency={frequency} />
				))}
			</div>
		</div>
	);
};

export default PricingTiers;
