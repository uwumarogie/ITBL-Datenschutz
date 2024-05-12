"use client"
import QuizList from "@/components/QuizList";
import {QuizParams} from "@/components/Quiz";
import {InlineNavigation} from "@/components/inline-navigation";

const quizzes: QuizParams[] = [
    {
        question: "Ein Hacker möchte sich in deinen Social Media Account hacken. Häufig verwendete Passwörter werden zuerst geknackt. Welches der Passwörter ist am sichersten?",
        answers: ["123456789", "hallo", "iloveyou", "asdfgh"],
        hint: <span>Liste der Top Ten deutscher Passwörter 2023:  <a href="https://hpi.de/news/jahrgaenge/2023/123456789-ist-das-beliebteste-passwort-2023-in-deutschland.html" className="underline">Siehe Link</a> </span>,
        showCorrectAnswer: true,
        correctAnswer: 0,
    },
    {
        question: "Neben den häufigsten Passwörtern werden auch gängige Wiederholungs- oder Tastaturmuster überprüft. Dazu gehört ebenfalls das Hinzufügen einer Zahl oder eines üblichen Sonderzeichens am Anfang oder Ende eines sonst simplen Passwortes. Welches der Passwörter ist am sichersten?",
        answers: ["asdfgh", "abcd1234", "hallo!", "{username}"],
        hint: "Vermeide Wiederholungen und einfache Muster. Das Hinzufügen von Sonderzeichen verbessert die Sicherheit.",
        showCorrectAnswer: true,
        correctAnswer: 2,
    },
    {
        question: "Ein Freund von dir wurde bereits gehackt. Der Hacker kennt schon deinen Namen und dein Geburtsdatum. Welches der Passwörter ist am sichersten?",
        answers: ["{username}1234", "2008{username}", "password1", "SakPze69"],
        hint: "Verwende keine persönlichen Informationen wie deinen Namen oder Geburtsdatum in deinem Passwort.",
        showCorrectAnswer: true,
        correctAnswer: 3,
    },
    {
        question: "Der Hacker probiert es zudem mit einem Brute-Force-Angriff. Je länger das Passwort, desto besser. Achte immer darauf, dass dein Passwort aus mindestens 8 Zeichen besteht. Welches der Passwörter ist am sichersten?",
        answers: ["Saf45", "se5PmsW", "Sj5Kf23eg", "fT3nPajl98bn3"],
        hint: "Brute-Force-Angriff: Es werden systematisch alle möglichen Kombinationen ausprobiert. Je mehr Stellen das Passwort hat, desto mehr Möglichkeiten muss der Angreifer berücksichtigen.",
        showCorrectAnswer: true,
        correctAnswer: 3,
    },
    {
        question: "Je mehr unterschiedliche Zeichen du verwendest, desto sicherer ist dein Passwort gegen Brute-Force-Angriffe. Dazu gehören Kleinbuchstaben, Großbuchstaben, Zahlen und Sonderzeichen. Welches der Passwörter ist am sichersten?",
        answers: ["Ab1h3zu66", "a4spf(h2", "S#jfO:hPll", "R_9fh!P5Q+d"],
        hint: "Die Verwendung einer Mischung aus verschiedenen Zeichentypen erhöht die Sicherheit erheblich.",
        showCorrectAnswer: true,
        correctAnswer: 3,
    },
];

export default function StartGame() {
    return (
        <div className="flex flex-col max-w-[1100px] p-4 justify-start" style={{height: 'calc(100vh - 150px)', overflowY: 'scroll'}}>
            <div className="hidden lg:flex">
                <InlineNavigation />
            </div>
            <QuizList className="lg:mx-28 lg:my-28 justify-center scale-100 lg:scale-110" quizzes={quizzes}/>
        </div>
    )
}