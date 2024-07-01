import React from "react";

export function Score({ score }: { score: number | undefined }) {
  if (score === undefined) {
    return <div>No answer yet</div>;
  }
  const totalStars = 10;
  const filledStars = Math.min(score, totalStars);
  const emptyStars = totalStars - filledStars;

  const getStars = (count: number, color: string) => {
    return Array.from({ length: count }, (_, index) => (
      <StarIcon key={index} className={`w-5 h-5 ${color} scale-150`} />
    ));
  };

  return (
    <div className="flex items-center gap-2">
      {getStars(filledStars, "fill-yellow-500")}
      {getStars(emptyStars, "fill-gray-300")}
    </div>
  );
}

function StarIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
