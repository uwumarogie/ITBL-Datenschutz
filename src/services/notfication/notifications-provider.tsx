"use client";
import { useMessages } from "@/services/notfication/message-provider";
import Notification from "@/components/notification";
import { ReactNode } from "react";

export default function NotificationsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { messages, removeMessage } = useMessages();

  return (
    <>
      <div
        className="absolute flex flex-col gap-y-2"
        style={{ top: 15, right: 15, maxHeight: "95vh", overflow: "hidden" }}
      >
        {messages.map((msg) => (
          <Notification
            key={msg.id}
            id={msg.id}
            message={msg.message}
            type={msg.type}
            removeMessage={removeMessage}
          />
        ))}
      </div>
      {children}
    </>
  );
}
