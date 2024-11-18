import { groq } from "next-sanity";

export const SERVICES_PAGE_QUERY = groq`*[_type == "servicesPage" && entryName == "Services Page"]{
  "heroData": {
    ...servicesHeader->{
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
    "heroImage": heroImage{
      "src": asset->url,
      "alt": alt,
    },
  },
}`;

export const CATALOG_ITEM_WITH_HREF_QUERY = groq`*[_type == "catalogItem" && href == $href]{
  "heroData": {
      "title": name,
      "description": longDescription,
      "logo": {
        "src": iconImage.asset->url,
        "alt": name,
      },
      "heroImage": heroImage{
        "src": asset->url,
        "alt": alt,
      }, 
      actions[]->{
        name,
        href,
        icon,
        primary,
        external,
        iconLeft,
        iconRight,
      },
      "otherItemsLogos": replaces[]{
        "src": asset->url,
        "alt": alt,
      },
      "mobileHeroView": heroImage.mobileHeroView,
  },
  
  comingSoon,

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
        iconRight,
      },
    },
    features[]{
      name,
      description,
      icon
    }
  },
}`;

export const CATALOG_ITEMS_WITHOUT_HREF_QUERY = groq`*[_type == "catalogItem" && href != $href]{
    "id": _id,
    "title": name,
    description,
    "logo": {
        "src": iconImage.asset->url,
        "alt": name,
      },
    href,
  }`;

export const EXPLORE_CATALOG_HEADER_QUERY = groq`*[_type == "header" && entryName == "Explore Catalog"]{
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
  }`;

export const ALL_CATALOG_ITEMS_QUERY = groq`*[_type == "catalogItem"]{
    "id": _id,
    itemType,
    name,
    description,
		longDescription,

    "heroImage": heroImage{
      "src": asset->url,
      "alt": alt,
    },
    href,
    "logo": {
        "src": iconImage.asset->url,
        "alt": name,
    },

    replaces[]{
        "src": asset->url,
        "alt": alt,
    },
    comingSoon,
}`;
