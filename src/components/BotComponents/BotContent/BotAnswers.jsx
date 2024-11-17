const BotAnswers = ({ lastAnswers }) => {
    return (
        <div className="my-4">
            {lastAnswers.map((answer, index) => (
                <p
                    key={index}
                    className={`bg-[var(--imp)] px-4 py-2 my-2 w-fit rounded-lg `}
                >
                    {answer}
                </p>
            ))}
        </div>
    )
}
export default BotAnswers;