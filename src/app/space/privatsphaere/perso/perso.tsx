"use client";
import Button from "@/components/Button";
import Checkbox from "@/components/checkbox";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SetStateAction, useState } from "react";

export type CheckboxData = {
    bottom: number;
    left: number;
    hoverText: string;
    isChecked: boolean;
    isPersonenbezogen: boolean;
};

type Props = {
    checkboxes: CheckboxData[]
    setCheckboxes: (value: SetStateAction<CheckboxData[]>) => void
    imgSrc: string
    hint: string
    title: string
    description: string
    nextPageHref: string
}

export default function PersoComponent({
    checkboxes,
    imgSrc,
    setCheckboxes,
    hint,
    title,
    description,
    nextPageHref
}: Props) {
    const router = useRouter()
    const [showHint, setShowHint] = useState(false);
    const [isCorrect, setIsCorrect] = useState<undefined | boolean>();

    const handleCheckboxChange = (index: number) => {
        setCheckboxes((prevCheckboxes) =>
            prevCheckboxes.map((checkbox, i) =>
                i === index
                    ? { ...checkbox, isChecked: !checkbox.isChecked }
                    : checkbox,
            ),
        );
    };

    const validateInput = () => {
        const correct = checkboxes.every(
            (checkbox) => checkbox.isChecked === checkbox.isPersonenbezogen,
        );
        setIsCorrect(correct)
        if (correct) {
            router.push(nextPageHref)
        }
        //TODO push notification on false
    };

    return (
        <div className="flex flex-col h-full lg:px-6">
            <div>
                <div className="flex flex-col space-y-2 pb-2 max-w-[700px]">
                    <h1 className="text-xl lg:text-3xl text-blue-background font-semibold">
                        {title}
                    </h1>
                    <span className="text-base lg:text-base sm:text-wrap md:text-wrap text-blue-background">
                        {description}
                    </span>
                </div>
                <div className="relative w-full lg:max-w-[40vw]">
                    <Image
                        src={imgSrc}
                        alt="Personalausweis"
                        layout="responsive"
                        width={200}
                        height={200}
                        className="w-full h-auto"
                    />
                    {checkboxes.map(({ bottom, left, hoverText, isChecked }, index) => (
                        <Checkbox
                            key={index}
                            className="absolute"
                            style={{ bottom: `${bottom}%`, left: `${left}%` }}
                            hoverText={hoverText}
                            isChecked={isChecked}
                            index={index}
                            handleCheckboxChanged={() => handleCheckboxChange(index)}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-row">
                <Button className="m-4 w-24 h-11" onClick={validateInput}>
                    Weiter
                </Button>
                <Button className="m-4 w-24 h-11 bg-gray-400 hover:bg-gray-500" onClick={() => setShowHint(!showHint)}>
                    Hilfe
                </Button>
                {/* Replace with push notification */}
                <div
                    className="m-4 items-center text-sm text-red-700"
                    style={{ display: (isCorrect == undefined || isCorrect == true) ? "none" : "flex" }}
                >
                    Versuchs nochmal!
                </div>
            </div>
            <span className="relative left-[0px] bottom-[350px] lg:left-[20px] lg:bottom-[260px] p-4 bg-gray-500 text-white text-md rounded-xl transition-opacity duration-300 z-50 max-w-[450px]"
                style={{ display: showHint ? "block" : "none" }}
            >
                {hint}
            </span>
        </div>
    );
}
