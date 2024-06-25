import { HighScoreType } from "@/server/database/schema";

type Achievement = {
  achievementEnum: string;
  isAchieved: boolean;
  userId: string;
};

export class PersistUserService {
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

  async getHighScore(highScoreEnum: HighScoreType) {
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
