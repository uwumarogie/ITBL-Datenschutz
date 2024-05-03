import Quiz, {QuizParams} from "@/app/components/quiz";
import {useState} from "react";
import clsx from "clsx";
import {next} from "sucrase/dist/types/parser/tokenizer";


export interface QuizListParams {
    className?: string,
    quizzes: QuizParams[],
    onFinish?: () => void
}

export default function QuizList({quizzes, className, onFinish}: QuizListParams) {

    const [currentQuizIndex, setCurrentQuizIndex] = useState(0)
    const [showSummary, setShowSummary] = useState(false)
    const quiz = quizzes[currentQuizIndex]

    const [quizzesState, setQuizzesState] = useState(quizzes.map((quiz, index) => ({
        quiz,
        selection: -1,
        isSolved: false,
        isDone: false
    })))

    const quizStateClasses = (index) => {
        let classes = "rounded-full w-10 h-10 inline-flex justify-center items-center font-bold "
        if (index == currentQuizIndex) {
            classes += "bg-orange-500 text-white"
        } else if (quizzesState[index].isDone) {
            if(quizzes[index].showCorrectAnswer) {
                if(quizzesState[index].isSolved) {
                    classes += "bg-green-200 text-green-800"
                }else{
                    classes += "bg-red-200 text-red-800"
                }
            } else {
                classes += "bg-sky-200 text-green-800"
            }
        } else if (quizzesState[index].selection != -1 && !quizzesState[index].isSolved) {
            classes += "bg-red-200 text-red-800"
        } else {
            classes += "bg-slate-200 text-sky-800"
        }
        return classes
    }

    function onSelect(quizIndex, selection, isDone) {
        console.log(quizIndex, selection, isDone)
        setQuizzesState(
            quizzesState.map((state, index) => {
                if (quizIndex == index) {
                    return {
                        quiz: state.quiz,
                        selection: selection,
                        isSolved: selection == state.quiz.correctAnswer,
                        isDone: isDone
                    }
                } else {
                    return state;
                }
            })
        )

    }

    function nextQuiz() {
        if (currentQuizIndex == quizzes.length - 1)
            return;
        setCurrentQuizIndex(currentQuizIndex + 1)
    }

    function previousQuiz() {
        if (currentQuizIndex == 0)
            return;
        setCurrentQuizIndex(currentQuizIndex - 1)
    }

    function finishQuiz() {
        if(showSummary) {
            onFinish?.call(this)
        }else{
            setShowSummary(true)
        }
    }

    return (
        <div className={className}>

            <div className="py-6 flex gap-6">
                {
                    quizzesState.map((state, index) => (
                        <div key={index}
                            className={quizStateClasses(index)}>{index + 1}</div>
                    ))
                }
            </div>

            {
                !showSummary && (

                    <div className="quiz mb-10">
                        {
                            quizzesState.map(({quiz, isDone, isSolved, selection}, index) => (

                                <div className={clsx("", currentQuizIndex != index && "hidden")} key={index}>
                                    <Quiz question={quiz.question}
                                          answers={quiz.answers}
                                          hint={quiz.hint}
                                          hintAnswers={quiz.hintAnswers}
                                          correctAnswer={quiz.correctAnswer}
                                          showCorrectAnswer={quiz.showCorrectAnswer}
                                          onSelect={(selection, isDone) => {
                                              onSelect(currentQuizIndex, selection, isDone)
                                          }}/>
                                </div>

                            ))
                        }
                    </div>
                )
            }

            {
                showSummary && (
                    <div className="summary">
                        <h3 className="text-xl font-semibold mb-2">Du hast es geschafft!</h3>
                        <p>Du hast {quizzesState.map(state => state.isSolved).reduce((v, acc) => acc + (v ? 1 : 0), 0)}</p>
                    </div>
                )
            }

            <div className="ml-100 flex justify-end">
                {/*<button onClick={previousQuiz} className={clsx(currentQuizIndex == 0 && "opacity-0 pointer-events-none")}>Zurück</button>*/}
                {quizzesState[currentQuizIndex].isDone && (
                    currentQuizIndex == quizzes.length - 1
                        ? (<button onClick={finishQuiz}>Abschließen</button>)
                        : (<button onClick={nextQuiz}>Weiter</button>)
                )}
            </div>

        </div>
    )
}