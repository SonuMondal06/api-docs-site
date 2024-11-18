import { groq } from "next-sanity";

export const TECHNOLOGY_PAGE_QUERY = groq`*[_type == "technologyPage"]{
  "heroData": {
    ...technologyHeader->{
      heading, 
      title, 
      highlightText, 
      titleSuffix, 
      description, 
      actions[]->{
        name, 
        href, 
        icon, 
        primary, 
        external, 
        iconLeft, 
        iconRight
      },
    },
    "heroImage": heroImage{
      "src": asset->url,
      "alt": alt,
    },
  },
  "featuresData": {
    ...featuresHeader->{
      heading,
      title,
      highlightText,
      titleSuffix,
      description,
      actions[]->{
        name,
        href,
        icon,
        primary,
        external,
        iconLeft,
        iconRight
      },
    },
    "heroImage": featuresImage{
      "src": asset->url,
      "alt": alt,
    }, 
    features[]{
      name,
      description,
      "iconUrl": image.asset->url
    },
  },
  "technologyData": {
    ...techStackHeader->{
        heading,
        title,
        highlightText,
        titleSuffix,
        description,
        actions[]->{
          name,
          href,
          icon,
          primary,
          external,
          iconLeft,
          iconRight
        },
      },
      "features": technology[]{
      name,
      description,
      icon
    }
  }
}
`;
