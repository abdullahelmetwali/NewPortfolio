import { contentful } from "@/contentful/contentful";

const GetFunProjects: () => Promise<{ FunProjects: any[]; error: string | undefined }> = async () => {
    let FunProjects: any[] = [];
    let error: string | undefined;
    try {
        const res = await contentful.getEntries({
            content_type: "funProjects",
            order: ["fields.order"]
        });
        FunProjects = res.items;
    } catch (err) {
        error = (err as Error)?.message
    }
    return { FunProjects, error }
};
export default GetFunProjects;