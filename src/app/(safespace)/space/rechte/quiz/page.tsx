"use client";

import QuizList from "@/components/Quiz/quiz-list";
import { QuizParams } from "@/components/Quiz/quiz";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Robot from "@/components/robot/robot";
import Button from "@/components/button";
import { AchievementId } from "@/util/achievement-data";
import { useMessages } from "@/services/notfication/message-provider";
import { PersistUserService } from "@/services/user/PersistUserService";

const quizzes: QuizParams[] = [
  {
    question:
      "Ein Foto von dir bei einem öffentlichen Sportereignis wird in einem lokalen Nachrichtenartikel verwendet, ohne dich um Erlaubnis zu bitten.",
    answers: [
      "Ja, das ist eine Verletzung meiner Rechte, weil das Bild in einem kommerziellen Kontext ohne meine Zustimmung verwendet wurde, obwohl es häufig durch Allgemeine Geschäftsbedingungen (AGB) oder Teilnahmebedingungen bei Veranstaltungen geregelt ist, dass Bilder zu solchen Zwecken genutzt werden dürfen.",
      "Nein, das ist keine Verletzung meiner Rechte, weil das Foto während einer öffentlichen Veranstaltung aufgenommen wurde und für Nachrichtenzwecke verwendet wird, was normalerweise als rechtlich zulässig gilt, insbesondere wenn es sich um eine Berichterstattung von öffentlichem Interesse handelt.",
      "Ja, weil die Nutzung des Bildes ohne explizite Zustimmung auch in Nachrichtenmedien nicht erlaubt ist.",
      "Nein, weil die Aufnahme bei einer Veranstaltung stattfand, die ausdrücklich das Fotografieren erlaubte.",
    ],
    correctAnswer: 1,
    showCorrectAnswer: true,
  },
  {
    question:
      "Du hast in deinem privaten Instagram-Account ein Foto von einer Party gepostet, bei der auch Freunde von dir zu sehen sind. Ein Magazin nimmt das Bild ohne deine Zustimmung und verwendet es für einen Online-Artikel über Jugendpartys.",
    answers: [
      "Ja, das ist eine Verletzung meiner Rechte, weil das Magazin mein Bild ohne Zustimmung verwendet hat, was meine Urheberrechte und die Privatsphäre der abgebildeten Personen verletzt.",
      "Nein, das ist keine Verletzung meiner Rechte, weil das Foto auf einem sozialen Netzwerk geteilt wurde und daher als öffentlich zugänglich gilt.",
      "Ja, weil die Verwendung des Bildes ohne Zustimmung das Recht auf ein Privatleben verletzt.",
      "Nein, weil die Bildrechte nach dem Posten im sozialen Netzwerk nicht mehr ausschließlich beim Urheber liegen.",
    ],
    correctAnswer: 0,
    showCorrectAnswer: true,
  },
  {
    question:
      "Du hattest einen privaten Chatverlauf mit einem Freund auf einer Messenger-App. Später bemerkst du, dass der Freund Screenshots dieses Chats auf einer öffentlichen Social-Media-Plattform geteilt hat.",
    answers: [
      "Ja, das ist eine Verletzung meiner Rechte, weil private Nachrichten ohne Zustimmung des anderen Beteiligten nicht öffentlich geteilt werden dürfen.",
      "Nein, das ist keine Verletzung meiner Rechte, weil der Freund hat das Recht, seine Nachrichten und Kommunikation zu teilen, wie er möchte.",
      "Ja, weil das Teilen von privaten Gesprächen ohne Einwilligung gegen Datenschutzgesetze verstößt.",
      "Nein, weil einmal gesendete Nachrichten im digitalen Raum nicht mehr als privat gelten.",
    ],
    correctAnswer: 0,
    showCorrectAnswer: true,
  },
  {
    question:
      "Hast du das Recht, die Löschung dieser Informationen zu verlangen?",
    answers: [
      "Ja, ich habe das Recht, weil das Recht auf Vergessenwerden ermöglicht es Einzelpersonen, die Löschung persönlicher Daten zu verlangen, wenn diese Daten nicht mehr relevant sind oder ihre Veröffentlichung unangemessen ist.",
      "Nein, ich habe nicht das Recht, weil einmal im Internet veröffentlichte Informationen für immer zugänglich bleiben müssen.",
      "Ja, weil Daten, die das persönliche Ansehen schädigen können, sollten entfernt werden können.",
      "Nein, weil historische Daten von öffentlichem Interesse sind und erhalten bleiben müssen.",
    ],
    correctAnswer: 0,
    showCorrectAnswer: true,
  },
  {
    question:
      "Du findest alte, peinliche Fotos und Beiträge von dir aus deiner Jugendzeit auf einer Suchmaschine. Du möchtest, dass diese Informationen aus den Suchergebnissen entfernt werden.",
    answers: [
      "Ja, sie dürfen das, weil die Schufa das Recht hat, bestimmte Informationen zurückzuhalten, um ihren Dienst zu schützen.",
      "Nein, sie dürfen das nicht, weil jeder Bürger das Recht hat, einmal jährlich eine kostenlose Selbstauskunft zu erhalten, um die über ihn gespeicherten Daten zu überprüfen.",
      "Ja, weil es spezifische gesetzliche Ausnahmen gibt, die Auskünfte in bestimmten Fällen verhindern können.",
      "Nein, weil Transparenz in der Datenverarbeitung grundlegend ist und Zugang zu eigenen Daten nicht verweigert werden darf.",
    ],
    correctAnswer: 1,
    showCorrectAnswer: true,
  },
  {
    question:
      "Du möchtest eine Selbstauskunft bei der Schufa anfordern, um zu sehen, welche Daten über dich gespeichert sind, aber die Schufa verweigert deine Anfrage.",
    answers: [
      "Ja, das ist rechtlich zulässig, weil Webseiten das Recht haben, ihre Interessen zu schützen und ihre Nutzeraktivitäten zu verfolgen.",
      "Nein, das ist nicht rechtlich zulässig, weil die Aktivierung von Cookies basierend auf 'legitimem Interesse' erfordert die aktive Zustimmung der Nutzer und darf nicht standardmäßig aktiviert sein.",
      "Ja, weil Nutzer durch die Nutzung der Webseite implizit zustimmen, dass ihre Daten genutzt werden dürfen.",
      "Nein, weil das EU-Recht eine klare und informierte Zustimmung für das Setzen von Cookies vorschreibt.",
    ],
    correctAnswer: 1,
    showCorrectAnswer: true,
  },
  {
    question:
      "Du hast dich für einen Newsletter eines Online-Shops angemeldet. Später stellst du fest, dass deine persönlichen Daten an Dritte für Marketingzwecke weitergegeben wurden, ohne dass du dem ausdrücklich zugestimmt hast.",
    answers: [
      "Ja, das ist eine Verletzung meiner Rechte, weil die Weitergabe persönlicher Daten an Dritte für Marketingzwecke ohne ausdrückliche Zustimmung des Betroffenen gegen Datenschutzgesetze verstößt.",
      "Nein, das ist keine Verletzung meiner Rechte, weil Unternehmen das Recht haben, Daten ihrer Nutzer für Geschäfts- und Marketingzwecke zu nutzen.",
      "Ja, weil ich niemals einer solchen Nutzung meiner Daten zugestimmt habe und sie deshalb rechtswidrig ist.",
      "Nein, weil bei der Anmeldung zu einem Dienst oft eine Klausel enthalten ist, die eine solche Nutzung erlaubt.",
    ],
    correctAnswer: 0,
    showCorrectAnswer: true,
  },
];

export default function DataProtectionChapter1Quiz() {
  const [moduleFinished, setModuleFinished] = useState(false);
  const messageService = useMessages();
  const router = useRouter();
  return (
    <>
      {moduleFinished ? (
        <div className="flex flex-col items-center text-center gap-6 md:mt-6">
          <span className="text-5xl text-blue-background">Gut gemacht!</span>
          <Robot expression="smiling" />
          <span className="max-w-[600px]">
            Du hast das Modul erfolgreich abgeschlossen!
          </span>
          <Button
            onClick={() => {
              const userService = new PersistUserService();
              userService
                .setAchievement(AchievementId.MEINE_RECHTE_FINISHED, true)
                .then(() => {
                  messageService.showAchievement(
                    AchievementId.MEINE_RECHTE_FINISHED,
                  );
                });
              setTimeout(() => {
                router.push("/space");
              }, 3500);
            }}
          >
            Zurück zur Startseite
          </Button>
        </div>
      ) : (
        <QuizList
          quizzes={quizzes}
          onFinish={() => {
            setModuleFinished(true);
          }}
          achievement={AchievementId.RECHTSANWALT_INPUT}
        />
      )}
    </>
  );
}
