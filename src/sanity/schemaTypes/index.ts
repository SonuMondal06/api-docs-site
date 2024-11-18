import type { SchemaTypeDefinition } from "sanity";
import { aboutType } from "./aboutType";
import { actionType } from "./actionType";
import { benefitsType } from "./benefitsType";
import { careerType } from "./careerType";
import { catalogItemType } from "./catalogItemType";
import { changelogItemType } from "./changelogItemType";
import { changelogPageType } from "./changelogPageType";
import { customerType } from "./customerType";
import { customersPageType } from "./customersPageType";
import { faqsPageType, faqsSectionType } from "./faqsType";
import { footerLinkType } from "./footerLinkType";
import { footerType } from "./footerType";
import { headerType } from "./headerType";
import { legalPageType } from "./legalPageType";
import { navbarType } from "./navbarType";
import { organizationType } from "./organizationType";
import { pageOGImageDataType } from "./pageOGImageDataType";
import { personType } from "./personType";
import { postType } from "./postType";
import { servicesPageType } from "./servicesPageType";
import { socialLinkType } from "./socialLinkType";
import { solutionType } from "./solutionType";
import { splashPageType } from "./splashPageType";
import { tagType } from "./tagType";
import { technologyPageType } from "./technologyPageType";
import { testimonialType } from "./testimonialType";
import { timelineType } from "./timelineType";
import { valuesType } from "./valuesType";

export const schemaTypes = [
	pageOGImageDataType,
	tagType,
	headerType,
	navbarType,
	footerType,
	footerLinkType,
	actionType,
	splashPageType,
	servicesPageType,
	customerType,
	customersPageType,
	technologyPageType,
	solutionType,
	catalogItemType,
	postType,
	testimonialType,
	personType,
	organizationType,
	socialLinkType,
	benefitsType,
	valuesType,
	aboutType,
	timelineType,
	careerType,
	legalPageType,
	faqsSectionType,
	faqsPageType,
	changelogItemType,
	changelogPageType,
] satisfies SchemaTypeDefinition[];
