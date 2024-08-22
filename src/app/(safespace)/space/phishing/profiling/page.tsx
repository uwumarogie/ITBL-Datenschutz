"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import Button from "@/components/button";
import clsx from "clsx";
import { HintCard } from "@/components/hint-card";
import Robot from "@/components/robot/robot";
import { PersistUserService } from "@/services/user/PersistUserService";
import { AchievementId } from "@/util/achievement-data";
import { useMessages } from "@/services/notfication/message-provider";
import Task from "@/components/task";
import { useTranslations } from "next-intl";

type Column = {
  id: string;
  items: string[];
};

function shuffleArray(array: string[]) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function arraysEquals(arr1: string[], arr2: string[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const sortedArr1 = arr1.slice().sort();
  const sortedArr2 = arr2.slice().sort();

  for (let i = 0; i < sortedArr1.length; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) {
      return false;
    }
  }

  return true;
}

const initialColumns: { [key: string]: Column } = {
  wordsPool: { id: "wordsPool", items: [] },
  fakeProfile: { id: "fakeProfile", items: [] },
  realProfile: { id: "realProfile", items: [] },
};

export default function Profiling() {
  const router = useRouter();
  const messageService = useMessages();
  const t = useTranslations('phishing')
  const [columns, setColumns] = useState(initialColumns);
  const [instructionRead, setInstructionsRead] = useState(false);
  const [wrongAnimation, setWrongAnimation] = useState(false);
  const [moduleFinished, setModuleFinished] = useState(false);
  const [firstTry, setFirstTry] = useState(true);

  const signsFakeProfile = [
    t("profiling.signsFakeProfile.noProfilePicture"),
    t("profiling.signsFakeProfile.blurryProfilePicture"),
    t("profiling.signsFakeProfile.fewFollowers"),
    t("profiling.signsFakeProfile.slightlyAlteredName"),
    t("profiling.signsFakeProfile.privateProfileOfKnownPerson"),
    t("profiling.signsFakeProfile.fewPosts"),
    t("profiling.signsFakeProfile.fewComments"),
    t("profiling.signsFakeProfile.wonSomething"),
    t("profiling.signsFakeProfile.links"),
  ];

  const signsRealProfile = [
    t("profiling.signsRealProfile.verifiedProfile"),
    t("profiling.signsRealProfile.manyFollowers"),
    t("profiling.signsRealProfile.samePersonInManyPictures"),
    t("profiling.signsRealProfile.publicProfileOfKnownPerson"),
    t("profiling.signsRealProfile.manyPosts"),
    t("profiling.signsRealProfile.manyComments"),
    t("profiling.signsRealProfile.regularStories"),
    t("profiling.signsRealProfile.videosWithPerson"),
  ];

  useEffect(() => {
    const shuffledItems = shuffleArray(
      signsFakeProfile.concat(signsRealProfile),
    );
    setColumns({
      ...initialColumns,
      wordsPool: { id: "wordsPool", items: shuffledItems },
    });
  }, []);

  const handleFinish = async () => {
    const isFinished =
      arraysEquals(columns.fakeProfile.items, signsFakeProfile) &&
      arraysEquals(columns.realProfile.items, signsRealProfile);

    if (isFinished) {
      if (firstTry) {
        const userService = new PersistUserService();
        await userService
          .setAchievement(AchievementId.PROFIL_DETEKTIV, true)
          .then(() => {
            messageService.showAchievement(AchievementId.PROFIL_DETEKTIV);
          });
      }
      setModuleFinished(true);
    } else {
      setFirstTry(false);
      setWrongAnimation(true);
      setTimeout(() => setWrongAnimation(false), 700);
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = Array.from(sourceColumn.items);
    const destItems = Array.from(destColumn.items);
    const [removed] = sourceItems.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: { ...sourceColumn, items: sourceItems },
      });
    } else {
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: { ...sourceColumn, items: sourceItems },
        [destination.droppableId]: { ...destColumn, items: destItems },
      });
    }
  };

  return (
    <>
      {moduleFinished ? (
        <div className="flex flex-col items-center text-center gap-6 md:mt-6">
          <span className="text-5xl text-blue-background">{t("profiling.completedText.title")}</span>
          <Robot expression="smiling" />
          <span className="max-w-[600px]">
            {t("profiling.completedText.description")}
          </span>
          <Button onClick={() => router.push("/space/phishing/assign")}>
            {t("profiling.completedText.buttonText")}
          </Button>
        </div>
      ) : (
        <div>
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="container">
              {columns.wordsPool.items.length !== 0 && (
                <Droppable droppableId="wordsPool">
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={clsx(
                        "p-2 flex flex-wrap gap-x-4 gap-y-2 mb-4",
                        !instructionRead && "opacity-60",
                      )}
                    >
                      {columns.wordsPool.items.map((item, index) => (
                        <Draggable
                          key={item}
                          draggableId={item}
                          index={index}
                          isDragDisabled={!instructionRead}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="p-2 text-blue-background bg-module-blue rounded-xl text-xs sm:text-sm lg:text-base"
                            >
                              {item}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              )}
              <div className={clsx(!instructionRead && "opacity-60")}>
                <div className="flex justify-between">
                  {Object.entries(columns)
                    .filter(([columnId]) => columnId !== "wordsPool")
                    .map(([columnId, column]) => (
                      <Droppable key={columnId} droppableId={columnId}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="w-[45%] min-h-[20vh]"
                          >
                            <h3 className="text-md lg:text-xl mb-1 text-blue-background font-medium">
                              {columnId === "fakeProfile"
                                ? t("profiling.fakeProfileHeader")
                                : columnId === "realProfile"
                                  ? t("profiling.realProfileHeader")
                                  : ""}
                            </h3>
                            <div className="flex flex-col gap-2 py-2 px-4 border-gray-300 border-2 rounded-2xl min-h-[20vh]">
                              {column.items.map((item, index) => (
                                <Draggable
                                  key={item}
                                  draggableId={item}
                                  index={index}
                                >
                                  {(provided) => (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      className={clsx(
                                        "p-2 bg-module-blue text-blue-background rounded-xl text-xs sm:text-sm lg:text-base",
                                        wrongAnimation &&
                                          "animate-shake text-white bg-red-500",
                                      )}
                                    >
                                      {item}
                                    </div>
                                  )}
                                </Draggable>
                              ))}
                              {provided.placeholder}
                            </div>
                          </div>
                        )}
                      </Droppable>
                    ))}
                </div>
                {instructionRead && (
                  <div className="flex justify-between">
                    <div>
                      <Button
                        className="min-w-[150px] mt-6"
                        onClick={() => handleFinish()}
                        style={
                          columns.wordsPool.items.length === 0
                            ? "default"
                            : "neutral"
                        }
                        disabled={columns.wordsPool.items.length !== 0}
                      >
                        {columns.wordsPool.items.length === 0
                          ? t("profiling.checkButton")
                          : `${t("profiling.remainingButton")} ${
                              columns.wordsPool.items.length
                            }/${signsFakeProfile.length + signsRealProfile.length}`}
                      </Button>
                    </div>
                    <HintCard
                      text={t("profiling.hintCard.text")}
                      buttonText={t("profiling.hintCard.buttonText")}
                      hint={t("profiling.hintCard.hint")}
                      className="max-w-[250px] sm:max-w-[400px] ml-2 mt-8 flex-end p-2"
                    />
                  </div>
                )}
              </div>
              {!instructionRead && (
                <div className="p-2 flex flex-col gap-4 lg:mt-4">
                  <Task>
                    {t("profiling.task")}
                  </Task>
                  <Button
                    onClick={() => setInstructionsRead(true)}
                    className="max-w-[150px]"
                  >
                    {t("profiling.startButton")}
                  </Button>
                </div>
              )}
            </div>
          </DragDropContext>
        </div>
      )}
    </>
  );
}
