"use server";
import ImgLoading from "@/components/ImgLoading";
import GetProjectDetails from "@/hooks/GetProjectDetails";
import Link from "next/link";


export async function generateMetadata({ params }: { params: any }) {
    const { projectName } = await params;
    const { projectDT } = await GetProjectDetails({ projectName: projectName });
    return {
        title: projectDT?.fields?.projectName,
        description: `${projectDT?.fields?.projectOverView} by Abdullah ELMetwali.`
    }
}

const ProjectDetails:
    ({ params }: { params: any }) => Promise<JSX.Element> =
    async ({ params }) => {
        const { projectName } = await params;
        const { projectDT, nextProject, error } = await GetProjectDetails({ projectName: projectName });
        const project: any = projectDT?.fields;

        if (!project) {
            return (
                <div className="my-56 text-center ubuntu text-2xl">
                    404 | Project not found <br />
                    <Link href={`/`} className="hover:underline hover:underline-offset-4">
                        Go to Home &rarr;
                    </Link>
                </div>
            )
        };

        if (error) {
            return (
                <div className="my-56 text-center ubuntu text-2xl">
                    404 | Something went wrong <br />
                    <Link href={`/`} className="hover:underline hover:underline-offset-4">
                        Go to Home &rarr;
                    </Link>
                </div>
            )
        };

        return (
            <>
                <section className="fadeUp text-center ">
                    <div className="mb-52 mt-72 mob:mt-36 mob:mb-16">
                        <h1 className="title px-3">
                            <span>{project.projectName}</span>
                        </h1>
                    </div>
                    <div className="p-10 mob:px-5">
                        {project.projectMainImg?.fields?.file?.url && (
                            <ImgLoading
                                src={project.projectMainImg.fields.file.url}
                                alt={project.projectName}
                                width={1200}
                                height={1200}
                                style={{ boxShadow: 'var(--mainShadow)' }}
                                title={project.projectName}
                            />
                        )}
                    </div>
                </section>
                <main className="fadeUp px-20 mob:px-9">
                    <div className="my-5">
                        <h2 className="text-5xl textAcorn">Overview .</h2>
                        <article className="text-2xl uncopyable ubuntu text-[var(--desc)] tracking-wide mob:text-xl my-2">
                            {project.projectOverView}
                        </article>
                    </div>
                    <hr />
                    <div className="my-5">
                        <h2 className="text-4xl textAcorn mob:text-[2.1rem]">
                            Technologies Used .
                        </h2>
                        <ul className="flex flex-wrap gap-1 text-2xl uncopyable mob:text-2xl ubuntu text-[var(--desc)] my-2">
                            {project.projectTechnologies?.map((tech: any, index: number) => (
                                <li key={index}>
                                    {tech}{" "}
                                    {project.projectTechnologies.length !== index + 1
                                        ? "| "
                                        : ""}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <hr />
                    <div className="my-5">
                        <h2 className="text-4xl textAcorn">Code-Detail .</h2>
                        <div className="text-2xl ubuntu text-[var(--desc)] my-2">
                            <a
                                href={project.projectRepo === "null" ? undefined : project.projectRepo}
                                target="_blank"
                                className={`${project.projectRepo === "null" ? 'cursor-not-allowed' : ''}hover:text-[var(--hover)]`}
                                title={`${project.projectRepo === "null" ? 'Private Repo' : `${project.projectName} Repo`}`}
                            >
                                GitHub Repo
                            </a>{" "}
                            |{" "}
                            <a
                                href={project.projectLiveServer}
                                target="_blank"
                                className="hover:text-[var(--hover)]"
                                title={`${project.projectName} Live Server`}
                            >
                                LiveServer
                            </a>
                        </div>
                    </div>
                    <hr />
                    <div className="my-20 text-8xl mob:text-4xl text-[var(--titleFont)] text-center  border border-[var(--border)] p-8 rounded-full mob:px-4" style={{ boxShadow: `var(--mainShadow)` }}>
                        <Link href={`/work/${nextProject.replaceAll(' ', '').toLowerCase()}`} className="cursor-pointer">{nextProject}</Link>
                    </div>
                </main>
            </>
        );
    };

export default ProjectDetails;
