import { UserStore } from "@/services/user/UserStore";
import { UserData } from "@/model/UserData";
import Error from "next/error";

export class LocalStorageUserStore implements UserStore {
  async getUser(): Promise<UserData> {
    return Promise.reject("Not implemented");
  }

  async setQuizSolved(quizId: string, solved: boolean) {
    return Promise.reject("Not implemented");
  }

  async setAchievement(achievementId: string, unlocked: boolean) {
    return Promise.reject("Not implemented");
  }
}
