export default async function getFeedback(
  situation: string,
  userInput: string,
  solution: string,
): Promise<string> {
  const response = await fetch("/api/getAnswer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ situation, userInput, solution }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch answer");
  }

  return await response.json();
}

export function extractScoreAndReason(str: string) {
  const trimmedStr = str.slice(1, -1);

  const scoreIndex = trimmedStr.indexOf("score:");
  const reasonIndex = trimmedStr.indexOf("reason:");

  const scoreStr = trimmedStr.substring(scoreIndex + 6, reasonIndex).trim();
  const score = parseInt(scoreStr, 10);

  const reasonStr = trimmedStr.substring(reasonIndex + 7).trim();

  return { score, reason: reasonStr };
}
