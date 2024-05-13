import { UserData } from "@/model/UserData";
import { LocalStorageUserStore } from "@/services/user/LocalStorageUserStore";

let userStore = new LocalStorageUserStore();
export function getUserStore() {
  return userStore;
}

export interface UserStore {
  /**
   * Loads the UserData object and caches it on the client.
   * Can be null, if no user has been set up yet or no user could be loaded.
   */
  loadUser: () => Promise<UserData | null>;

  /**
   * Returns the current user. Promise is rejected, if the user has not been
   * loaded successfully. The returned object might not always hold the
   * latest state.
   * @return The user data
   */
  getUser: () => Promise<UserData>;

  /**
   * Saves the user in the implemented user store.
   * Depending on the implementation, saves might have to be performed manually after
   * changing the user data.
   * @return True, if the action was performed successfully.
   */
  saveUser: () => Promise<boolean>;

  setQuizSolved: (quizId: string, solved: boolean) => Promise<void>;
  setAchievement: (achievementId: string, unlocked: boolean) => Promise<void>;
  initUser: (username: string) => Promise<void>;
}
