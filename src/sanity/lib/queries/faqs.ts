import { groq } from "next-sanity";

export const FAQS_PAGE_QUERY = groq`
*[_type == "faqsPage"]{
  isWorkInProgress,
  ...faqsHeader->{
    heading,
    title,
    highlightText,
    titleSuffix,
    description,
    actions[] {
      name,
      href,
      primary,
      external,
      icon,
      iconRight,
      iconLeft,
    },
  },
  "faqsSections": faqsSections[]->{
    sectionTitle,
    faqItems[] {
      question,
      answer,
    },
  }
}
`;
