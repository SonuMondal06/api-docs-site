import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;

export const SPLASH_PAGE_QUERY = groq`*[_type == "splashPage"]{
  "heroData": {
    ...heroHeader->{
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
  "partnersLogoCloudsData": {
    "title": partnersTitle,
    "logos": partnersLogos[]{
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
      icon
    },
  },
  "solutionsSection": {
    ...solutionsHeader->{
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
    solutions[]->{
      name,
      href,
      description,
      "image": previewImage{
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
        iconRight
      },
    },
  },
  "tweetCardData": {
    ...tweetCardHeader->{
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
    tweetId,
  },
  "startupProgramsLogoCloudsData": {
    "title": startupProgramsTitle,
    "logos": startupProgramsLogos[]{
      "src": asset->url,
      "alt": alt,
    },
  },
  "testimonialsData": {
    ...testimonialsHeader->{
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
      "featuredTestimonial": featuredTestimonial->{
      "body": quote,
      "author": {
        "name": authorName,
        "role": authorRole,
            "org": organizationName,
        "handle": socialHandle,
        handleHref,
        "imageUrl": authorAvatar.asset->url,
        "logoUrl": organizationLogo.asset->url,
      },
    },
    "testimonials": [
      [
        testimonialCol1[]->{
          "body": quote,
          "author": {
            "name": authorName,
            "role": authorRole,
            "org": organizationName,
            "handle": socialHandle,
            handleHref,
            "imageUrl": authorAvatar.asset->url,
            "logoUrl": organizationLogo.asset->url,
          },
        },
        testimonialCol2[]->{
          "body": quote,
          "author": {
            "name": authorName,
            "role": authorRole,
            "org": organizationName,
            "handle": socialHandle,
            handleHref,
            "imageUrl": authorAvatar.asset->url,
            "logoUrl": organizationLogo.asset->url,
          },
        },
      ],
      [
        testimonialCol3[]->{
          "body": quote,
          "author": {
            "name": authorName,
            "role": authorRole,
            "org": organizationName,
            "handle": socialHandle,
            handleHref,
            "imageUrl": authorAvatar.asset->url,
            "logoUrl": organizationLogo.asset->url,
          },
        },
        testimonialCol4[]->{
          "body": quote,
          "author": {
            "name": authorName,
            "role": authorRole,
            "org": organizationName,
            "handle": socialHandle,
            handleHref,
            "imageUrl": authorAvatar.asset->url,
            "logoUrl": organizationLogo.asset->url,
          },
        },
      ],
    ],
  },
}`;
