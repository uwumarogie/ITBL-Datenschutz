import { AchievementId } from "@/util/achievement-data";
import { HighScoreType, userSchema } from "@/server/database/schema";
import * as z from "zod";

type UserData = z.infer<typeof userSchema>;

export type ReturnAchievement = {
  achievementEnum: string;
  isAchieved: boolean;
  userId: string;
};

export interface PersistUserServiceInterface {
  getUser: () => Promise<UserData | string> | string;

  setAchievement: (
    achievementId: AchievementId,
    unlocked: boolean,
  ) => Promise<boolean>;

  getAchievement: () => Promise<ReturnAchievement[] | ReturnAchievement>;

  setHighScore: (
    highScoreEnum: HighScoreType,
    highScore: number,
  ) => Promise<boolean>;

  getHighScore: (highScoreEnum: HighScoreType) => Promise<number>;
}
