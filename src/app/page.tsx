"use client";
import Button from "@/components/button";
import { useUserData } from "@/services/user/UserServiceContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  adjectives,
  animals,
  uniqueNamesGenerator,
} from "unique-names-generator";

export default function Home() {
  const router = useRouter();
  const { userStore } = useUserData();
  const [username, setUsername] = useState<string>("");
  const generateUsername = () =>
    setUsername(
      uniqueNamesGenerator({
        dictionaries: [adjectives, animals],
        separator: " ",
        style: "capital",
      }),
    );

  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <span className="text-2xl">{username}</span>
      <div>
        <Button onClick={generateUsername}>Generate username</Button>
        <Button
          onClick={async () => {
            await userStore.initUser(username).then(() => {
              router.push("/space");
            });
          }}
        >
          Save username
        </Button>
      </div>
    </div>
  );
}
