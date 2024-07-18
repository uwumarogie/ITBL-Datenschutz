import {useEffect} from "react";
import {createChannel} from "@/services/channel/channel";


export function useLeaderboardSender(
  roomId: string,
) {
  // TODO: Use only room id? Maybe create unique id
  const channel = createChannel("leaderboard-" + roomId)

  async function sendUpdate(
    userId: string,
    score: number
  ) {
    return await channel.send({
      type: "broadcast",
      event: "onUpdateScore",
      payload: { userId, score }
    }).then()
  }

  return { sendUpdate }
}

export function useLeaderboardListener(
  roomId: string,
  onUpdateScore: (data: any) => void,
) {
  useEffect(() => {
    const channel= createChannel("leaderboard-" + roomId)
    channel.on("broadcast", {event: "onUpdateScore"}, ({payload}) => onUpdateScore(payload)).subscribe()
    return () => { channel.unsubscribe().then() }
  }, [roomId, onUpdateScore])

}