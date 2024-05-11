export interface UserData {
  username: string;
  quizzes: {
    [quizId: string]: boolean;
  };
  achievements: {
    [achievementId: string]: boolean;
  };
}
