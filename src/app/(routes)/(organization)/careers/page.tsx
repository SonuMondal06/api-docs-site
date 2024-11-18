/* -----------------Features--------------- */
import { AnalyticsWrapper, allPages } from "@/analytics";
import {
	Benefits,
	type BenefitsProps,
	CareersHero,
	Openings,
	type Person,
	Team,
	Values,
	type ValuesProps,
	Vision,
	type VisionProps,
	generateCareersJsonLd,
} from "@/features/organization";
import { getCareerData, getOrgData } from "@/features/organization";
import { getJobOpenings } from "@/features/organization/helpers/careers";
import { getPlainTextFromAdaptiveText } from "@/helpers";
import Script from "next/script";

export { generateCareersMetadata as generateMetadata } from "@/features/organization";

const CareersPage = async () => {
	const [
		{ info, team },
		{ careersHeroData, jobOpenings: openingsData },
		{ jobOpenings },
	] = await Promise.all([getOrgData(), getCareerData(), getJobOpenings()]);

	const people = team?.founder ? [team.founder] : [];
	if (team?.members?.people) {
		people.push(...team.members.people);
	}

	const teamMembers = {
		title: team?.members?.title ?? "",
		description: team?.members?.description ?? "",
		people: people.map(
			(person) =>
				({
					name: person.name ?? "",
					role: person.role ?? "",
					href: person.href ?? "",
					imageUrl: person.imageUrl ?? "",
					funFact: person.funFact ?? "",
				}) as Person,
		),
	};

	const jsonLd = generateCareersJsonLd({
		title: careersHeroData.title ?? "Team & Careers",
		description: getPlainTextFromAdaptiveText(
			careersHeroData.description ?? "",
		),
		image: careersHeroData.heroImage,
		team: teamMembers.people,
		openings: jobOpenings,
	});

	return (
		<AnalyticsWrapper pageName={allPages.careers}>
			<section id={allPages.careers}>
				<Script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: jsonLd }}
				/>
				<CareersHero {...careersHeroData} />
				<Vision {...(info?.vision as VisionProps)} />
				<Team>
					<Team.Members {...teamMembers} title={team?.heading ?? ""} />
				</Team>
				<Values {...(info?.values as ValuesProps)} />
				<Benefits {...(info?.benefits as BenefitsProps)} />
				<Openings {...openingsData} jobOpenings={jobOpenings} />
			</section>
		</AnalyticsWrapper>
	);
};

export default CareersPage;
