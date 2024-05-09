import ExerciseLink from "@/components/exercise-link";

const exerciseLinksData = [
  { slug: "/space/intro", text: "Intro & Overview", imageSrc: "/intro.png" },
  {
    slug: "/space/passwort",
    text: "Passwort Sicherheit",
    imageSrc: "/passwort.png",
  },
  {
    slug: "/space/privatsphaere",
    text: "Privatsphäre",
    imageSrc: "/privacy.png",
  },
  {
    slug: "/space/daten-verarbeitung",
    text: "Daten Verarbeitung",
    imageSrc: "/data-processing.png",
  },
  {
    slug: "/space/phishing",
    text: "Phishing",
    imageSrc: "/phishing.png",
  },
  {
    slug: "/space/rechte",
    text: "Meine Rechte",
    imageSrc: "/rights.png",
  },
];

export function ExerciseNavigation() {
  return (
    <div className="h-full">
      <h1 className="text-blue-background text-lg md:text-l lg:text-2xl xl:text-4xl max-h-[60px] font-extrabold mb-2 px-6">
        Sicher unterwegs in sozialen Medien
      </h1>
      <div className="flex flex-col h-reduced-40 justify-center overflow-y-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 h-full">
          {exerciseLinksData.map(({ slug, text, imageSrc }, index) => (
            <ExerciseLink
              key={index}
              slug={slug}
              text={text}
              imageSrc={imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
