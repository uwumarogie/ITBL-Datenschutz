"use client";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

type MessageType = "info" | "success" | "error";

type Message = {
  id: number;
  message: string;
  type: MessageType;
};

type MessageContextType = {
  messages: Message[];
  addMessage: (message: string, type?: MessageType) => void;
  removeMessage: (id: number) => void;
};

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export const useMessages = (): MessageContextType => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("useMessages must be used within a MessageProvider");
  }
  return context;
};

export const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = useCallback(
    (message: string, type: MessageType = "info") => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now(), message, type },
      ]);
    },
    [],
  );

  const removeMessage = useCallback((id: number) => {
    setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
  }, []);

  return (
    <MessageContext.Provider value={{ messages, addMessage, removeMessage }}>
      {children}
    </MessageContext.Provider>
  );
};
