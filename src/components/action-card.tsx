import Image from "next/image";
import Button from "./button";

type ActionCardProps = {
  title: string;
  description: string;
  buttonText: string;
  iconSrc: string;
  primaryColor: string;
  secondaryColor: string;
  titleColor: string;
  onClick: () => void;
};

export function ActionCard({
  title,
  description,
  buttonText,
  iconSrc,
  primaryColor,
  secondaryColor,
  titleColor,
  onClick,
}: ActionCardProps) {
  return (
    <div
      className="min-w-[225px] h-[270px] rounded-xl p-4 scale-95"
      style={{ backgroundColor: primaryColor }}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col relative justify-start items-start ">
          <h3
            className="text-lg pb-2 font-medium"
            style={{ color: titleColor }}
          >
            {title}
          </h3>
          <span
            className="font-light text-sm pb-2"
            style={{ color: secondaryColor }}
          >
            {description}
          </span>
          <Button className="z-50" onClick={onClick}>
            {buttonText}
          </Button>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 right-0 rounded-br-xl"
          width="170"
          height="170"
          viewBox="0 0 179 161"
          fill="none"
        >
          <circle
            opacity="0.5"
            cx="123"
            cy="123"
            r="123"
            fill={secondaryColor}
          />
        </svg>
        <div className="flex justify-end w-full z-50">
          <Image src={iconSrc} alt={title} width={120} height={120} />
        </div>
      </div>
    </div>
  );
}
