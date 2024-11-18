import { groq } from "next-sanity";

export const ABOUT_DATA_QUERY = groq`
  *[_type == "about" && entryName == "Memorang"]{
    entryName,
    aboutHeroData{
      ...header->{
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
          iconRight,
        },
      },
      heroImage{
        "src": asset->url,
        "alt": alt,
      },
    },
    roadmapData{
      ...header->{
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
          iconRight,
        },
      },
      timeline[]->{ 
        name,
        date,
        dateTime,
        description,
      },
    },
  }`;
