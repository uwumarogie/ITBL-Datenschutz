"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

type NotificationProps = {
  id: number;
  message: string;
  type: "info" | "success" | "error";
  removeMessage: (id: number) => void;
};

export default function Notification({
  id,
  message,
  type,
  removeMessage,
}: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        removeMessage(id);
      }, 500); // Delay to allow slide-out animation to complete
    }, 4500); // Show notification for 4.5 seconds

    return () => clearTimeout(timer);
  }, [id, removeMessage]);

  return (
    <div
      className={`rounded-lg opacity-[96%] z-50 ${isVisible ? "animate-slideIn" : "animate-slideOut"}`}
      style={{
        background:
          type === "info"
            ? "#2A6F97"
            : type === "success"
              ? "rgb(34 197 94)"
              : "rgb(239 68 68)",
      }}
    >
      <div className="flex">
        <span className="px-6 py-2 text-white max-w-[250px]">{message}</span>
        <div className="m-1">
          <Image
            src="/cancel-white.svg"
            alt="delete"
            width={20}
            height={20}
            onClick={() => setIsVisible(false)}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
