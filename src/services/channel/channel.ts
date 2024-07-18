import {useMemo} from "react";
import {createClient} from "@supabase/supabase-js";
import {RealtimeChannel} from "@supabase/realtime-js";


const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY ?? "";

const client = createClient(SUPABASE_URL, SUPABASE_KEY)

export function createChannel(room: string): RealtimeChannel {
  return client.channel(room)
}