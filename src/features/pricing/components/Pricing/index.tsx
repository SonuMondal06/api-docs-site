/* -----------------Components--------------- */
import FeaturesTable from "./FeaturesTable";
import PricingTiers from "./PricingTiers";
const Pricing = ({
	title = "Pricing plans for teams of all sizes",
	description,
	children,
}: {
	title?: string;
	description?: string;
	children?: React.ReactNode;
}) => {
	return (
		<section id="pricing">
			<div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					<h1 className="font-semibold text-base text-secondary leading-7">
						Pricing
					</h1>
					<p className="mt-2 font-bold text-4xl text-foreground tracking-tight sm:text-5xl">
						{title}
					</p>
				</div>
				{!!description && (
					<p className="mx-auto mt-6 max-w-2xl text-center text-foreground text-lg leading-8">
						{description}
					</p>
				)}
			</div>
			{children}
		</section>
	);
};

Pricing.Tiers = PricingTiers;
Pricing.FeaturesTable = FeaturesTable;

export { Pricing };
