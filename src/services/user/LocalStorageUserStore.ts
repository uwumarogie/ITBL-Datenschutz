import { UserStore } from "@/services/user/UserStore";
import { UserData } from "@/model/UserData";

export class LocalStorageUserStore implements UserStore {
  private USER_STORE_KEY = "user";

  private user: UserData | null = null;

  constructor() {
    this.init();
  }

  private async init() {
    try {
      const userString = window.localStorage.getItem(this.USER_STORE_KEY);
      if (userString) {
        this.user = JSON.parse(userString);
      }
    } catch (e) {
      this.user = null;
    }
  }

  async loadUser(): Promise<UserData | null> {
    return this.user;
  }

  async getUser(): Promise<UserData> {
    if (!this.user) {
      return Promise.reject("User not loaded.");
    }
    return this.user;
  }

  async saveUser(): Promise<boolean> {
    if (!this.user) {
      return Promise.reject(new Error("No user data to save."));
    }
    try {
      window.localStorage.setItem(
        this.USER_STORE_KEY,
        JSON.stringify(this.user),
      );
      return true;
    } catch (e) {
      return false;
    }
  }
  async setQuizSolved(quizId: string, solved: boolean) {
    const user = await this.getUser();
    user.quizzes[quizId] = solved;
    await this.saveUser();
  }

  async setAchievement(achievementId: string, unlocked: boolean) {
    const user = await this.getUser();
    user.achievements[achievementId] = unlocked;
    await this.saveUser();
  }

  async initUser(username: string) {
    if (!this.user) {
      this.user = {
        username: username,
        quizzes: {},
        achievements: {},
      };
      await this.saveUser();
    }
  }
}
