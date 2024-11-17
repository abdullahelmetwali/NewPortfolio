import { contentful } from "@/contentful/contentful";
import GetWorkProjects from "./GetWorkProjects";
import { Entry, EntrySkeletonType } from "contentful";

const GetProjectDetails = async ({ projectName }: { projectName: string })
    : Promise<{ projectDT: Entry<EntrySkeletonType, undefined, string> | undefined; error: string | undefined | Error; nextProject: string }> => {
    let projectDT: Entry<EntrySkeletonType, undefined, string> | undefined = undefined
    let nextProject;
    let error: string | undefined | Error;
    const { WorkProjects } = await GetWorkProjects();
    try {
        const projectRes = await contentful.getEntries({
            content_type: "workProjects",
            "fields.url": projectName,
        });
        projectDT = projectRes?.items[0];
        const projectIndex = WorkProjects.findIndex(project => project.fields.projectName === projectDT?.fields.projectName);
        if (projectIndex !== -1 && projectIndex + 1 < WorkProjects.length) {
            nextProject = WorkProjects[projectIndex + 1].fields.projectName;
        } else if (projectIndex + 1 === WorkProjects.length) {
            nextProject = WorkProjects[0].fields.projectName;
        }
    } catch (err) {
        error = (err as Error)?.message;
        throw new Error(error)
    }
    return { projectDT, nextProject, error }
}
export default GetProjectDetails;