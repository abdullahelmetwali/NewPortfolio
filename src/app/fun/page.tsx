import GetFunProjects from "@/hooks/GetFunProjects";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Fun',
    description: 'Collection of some Fun projects created and maintained by Abdullah ElMetwali.'
};

const Fun: React.FC = async () => {
    const { FunProjects, error } = await GetFunProjects();
    if (error) {
        return (
            <div className="my-56 text-center ubuntu text-2xl">
                404 | Something went wrong <br />
                <Link href={`/`} className="hover:underline hover:underline-offset-4">
                    Go to Home &rarr;
                </Link>
            </div>
        )
    }
    return (
        <>
            <div className="text-center uncopyable fadeUp my-52 mob:px-3 mob:mb-24">
                <h1 className="title uncopyable">Fun.</h1>
                <h2 className="textAcorn fadeUp tracking-wider text-lg my-8">
                    Collection of sites I&apos;ve created, for fun .
                </h2>
            </div>
            <section className='grid grid-cols-1 justify-center px-[25%] mob:px-[10%] gap-10 my-24 fadeUp'>
                {FunProjects.map((proj, index: number) => (
                    <div key={index} className='p-5 rounded-2xl bg-[var(--box)] transform transition-all duration-150 ease-in-out hover:scale-90 border border-white/15 hover:border-white/30' style={{ boxShadow: 'rgba(255, 255, 255, 0.4) 1px 1px 140px -90px' }}>
                        <a target="_blank" href={proj?.fields?.projectLiveServer} className='grid grid-cols-3 items-center justify-items-end mob:gap-10'>
                            <div className='col-span-2'>
                                <h2 className='textAcorn text-2xl tracking-wide mob:text-xl'>{proj?.fields?.projectName}</h2>
                                <p className='ubuntu text-xl w-[80%] tracking-wide mob:text-base'>{proj?.fields?.projectCaption}</p>
                            </div>
                            <div className='col-span-1 w-3/4 bg-black p-9 rounded-xl mob:w-full mob:p-3'>
                                <Image
                                    src={`http:${proj?.fields?.projectMainImg?.fields?.file?.url}`}
                                    alt={proj?.fields?.projectName}
                                    width={1200}
                                    height={1200}
                                    title={proj?.fields?.projectName}
                                    unoptimized
                                    priority
                                />
                            </div>
                        </a>
                    </div>
                ))}
            </section>
        </>
    );
}

export default Fun;
