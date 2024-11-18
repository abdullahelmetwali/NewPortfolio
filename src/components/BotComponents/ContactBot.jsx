"use client";
import { useEffect, useRef, useState } from "react";
import BotQuestions from '@/components/BotComponents/BotContent/BotQuestions';
import BotAnswers from "@/components/BotComponents/BotContent/BotAnswers";
import Image from "next/image";

const ContactBot = (props) => {
    const contactBotView = props.contactBotView;
    const setContactBotView = props.setContactBotView;
    const botAnswers = props.botAnswers;
    const err = props.err;
    const [lastQuestion, setLastQuestion] = useState(null);
    const [lastAnswers, setLastAnswers] = useState([]);
    const [nowQuestion, setNowQuestion] = useState("");
    const [nowAnswers, setNowAnswers] = useState([]);
    const [visibleAnswers, setVisibleAnswers] = useState([]);
    const [showBotQuestions, setShowBotQuestions] = useState(false);
    const botScroller = useRef(null);
    const botIntro = ["Hi!", "I'm Abdullah's Bot . I'm here to help you with any question you may need about Abdullah's Work . ", "How can I help you today ?"];
    const botQuestions = [
        "Sending you a digital high-five!",
        "What technologies do you use?",
        "How do you handle responsive design challenges?",
        "Have you integrated any third-party APIs into your projects?",
        "Can you talk about your experience ? ",
        "We'd like to hire you"
    ];
    useEffect(() => {
        if (botScroller.current) {
            botScroller.current.scrollTop = botScroller.current.scrollHeight;
        }
    }, [lastQuestion, nowQuestion, visibleAnswers]);

    const handleQuestionClick = (question) => {
        setLastQuestion(nowQuestion);
        const filteredAnsw = nowAnswers.filter(ans => ans !== "abdullahelmetwali@gmail.com")
        setLastAnswers(filteredAnsw)
        const sameFieldObj =
            botAnswers?.find((fieldObj) => fieldObj.fields?.question === question) || {};
        setNowQuestion(question);
        setNowAnswers(sameFieldObj?.fields?.answers || []);
        setShowBotQuestions(false);

        // Add answers one by one
        setVisibleAnswers([]);
        sameFieldObj?.fields?.answers?.map((answer, index) => {
            setTimeout(
                () => {
                    setVisibleAnswers((prev) => [...prev, answer]);
                },
                (index + 1) * 1000 // Show each answer one by one every second
            );
        });
    };

    return (
        <section
            className={` -bottom-full right-3 w-1/3 h-[75dvh] mob:w-[98%] mob:right-1 contactBot ${contactBotView ? "bottom-0" : "-bottom-full"}`}
        >
            <header className="bg-[var(--imp)] flex justify-between items-center  w-full tracking-wide rounded-tr-xl textAcorn rounded-tl-xl p-4">
                <div>
                    <h2 className="textAcorn text-xl">Here&apos;s, Abdullah&apos;s Bot.</h2>
                    <p className="text-sm">Ask me a question.</p>
                </div>
                <Image
                    src={'/Close.svg'}
                    width={24}
                    height={24}
                    alt="Close"
                    title={`${contactBotView ? 'Close Chat' : ''}`}
                    onClick={setContactBotView}
                    className=" cursor-pointer"
                />
            </header>
            <main className="p-4 h-[88%] overflow-y-scroll" ref={botScroller}>
                <div className='my-4'>
                    {botIntro.map((intro, index) => (
                        <p className='bg-[var(--imp)] cursor-pointer w-fit px-4 py-1 my-1 rounded-lg' key={index}>{intro}</p>
                    ))}
                </div>
                <BotQuestions
                    botQuestions={botQuestions}
                    handleQuestionClick={handleQuestionClick}
                />
                {lastQuestion && (
                    <div className="flex w-full justify-end my-4">
                        <span className="border px-3 py-1 bg-slate-300 text-black rounded-lg">
                            {lastQuestion}
                        </span>
                    </div>
                )}
                <BotAnswers lastAnswers={lastAnswers} />
                <div className="my-4">
                    {nowQuestion && (
                        <div>
                            <div className="flex w-full justify-end">
                                <span className="border px-3 py-1 bg-slate-300 text-black rounded-lg transition-all">
                                    {nowQuestion}
                                </span>
                            </div>
                            {visibleAnswers.map((answer, answerInd) => (
                                <div key={answerInd} className="grid">
                                    {
                                        answer !== "abdullahelmetwali@gmail.com" ? <p className="bg-[var(--imp)] px-4 py-2 my-1 w-fit rounded-lg" key={answerInd}> {answer} </p>
                                            : <a href={`mailto:${answer}`} target="_blank" className='border-[#5e5e5ec0] cursor-pointer border-[1px] px-4 py-2 my-1  w-fit rounded-full'> Send Message </a>
                                    }
                                </div>
                            ))}
                        </div>

                    )}
                </div>
                {showBotQuestions && (
                    <BotQuestions
                        botQuestions={botQuestions}
                        handleQuestionClick={handleQuestionClick}
                    />
                )}
            </main>
        </section>
    );
};

export default ContactBot;