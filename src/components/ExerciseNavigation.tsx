import ExerciseLink from "@/components/ExerciseLink";

const exerciseLinksData = [
  { slug: "/space/intro", text: "Intro & Overview", imageSrc: "/intro.png" },
  {
    slug: "/space/password",
    text: "Passwort Sicherheit",
    imageSrc: "/passwort.png",
  },
  {
    slug: "/space/privatsphäre",
    text: "Privatsphäre",
    imageSrc: "/privacy.png",
  },
  {
    slug: "/space/daten-verarbeitung",
    text: "Daten Verarbeitung",
    imageSrc: "/data-processing.png",
  },
  { slug: "/space/phishing", text: "Phishing", imageSrc: "/phishing.png" },
  { slug: "/space/rechte", text: "Meine Rechte", imageSrc: "/rights.png" },
];

export function ExerciseNavigation() {
  return (
    <>
      <h1 className="text-blue-background text-4xl font-extrabold mt-2">
        Sicher unterwegs in sozialen Medien
      </h1>
      <div className="flex flex-col justify-center">
        <div className="flex flex-row mt-5 space-x-5">
          {exerciseLinksData
            .slice(0, 3)
            .map(({ slug, text, imageSrc }, index) => (
              <div key={index} className="flex flex-row space-x-5">
                <ExerciseLink slug={slug} text={text} imageSrc={imageSrc} />
              </div>
            ))}
        </div>
        <div className="flex flex-row mt-5 space-x-5">
          {exerciseLinksData.slice(3).map(({ slug, text, imageSrc }, index) => (
            <ExerciseLink
              key={index}
              slug={slug}
              text={text}
              imageSrc={imageSrc}
            />
          ))}
        </div>
      </div>
    </>
  );
}
