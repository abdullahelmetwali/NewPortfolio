"use client";
import { usePathname } from "next/navigation";
const NotFound = () => {
    const path = usePathname();
    return (
        <div className="min-h-screen flex justify-center items-center text-2xl ubuntu">
            404 | No Page named <span className="text-red-500 mx-2">{path.replace('/', '')}</span> !!
        </div>
    )
}
export default NotFound;