"use client";

import InstagramProfile, {
  InstagramProfileData,
} from "@/components/instagram-profile";
import Robot from "@/components/robot/robot";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/button";
import clsx from "clsx";
import Task from "@/components/task";
import ProfileAnalysis from "@/app/(safespace)/space/daten-verarbeitung/kapitel2/components/profile-analysis";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Image from "next/image";
import {
  BookmarkSimple,
  ChatCircle,
  Heart,
  Hourglass,
  PaperPlaneRight,
  PaperPlaneTilt,
  ThumbsDown,
} from "@phosphor-icons/react";
import { CollectData } from "@/app/(safespace)/space/daten-verarbeitung/data/collect";
import {useTranslations} from "next-intl";
import useAllTerms = CollectData.useAllTerms;
import useAllTermsTagged = CollectData.useAllTermsTagged;

function useProfile(): InstagramProfileData {
  const t = useTranslations("datenverarbeitung.collect.level.1.part.1")
  return {
    username: "marie_magic2007",
      profileImageSrc: "/posts/profile_marie.png",
    followers: 97,
    followingCount: 189,
    description: "MUC\n17 yo",
    posts: [
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0614.JPG",
      caption: t("caption_1"),
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0605.JPG",
      caption: t("caption_2"),
      location: "Franz von Miller Gymnasium München",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0459.jpg",
      caption: t("caption_3"),
      likedBy: "Michael, Sarah und 3 weiteren",
      location: "Cafe Kaffee",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0401.JPG",
      caption: t("caption_4"),
      likedBy: "Lea",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0608.JPG",
      caption: t("caption_5"),
      location: "Franz von Miller Gymnasium München",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0613.JPG",
      caption: t("caption_6"),
      location: "SneakON - München",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0610.JPG",
      caption: t("caption_7"),
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0612.JPG",
      caption: t("caption_8"),
      likedBy: "Justus und Mara",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0602.JPG",
      caption: t("caption_9"),
      location: "Dortmund",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0601.JPG",
      caption: t("caption_10"),
      song: "Everything I wanted - Billie Eilish",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0609.JPG",
      caption: t("caption_11"),
      location: "Franz von Miller Gymnasium München",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0460.JPG",
      caption: t("caption_12"),
      location: "Cafe Kaffee",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0603.JPG",
      caption: t("caption_13"),
      song: "BIRDS OF A FEATHER - Billie Eilish",
    },
    {
      imageSrc: "/datenverarbeitung/level0/IMG_0617.JPG",
      caption: t("caption_14"),
    },
  ],
  }
}


function useHistoryPost(): HistoryPost[] {
  const t = useTranslations("datenverarbeitung.collect.level.1.part.1.history")
  return [
    {
      src: "/datenverarbeitung/collect/level1/post-history/post_history1.jpg",
      caption: t("caption_1"),
      like: true,
      time: t("time_1"),
      tags: t("tags_1").split(", "),
      date: t("date_1"),
    },
    {
      src: "/datenverarbeitung/collect/level1/post-history/post_history_dislike4.jpg",
      caption: t("caption_2"),
      date: t("date_2"),
      time: t("time_2"),
      tags: t("tags_2").split(", "),
    },
    {
      src: "/datenverarbeitung/collect/level1/post-history/post_history_dislike5.jpg",
      caption: t("caption_3"),
      tags: t("tags_3").split(", "),
    },
    {
      src: "/datenverarbeitung/collect/level1/post-history/post_history_dislike2.jpg",
      caption: t("caption_4"),
      time: t("time_4"),
      tags: t("tags_4").split(", "),
    },
    {
      src: "/datenverarbeitung/collect/level1/post-history/post_history3.jpg",
      caption: t("caption_5"),
      date: t("date_5"),
      comment: t("comment_5"),
      tags: t("tags_5").split(", "),
    },
    {
      src: "/datenverarbeitung/collect/level1/post-history/post_history7.jpg",
      caption: t("caption_6"),
      date: t("date_6"),
      send: t("send_6"),
      tags: t("tags_6").split(", "),
    },
    {
      src: "/datenverarbeitung/collect/level1/post-history/post_history4.jpg",
      caption: t("caption_7"),
      save: true,
      tags: t("tags_7").split(", "),
    },
    {
      src: "/datenverarbeitung/collect/level1/post-history/post_history2.jpg",
      caption: t("caption_8"),
      send: "An @Tanja",
      tags: t("tags_8").split(", "),
    },
    {
      src: "/datenverarbeitung/collect/level1/post-history/post_history6.jpg",
      caption: t("caption_9"),
      like: true,
      time: t("time_9"),
      tags: t("tags_9").split(", "),
    },
    {
      src: "/datenverarbeitung/collect/level1/post-history/post_history_dislike1.jpg",
      caption: t("caption_10"),
      dislike: true,
      tags: t("tags_10").split(", "),
    },
    {
      src: "/datenverarbeitung/collect/level1/post-history/post_history_dislike6.jpg",
      caption: t("caption_11"),
      dislike: true,
      time: t("time_11"),
      tags: t("tags_11").split(", "),
    },
    {
      src: "/datenverarbeitung/collect/level1/post-history/post_history5.jpg",
      caption: t("caption_12"),
      like: true,
      date:t("date_12"),
      tags: t("tags_12").split(", "),
    },
    {
      src: "/datenverarbeitung/collect/level1/post-history/post_history_dislike3.jpg",
      caption: t("caption_13"),
      tags: t("tags_13").split(", "),
    },
  ];;
}


export default function DataProcessing1() {
  const t = useTranslations("datenverarbeitung.collect.level.1.part.1")
  const profile = useProfile()
  const historyPost = useHistoryPost()
  const terms = useAllTerms()

  const robotText = t("robot_text")
  const task = t("task")

  return (
    <ProfileAnalysis
      profile={profile}
      robotText={robotText}
      task={task}
      terms={terms}
      minFoundTerms={15}
      hint={t("hint")}
      href="/space/daten-verarbeitung/kapitel2/collect/level/1/part/2"
    >
      <Tabs className="h-full flex flex-col">
        <TabList className="flex border-b-2 flex-shrink-0">
          <Tab className="cursor-pointer p-4 text-center outline-none w-full border-b-sky-800">
            {t("profil_tab")}
          </Tab>
          <Tab className="cursor-pointer p-4 text-center outline-none w-full border-b-sky-800">
            {t("history_tab")}
          </Tab>
        </TabList>

        <TabPanel className="overflow-y-auto">
          <InstagramProfile profile={profile} className="w-full" />
        </TabPanel>
        <TabPanel className="overflow-y-auto">
          <span className="m-4 block italic opacity-50">
            {t("histroy_description")}
          </span>
          <PostHistory posts={historyPost} />
        </TabPanel>
      </Tabs>
    </ProfileAnalysis>
  );
}

type HistoryPost = {
  src: string;
  caption: string;
  like?: boolean;
  save?: boolean;
  send?: string;
  dislike?: boolean;
  time?: string;
  comment?: string;
  tags?: string[];
  date?: string;
};

function PostHistory({ posts }: { posts: HistoryPost[] }) {
  return (
    <div className="flex flex-col h-full">
      {posts.map((post) => (
        <PostHistoryPost key={post.src} {...post} />
      ))}
    </div>
  );
}

function PostHistoryPost({
  src,
  caption,
  like,
  save,
  send,
  dislike,
  time,
  comment,
  tags,
  date,
}: HistoryPost) {
  return (
    <div className="flex p-4 items-center">
      <Image
        src={src}
        alt={caption}
        width="200"
        height="200"
        className="flex-shrink-0 w-20 h-20 object-cover object-center bg-gray-100 rounded-xl"
      />
      <div className="flex flex-col ml-6 w-full">
        <span className="font-semibold text-xl">
          {caption}
          <span className="text-sm font-thin ml-2 opacity-50">{date}</span>
        </span>
        {time && (
          <span className="flex items-center gap-2">
            <Hourglass weight="fill" className="opacity-40" />
            {time} betrachtet
          </span>
        )}
        {comment && (
          <span className="flex items-center gap-2">
            <ChatCircle weight="fill" className="opacity-40" />
            {comment}
          </span>
        )}
        {send && (
          <span className="flex items-center gap-2">
            <PaperPlaneTilt weight="fill" className="opacity-40" />
            {send}
          </span>
        )}
        <span className="flex flex-wrap gap-1 mt-1">
          {tags &&
            tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center py-1 px-2 rounded-full bg-blue-50 text-xs text-blue-900"
              >
                #{tag}
              </span>
            ))}
        </span>
      </div>
      <div className="mr-2 ml-6 flex-shrink-0">
        {like && <Heart weight="fill" className="h-8 w-8" color="red" />}
        {save && <BookmarkSimple className="h-8 w-8" />}
        {dislike && <ThumbsDown className="h-8 w-8" />}
      </div>
    </div>
  );
}
