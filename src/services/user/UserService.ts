import {PersistUserService} from "@/services/user/PersistUserService";
import {HighScoreType} from "@/server/database/schema";
import {LocalUserService} from "@/services/user/LocalUserService";

export type UserDataAchievement = {
  achievementEnum: string;
  isAchieved: boolean;
  userId: string;
};

export type User = {
  userName: string
}

export function getUserService(): UserService {
  return new LocalUserService()
}

export interface UserService {

  createPlayer(username: string, mode: string, gameCode: string): Promise<void>;

  getUser(): Promise<User> ;

  isLoggedIn(): Promise<boolean>;

  setAchievement(achievement: string, unlocked: boolean): Promise<boolean>;

  setHighScore(highScoreEnum: HighScoreType, highScore: number): Promise<boolean>

  getHighScore(highScoreEnum: HighScoreType): Promise<any>

  getAchievement(): Promise<UserDataAchievement[]>
}
