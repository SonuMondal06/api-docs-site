/* -----------------Components--------------- */
import Icon from "@/components/Icon";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";

/* -----------------Types--------------- */
import type { PricingProps } from "../../types";

const SmallScreenFeatureView = ({ pricing }: { pricing: PricingProps }) => {
	return (
		<section aria-labelledby="mobile-comparison-heading" className="lg:hidden">
			<h2 id="mobile-comparison-heading" className="sr-only">
				Feature comparison
			</h2>

			<div className="mx-auto max-w-2xl space-y-16">
				{pricing.tiers.map((tier) => (
					<div key={tier.id} className="border-gray-900/10 border-t">
						<div
							className={cn("-mt-px w-72 border-t-2 pt-10 md:w-80", {
								"border-primary": tier.featured,
								"border-transparent": !tier.featured,
							})}
						>
							<h3
								className={cn("font-semibold text-sm leading-6", {
									"text-primary": tier.featured,
									"text-gray-900": !tier.featured,
								})}
							>
								{tier.name}
							</h3>
							<p className="mt-1 text-gray-600 text-sm leading-6">
								{tier.description}
							</p>
						</div>

						<div className="mt-10 space-y-10">
							{pricing.sections.map((section) => (
								<div key={section.name}>
									<h4 className="font-semibold text-gray-900 text-sm leading-6">
										{section.name}
									</h4>
									<div className="relative mt-6">
										{/* Fake card background */}
										<div
											aria-hidden="true"
											className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
										/>

										<div
											className={cn(
												"relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0",
												{
													"ring-2 ring-primary": tier.featured,
													"ring-1 ring-gray-900/10": !tier.featured,
												},
											)}
										>
											<dl className="divide-y divide-gray-200 text-sm leading-6">
												{section.features.map((feature) => (
													<div
														key={feature.name}
														className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
													>
														<dt className="pr-4 text-gray-600">
															{feature.name}
														</dt>
														<dd className="flex items-center justify-end sm:justify-center sm:px-4">
															{typeof feature.tiers[tier.name] === "string" ? (
																<span
																	className={cn({
																		"font-semibold text-primary": tier.featured,
																		"text-gray-900": !tier.featured,
																	})}
																>
																	{feature.tiers[tier.name]}
																</span>
															) : (
																<>
																	{feature.tiers[tier.name] === true ? (
																		<Icon
																			name="Check"
																			className="mx-auto h-5 w-5 text-primary"
																			aria-hidden="true"
																		/>
																	) : (
																		<Icon
																			name="X"
																			className="mx-auto h-5 w-5 text-gray-400"
																			aria-hidden="true"
																		/>
																	)}

																	<span className="sr-only">
																		{feature.tiers[tier.name] === true
																			? "Yes"
																			: "No"}
																	</span>
																</>
															)}
														</dd>
													</div>
												))}
											</dl>
										</div>

										{/* Fake card border */}
										<div
											aria-hidden="true"
											className={cn(
												"pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block",
												{
													"ring-2 ring-primary": tier.featured,
													"ring-1 ring-gray-900/10": !tier.featured,
												},
											)}
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

const LargeScreenFeatureView = ({ pricing }: { pricing: PricingProps }) => {
	return (
		<section aria-labelledby="comparison-heading" className="hidden lg:block">
			<h2 id="comparison-heading" className="sr-only">
				Feature comparison
			</h2>

			<div className="flex gap-x-8 border-gray-900/10 border-t">
				<div className="flex-1" />
				{pricing.tiers.map((tier) => (
					<div key={tier.id} aria-hidden="true" className="flex-1">
						<div
							className={cn("border-t-2 pt-10", {
								"border-primary": tier.featured,
								"border-transparent": !tier.featured,
							})}
						>
							<p
								className={cn("font-semibold text-sm leading-6", {
									"text-primary": tier.featured,
									"text-gray-900": !tier.featured,
								})}
							>
								{tier.name}
							</p>
							<p className="mt-1 text-gray-600 text-sm leading-6">
								{tier.description}
							</p>
						</div>
					</div>
				))}
			</div>

			<div className="-mt-6 space-y-16">
				{pricing.sections.map((section) => (
					<div key={section.name}>
						<h3 className="font-semibold text-gray-900 text-sm leading-6">
							{section.name}
						</h3>
						<div className="-mx-8 relative mt-10">
							{/* Fake card backgrounds */}
							<div
								className="absolute inset-x-8 inset-y-0 flex gap-x-8"
								aria-hidden="true"
							>
								<div className="flex-1" />
								{pricing.tiers.map((tier) => (
									<div
										key={tier.id}
										className="flex-1 rounded-lg bg-white shadow-sm"
									/>
								))}
							</div>

							<table className="relative flex w-full border-separate border-spacing-x-8 flex-col px-8">
								<thead>
									<tr className="text-left">
										<th scope="col">
											<span className="sr-only">Feature</span>
										</th>
										{pricing.tiers.map((tier) => (
											<th key={tier.id} scope="col">
												<span className="sr-only">{tier.name} tier</span>
											</th>
										))}
									</tr>
								</thead>
								<tbody className="flex flex-col">
									{section.features.map((feature, featureIdx) => (
										<tr key={feature.name} className="flex gap-x-8 ">
											<th
												scope="row"
												className="flex-1 py-3 text-left font-normal text-gray-900 text-sm leading-6"
											>
												{feature.name}
												{featureIdx !== section.features.length - 1 ? (
													<div className="absolute inset-x-8 mt-3 h-px bg-gray-200" />
												) : null}
											</th>
											{pricing.tiers.map((tier) => (
												<td
													key={tier.id}
													className="relative flex flex-1 items-center py-0 text-center"
												>
													<span className="relative h-full w-full py-3">
														{typeof feature.tiers[tier.name] === "string" ? (
															<span
																className={cn("text-sm leading-6", {
																	"font-semibold text-primary": tier.featured,
																	"text-gray-900": !tier.featured,
																})}
															>
																{feature.tiers[tier.name]}
															</span>
														) : (
															<>
																{feature.tiers[tier.name] === true ? (
																	<Icon
																		name="Check"
																		className="mx-auto h-5 w-5 text-primary"
																		aria-hidden="true"
																	/>
																) : (
																	<Icon
																		name="X"
																		className="mx-auto h-5 w-5 text-gray-400"
																		aria-hidden="true"
																	/>
																)}

																<span className="sr-only">
																	{feature.tiers[tier.name] === true
																		? "Yes"
																		: "No"}
																</span>
															</>
														)}
													</span>
												</td>
											))}
										</tr>
									))}
								</tbody>
							</table>

							<div
								className="pointer-events-none absolute inset-x-8 inset-y-0 flex gap-x-8"
								aria-hidden="true"
							>
								<div className="flex-1" />
								{pricing.tiers.map((tier) => (
									<div
										key={tier.id}
										className={cn("flex-1 rounded-lg", {
											"ring-2 ring-primary": tier.featured,
											"ring-1 ring-gray-900/10": !tier.featured,
										})}
									/>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

const FeaturesTable = ({ pricing }: { pricing: PricingProps }) => {
	return (
		<div className="overflow-hidden">
			<div className="relative bg-gray-50 lg:pt-14">
				<div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
					<SmallScreenFeatureView pricing={pricing} />
					<LargeScreenFeatureView pricing={pricing} />
				</div>
			</div>
		</div>
	);
};

export default FeaturesTable;
