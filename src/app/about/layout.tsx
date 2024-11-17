import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About',
    description: 'Discover Abdullah ElMetwali’s journey as a Frontend Engineer with expertise in ReactJS, Next.js, JavaScript, TypeScript and a passion for clean code, performance optimization, and continuous learning. How it works with me, How I maintain my project, How it comes OUTSIDE.'
};

const AboutLayout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            {children}
        </>
    )
}
export default AboutLayout