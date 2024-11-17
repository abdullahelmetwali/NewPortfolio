import { contentful } from "@/contentful/contentful";
const GetWorkProjects:
    () => Promise<{ WorkProjects: any[]; error: string | undefined }> =
    async () => {
        let WorkProjects: any[] = [];
        let error: string | undefined;
        try {
            const res = await contentful.getEntries({
                content_type: "workProjects",
                order: ["fields.order"]
            });
            WorkProjects = res.items;
        } catch (err) {
            error = (err as Error)?.message;
        }
        return { WorkProjects, error }
    }
export default GetWorkProjects;