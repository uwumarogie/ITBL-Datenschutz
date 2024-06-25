"use client";

import InstagramProfile, {
  InstagramProfileData,
} from "@/components/instagram-profile";
import Robot from "@/components/robot/robot";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/button";
import clsx from "clsx";
import Task from "@/components/task";
import ProfileAnalysis from "@/app/(safespace)/space/daten-verarbeitung/kapitel2/level/components/profile-analysis";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Image from "next/image";
import {
  BookmarkSimple,
  ChatCircle,
  Heart,
  Hourglass,
  PaperPlaneRight,
  PaperPlaneTilt,
  ThumbsDown,
} from "@phosphor-icons/react";

const profile: InstagramProfileData = {
  username: "marie_magic1995",
  profileImageSrc: "/posts/profile_marie.png",
  followers: 97,
  followingCount: 189,
  description: "MUC\n17 yo",
  posts: [
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0614.JPG",
      caption:
        "Die neusten Nike WMNS  AIR JORDAN 1 MID 365 in lila, weiß, schwarz sind verfügbar. Ich könnte auf Wunsch welche in unserem Store zurücklegen.",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0605.JPG",
      caption: "Schon wieder eine Gruppenarbeit",
      location: "Franz von Miller Gymnasium München",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0459.jpg",
      caption:
        "Wir, wenn der Matheunterricht entfällt. @Michael, @Sarah, @Lena, @Lukas, @Livia",
      likedBy: "Michael, Sarah und 3 weiteren",
      location: "Cafe Kaffee",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0401.JPG",
      caption:
        "Auch, wenn wir uns immer wieder mal streiten habe ich dich ganz doll lieb, Lea. Ich bin stolz deine große Schwester sein zu dürfen.",
      likedBy: "Lea",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0608.JPG",
      caption: "Schreibe gleich eine Mathe Klausur, wünscht mir Glück!",
      location: "Franz von Miller Gymnasium München",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0613.JPG",
      caption: "Mein neuer Ferienjob im Schuhstore. Kommt vorbei!",
      location: "SneakON - München",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0610.JPG",
      caption: "NEUES FAMILIENMITGLIED!!",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0612.JPG",
      caption: "Ohne meinem Kaffee kann ich nicht lernen.",
      likedBy: "Justus und Mara",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0602.JPG",
      caption: "Bester Tag in meinem Leben #BilliEilish #Konzert2023 #Dortmund",
      location: "Dortmund",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0601.JPG",
      caption:
        "Omg, ihr neues Album ist draußen! Ich feier das Lied “Everything I wanted“",
      song: "Everything I wanted - Billie Eilish",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0609.JPG",
      caption: "Ich hoffe das viele Lernen lohnt sich...",
      location: "Franz von Miller Gymnasium München",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0460.JPG",
      caption: "Lieblingscafe Tante Emma",
      location: "Cafe Kaffee",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0603.JPG",
      caption: "Auf dem Weg zur Schule Billie Eilish zu hören ist Therapie.",
      song: "BIRDS OF A FEATHER - Billie Eilish",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0617.JPG",
      caption: "Meinung zu meinen neuen Schuhen?",
    },
  ],
};

const terms =  [
  // Level 1
  "Marie",
  "Frau",
  "Mädchen",
  "Weiblich",
  "München",
  "MUC",
  "17",
  "17 Jahre",
  "Hund",
  "Schwester Lea",
  "Schüler",
  "Schülerin",
  "Schule",
  "12.Klasse",
  "Gruppenarbeit",
  "Billie Eilish",
  "Fan",
  "Musik",
  "Konzert",
  "Dortmund",
  "Ferienjob",
  "Sneaker",
  "Kaffee",
  "Freunde",
  "Michael",
  "Sarah",
  "Lena",
  "Lukas",
  "Livia",
  "Lieblingscafé",
  "Tante Emma",
  // Level 2
  "Urlaub",
  "Bali",
  "Reisen",
  "See",
  "Deko",
  "Haushalt",
  "Einrichtung",
  "Spongebob",
  "Meme",
  "Schule",
  "Fächer",
  "Politik",
  "Schulfächer",
  "Universität",
  "Technik",
  "Backen",
  "Süßigkeiten",
  "Handwerk",
  "Tiere",
  "Vögel",
  "Niedlich",
  "Ferien",
  "Abenteuer",
  "Strand",
  "Dekoration",
  "Haushaltstipps",
  "Möbel",
  "SpongeBob Schwammkopf",
  "Witz",
  "Unterricht",
  "Themen",
  "Regierung",
  "Unterrichtsfächer",
  "Hochschule",
  "Technologie",
  "Kuchen",
  "Bonbons",
  "Heimwerken",
  "Haustiere",
  "Papageien",
  "Kawaii",
  "Erholung",
  "Tourismus",
  "Seeufer",
  "Wohnaccessoires",
  "Küchenhelfer",
  "Wohnraumgestaltung",
  "Cartoon",
  "GIF",
  "Bildungswesen",
  "Studienfächer",
  "Wahl",
  "Bildung",
  "Uni",
  "Innovation",
  "Plätzchen",
  "Nascherei",
  "DIY",
  "Wildtiere",
  "Singvögel",
  "Süß",
  "Freizeit",
  "Exkursion",
  "Gewässer",
  "Basteln",
  "Alltagshelfer",
  "Dekor",
  "Zeichentrick",
  "Scherz",
  "Schulbildung",
  "Studienrichtungen",
  "Bundespolitik",
  "Kurse",
  "Campus",
  "Erfindung",
  "Gebäck",
  "Leckereien",
  "Handarbeit",
  "Fauna",
  "Ornithologie",
  "Herzallerliebst",
  "Urlaubsort",
  "Fernreisen",
  "Badesee",
  "Raumgestaltung",
  "Putzmittel",
  "Wohnideen",
  "Nickelodeon",
  "Internetphänomen",
  "Lehrplan",
  "Spezialgebiete",
  "Wahlkampf",
  "Wissensgebiete",
  "Akademie",
  "Gadgets",
  "Konditorei",
  "Süßwaren",
  "Bastelarbeit",
  "Tierschutz",
  "Vogelfutter",
  "Niedlichkeit",
  "Ausflug",
  "Reiseziele",
  "Badestrand",
  "Interieur",
  "Haushaltswaren",
  "Wohnungseinrichtung",
  "Comicfigur",
  "Online-Meme",
  "Schulfächer",
  "Regierungen",
  "Unterrichtsfächer",
  "Fachhochschule",
  "IT",
  "Konditorenhandwerk",
  "Zuckerwaren",
  "Heimwerkerprojekte",
  "Zootiere",
  "Vögelarten",
  "Babytiere"
]

const historyPost: HistoryPost[] = [
  {
    src: "/datenverarbeitung/collect/level1/post-history/post_history1.jpg",
    caption: "Baliurlaub",
    like: true,
    time: "65 Sekunden",
    tags: ["Urlaub", "Reisen", "See"],
    date: "gerade eben",
  },
  {
    src: "/datenverarbeitung/collect/level1/post-history/post_history_dislike4.jpg",
    caption: "Nachrichtenbeitrag - Ukraine",
    date: "gestern",
    time: "4 Sekunden",
    tags: ["Nachrichten", "Ukraine", "Bürgergeld", "Sozialstaat"],
  },
  {
    src: "/datenverarbeitung/collect/level1/post-history/post_history_dislike5.jpg",
    caption: "Geschirr - Deko",
    tags: ["Deko", "Haushalt", "Einrichtung"],
  },
  {
    src: "/datenverarbeitung/collect/level1/post-history/post_history_dislike2.jpg",
    caption: "Deutschrap Brandneu - Playlist",
    time: "1 Sekunde",
    tags: ["Musik", "Deutschrap", "Rap"],
  },
  {
    src: "/datenverarbeitung/collect/level1/post-history/post_history3.jpg",
    caption: "Meme",
    date: "vor vier Tagen",
    comment: 'Kommentiert mit "@Lukas, du 😂"',
    tags: ["Spongebob", "Meme"],
  },
  {
    src: "/datenverarbeitung/collect/level1/post-history/post_history4.jpg",
    caption: "Schule - Kritik",
    save: true,
    tags: ["Schule", "Fächer", "Politik"],
  },
  {
    src: "/datenverarbeitung/collect/level1/post-history/post_history2.jpg",
    caption: "Technische Universität München",
    send: "An @Tanja",
    tags: ["Universität", "Technik"],
  },
  {
    src: "/datenverarbeitung/collect/level1/post-history/post_history6.jpg",
    caption: "Gebäck",
    like: true,
    time: "63 Sekunden",
    tags: ["Backen", "Süßigkeiten", "Handwerk"],
  },
  {
    src: "/datenverarbeitung/collect/level1/post-history/post_history_dislike1.jpg",
    caption: "Fußball EM 2024",
    dislike: true,
    tags: ["Fußball", "EM", "Österreich", "Frankreich"],
  },
  {
    src: "/datenverarbeitung/collect/level1/post-history/post_history_dislike6.jpg",
    caption: "Supermärkte",
    dislike: true,
    time: "2 Sekunden",
    tags: ["Markt", "Einkaufen", "Lebensmittel", "Gründung", "Lokal"],
  },
  {
    src: "/datenverarbeitung/collect/level1/post-history/post_history5.jpg",
    caption: "Vögel - Tiere",
    like: true,
    date: "vor 1 Stunde",
    tags: ["Tiere", "Vögel", "Niedlich"],
  },
  {
    src: "/datenverarbeitung/collect/level1/post-history/post_history_dislike3.jpg",
    caption: "Buchvorstellung",
    tags: ["Literatur", "Bücher", "Kinder"],
  },
];

const robotText =
  "Hier siehst du wieder Maries Profil. Zusätzlich habe ich dir Maries zuletzt gesehene Posts hinzugefüht. Klicke dafür auf den \"Verlauf\"-Tab. Wieder die gleiche Aufgabe: Sammle mindestens 15 Aspekte, die Maries Profil beschreiben.";
const task =
  "Untersuche Maries Profil und Verlauf und finde 15 Eigenschaften und Aspekte, die Marie interessant finden könnte. Beziehe dich v.a. auf den Verlauf.";

export default function DataProcessing1() {
  return (
    <ProfileAnalysis
      profile={profile}
      robotText={robotText}
      task={task}
      terms={terms}
      minFoundTerms={15}
      hint="Was kannst du aus dem Postverlauf lesen? Mit wem interagiert Marie? Welche Verbindungen gibt es zu anderen Profilen? Versuche einen Schritt weiter zu denken und verbindungen herzustellen."
      href="/space/daten-verarbeitung/kapitel2/collect/level/1/part/2"
    >
      <Tabs className="h-full flex flex-col">
        <TabList className="flex border-b-2 flex-shrink-0">
          <Tab className="cursor-pointer p-4 text-center outline-none w-full border-b-sky-800">
            Profil
          </Tab>
          <Tab className="cursor-pointer p-4 text-center outline-none w-full border-b-sky-800">
            Verlauf
          </Tab>
        </TabList>

        <TabPanel className="overflow-y-auto">
          <InstagramProfile profile={profile} className="w-full" />
        </TabPanel>
        <TabPanel className="overflow-y-auto">
          <span className="m-4 block italic opacity-50">
            Diese Posts wurden Marie zuletzt angezeigt.
          </span>
          <PostHistory posts={historyPost} />
        </TabPanel>
      </Tabs>
    </ProfileAnalysis>
  );
}

type HistoryPost = {
  src: string;
  caption: string;
  like?: boolean;
  save?: boolean;
  send?: string;
  dislike?: boolean;
  time?: string;
  comment?: string;
  tags?: string[];
  date?: string;
};

function PostHistory({ posts }: { posts: HistoryPost[] }) {
  return (
    <div className="flex flex-col h-full">
      {posts.map((post) => (
        <PostHistoryPost key={post.src} {...post} />
      ))}
    </div>
  );
}

function PostHistoryPost({
  src,
  caption,
  like,
  save,
  send,
  dislike,
  time,
  comment,
  tags,
  date,
}: HistoryPost) {
  return (
    <div className="flex p-4 items-center">
      <Image
        src={src}
        alt={caption}
        width="200"
        height="200"
        className="flex-shrink-0 w-20 h-20 object-cover object-center bg-gray-100 rounded-xl"
      />
      <div className="flex flex-col ml-6 w-full">
        <span className="font-semibold text-xl">
          {caption}
          <span className="text-sm font-thin ml-2 opacity-50">{date}</span>
        </span>
        {time && (
          <span className="flex items-center gap-2">
            <Hourglass weight="fill" className="opacity-40" />
            {time} betrachtet
          </span>
        )}
        {comment && (
          <span className="flex items-center gap-2">
            <ChatCircle weight="fill" className="opacity-40" />
            {comment}
          </span>
        )}
        {send && (
          <span className="flex items-center gap-2">
            <PaperPlaneTilt weight="fill" className="opacity-40" />
            {send}
          </span>
        )}
        <span className="flex flex-wrap gap-1 mt-1">
          {tags &&
            tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center py-1 px-2 rounded-full bg-blue-50 text-xs text-blue-900"
              >
                #{tag}
              </span>
            ))}
        </span>
      </div>
      <div className="mr-2 ml-6 flex-shrink-0">
        {like && <Heart weight="fill" className="h-8 w-8" color="red" />}
        {save && <BookmarkSimple className="h-8 w-8" />}
        {dislike && <ThumbsDown className="h-8 w-8" />}
      </div>
    </div>
  );
}
