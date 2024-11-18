import { groq } from "next-sanity";

export const CUSTOMERS_PAGE_QUERY = groq`*[_type == "customerPage"]{
    "heroData": {
        ...customersHeader->{
            title,
            highlightText,
            titleSuffix,
            heading,
            description,
            actions[]->{
                name,
                href,
                icon,
                primary,
                external,
                iconLeft
            }
        },
        "heroImage": {
            "src": heroImage.asset->url,
            "alt": heroImage.alt
        },
    },
    customers[]->{
        ...,
        "logo": {
            "src": logo.asset->url,
            "alt": logo.alt
        },
        "storySlug": linkedPost->slug.current,
        "storyWIP": linkedPost->isWorkInProgress,
    }
}`;

export const CUSTOMER_STORY_BY_SLUG_QUERY = groq`
*[_type == "post" && type == "Customer Story" && slug.current == $slug]{
    type,
    title,
    "slug": slug.current,
    isWorkInProgress,
    description,
    "imageUrl": heroImage.asset->url,
    date,
    datetime,
    "author": {
        "name": authorName,
        "imageUrl": authorImage.asset->url
    },
    renderMDX,
    otherDetails[]{
        name,
        description,
    }
}`;

export const ALL_CUSTOMER_STORIES_QUERY = groq`
*[_type == "post" && type == "Customer Story"]{
    id,
    type,
    title,
    "slug": slug.current,
    description,
    "imageUrl": heroImage.asset->url,
    date,
    datetime,
    "author": {
        "name": authorName,
        "imageUrl": authorImage.asset->url
      },
    renderMDX,
    otherDetails[]{
        name,
        description,
    }
  }`;
