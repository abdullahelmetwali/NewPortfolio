import { Metadata } from "next";
import { contentful } from "@/contentful/contentful";
import React from "react";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
    title: 'About',
    description: 'Discover Abdullah ElMetwali’s journey as a Frontend Engineer with expertise in ReactJS, Next.js, JavaScript, TypeScript and a passion for clean code, performance optimization, and continuous learning. How it works with me, How I maintain my project, How it comes OUTSIDE.'
};

const AboutPage = async () => {
    let WorkItems: any = [];
    let OutSideWork: any = [];
    let err = '';

    try {
        const workItemsRes = await contentful.getEntries({ content_type: 'workItems' });
        const outSideWorkRes = await contentful.getEntries({ content_type: 'outSideWork' });

        WorkItems = workItemsRes.items;

        const randomItems: any = [];
        while (randomItems.length < 2) {
            const randomIndex = Math.floor(Math.random() * outSideWorkRes.items.length);
            if (!randomItems.includes(outSideWorkRes.items[randomIndex])) {
                randomItems.push(outSideWorkRes.items[randomIndex]);
            }
        }
        OutSideWork = randomItems;
    } catch (error) {
        err = (error as Error)?.message || 'Something went wrong';
    }

    return <AboutContent outSideWork={OutSideWork} workItems={WorkItems} error={err} />;
};

export default AboutPage;
