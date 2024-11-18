import { contentful } from "@/contentful/contentful";

const GetBotContact: () => Promise<{ botAnswers: any[]; err: string }> = async () => {
    let botAnswers: any[] = [];
    let err: string = '';
    try {
        const res = await contentful.getEntries({
            content_type: 'botContent'
        });
        botAnswers = res?.items
    } catch (error) {
        err = (error as Error)?.message || "Can't get data , Due to Network error";
    }
    return { botAnswers, err }
}
export default GetBotContact;