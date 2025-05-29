"use client";

import { ExerciseNavigation } from "@/components/exercise-navigation";
import React, { useEffect, useState } from "react";
import RobotIntroduction from "@/components/robot-introduction";
import { AchievementId } from "@/util/achievement-data";
import { getUserService } from "@/services/user/UserService";

export default function Page() {
  const [showRobotIntroduction, setShowRobotIntroduction] = useState(false);

  useEffect(() => {
    const userService = getUserService();

    userService.getAchievement().then((data) => {
      const achievements = Array.isArray(data) ? data : [data];
      const introFinished =
        achievements.find(
          (a) => a.achievementEnum == AchievementId.INTRO_FINISHED,
        ) != null;
      if (!introFinished) {
        setShowRobotIntroduction(true);
      }
    });
  }, []);

  return (
    <div className="h-full relative">
      <ExerciseNavigation />
      <RobotIntroduction
        visible={showRobotIntroduction}
        onClose={() => setShowRobotIntroduction(false)}
      />
    </div>
  );
}
