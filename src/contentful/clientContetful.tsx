import { createClient, ContentfulClientApi } from "contentful";

export const clientContentful: ContentfulClientApi<undefined> = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
});