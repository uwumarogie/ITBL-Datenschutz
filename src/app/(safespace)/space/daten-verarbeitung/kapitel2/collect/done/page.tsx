"use client";

import Button from "@/components/button";
import Link from "next/link";
import { PersistUserService } from "@/services/user/PersistUserService";
import { useRouter } from "next/navigation";
import { AchievementId } from "@/util/achievement-data";

export default function DataProcessingChapter2CollectDone() {
  const router = useRouter();

  async function onClick() {
    const context = new PersistUserService();
    await context.setAchievement(
      AchievementId.DATA_PROCESSING_CHECKPOINT_COLLECT,
      true,
    );
    router.push("/space/daten-verarbeitung/overview");
  }
  return (
    <div>
      Chapter done! ... Resüme
      <Button onClick={onClick}>Zur Übersicht</Button>
    </div>
  );
}
