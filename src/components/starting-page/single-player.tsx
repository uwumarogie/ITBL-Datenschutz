import { useEffect, useState } from "react";
import {
  adjectives,
  animals,
  uniqueNamesGenerator,
} from "unique-names-generator";

export function SinglePlayer() {
  const [username, setUsername] = useState("");

  const generateUsername = () =>
    setUsername(
      uniqueNamesGenerator({
        dictionaries: [adjectives, animals],
        separator: " ",
        style: "capital",
      }),
    );

  useEffect(() => {
    if (!username) {
      generateUsername();
    }
  }, [username]);
  return (
    <div className="space-y-4 rounded-3xl p-4">
      <div className="flex flex-col space-y-4 items-center">
        <label className="flex justify-center text-blue-background text-3xl mb-2">
          Benutzername
        </label>
        <span className="flex flex-col justify-center items-center rounded-xl p-5 bg-white h-14 text-2xl w-full md:w-72">
          {username}
        </span>
      </div>
    </div>
  );
}
