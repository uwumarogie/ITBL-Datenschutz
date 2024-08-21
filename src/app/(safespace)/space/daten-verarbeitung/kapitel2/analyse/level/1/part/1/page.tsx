"use client";

import RecommendationQuiz from "@/app/(safespace)/space/daten-verarbeitung/kapitel2/components/recommendation-quiz";
import Image from "next/image";
import {useMemo, useState} from "react";
import Task from "@/components/task";
import Button from "@/components/button";
import clsx from "clsx";
import { useMessages } from "@/services/notfication/message-provider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PersistUserService } from "@/services/user/PersistUserService";
import { AchievementId } from "@/util/achievement-data";
import { CheckCircle, Info } from "@phosphor-icons/react";
import TagList from "@/app/(safespace)/space/daten-verarbeitung/kapitel2/analyse/components/tag-list";
import {useTranslations} from "next-intl";

type Item = {
  img: string;
  text: string;
  attributes: string[];
  isSuccessful?: boolean;
};

function useItems(): Item[]  {
  const t = useTranslations("datenverarbeitung.analyse.level.1.part.1.ads")
  return useMemo(() => {
    return [
      {
        img: "/datenverarbeitung/analyse/level1/correct_advertisement4.jpg",
        text: t("0.text"),
        attributes: t("0.attributes").split(", "),
        isSuccessful: true,
      },
      {
        img: "/datenverarbeitung/analyse/level1/correct_advertisement6.jpg",
        text: t("1.text"),
        attributes: t("1.attributes").split(", "),
        isSuccessful: true,
      },
      {
        img: "/datenverarbeitung/analyse/level1/incorrect_advertisement4.jpg",
        text: t("2.text"),
        attributes: t("2.attributes").split(", "),
        isSuccessful: false,
      },
      {
        img: "/datenverarbeitung/analyse/level1/correct_advertisement5.jpg",
        text: t("3.text"),
        attributes: t("3.attributes").split(", "),
        isSuccessful: true,
      },
      {
        img: "/datenverarbeitung/analyse/level1/correct_advertisement3.jpg",
        text: t("4.text"),
        attributes: t("4.attributes").split(", "),
        isSuccessful: true,
      },
      {
        img: "/datenverarbeitung/analyse/level1/correct_advertisement1.jpg",
        text: t("5.text"),
        attributes: t("5.attributes").split(", "),
        isSuccessful: true,
      },
      {
        img: "/datenverarbeitung/analyse/level1/incorrect_advertisement2.jpg",
        text: t("6.text"),
        attributes: t("6.attributes").split(", "),
        isSuccessful: false,
      },
      {
        img: "/datenverarbeitung/analyse/level1/incorrect_advertisement5.jpg",
        text: t("7.text"),
        attributes: t("7.attributes").split(", "),
        isSuccessful: false,
      },
      {
        img: "/datenverarbeitung/analyse/level1/incorrect_advertisement6.jpg",
        text: t("8.text"),
        attributes: t("8.attributes").split(", "),
        isSuccessful: false,
      },
      {
        img: "/datenverarbeitung/analyse/level1/incorrect_advertisement1.jpg",
        text: t("9.text"),
        attributes: t("9.attributes").split(", "),
        isSuccessful: false,
      },
      {
        img: "/datenverarbeitung/analyse/level1/correct_advertisement2.jpg",
        text: t("10.text"),
        attributes: t("10.attributes").split(", "),
        isSuccessful: true,
      },
      {
        img: "/datenverarbeitung/analyse/level1/incorrect_advertisement3.jpg",
        text: t("11.text"),
        attributes: t("11.attributes").split(", "),
        isSuccessful: false,
      },
    ];
  }, [t])
}

function Item({
  img,
  text,
  attributes,
  onClick,
  selected,
}: Item & { onClick: () => void; selected?: boolean }) {
  return (
    <div
      className={clsx(
        "bg-blue-100 p-4 rounded-xl cursor-pointer flex flex-col",
        selected ? "gap-2" : "gap-6",
      )}
      key={text}
      onClick={() => onClick()}
    >
      <Image
        src={img}
        alt={text}
        width="200"
        height="200"
        className={clsx(
          "w-full object-cover rounded-xl",
          selected ? "h-24" : "h-32",
        )}
        priority
      />
      <div className="flex flex-col gap-2">
        <span
          className={clsx(
            "font-medium flex items-center gap-2",
            selected ? "text-md" : "text-xl",
          )}
        >
          {selected && <CheckCircle weight="fill" />}
          {text}
        </span>
        <div className="flex gap-2 flex-wrap">
          {attributes.map((a) => (
            <span
              className={clsx(
                "bg-blue-200 text-blue-900 py-1 px-3 rounded-full",
                selected ? "text-xs" : "text-sm",
              )}
              key={a}
            >
              #{a}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DataProcessingPart1() {
  const [selected, setSelected] = useState<Item[]>([]);
  const [success, setSuccess] = useState(false);
  const [showData, setShowData] = useState(false);
  const { addMessage } = useMessages();
  const router = useRouter();
  const t = useTranslations("datenverarbeitung.analyse.level.1.part.1")
  const items = useItems()

  function selectItem(item: Item) {
    if (success) return;
    if (selected.includes(item)) {
      setSelected((selected) => selected.filter((s) => s != item));
    } else {
      setSelected((selected) => [item, ...selected]);
    }
  }

  async function next() {
    const context = new PersistUserService();
    await context.setAchievement(
      AchievementId.DATA_PROCESSING_CHECKPOINT_COLLECT,
      true,
    );
    router.push("/space/daten-verarbeitung/recap");
  }

  function checkSuccess() {
    const truePos = selected.filter((item) => item.isSuccessful).length;
    const falsePos = selected.filter((item) => !item.isSuccessful).length;

    const totalPos = items.filter((item) => item.isSuccessful).length;
    const totalNeg = items.filter((item) => !item.isSuccessful).length;
    if (truePos == totalPos && falsePos == 0) {
      setSuccess(true);
      addMessage(
        t("alertSuccess"),
        "success",
      );
    } else {
      if (falsePos > 0) {
        addMessage(
          t("alertErrorTooMany"),
          "error",
        );
      } else {
        addMessage(
          t("alertErrorTooFew"),
          "error",
        );
      }
    }
  }

  return (
    <div className="flex flex-col gap-6 overflow-y-auto h-full items-center relative">
      <TagList show={showData} onClose={() => setShowData(false)} />
      {!success && (
        <div className="flex items-center gap-4 w-full">
          <Task>{t("task")}</Task>
          <Button style="secondary" onClick={() => setShowData(true)}>
            <Info weight="fill" className="mr-4" /> {t("collectedData")}
          </Button>
          <Button onClick={checkSuccess}>{t("check")}</Button>
        </div>
      )}

      {success && (
        <Button className="my-6" onClick={next}>
          {t("next")}
        </Button>
      )}

      <div className="flex gap-8 justify-evenly w-full">
        {!success && (
          <div className="w-full flex flex-col gap-8 items-center">
            <span className="text-2xl font-semibold mb-8 inline-block">
              {t("allAds")}
            </span>
            <div className="grid grid-cols-1 auto-rows-min 2xl:grid-cols-2 w-full gap-4 max-w-[800px]">
              {items
                .filter((item) => !selected.includes(item))
                .map((item) => (
                  <Item
                    key={item.img}
                    {...item}
                    onClick={() => selectItem(item)}
                  />
                ))}
            </div>
          </div>
        )}

        <div className="w-full flex flex-col gap-8 items-center">
          <span className="text-2xl font-semibold inline-flex items-center gap-4">
            <CheckCircle weight="fill" /> {t("successfulAds")} (
            {selected.length})
          </span>
          <div className="grid grid-cols-1 auto-rows-min 2xl:grid-cols-2 w-full gap-4 max-w-[800px]">
            {selected.map((item, i) => (
              <Item
                key={item.img}
                {...item}
                onClick={() => selectItem(item)}
                selected
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
