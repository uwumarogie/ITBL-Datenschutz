import { AchievementId } from "@/util/achievement-data";
import { userSchema } from "@/server/database/schema";
import * as z from "zod";
import { PersistUserService } from "@/services/user/PersistUserService";

type UserData = z.infer<typeof userSchema>;

export type ReturnAchievement = {
  achievementEnum: string;
  isAchieved: boolean;
  userId: string;
};

export function createDefaultUserService() {
  return new PersistUserService();
}

export interface PersistUserServiceInterface {
  /**
   * Returns the current user. Promise is rejected, if the user has not been
   * loaded successfully. The returned object might not always hold the
   * latest state.
   * @return The user data
   */
  getUser: () => Promise<UserData | string> | string;

  /**
   * Saves the user in the implemented user store.
   * Depending on the implementation, saves might have to be performed manually after
   * changing the user data.
   * @return True, if the action was performed successfully.
   */
  saveUser: () => Promise<boolean>;

  setAchievement: (
    achievementId: AchievementId,
    unlocked: boolean,
  ) => Promise<boolean>;

  getAchievement: () => Promise<ReturnAchievement[] | ReturnAchievement>;

  setHighScore: (gameId: number, highscore: number) => Promise<boolean>;

  getHighScore: (gameId: number) => Promise<number>;
}
