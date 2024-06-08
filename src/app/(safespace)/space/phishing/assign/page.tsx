"use client";
import { useRouter } from "next/navigation";
import InstagramProfile, {
  InstagramProfileData,
} from "@/components/instagram-profile";
import { useState } from "react";
import Button from "@/components/button";
import { HintCard } from "@/components/hint-card";
import clsx from "clsx";
import Image from "next/image";

type Profile = {
  instagramProfile: InstagramProfileData;
  isRealProfile: boolean;
  hint: string;
};

export default function Assign() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [wrongAnmiation, setWrongAnimation] = useState(false);
  const [instructionsRead, setInstructionsRead] = useState(false);
  const [moduleFinished, setModuleFinished] = useState(false);

  const handleRating = (isReal: boolean) => {
    if (profiles[activeIndex].isRealProfile == isReal) {
      if (activeIndex + 1 == profiles.length) {
        setModuleFinished(true);
      }
      setActiveIndex(activeIndex + 1);
    } else {
      setWrongAnimation(true);
      setInterval(() => setWrongAnimation(false), 700);
    }
  };

  return (
    <>
      {moduleFinished ? (
        <div className="flex flex-col items-center text-center gap-6 md:mt-6">
          <span className="text-5xl text-blue-background">Geschafft!</span>
          <span className="max-w-[600px]">
            Du hast das Modul erfolgreich abgeschlossen
          </span>
          <Button onClick={() => router.push("/space/phishing")}>
            Zurück zum Anfang
          </Button>
        </div>
      ) : (
        <>
          {!instructionsRead ? (
            <div className="p-2 flex flex-col items-center gap-4 lg:mt-8 max-w-[700px]">
              <Image
                src="/assign-profiles.png"
                alt="profiles"
                width={250}
                height={250}
                className="w-[120px] h-[120px] md:w-[250px] md:h-[250px]"
              />
              <span className="text-center">
                Jetzt bist du an der Reihe dien Wissen anzuwenden: Du wirst
                jetzt eine Reihe von Profilen gezeigt bekommen, die entweder
                Anzeichen von realen Profilen aufweisen oder aber Hinweise drauf
                enthalten, dass es sich eher um Phishing obzw. Fake-Profile
                handelt. Ordne die Profile in eine der beiden Kategorien
                einordnen.
              </span>
              <Button
                onClick={() => setInstructionsRead(true)}
                className="max-w-[150px] lg:mt-4"
              >
                Starten
              </Button>
            </div>
          ) : (
            <div className="flex flex-row lg:h-[calc(100vh-210px)] flex-wrap gap-2 lg:gap-0 lg:flex-nowrap">
              {profiles.map(
                (profile, index) =>
                  index == activeIndex && (
                    <InstagramProfile
                      profile={profile.instagramProfile}
                      className="max-w-[400px] border-2 border-gray-300 rounded-3xl"
                    />
                  ),
              )}

              <div className="flex flex-col justify-between items-center w-full max-w-[700px] gap-y-4">
                <div className="flex flex-col items-center mt-4 sm:mt-16 gap-y-4 max-w-[80%] text-center">
                  <span className="text-lg md:text-2xl text-blue-background">
                    Wie würdest du{" "}
                    {profiles[activeIndex].instagramProfile.username}{" "}
                    einschätzen?
                  </span>
                  <div className="max-w-[300px]">
                    <Button
                      onClick={() => handleRating(false)}
                      style={
                        wrongAnmiation && profiles[activeIndex].isRealProfile
                          ? "red"
                          : "neutral"
                      }
                      className={clsx(
                        "w-full mb-4",
                        wrongAnmiation &&
                          profiles[activeIndex].isRealProfile &&
                          "animate-shake",
                      )}
                    >
                      eher Fake/Phishing-Profil
                    </Button>
                    <Button
                      onClick={() => handleRating(true)}
                      style={
                        wrongAnmiation && !profiles[activeIndex].isRealProfile
                          ? "red"
                          : "neutral"
                      }
                      className={clsx(
                        "w-full",
                        wrongAnmiation &&
                          !profiles[activeIndex].isRealProfile &&
                          "animate-shake",
                      )}
                    >
                      eher reales Profil
                    </Button>
                  </div>
                </div>
                <div className="w-[250px] h-[200px]">
                  <HintCard
                    text="Brauchst du Hilfe?"
                    buttonText="Tipp anzeigen"
                    hint={
                      <div className="text-blue-background overflow-y-auto h-[130px]">
                        {profiles[activeIndex].hint}
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

const dummyFollowings: string[] = [
  "pirate_princess",
  "captain_cool",
  "anchor_ambition",
  "crew_champion",
  "first_mate",
  "navy_navigator",
  "coast_crew",
  "fisher_folk",
  "angler_advocate",
  "deep_diver",
  "sea_scout",
  "harbor_hero",
  "seaside_saga",
  "beach_breeze",
  "shoreline_saga",
  "sandcastle_queen",
  "driftwood_dream",
  "shell_seeker",
  "surfing_siren",
  "sunset_saga",
  "wave_watcher",
  "tide_tribe",
  "moonlight_mermaid",
  "starlit_surfer",
  "cosmic_coral",
  "galactic_gulf",
  "solar_sea",
  "lunar_lagoon",
  "stellar_shore",
  "planetary_pier",
  "nebula_nook",
  "milkyway_mariner",
  "galaxy_glow",
  "supernova_surfer",
  "blackhole_boat",
  "comet_crew",
  "meteor_mystic",
  "asteroid_adventurer",
  "gravity_guru",
  "orbital_odyssey",
  "space_shuttle",
  "alien_admirer",
  "ufo_unicorn",
  "cosmos_chaser",
  "rocket_rider",
  "starship_saga",
  "spaceman_saga",
  "extraterrestrial_explorer",
  "interstellar_inspiration",
  "stargate_seeker",
  "quasar_quest",
  "wormhole_wanderer",
  "space_traveler",
  "cosmic_conquistador",
  "galaxy_guardian",
  "universe_unicorn",
  "cosmic_celebration",
  "stardust_story",
  "moonbeam_mystic",
  "eclipse_experience",
  "nova_navigator",
  "solar_system_saga",
  "planetary_ponderer",
  "intergalactic_inspiration",
  "cosmic_citizen",
  "stellar_story",
  "cosmic_colony",
  "galactic_gem",
  "universe_uplift",
  "starlight_story",
  "cosmic_community",
  "galaxy_garden",
  "nebula_nurturer",
  "cosmic_cradle",
  "stellar_sunrise",
  "universe_unity",
  "cosmic_culture",
  "galaxy_gratitude",
  "nebula_nest",
  "cosmic_clarity",
  "stellar_shelter",
  "universe_upliftment",
  "cosmic_collaboration",
  "galaxy_galaxy",
  "nebula_nurture",
  "cosmic_calm",
  "stellar_support",
  "universe_unfold",
  "cosmic_courage",
  "galaxy_glory",
  "nebula_nourish",
  "cosmic_compassion",
  "stellar_strong",
  "universe_unite",
  "cosmic_connect",
  "galaxy_glisten",
  "nebula_nurturing",
  "cosmic_comfort",
  "stellar_saga",
  "universe_unbound",
  "cosmic_concord",
  "galaxy_grace",
  "nebula_nurtured",
  "cosmic_cheer",
  "stellar_solidarity",
  "universe_unbridled",
  "cosmic_champion",
  "galaxy_glowup",
  "nebula_nurtures",
  "cosmic_charm",
  "stellar_success",
  "universe_unmask",
  "cosmic_comrade",
  "galaxy_gallant",
  "nebula_nurturer",
  "cosmic_chasm",
  "stellar_survivor",
  "universe_unveil",
];

const profiles: Profile[] = [
  {
    instagramProfile: {
      username: "christiano_ronaldo7",
      profileImageSrc: "/insta-profiles/cr7/1.jpeg",
      followers: 972,
      followingCount: 532,
      following: dummyFollowings,
      description: "professional football player | Al-Nassr",
      posts: [
        {
          imageSrc: "/insta-profiles/cr7/2.jpeg",
          caption: "",
          likedBy: "Gefällt 82 Mal",
        },
        {
          imageSrc: "/insta-profiles/cr7/3.jpeg",
          caption: "",
          likedBy: "Gefällt 101 Mal",
        },
        {
          imageSrc: "/insta-profiles/cr7/4.png",
          caption: "",
          likedBy: "Gefällt 30 Mal",
        },
        {
          imageSrc: "/insta-profiles/cr7/5.jpg",
          caption: "",
          likedBy: "Gefällt 24 Mal",
        },
        {
          imageSrc: "/insta-profiles/cr7/6.jpg",
          caption: "",
          likedBy: "Gefällt 70 Mal",
        },
        {
          imageSrc: "/insta-profiles/cr7/7.jpg",
          caption: "",
          likedBy: "Gefällt 99 Mal",
        },
        {
          imageSrc: "/insta-profiles/cr7/8.png",
          caption: "",
          likedBy: "Gefällt 32 Mal",
        },
        {
          imageSrc: "/insta-profiles/cr7/9.png",
          caption: "",
          likedBy: "Gefällt 31 Mal",
        },
      ],
    },
    isRealProfile: false,
    hint: "Bei diesem Profil ist es recht offensichtlich, dass es sich nicht um den echten Cristiano Ronaldo handelt. Am auffälligsten sind die wenigen Follower",
  },
  {
    instagramProfile: {
      username: "coachhero",
      profileImageSrc: "/insta-profiles/no-profilepic.png",
      followers: 12,
      followingCount: 130,
      following: dummyFollowings,
      description: "http://datingcoach.com/program",
      posts: [],
    },
    isRealProfile: false,
    hint: "Bei diesem Profil ist der Link in der Beschreibung besonders auffällig und ein guter Indikator dafür, dass es sich um ein Phishing Profil handelt",
  },
  {
    instagramProfile: {
      username: "iphone.gewinnspiel",
      profileImageSrc: "/insta-profiles/no-profilepic.png",
      followers: 102,
      followingCount: 365,
      following: dummyFollowings,
      description:
        "!!KEIN FAKE ECHTE HANDYS!! 	Registrieren und Gewinnen: http://iphonegewinnen.de",
      posts: [
        {
          imageSrc: "/insta-profiles/gewinnspiel/1.png",
          caption:
            "!!KEIN FAKE ECHTE HANDYS!! 	Registrieren und Gewinnen: http://iphonegewinnen.de Probiert euer Glück und gewinnt ein neues Iphone 15 (Link) Welche Farbe wollt ihr gewinnen? !Kein fake!",
          likedBy: "Gefällt 32 Mal",
        },
        {
          imageSrc: "/insta-profiles/gewinnspiel/2.jpg",
          caption:
            "!!KEIN FAKE ECHTE HANDYS!! 	Registrieren und Gewinnen: http://iphonegewinnen.de Sei du die nächste! Gewinne ein brandneues Iphone 15 (Link)",
          likedBy: "Gefällt 31 Mal",
        },
      ],
    },
    isRealProfile: false,
    hint: "Bei diesem Profil ist der Link in der Beschreibung besonders auffällig und ein guter Indikator dafür, dass es sich um ein Phishing Profil handelt",
  },
];
