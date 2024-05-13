import Image from "next/image";
import Button from "./button";

type ActionCardProps = {
  title: string;
  description: string;
  buttonText: string;
  iconSrc: string;
  primaryColor: string;
  secondaryColor: string;
  onClick: () => void;
};

export function ActionCard({
  title,
  description,
  buttonText,
  iconSrc,
  primaryColor,
  secondaryColor,
  onClick,
}: ActionCardProps) {
  return (
    <div
      className="flex flex-col relative justify-start items-start space-y-2 min-w-[225px] h-[270px] rounded-xl mx-auto p-4 scale-95 mb-6"
      style={{ backgroundColor: primaryColor }}
    >
      <h3 className="text-white text-lg">{title}</h3>
      <span className="font-light text-sm opacity-35 text-white">
        {description}
      </span>
      <Button className="z-50" onClick={onClick}>
        {buttonText}
      </Button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 right-0 rounded-br-xl"
        width="170"
        height="170"
        viewBox="0 0 179 161"
        fill="none"
      >
        <circle opacity="0.5" cx="123" cy="123" r="123" fill={secondaryColor} />
      </svg>
      <Image
        src={iconSrc}
        alt={title}
        width={130}
        height={130}
        className="absolute translate-x-[55%] translate-y-[85%]"
      />
    </div>
  );
}
