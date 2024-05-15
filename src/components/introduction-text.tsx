export function IntroductionText({
  headline,
  text,
}: {
  headline: string;
  text: string;
}) {
  return (
    <div className="flex flex-col space-y-2 pb-4 max-w-[700px]">
      <h1 className="text-xl lg:text-3xl text-blue-background pb-2 font-semibold">
        {headline}{" "}
      </h1>
      <span className="text-base lg:text-base sm:text-wrap md:text-wrap text-blue-background">
        {text}
      </span>
    </div>
  );
}
