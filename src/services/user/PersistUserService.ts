import { PersistUserServiceInterface } from "@/services/user/PersistUserServiceInterface";

type Mode = "singlePlayer" | "multiPlayer";

type Achievement = {
  achievementEnum: string;
  isAchieved: boolean;
  userId: string;
};

export class PersistUserService implements PersistUserServiceInterface {
  private userId: string | null = localStorage.getItem("userId");
  private mode: "singlePlayer" | "multiPlayer" | null = localStorage.getItem(
    "mode",
  ) as Mode;
  private gameCode: string | null = localStorage.getItem("gameCode");

  constructor() {
    this.init();
  }

  init() {
    try {
      this.saveUser();
    } catch (e) {
      this.userId = null;
    }
  }

  async saveUser() {
    try {
      if (this.userId === null) {
        return Promise.reject("User not found");
      }

      const response = await fetch("/api/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: this.userId,
          mode: this.mode,
          gameCode: this.gameCode,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }
      return true;
    } catch (e) {
      this.userId = null;
      return false;
    }
  }

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

  async setAchievement(achievementId: string, unlocked: boolean) {
    try {
      const response = await fetch("/api/setAchievement", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: this.userId,
          achievementEnum: achievementId,
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

  async setHighScore(gameId: number, highscore: number) {
    try {
      const response = await fetch("/api/setHighscore", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: this.userId,
          highscore: highscore,
          gameId: gameId,
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

  async getHighScore(gameId: number) {
    try {
      const response = await fetch("/api/getHighScores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: this.userId, gameId: gameId }),
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

  async getAchievement(): Promise<Achievement[] | Achievement> {
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
      return await response.json();
    } catch (error: unknown) {
      console.error(error);
      return {
        achievementEnum: "",
        isAchieved: false,
        userId: "",
      };
    }
  }
}
