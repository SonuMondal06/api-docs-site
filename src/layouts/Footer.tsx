/* -----------------Features--------------- */
import type { Organization } from "@/features/organization/";

/* -----------------Globals--------------- */
import Link from "next/link";

/* -----------------Components--------------- */
import { Content } from "@/components/Content";
import { PolicyLink, PolicyScript } from "@/security-compliance";
import { BsIcon } from "../components/Icon";
import { Logo } from "../components/Logo";

export type FooterNavigationLinkItem = {
	name: string | React.ReactNode;
	href: string;
	external?: boolean;
};

export type FooterNavigationItem = {
	name: string;
	links: FooterNavigationLinkItem[];
};

type NavigationProps = {
	navigation: FooterNavigationItem[];
};

function Navigation({ navigation }: NavigationProps) {
	return (
		<nav className="pt-2">
			<ul className="grid grid-cols-2 justify-items-start gap-16 sm:grid-cols-3 sm:gap-x-32 sm:gap-y-16 lg:justify-items-end">
				{navigation.map((section) => (
					<li key={section.name} className="flex w-full flex-col">
						<div className="font-display font-semibold text-neutral-950 text-sm tracking-wider">
							{section.name}
						</div>
						{section.name === "Legal" ? (
							<ul className="text-neutral-700 text-sm">
								{section.links.map((link) => {
									return (
										<li key={link.href} className="mt-4">
											<PolicyLink
												{...link}
												className="flex items-center gap-2 transition hover:text-foreground"
											/>
										</li>
									);
								})}
							</ul>
						) : (
							<ul className="text-neutral-700 text-sm">
								{section.links.map((link) => {
									return (
										<li key={link.href} className="mt-4">
											<Link
												href={link.href}
												target={link.external ? "_blank" : "_self"}
												rel={link.external ? "noopener noreferrer" : ""}
												className="flex items-center gap-2 transition hover:text-foreground"
											>
												{link.name}
											</Link>
										</li>
									);
								})}
							</ul>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
}

type Props = {
	organization: Organization;
	navItems: FooterNavigationItem[];
};

const Footer = ({ organization, navItems }: Props) => {
	return (
		<footer className="bg-white" aria-labelledby="footer-heading">
			<PolicyScript />
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8 lg:pt-32">
				<div className="flex flex-col justify-between gap-x-8 gap-y-16 lg:flex-row">
					<div className="max-w-sm space-y-4 sm:max-w-xl lg:max-w-sm">
						<Link href="/" aria-label="Home">
							<Logo.Organization logo={organization.logo} className="w-28" />
						</Link>
						<Content>
							<Content.AdaptiveText
								textContent={organization.info.mission}
								className="mt-0 text-foreground text-sm leading-6"
							/>
						</Content>
						<div className="flex space-x-6">
							{Object.values(organization.social).map((item) => {
								return (
									<Link
										key={item.name}
										href={item.href}
										target={item.external ? "_blank" : "_self"}
										rel={item.external ? "noopener noreferrer" : ""}
										className="text-gray-400 hover:text-gray-500"
									>
										<span className="sr-only">{item.name}</span>
										{item.icon && (
											<BsIcon
												name={item.icon}
												size={16}
												className="text-foreground/70 hover:text-foreground"
											/>
										)}
									</Link>
								);
							})}
						</div>
					</div>
					<Navigation navigation={navItems} />
				</div>
				<div className="mt-8 border-gray-900/10 border-t pt-8 sm:mt-12 lg:mt-16">
					<p className="text-gray-500 text-xs leading-5">
						© {organization.name} {new Date().getFullYear()}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
