"use client"

import {useEffect, useMemo, useState} from "react";
import {createClient} from "@supabase/supabase-js";
import {useLeaderboardListener, useLeaderboardSender} from "@/services/leaderboard/leaderboard";
import Button from "@/components/button";


export default function RealtimeSupabase() {
  const [visible, setVisible] = useState<"sender" | "listener" | null>(null)


  return <div className="px-8">

    <h1 className="text-3xl font-bold text-blue-background">Realtime test</h1>

    <button className="px-4 py-2 bg-orange-300 m-2" onClick={() => setVisible("sender")}>Sender</button>
    <button className="px-4 py-2 bg-orange-300 m-2" onClick={() => setVisible("listener")}>Listener</button>

    <div>
      {visible == "sender" && <Sender gameCode="10"/>}
      {visible == "listener" && <Listener gameCode="10"/>}

    </div>


  </div>
}

function Sender({gameCode}: {gameCode: string}) {
  const { sendUpdate } = useLeaderboardSender(gameCode)

  const [name, setName] = useState("Aria")
  const [number, setNumber] = useState(0)
  return <div>
    <h1 className="text-3xl font-bold text-blue-background">Sender</h1>
    <select className="p-4 mr-4" onChange={(ev) => setName(ev.target.value)}>
      <option>Aria</option>
      <option>Bernd</option>
      <option>Charlo</option>
    </select>
    <input type="number" className="p-3 border-2" onChange={(ev) => setNumber(ev.target.valueAsNumber)}/>
    <Button onClick={() => sendUpdate(name, number)} >Send</Button>

  </div>
}

function Listener({gameCode}: {gameCode: string}) {
  const [scores, setScores] = useState<{userId: string, score: number}[]>([])
  useLeaderboardListener(gameCode, (payload) => {
    setScores(oldScores => {
      if(!oldScores.find(s => s.userId == payload.userId)) {
        oldScores.push(payload)
      }
      return oldScores.map(({userId, score}) => {
        if(payload.userId == userId)
          return payload
        else
          return {userId, score}
      }).sort((a, b) => b.score - a.score)
    })
  })
  return <div>
    <h1 className="text-3xl font-bold text-blue-background">Leaderboard</h1>
    <div className="flex flex-col">
      {scores.map(({userId, score}) => <p key={userId}>{userId}: {score}</p>)}
    </div>
  </div>
}