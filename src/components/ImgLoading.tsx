"use client";
import Image from "next/image";
import { CSSProperties, useState } from "react"
interface ImgLoadingProps {
    src: string,
    width: number,
    height: number,
    alt: string,
    title: string,
    style: CSSProperties | undefined
}
const ImgLoading: React.FC<ImgLoadingProps> = ({ src, alt, width, height, title, style }) => {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <>
            {
                !isLoading && <div className={`loader w-full h-[42rem] mob:h-[22rem] rounded-xl`}></div>
            }
            <Image
                src={src}
                width={width}
                height={height}
                alt={alt}
                title={title}
                onLoad={() => setIsLoading(false)}
                priority
                unoptimized
                className={`${!isLoading ? 'hidden' : 'block'} rounded-xl`}
                style={style}
            />
        </>
    )
};
export default ImgLoading