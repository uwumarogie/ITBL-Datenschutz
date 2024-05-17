"use client";
import { useUserData } from "@/services/user/UserServiceContext";
import Button from "@/components/button";

export default function Archievements() {
  const { userData, userStore } = useUserData();
  async function onClick() {
    userData.quizzes["b"] = true;
    await userStore.setQuizSolved("a", !userData.quizzes["a"]);
  }
  return (
    <div className="p-6">
      <h3>Erfolge</h3>
      <h3>Hallo {userData.username}</h3>
      <h3>
        Du hast das Quiz a{" "}
        {userData.quizzes["a"] ? "bestanden" : "noch nicht absolviert"}.
      </h3>
      <Button onClick={onClick}>Solve quiz</Button>
    </div>
  );
}
