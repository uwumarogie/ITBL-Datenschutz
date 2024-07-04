"use client";

import Button from "@/components/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const rights = [
  {
    title: "Recht auf Auskunft",
    description:
      "Personen können von Unternehmen verlangen, dass sie Auskunft über die über sie gespeicherten personenbezogenen Daten erhalten. Zum Beispiel kann ein Verbraucher bei einem Online-Händler anfragen, welche persönlichen Informationen der Händler über ihn gespeichert hat.",
  },
  {
    title: "Recht auf Berichtigung",
    description:
      "Betroffene haben das Recht, die Berichtigung unrichtiger Daten, die sie betreffen, zu verlangen. Ein Beispiel hierfür ist, wenn ein Kunde feststellt, dass seine Adresse in den Unterlagen einer Bank fehlerhaft ist und deren Korrektur verlangt.",
  },
  {
    title: "Recht auf Löschung („Recht auf Vergessenwerden“)",
    description:
      "Personen können unter bestimmten Umständen die Löschung ihrer Daten verlangen. Zum Beispiel kann jemand verlangen, dass seine Daten von den Servern eines sozialen Netzwerks gelöscht werden, nachdem er sein Konto dort geschlossen hat.",
  },
  {
    title: "Recht auf Einschränkung der Verarbeitung",
    description:
      "Dieses Recht ermöglicht es Individuen, die Verarbeitung ihrer Daten einzuschränken. Ein Beispiel könnte sein, dass jemand eine Überprüfung der Richtigkeit seiner Daten fordert und in der Zwischenzeit verlangt, dass die weitere Verarbeitung seiner Daten ausgesetzt wird.",
  },
];

export default function RightsIntro() {
  const router = useRouter();
  return (
    <div className="flex flex-col p-3 justify-between h-full">
      <div className="flex flex-col space-y-4 pb-2 max-w-[1100px]">
        <h1 className="text-xl lg:text-3xl text-blue-background pb-2 font-semibold">
          Was ist die DSGVO?
        </h1>
        <span className="text-base lg:text-base sm:text-wrap md:text-wrap text-blue-background">
          Die Datenschutz-Grundverordnung (DSGVO) ist ein Regelwerk der
          Europäischen Union, das zum Ziel hat, die Datenschutzrechte von
          Individuen innerhalb der EU zu stärken und zu vereinheitlichen. Sie
          trat im Mai 2018 in Kraft und gilt für alle Organisationen, die
          personenbezogene Daten von EU-Bürgern verarbeiten, unabhängig davon,
          wo sich die Organisation befindet. Die Verordnung verlangt von
          Unternehmen, die Privatsphäre ihrer Nutzer ernst zu nehmen und
          transparent zu machen, wie personenbezogene Daten gesammelt, verwendet
          und geschützt werden. Bei Verstößen gegen die DSGVO können hohe
          Bußgelder verhängt werden, was die Wichtigkeit eines sorgfältigen
          Umgangs mit personenbezogenen Daten unterstreicht.
        </span>
        <h1 className="text-xl lg:text-3xl text-blue-background pb-2 font-semibold">
          Was sind die wichtigsten Rechte, die ich habe?
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rights.map((right, index) => (
            <RightCard
              description={right.description}
              title={right.title}
              key={index}
            />
          ))}
        </div>
        <span className="text-blue-background">
          Falls du noch mehr wissen willst, kannst du dich{" "}
          <Link
            href="https://www.e-recht24.de/datenschutzgrundverordnung.html"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            hier
          </Link>{" "}
          weiter informieren
        </span>
      </div>
      <Button
        onClick={() => router.push("/space/rechte/dsgvo")}
        className="max-w-[400px] mt-4"
      >
        Weiter
      </Button>
    </div>
  );
}

function RightCard({
  description,
  title,
}: {
  description: string;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-y-2 bg-module-blue rounded-2xl text-blue-background p-4">
      <span className="font-bold text-lg">{title}</span>
      <span>{description}</span>
    </div>
  );
}
