"use server";

async function createPlayer(username: string, mode: string, gameCode: string) {
  try {
    const response = await fetch("/api/createUser", {
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
    localStorage.setItem("userId", result.userData[0].id);
    localStorage.setItem("gameCode", result.userData[0].gameCode);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create user");
  }
}
