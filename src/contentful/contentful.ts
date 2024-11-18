import { createClient, ContentfulClientApi } from "contentful";

export const contentful: ContentfulClientApi<undefined> = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '' as string,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '' as string,
});