import { HighScoreType } from "@/server/database/schema";
import { UserDataAchievement, UserService } from "@/services/user/UserService";

export class PersistUserService implements UserService {
  public userId: string | null =
    typeof window !== "undefined" && window.localStorage
      ? localStorage.getItem("userId")
      : null;

  constructor() {}

  async getUser() {
    if (this.userId === null) {
      return Promise.reject("User not found.");
    }
    const response = await fetch("/api/getUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: this.userId }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    return await response.json();
  }

  async isLoggedIn() {
    return Promise.resolve(
      typeof window !== "undefined" &&
        window.localStorage &&
        localStorage.getItem("userId") != null,
    );
  }

  async deleteUser() {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem("gameCode");
      localStorage.removeItem("userId");
    }
  }

  async createPlayer(username: string, mode: string, gameCode: string) {
    try {
      const response = await fetch("/api/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, mode, gameCode }),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }
      const result = await response.json();

      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("userId", result.userData[0].id);
      }

      if (
        gameCode !== "" &&
        typeof window !== "undefined" &&
        window.localStorage
      ) {
        localStorage.setItem("gameCode", result.userData[0].gameCode);
      }
    } catch (error) {
      console.error(error);
      throw new Error("Failed to create user");
    }
  }

  async setAchievement(achievement: string, unlocked: boolean) {
    try {
      const response = await fetch("/api/setAchievement", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: this.userId,
          achievementEnum: achievement,
          unlocked: unlocked,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to set achievement");
      }
      return true;
    } catch (error: unknown) {
      console.error(error);
      return false;
    }
  }

  async setHighScore(highScoreEnum: HighScoreType, highScore: number) {
    try {
      const response = await fetch("/api/setHighScore", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: this.userId,
          highScore: highScore,
          highScoreEnum: highScoreEnum,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to set highscore");
      }

      if (!response.ok) {
        throw new Error("Failed to set highscore");
      }
      return true;
    } catch (error: unknown) {
      console.error(error);
      return false;
    }
  }

  async getHighScore(highScoreEnum: HighScoreType): Promise<any> {
    try {
      const response = await fetch("/api/getHighScores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: this.userId,
          highScoreEnum: highScoreEnum,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to get highscores");
      }
      return await response.json();
    } catch (error: unknown) {
      console.error(error);
      return false;
    }
  }

  async getAchievement(): Promise<UserDataAchievement[]> {
    try {
      const response = await fetch("/api/getAchievement", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: this.userId }),
      });
      if (!response.ok) {
        throw new Error("Failed to get achievement");
      }
      const data = await response.json();
      return Array.isArray(data) ? data : [data];
    } catch (error: unknown) {
      console.error(error);
      return [];
    }
  }
}
