import GetWorkProjects from "@/hooks/GetWorkProjects";
import Link from "next/link";

const HomePage: () => Promise<JSX.Element> = async () => {
  const { WorkProjects, error } = await GetWorkProjects();

  if (error) {
    <div className="my-56 text-center ubuntu text-2xl">
      404 | Something went wrong
    </div>
  };

  return (
    <>
      <div className="text-center fadeUp my-52 mob:px-3 mob:mb-24">
        <h1 className="title">
          <span className="">Hi. I&apos;m Abdullah.</span>
          <br />
          <span>A Frontend.</span>
        </h1>
        <h2 className="textAcorn fadeUp tracking-wider text-xl mob:text-lg my-8">
          Turning design to code, engaging frontend solutions with Highly
          detail-focusing <br className="mob:hidden" /> and a deep understanding
          of user behavior.
        </h2>
      </div>
      <section className="grid grid-cols-3 content mob:fadeUp gap-4 my-24 px-10 mob:flex mob:flex-col mob:px-5">
        {WorkProjects.map((project, index) => (
          <Link
            key={index}
            href={`/work/${project.fields.projectName.replaceAll(" ", "").toLowerCase()}`}
            className={`${(Math.floor(index / 2) % 2 === 0)
              ? (index % 2 === 0 ? 'col-span-2' : 'col-span-1')
              : (index % 2 === 0 ? 'col-span-1' : 'col-span-2')
              }  border-[var(--border)] border textAcorn text-center rounded-xl p-4 fadeUp`}
            style={{ boxShadow: `var(--mainShadow)` }}
          >
            <h3 className="text-3xl tracking-wide m-4 mob:text-2xl mob:m-2">
              {project?.fields?.projectName}
            </h3>
            <p className="text-xl tracking-wide my-3 mob:text-base mob:my-2 text-[var(--desc)]">
              {project?.fields?.projectCaption}
            </p>
          </Link>
        ))}
      </section>
    </>
  );
};
export default HomePage;
