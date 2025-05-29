"use client";

import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { AchievementId } from "@/util/achievement-data";
import { getUserService } from "@/services/user/UserService";

export default function DataProcessingChapter2CollectDone() {
  const router = useRouter();

  async function onClick() {
    const context = getUserService();
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
