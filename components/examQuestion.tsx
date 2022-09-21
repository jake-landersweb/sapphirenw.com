import { useState } from "react"
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai"

type ExamQuestionProps = {
    question: string
    choices: string[]
    correctIndex: number
}

const ExamQuestion = ({ props }: { props: ExamQuestionProps }) => {

    const [answer, setAnswer] = useState(-1)

    const answerCell = (idx: number, selection: string) => {
        return <div className="">
            <button onClick={() => setAnswer(idx)} className={`border px-4 py-2 rounded-md bg-bg-200 dark:bg-bg-dark-500 w-full hover:opacity-75 transition-all ${idx == answer ? idx == 2 ? "border-green-300" : "border-red-500" : "border-transparent"}`}>
                <p>{selection}</p>
            </button>
        </div>
    }

    const getAnswerIcon = () => {
        switch (answer) {
            case 2: return <AiOutlineCheckCircle size={50} />
            default: return <AiOutlineCloseCircle size={50} />
        }
    }

    const composeQuestions = () => {
        const items = []
        for (var i = 0; i < props.choices.length; i++) {
            items.push(answerCell(i, props.choices[i]))
        }
        return items
    }

    return <div className="space-y-4 p-4 bg-bg-100 dark:bg-bg-dark-600 rounded-lg">
        <p className="text-xl text-center">{props.question}</p>
        <div className="md:flex">
            <div className=" rounded-md p-2 space-y-2 min-w-[300px]">
                {composeQuestions()}
            </div>
            <div className={`${answer == -1 ? "opacity-0" : "opacity-100"} transition-opacity space-y-2 text-center m-auto grid place-items-center`}>
                <div className={`${answer == props.correctIndex ? "text-green-300" : "text-red-500"}`}>{getAnswerIcon()}</div>
                <p className="text-txt-500">{answer == props.correctIndex ? "Correct!" : "Try again."}</p>
            </div>
        </div>
    </div>
}

export default ExamQuestion