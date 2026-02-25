import { useEffect } from "react";

interface SeoMetaProps {
    title: string;
    description: string;
    image: string;
    url: string;
}

function upsertMeta(attributeName: "name" | "property", key: string, content: string) {
    const selector = `meta[${attributeName}='${key}']`;
    let tag = document.head.querySelector<HTMLMetaElement>(selector);

    if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attributeName, key);
        document.head.appendChild(tag);
    }

    tag.setAttribute("content", content);
}

export function SeoMeta({ title, description, image, url }: SeoMetaProps) {
    useEffect(() => {
        document.title = title;
        upsertMeta("name", "description", description);

        upsertMeta("property", "og:title", title);
        upsertMeta("property", "og:description", description);
        upsertMeta("property", "og:image", image);
        upsertMeta("property", "og:type", "profile");
        upsertMeta("property", "og:url", url);
    }, [title, description, image, url]);

    return null;
}
