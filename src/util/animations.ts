export const addPointAnimation = (elementId: string) => {
  const scoreElement = document.getElementById(elementId);
  if (scoreElement) {
    scoreElement.classList.add("animate-pointIncrease");
    setTimeout(() => {
      scoreElement.classList.remove("animate-pointIncrease");
    }, 300);
  }
};

export const addShakeAnimation = (elementId: string) => {
  const elementToShake = document.getElementById(elementId);
  if (elementToShake) {
    elementToShake.classList.add("animate-shake");
    setTimeout(() => {
      elementToShake.classList.remove("animate-shake");
    }, 500);
  }
};
