import { contentful } from "@/contentful/contentful";
import NavBar from "./Navbar";

const NavWrapper = async () => {
    let botAnswers: any[] | null = [];
    let err: string = '';
    try {
        const res = await contentful.getEntries({
            content_type: 'botContent'
        });
        botAnswers = res?.items;
    } catch (error) {
        err = (error as Error)?.message || "Can't get data , Due to Network error";
    }
    return <NavBar botAnswers={botAnswers} />
}
export default NavWrapper