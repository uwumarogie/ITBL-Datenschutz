export interface UserData {
  username: string;
  quizzes: {
    [quizId: string]: boolean;
  };
  achievements: {
    [achievementId: number]: boolean;
  };
  highscores: {
    [gameId: number]: number
  }
}
