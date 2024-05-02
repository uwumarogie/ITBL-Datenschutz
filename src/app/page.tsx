"use client"

import Quiz from "@/app/components/quiz";
import {useState} from "react";

export default function Home() {
    const answers = [
        "Antwort A",
        "Antwort B",
        "Lange Antwort C, die mehr als eine Zeile braucht",
        "Antwort D"
    ]
    const hintAnswers = answers.map(hint => "Hint for: " + hint)
    const longHint = "Et vitae illum voluptatem suscipit. Minima voluptatibus labore provident  dolores veritatis. \n" +
        "Mollitia ipsam et error ut ut expedita nihil. \n" +
        "Ut temporibus et nihil. Magnam et nobis quasi. Ad eaque neque eaque nobis  minus dignissimos."

    const [isDone, setDone] = useState(false)
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false)

    function onSelect(selection, isDone) {
        // alert(selection)
        console.log(selection, isDone)
        setDone(isDone)
    }

    return <div>
        <button
            onClick={() => setShowCorrectAnswer(!showCorrectAnswer)}>{showCorrectAnswer ? "Disable" : "Enable"} showCorrectAnswer
        </button>
        <Quiz className="mx-32 my-8 w-1/2" question={"Warum ist die Banane krumm?"} answers={answers} hint={longHint}
              showCorrectAnswer={showCorrectAnswer} correctAnswer={0} hintAnswers={hintAnswers}
              onSelect={onSelect}></Quiz>
    </div>;
}
