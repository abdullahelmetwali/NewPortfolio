import { createClient, ContentfulClientApi } from "contentful";

export const contentful: ContentfulClientApi<undefined> = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '' as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '' as string,
});