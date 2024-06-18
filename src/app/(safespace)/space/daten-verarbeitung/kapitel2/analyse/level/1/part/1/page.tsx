"use client"

import RecommendationQuiz
  from "@/app/(safespace)/space/daten-verarbeitung/kapitel2/level/components/recommendation-quiz";

const items = [
  {text: "Hey"},
  {text: "Du"},
  {text: "Da", isSuccessful: true},
  {text: "Im"},
  {text: "Radio"},
]

function Item(item: any, onClick: (item: any) => void) {
  return <div className="bg-blue-100 px-6 py-4 rounded-xl cursor-pointer" key={item.text} onClick={() => onClick(item)}>
    <span>{item.text}</span>
  </div>
}

const robotText = "Welche Werbeanzeige könnte Marie am besten gefallen?"
const href = ""

export default function DataProcessingPart1() {
  return <RecommendationQuiz items={items} renderItem={Item} href={href} robotTextQuestion={robotText}/>
}