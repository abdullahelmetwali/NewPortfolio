"use client";
import Image from "next/image";
import Link from "next/link";
import { contentful } from "@/contentful/contentful";
import { useEffect, useRef, useState } from "react"

const About: React.FC = () => {
    const temp = useRef<number | null>(null);
    const weather = useRef(null);
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const [outSideWork, setOutSideWork] = useState<any>([]);
    const [workItems, setWorkItems] = useState<any>([]);
    const [errors, setErrors] = useState<any>(null)

    useEffect(() => {
        const url = 'https://api.weatherapi.com/v1/current.json?key=009289972cfc4cbc9cc143815240107&q=Cairo&aqi=no';
        fetch(url)
            .then(res => res.json())
            .then(res => {
                temp.current = res.current.temp_c
                weather.current = res.current.condition.text
            });

        const getItems = async () => {
            try {
                const workItemsRes = await contentful.getEntries({
                    content_type: 'workItems'
                });
                const outSideWorkRes = await contentful.getEntries({
                    content_type: 'outSideWork'
                });
                setWorkItems(workItemsRes.items);
                setOutSideWork(outSideWorkRes.items);
                const randomItems: any = [];
                while (randomItems.length < 2) {
                    const randomIndex = Math.floor(Math.random() * outSideWorkRes.items.length);
                    if (!randomItems.includes(outSideWorkRes.items[randomIndex])) {
                        randomItems.push(outSideWorkRes.items[randomIndex]);
                    }
                }
                setOutSideWork(randomItems);
            } catch (error) {
                setErrors(error)
            }
        }
        getItems();
    }, []);

    if (errors) {
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
                <h1 className="title uncopyable">
                    I&apos;m Abdullah.
                </h1>
            </div>
            <main className="p-10 fadeUp grid grid-cols-2 justify-items-center items-center mob:grid-cols-1 mob:gap-10 mob:items-center">
                <div className="w-1/2 mob:w-full">
                    <Image
                        src="/imgs/me.jpg"
                        width={900}
                        height={900}
                        unoptimized
                        priority
                        alt="Abdullah"
                        title="Abdullah ElMetwali"
                        className=" brightness-[0.6] rounded rounded-tl-full rounded-tr-full"
                    />
                </div>
                <div>
                    <h2 className="textAcorn text-[4vw] w-fit mob:text-[7vw]">
                        I&apos;m a Frontend Developer <br /> based in
                        <span className="capitalize mx-1"> {weather.current || 'Sunny'} {temp.current || '32.3'}&deg;C </span>

                        Mansoura, Egypt .
                    </h2>
                    <article className="ubuntu text-[var(--desc)] tracking-wide text-[1.7vw] mob:text-[4vw]">
                        I&apos;m here to mix creativity with technical expertise, in addition learning and evolving in the fast-paced world of frontend development.
                    </article>
                </div>
            </main>
            <h2 className="textAcorn text-center text-6xl tracking-wide my-24 fadeUp">
                Small Breif
            </h2>
            <main className="grid grid-cols-2 p-24 mx-10 rounded-xl gap-10 my-10 bg-[var(--box)] mob:grid-cols-1 mob:px-4">
                {
                    workItems.map((item: any, index: number) => (
                        <div key={index}>
                            <h3 className="textAcorn text-3xl opacity-60">0{index + 1}</h3>
                            <h3 className="my-5 textAcorn text-3xl">{item?.fields?.title}</h3>
                            <article className="ubuntu text-xl text-[var(--desc)]">{item?.fields?.article}</article>
                        </div>
                    ))
                }
            </main>
            <h2 className="textAcorn text-center text-6xl tracking-wide my-24 fadeUp">
                Work Mode OFF
            </h2>
            <section>
                <main className="flex justify-center items-center gap-5 px-16 h-fit mob:px-8">
                    {
                        outSideWork.map((item: any, index: number) => (
                            <div key={index} className={`relative ${index === 0 ? 'w-3/4 mob:w-full' : 'w-1/4 mob:hidden'}`}>
                                <div>
                                    <div
                                        onMouseEnter={() => setHoverIndex(index)}
                                        onMouseLeave={() => setHoverIndex(null)}
                                    >
                                        <Image
                                            width={item?.fields?.img?.fields?.file?.details?.image?.width}
                                            height={item?.fields?.img?.fields?.file?.details?.image?.height}
                                            src={item?.fields?.img?.fields?.file?.url} className="object-cover w-full h-[40rem] rounded-xl object-center"
                                            alt="OutSideWork"
                                            unoptimized
                                            priority
                                        />
                                    </div>
                                </div>
                                <div
                                    className={`transition-all duration-300 absolute left-3 bg-[var(--box)] text-[var(--color)] px-4 py-1 rounded-xl ubuntu ${hoverIndex === index ? 'bottom-3 opacity-100' : 'bottom-0 opacity-0'
                                        }`}
                                >
                                    <p>{item?.fields?.img?.fields?.title}</p>
                                </div>
                            </div>
                        ))
                    }
                </main>
            </section>
            <div className="px-20 text-3xl  text-left my-16 textAcorn tracking-wide mob:text-2xl mob:px-8">
                <p >
                    Outside of work, you&apos;ll find me relaxing by the sea, creating memories, perfecting the art of making my super COFFEE, hitting the GYM to recover from JavaScript headaches, and dominating FIFA matches as effortlessly as REAL MADRID conquers the Champions League .
                </p>
            </div>
        </>
    )
}
export default About

