import { UserData } from "@/model/UserData";
import { LocalStorageUserStore } from "@/services/user/LocalStorageUserStore";

let userStore = new LocalStorageUserStore();
export function getUserStore() {
  return userStore;
}

export interface UserStore {
  getUser: () => Promise<UserData>;
  setQuizSolved: (quizId: string, solved: boolean) => Promise<void>;
  setAchievement: (achievementId: string, unlocked: boolean) => Promise<void>;
}
