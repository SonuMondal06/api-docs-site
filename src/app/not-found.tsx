/* -----------------Components--------------- */
import { ActionButton } from "@/components/ActionButton";
import Icon, { type IconName } from "@/components/Icon";

/* -----------------Constants--------------- */
import {
	notFoundAttributesData as attributes,
	notFoundRedirectLinksData as links,
} from "@/constants";
import {
	type Organization,
	getFooterData,
	getFooterLinks,
	organization,
} from "@/features/organization";
import { getNavbarData } from "@/helpers";
import { Footer, type FooterNavigationItem, Header, Navbar } from "@/layouts";

/* -----------------Globals--------------- */
import Link from "next/link";

type LinkProps = {
	name: string;
	description: string;
	href: string;
	icon: IconName;
};

const RedirectLinksItem = ({ link }: { link: LinkProps }) => {
	return (
		<li className="relative flex gap-x-6 py-6">
			<div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg text-primary shadow-sm ring-1 ring-gray-900/10">
				<Icon name={link.icon} size={16} />
			</div>
			<div className="flex-auto">
				<h3 className="font-semibold text-gray-900 text-sm leading-6">
					<Link href={link.href}>
						<span className="absolute inset-0" aria-hidden="true" />
						{link.name}
					</Link>
				</h3>
				<p className="mt-2 text-gray-600 text-sm leading-6">
					{link.description}
				</p>
			</div>
			<div className="flex-none self-center">
				<Icon
					name="ChevronRight"
					className="h-5 w-5 text-gray-400"
					aria-hidden="true"
				/>
			</div>
		</li>
	);
};

const NotFoundPage = async () => {
	const [
		{ navItems, navActions, mobileNavActions },
		footerData,
		footerNavigationItemsData,
	] = await Promise.all([getNavbarData(), getFooterData(), getFooterLinks()]);
	const organizationFooter: Organization =
		footerData as unknown as Organization;
	const footerNavigationItems: FooterNavigationItem[] =
		footerNavigationItemsData as FooterNavigationItem[];

	return (
		<>
			<Header>
				<Navbar
					organization={organization}
					navItems={navItems}
					navActions={navActions}
					mobileNavActions={mobileNavActions}
					showOrganizationName
				/>
			</Header>
			<main className="mx-auto w-full max-w-7xl bg-white px-6 pt-24 pb-16 sm:pb-24 lg:px-8">
				<div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
					<p className="font-semibold text-base text-primary leading-8">
						{attributes.errorCode}
					</p>
					<h1 className="mt-4 font-bold text-3xl text-gray-900 tracking-tight sm:text-5xl">
						{attributes.title}
					</h1>
					<p className="mt-4 text-base text-gray-600 leading-7 sm:mt-6 sm:text-lg sm:leading-8">
						{attributes.description}
					</p>
				</div>
				<div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
					<ul className="-mt-6 divide-y divide-gray-900/5 border-gray-900/5 border-b">
						{links.map((link) => (
							<RedirectLinksItem key={link.name} link={link} />
						))}
					</ul>
					<div className="mt-10 flex justify-center">
						<ActionButton name="Back to home" iconLeft="ArrowLeft" href="/" />
					</div>
				</div>
			</main>

			<Footer
				organization={organizationFooter}
				navItems={footerNavigationItems}
			/>
		</>
	);
};

export default NotFoundPage;
