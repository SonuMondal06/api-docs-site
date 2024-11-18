import { groq } from "next-sanity";

export const ALL_LEGAL_PAGES_QUERY = groq`*[_type == "legalPage"]{
    "id": _id,
    ...legalHeader->{
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
    name,
    href,
    icon,
    "image": image.asset->url,
    "imageAsIconButton": image.asIconButton,
    "renderMarkdown": content,
}`;

export const LEGAL_PAGE_WITH_HREF_QUERY = groq`*[_type == "legalPage" && href == $href]{
    "id": _id,
    ...legalHeader->{
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
    name,
    href,
    icon,
    "image": image.asset->url,
    "imageAsIconButton": image.asIconButton,
    "renderMarkdown":content,
    ogImageData->{
      pageName,
      templateType,
      title,
      highlightText,
      titleSuffix,
      tagline,
      "image": image.asset->url,
      "icon": icon.asset->url,
    }
}`;
