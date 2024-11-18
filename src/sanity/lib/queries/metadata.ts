import { groq } from "next-sanity";

export const PAGE_OG_IMAGE_QUERY = groq`*[_type == "pageOGImageData" && pageName == $pageName] {
  pageName,
  templateType,
  title,
  highlightText,
  titleSuffix,
  tagline,
  "image": image.asset->url,
  "icon": icon.asset->url,
}
`;
