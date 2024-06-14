export function Multiplayer({
  username,
  setGameCode,
}: {
  username: string;
  setGameCode: (gameCode: string) => void;
}) {
  return (
    <div className="space-y-4 rounded-3xl p-2">
      <div className="flex space-x-5 justify-center">
        <div className="space-y-4 rounded-3xl p-2">
          <div className="flex flex-col items-center">
            <label className="text-2xl mb-2 text-blue-background">
              Benutzername
            </label>
            <span className="flex flex-col justify-center items-center rounded-xl p-5 bg-white h-7 md:w-72">
              {username}
            </span>
          </div>
        </div>
        <div className="space-y-4 rounded-3xl p-2">
          <div className="flex flex-col items-center">
            <label className="text-2xl mb-2 text-blue-background">Code</label>
            <input
              type="text"
              id="username"
              className="rounded-xl p-5 h-7 md:w-72"
              placeholder="Gib einen Code ein"
              onChange={(e) => setGameCode(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
