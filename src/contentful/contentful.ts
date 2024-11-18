import { createClient, ContentfulClientApi } from "contentful";

export const contentful: ContentfulClientApi<undefined> = createClient({
    space: process.env.SPACE_ID || '' as string,
    accessToken: process.env.CONTENTFUL_ACCESS || '' as string,
});