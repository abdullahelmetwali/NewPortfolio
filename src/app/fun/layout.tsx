import type { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Fun',
    description: 'Collection of some Fun projects created and maintained by Abdullah ElMetwali.'
};

const FunLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <div className="text-center uncopyable fadeUp my-52 mob:px-3 mob:mb-24">
                <h1 className="title uncopyable">Fun.</h1>
                <h2 className="textAcorn fadeUp tracking-wider text-lg my-8">
                    Collection of sites I&apos;ve created, for fun .
                </h2>
            </div>
            {children}
        </>
    )
}
export default FunLayout;