import { groq } from "next-sanity";

export const ALL_SOLUTIONS_QUERY = groq`*[_type == "solution"]{
    "id": _id,
    name,
    href,
    description,
	longDescription,
    "icon": iconImage{
        "src": asset->url,
        "alt": alt,
        "asIconButton": asIconButton,
    },
    "heroImage": previewImage{
        "src": asset->url,
        "alt": alt,
    },
    comingSoon,
}`;

export const SOLUTION_WITH_HREF_QUERY = groq`*[_type == "solution" && href == $href]{
    "id": _id,
    name,
    href,
    comingSoon,
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
        "mobileHeroView": featuresImage.mobileHeroView,
        features[]{
            name,
            description,
            "iconUrl": icon.asset->url,
        },
    },
    "statsData": {
        ...statsHeader->{
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
        "heroImage": statsImage{
            "src": asset->url,
            "alt": alt,
        },
        stats[]{
            name,
            value,
        },
    },
    "testimonialData": testimonial->{
        quote,
        authorName,
        organizationName,
        "authorImageUrl": organizationLogo.asset->url,
        "storySlug": customerStory->slug.current,
    },
}`;
