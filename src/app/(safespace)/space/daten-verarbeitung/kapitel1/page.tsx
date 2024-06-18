"use client";

import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { IntroductionText } from "@/components/introduction-text";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Info, SealQuestion } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";
import Task from "@/components/task";

const introductionText = `
Datenverarbeitung bezieht sich auf die Sammlung, Speicherung und Nutzung deiner personenbezogenen Daten. Es ist wichtig zu verstehen, wie und warum deine Daten verarbeitet werden, um deine Privatsphäre zu schützen. 
Aber was bedeutet Datenverarbeitung genau, und welche Maßnahmen kannst du ergreifen, um deine Daten sicher zu halten?
`

export default function DataProcessingChapter1() {
  const router = useRouter();

  const [showQuizButton, setShowQuizButton] = useState(false);

  return (
    <div className="flex flex-col items-start gap-10 overflow-y-auto h-full">
      <div className="flex gap-x-16">
        <IntroductionText
          headline="Datenverarbeitung - Was ist das?"
          text={introductionText}/>
        <div className="max-h-60">
          <Image
            src="/data-processing.png"
            alt="Data Processing"
            width="1000"
            height="1000"
            className="h-full object-contain"
          />
        </div>
      </div>

      <Task>
        Klicke dich durch die verschiedenen Bereiche der Datenverarbeitung. Wenn
        du dich informiert fühlst, drücke auf den Knopf unten, um das Quiz zu
        starten!
      </Task>

      <Tabs className="mb-10">
        <TabList className="flex flex-wrap mb-6 border-b-2">
          <Tab className="cursor-pointer p-4 outline-none  border-b-sky-800">
            1. Sammlung und Speicherung
          </Tab>
          <Tab className="cursor-pointer p-4 outline-none  border-b-sky-800">
            2. Verarbeitung und Datenweitergabe
          </Tab>
          <Tab className="cursor-pointer p-4 outline-none  border-b-sky-800">
            3. Datenschutz und Gesetze
          </Tab>
          <Tab className="cursor-pointer p-4 outline-none  border-b-sky-800">
            4. Sicherheit bei der Datenverarbeitung
          </Tab>
          <Tab className="cursor-pointer p-4 outline-none  border-b-sky-800">
            5. Verantwortungsvoller Umgang mit Daten
          </Tab>
        </TabList>
        <TabPanel className="px-4">
          Datensammlung bezieht sich auf das Erfassen und Sammeln von Informationen über dich und dein Verhalten, meist durch Websites, Apps und Social Media. Diese Daten können beinhalten, was du online suchst, welche Seiten du besuchst und welche Posts du likest. Die gesammelten Daten werden dann gespeichert, entweder lokal auf einem Gerät oder in der Cloud. Cloud-Speicherung bedeutet, dass deine Daten auf Servern im Internet gesichert werden, was praktisch, aber auch risikoreich sein kann, wenn diese Server nicht gut geschützt sind. Es ist wichtig zu wissen, wo und wie deine Daten gespeichert werden, um deren Sicherheit einschätzen zu können.
        </TabPanel>
        <TabPanel className="px-4">
          Datenverarbeitung bedeutet, dass gesammelte Daten analysiert und genutzt werden, um Muster zu erkennen, Entscheidungen zu treffen oder Inhalte anzupassen. Beispielsweise können Social Media-Plattformen deine Daten nutzen, um dir personalisierte Werbung anzuzeigen. Manchmal werden deine Daten auch an Dritte weitergegeben, etwa an Werbefirmen oder Partnerunternehmen, oft ohne dass du es direkt bemerkst. Das birgt Risiken, da du die Kontrolle über deine Daten verlierst. Achte darauf, welche Daten du preisgibst und überprüfe die Datenschutzrichtlinien der Dienste, die du nutzt.
        </TabPanel>
        <TabPanel className="px-4">
          Datenschutz ist der Schutz deiner persönlichen Daten vor Missbrauch und unbefugtem Zugriff. Es gibt verschiedene Gesetze und Regelungen, wie die Datenschutz-Grundverordnung (DSGVO) in der EU, die festlegen, wie Unternehmen deine Daten sammeln, verarbeiten und speichern dürfen. Diese Gesetze geben dir auch bestimmte Rechte, wie das Recht auf Auskunft über gespeicherte Daten oder das Recht auf Löschung dieser Daten. Es ist wichtig, deine Rechte zu kennen und zu wissen, wie du sie einfordern kannst, um deine Privatsphäre zu schützen.
        </TabPanel>
        <TabPanel className="px-4">
          Um deine Daten sicher zu verarbeiten, sind verschiedene Maßnahmen notwendig. Dazu gehören starke Passwörter, regelmäßige Software-Updates und die Nutzung von Verschlüsselungstechnologien. Vermeide einfache Passwörter und nutze stattdessen komplexe Kombinationen aus Buchstaben, Zahlen und Sonderzeichen. Halte deine Software auf dem neuesten Stand, um Sicherheitslücken zu schließen, und verschlüssele sensible Daten, um sie vor unbefugtem Zugriff zu schützen. Diese Maßnahmen helfen dir, deine Daten vor Missbrauch und Diebstahl zu sichern.
        </TabPanel>
        <TabPanel className="px-4">
          Ein verantwortungsvoller Umgang mit Daten bedeutet, bewusst und vorsichtig mit deinen eigenen und den Daten anderer umzugehen. Überlege dir gut, welche Informationen du online teilst und wer darauf zugreifen kann. Achte auf die Datenschutzeinstellungen deiner Social Media-Profile und nutze die Möglichkeiten, die Privatsphäre-Einstellungen zu konfigurieren. Denke daran, dass einmal geteilte Daten schwer zurückzuholen sind. Schütze deine Daten und respektiere auch die Daten anderer, indem du sie nicht unbedacht weitergibst.
        </TabPanel>
      </Tabs>

      {showQuizButton ? (
        <Button
          onClick={() => router.push("/space/daten-verarbeitung/kapitel1/quiz")}
        >
          <SealQuestion className="text-white mr-4" weight="fill" />
          Überprüfe dein Wissen!
        </Button>
      ) : (
        <Button onClick={() => setShowQuizButton(true)} style="secondary">
          Genug informiert?
        </Button>
      )}
    </div>
  );
}
