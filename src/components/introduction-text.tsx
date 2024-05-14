export function IntroductionText({
  headline,
  text,
}: {
  headline: string;
  text: string;
}) {
  return (
    <div className="flex justify-center items-start flex-col space-y-2 pb-4  max-w-[700px]">
      <h1 className="text-2xl lg:text-4xl text-blue-background pb-2">
        {headline}{" "}
      </h1>
      <span className="text-base lg:text-base sm:text-wrap md:text-wrap">
        {text}
      </span>
    </div>
  );
}
