import { groq } from "next-sanity";

export const CTA_QUERY = groq`*[_type == "header" && entryName == "CTA"]{
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

export const NAVBAR_QUERY = groq`*[_type == "navbar" && entryName == "Navbar"]{
  "navItems": [
    {
      "id": "1",
      "name": solutions.name,
      "href": solutions.href,
      "flyoutData": solutions.flyoutData[]->{
        "id": _id,
        "name": name,
        "href": href,
        "image": iconImage.asset->url,
        "imageAsIconButton": iconImage.asIconButton,
        "description": description,
      }
    },
    {
      "id": "2",
      "name": catalogItems.name,
      "href": catalogItems.href,
      "flyoutData": catalogItems.flyoutData[]->{
        "id": _id,
        "name": name,
        "href": href,
        "image": iconImage.asset->url,
        "imageAsIconButton": iconImage.asIconButton,
        "description": description,
      },
      "flyoutActions": catalogItems.flyoutActions[]->{
        "name": name,
        "href": href,
        "icon": icon,
      }
    },
    {
      "id": "5",
      "name": company.name,
      "href": company.href,
      "flyoutData": company.flyoutData[]{
        "id": _id,
        "name": name,
        "href": href,
        "image": image.asset->url,
        "imageAsIconButton": image.asIconButton,
        "description": description,
      }
    },
    {
      "id": "6",
      "name": customers.name,
      "href": customers.href,
    },
    {
      "id": "7",
      "name": technology.name,
      "href": technology.href,
    }
  ],
  "navActions": navActions[]->{
    "name": name,
    "href": href,
    "icon": icon,
    "primary": primary,
    "external": external,
    "iconLeft": iconLeft,
    "iconRight": iconRight,
  },
  "mobileNavActions": mobileNavActions[]->{
    "name": name,
    "href": href,
    "icon": icon,
    "primary": primary,
    "external": external,
    "iconLeft": iconLeft,
    "iconRight": iconRight,
  }
}`;

export const SUBNAV_SOLUTIONS_QUERY = groq`
  *[_type == "navbar" && entryName == "Navbar"]{
    "solutions": solutions.flyoutData[]->{
      "name": name,
      "href": href,
      "image": iconImage.asset->url,
      "imageAsIconButton": iconImage.asIconButton,
    }
}
`;

export const SUBNAV_CATALOGITEMS_QUERY = groq`
  *[_type == "navbar" && entryName == "Navbar"]{
    "catalogItems": catalogItems.flyoutData[]->{
      "name": name,
      "href": href,
      "image": iconImage.asset->url,
      "imageAsIconButton": iconImage.asIconButton,
    }
  }
`;

export const GET_ORG_DATA = groq`*[_type == "organization"]{
  name,
  info {
    moto,
    mission,
    insight,
    vision {
      heading,
      title,
      highlightText,
      titleSuffix,
      quote,
      quoteHighlightText,
      quoteSuffix,
      description
    },
    values {
      heading,
      title,
      description,
      values[]-> {
        name,
        description,
        icon,
        iconForeground,
        iconBackground
      }
    },
    benefits {
      heading,
      title,
      description,
      benefits[]-> {
        name,
        description,
        icon
      }
    }
  },
  team {
    heading,
    founder-> {
      name,
      role,
      href,
      organizationName,
      socialHandle,
      handleHref,
      "imageUrl": avatar.asset->url,
      funFact,
    },
    leaders {
      title,
      description,
      people[]-> {
        name,
        role,
        href,
        organizationName,
        socialHandle,
        handleHref,
        "imageUrl": avatar.asset->url,
        funFact,
      }
    },
    members {
      title,
      description,
      people[]-> {
        name,
        role,
        href,
        organizationName,
        socialHandle,
        handleHref,
        "imageUrl": avatar.asset->url,
        funFact,
      }
    }
  },
}`;

export const GET_CAREER_DATA = groq`*[_type == "career"]{
  ...,
  jobOpenings {
    ...,
    "heroImage": {
      "src": heroImage.asset->url,
      alt,
    },
    actions[] -> {
      ...,
    }
  },
  careersHeroData {
    ...,
    ...careersHeader->{
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
    }
    },
    "heroImage": {
      "src": heroImage.asset->url,
      alt,
    },
  }
}`;

export const GET_FOOTER_LINKS = groq`*[_type == "footerData" && entryName == "Memorang Footer"][0]{
  entryName,
  columns[]{
    name,
    "links": links[]->{
      name,
      href,
      external
    }
  }
}`;

export const GET_FOOTER_DATA = groq`*[_type == "organization" && entryName == "Memorang"]{
  entryName,
  name,
  website,
  alias,
  logo {
    default {
      "src": src.asset->url,
      alt
    },
    organization {
      "light": {
        "src": light.asset->url,
        "alt": lightAlt,
      },
      "dark": {
        "src": dark.asset->url,
        "alt": lightAlt,
      },
    },
    poweredBy {
      "light": {
        "src": light.asset->url,
        "alt": lightAlt,
      },
      "dark": {
        "src": dark.asset->url,
        "alt": lightAlt,
      },
    }
  },
  info {
    moto,
    mission,
    insight,
    vision {
      heading,
      title,
      description
    },
    values {
      heading,
      title,
      description,
      values[]-> {
        name,
        description,
        icon,
        iconForeground,
        iconBackground
      }
    },
    benefits {
      heading,
      title,
      description,
      benefits[]-> {
        name,
        description,
        icon
      }
    }
  },
     team {
     founder-> {
       name,
       role,
       href,
       organizationName,
       socialHandle,
       handleHref,
       "avatar": avatar.asset->url
     },
     leaders {
       title,
       description,
       people[]-> {
         name,
         role,
         href,
         organizationName,
         socialHandle,
         handleHref,
         "avatar": avatar.asset->url
       }
     },
     members {
       title,
       description,
       people[]-> {
         name,
         role,
         href,
         organizationName,
         socialHandle,
         handleHref,
         "avatar": avatar.asset->url
       }
     }
   },
  social[]-> {
    name,
    href,
    external,
    icon
  }
}`;
