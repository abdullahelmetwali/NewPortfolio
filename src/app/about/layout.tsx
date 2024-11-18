import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About',
    description: 'Discover Abdullah ElMetwali’s journey as a Frontend Engineer with expertise in ReactJS, Next.js, JavaScript, TypeScript and a passion for clean code, performance optimization, and continuous learning. How it works with me, How I maintain my project, How it comes OUTSIDE.'
};

const AboutLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <div className="text-center uncopyable fadeUp my-52 mob:px-3 mob:mb-24">
                <h1 className="title uncopyable">
                    I'm Abdullah.
                </h1>
            </div>
            {children}
        </>
    )
};

export default AboutLayout