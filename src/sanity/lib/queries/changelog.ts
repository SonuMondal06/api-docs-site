import { groq } from "next-sanity";

export const CHANGELOG_PAGE_QUERY = groq`
*[_type == "changelogPage"]{
  ...changelogHeader -> {
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
  isWorkInProgress,
}
`;

const resultStructure = `{
  "id": _id,
  entryName,
  isWorkInProgress,
  releaseDate,
  "service": service->{
      name,
      href,  
    },
  "tags": tags[]->name,
  "slug": slug.current,
  "log": log[]{
    contentType,
    entryName,
    mdx,
    "image": image{
      "src": asset->url,
      alt,
    }
  },
  githubUrls,
  releaseNotesMDX,
}`;

export const GET_CHANGELOG_ITEM_BY_SLUG_AND_DATE_QUERY = groq`
  *[_type == "changelogItem" && slug.current == $slug && releaseDate == $date] ${
		resultStructure
	}`;

export const GET_CHANGELOG_ITEMS_BY_SERVICE_QUERY = groq`
  *[_type == "changelogItem" 
    && lower(service->name) == $service] | order(releaseDate desc) [$start...$end] ${
			resultStructure
		}`;

export const GET_CHANGELOG_ITEMS_BY_TAGS_QUERY = groq`
  *[_type == "changelogItem" 
    && count(tags[lower(@->name) in $tags]) == length($tags)] | order(releaseDate desc) [$start...$end] ${
			resultStructure
		}`;

export const GET_CHANGELOG_ITEMS_BY_SERVICE_AND_TAGS_QUERY = groq`
  *[_type == "changelogItem" 
    && lower(service->name) == $service 
      && count(tags[lower(@->name) in $tags]) == length($tags)] | order(releaseDate desc) [$start...$end] ${
				resultStructure
			}`;

export const ALL_CHANGELOG_ITEMS_QUERY = groq`*[_type == "changelogItem"] | order(releaseDate desc) ${
	resultStructure
}`;

export const CHANGELOG_ITEMS_PAGE_VIEW_QUERY = groq`*[_type == "changelogItem"] | order(releaseDate desc) [$start...$end] ${
	resultStructure
}`;

export const CHANGELOG_ITEMS_COUNT_QUERY = groq`count(*[_type == "changelogItem"])`;

export const CHANGELOG_ITEMS_BY_SERVICE_COUNT_QUERY = groq`count(*[_type == "changelogItem" && lower(service->name) == $service])`;

export const CHANGELOG_ITEMS_BY_TAGS_COUNT_QUERY = groq`count(*[_type == "changelogItem" && count(tags[lower(@->name) in $tags]) == length($tags)])`;

export const CHANGELOG_ITEMS_BY_SERVICE_AND_TAGS_COUNT_QUERY = groq`count(*[_type == "changelogItem" && lower(service->name) == $service && count(tags[lower(@->name) in $tags]) == length($tags)])`;

export const ALL_TAGS_QUERY = groq`*[_type == "tag"].name`;
