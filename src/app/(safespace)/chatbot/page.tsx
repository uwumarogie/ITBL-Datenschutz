"use client";
import React, { useState } from "react";

export default function Page() {
  return (
    <div className="p-6">
      <Chatbot />
    </div>
  );
}

type Message = {
  text: string;
  user: "user" | "system";
};

function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage: Message = { text: input, user: "user" };
    setMessages([...messages, newMessage]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, newMessage].map((message) => ({
            role: "user",
            content: message.text,
          })),
        }),
      });

      const data = await response.json();
      const botMessage: Message = { text: data.content || "", user: "system" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex p-4">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.user === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`rounded-lg p-4 max-w-xs ${msg.user === "user" ? "bg-blue-600 text-white" : "bg-gray-300 text-black"}`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 bg-white flex border-t border-gray-200">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
