import ExerciseLink from "@/components/ExerciseLink";
import React from "react";

export function ExerciseNavigation() {
  return (
      <div>
      <h1 className="text-blue-background text-4xl font-extrabold">
          Sicher unterwegs in sozialen Medien
      </h1>
    <div className="flex flex-col justify-center">
        <div className="flex flex-row mt-5 space-x-5">
            <ExerciseLink
                slug="/space/intro"
          text="Intro & Overview"
          imageSrc="/intro.png"
        />
        <ExerciseLink
          slug="/space/password"
          text="Passwort Sicherheit"
          imageSrc="/passwort.png"
        />
        <ExerciseLink
          slug="/space/privatsphäre"
          text="Privatsphäre"
          imageSrc="/privacy.png"
        />
      </div>
      <div className="flex flex-row mt-5 space-x-5">
        <ExerciseLink
          slug="/space/daten-verarbeitung"
          text="Daten Verarbeitung"
          imageSrc="/data-processing.png"
        />
        <ExerciseLink
          slug="/space/phishing"
          text="Phishing"
          imageSrc="/phishing.png"
        />
        <ExerciseLink
          slug="/space/rechte"
          text="Meine Rechte"
          imageSrc="/rights.png"
        />
      </div>
    </div>
      </div>
  );
}
