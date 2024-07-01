"use client";

import { ExerciseNavigation } from "@/components/exercise-navigation";
import React, { useEffect, useState } from "react";
import RobotIntroduction from "@/components/robot-introduction";
import { AchievementId } from "@/util/achievement-data";
import { PersistUserService } from "@/services/user/PersistUserService";

export default function Page() {
  const [showRobotIntroduction, setShowRobotIntroduction] = useState(false);

  useEffect(() => {
    const userService = new PersistUserService();

    userService.getAchievement().then((data) => {
      const achievements = Array.isArray(data) ? data : [data];
      const introFinished =
        achievements.find(
          (a) => a.achievementEnum == AchievementId.INTRO_FINISHED,
        ) != null;

      console.log(introFinished);

      if (!introFinished) {
        console.log("Start intro");
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
