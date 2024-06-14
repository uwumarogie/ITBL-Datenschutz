export function SinglePlayer({ username }: { username: string }) {
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
