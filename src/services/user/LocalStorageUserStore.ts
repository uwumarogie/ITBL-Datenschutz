import { UserStore } from "@/services/user/UserStore";
import { UserData } from "@/model/UserData";
import Error from "next/error";

export class LocalStorageUserStore implements UserStore {

  private USER_STORE_KEY = "user"

  private user: UserData | undefined = undefined

  async loadUser(): Promise<UserData | null> {
    const userString = window.localStorage.getItem(this.USER_STORE_KEY)
    if(userString == null) {
      return null
    }

    return JSON.parse(userString)
  }

  async getUser(): Promise<UserData> {
    if(this.user == undefined) {
      return Promise.reject("User not loaded.")
    }
    return this.user;
  }

  async saveUser(): Promise<boolean> {
    window.localStorage.setItem(this.USER_STORE_KEY, JSON.stringify(this.user))
    return true
  }

  async setQuizSolved(quizId: string, solved: boolean) {
    const user = await this.getUser()
    user.quizzes[quizId] = solved
    await this.saveUser()
  }

  async setAchievement(achievementId: string, unlocked: boolean) {
    const user = await this.getUser()
    user.achievements[achievementId] = unlocked
    await this.saveUser();
  }
}
