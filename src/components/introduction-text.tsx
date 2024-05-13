export function IntroductionText({
  headline,
  text,
}: {
  headline: string;
  text: string;
}) {
  return (
    <div className="flex justify-center items-center flex-col space-y-2">
      <h1 className="text-2xl lg:text-4xl text-blue-background">{headline} </h1>
      <span className="text-base lg:text-base sm:text-wrap md:text-wrap lg:text-center">
        {text}
      </span>
    </div>
  );
}
