import { Metadata } from "next";
import About from "./page";
import { contentful } from "@/contentful/contentful";

export const metadata: Metadata = {
    title: 'About',
    description: 'Discover Abdullah ElMetwali’s journey as a Frontend Engineer with expertise in ReactJS, Next.js, JavaScript, TypeScript and a passion for clean code, performance optimization, and continuous learning. How it works with me, How I maintain my project, How it comes OUTSIDE.'
};

const AboutLayout = async ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    let WorkItems: any = [];
    let OutSideWork: any = [];
    let error: string | undefined;
    try {
        const workItemsRes = await contentful.getEntries({
            content_type: 'workItems'
        });
        const outSideWorkRes = await contentful.getEntries({
            content_type: 'outSideWork'
        });
        WorkItems = workItemsRes.items;
        let randomItems: any = [];
        while (randomItems.length < 2) {
            const randomIndex = Math.floor(Math.random() * outSideWorkRes.items.length);
            if (!randomItems.includes(outSideWorkRes.items[randomIndex])) {
                randomItems.push(outSideWorkRes.items[randomIndex]);
            }
        }
        OutSideWork = randomItems;
    } catch (error) {
        error = (error as Error)?.message
    }
    return (
        <>
            <About outSideWork={OutSideWork} workItems={WorkItems} error={error} />
        </>
    )
}
export default AboutLayout