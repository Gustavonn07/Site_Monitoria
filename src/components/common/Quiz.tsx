import React from "react";

interface optionQuiz {
    option: string, 
    isCorrect: boolean
}

interface PropsQuiz {
    title: string,
    question: string,
    options: optionQuiz[]
}

export const Quiz = ({title, question, options}:PropsQuiz) => {
    const [gotIt, setGotIt] = React.useState<boolean | null>(null);
    const [currentOption, setCurrentOption] = React.useState<optionQuiz | null>(null);

    const handlerAnswerClick = (option: optionQuiz) => {
        setCurrentOption(option);
        option.isCorrect ? setGotIt(true) : setGotIt(false);
    }

    return (
        <>
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p>{question}</p>
            <div className="gap-2 flex flex-col">
            {
                gotIt == null && 
                    options.map(option => (
                        <div onClick={() => handlerAnswerClick(option)} className="cursor-pointer border rounded-sm border-secondary-100 p-2 duration-100 hover:bg-secondary-100">
                            <p>{option.option}</p>
                        </div>
                    ))
            }
            {
                gotIt != null && 
                    options.map(option => (
                        <div className={`${
                            option == currentOption 
                            ? gotIt
                                ? "border rounded-sm border-green-500 text-green-500 p-2" 
                                : "border rounded-sm border-red-500 border-red-500 text-red-500 p-2"
                            : "border rounded-sm border-gray-500 border-gray-500 text-gray-500 p-2"
                        }`}>
                            <p>{option.option}</p>
                        </div>  
                    ))
            }
            </div>
        </>
    )
}