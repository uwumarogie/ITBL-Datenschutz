"use state";

import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";
import {
  BookmarkSimple,
  ChatCircle,
  Heart,
  PaperPlaneTilt,
  User,
} from "@phosphor-icons/react";
import { CloseIcon } from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";

export type InstagramPost = {
  imageSrc: string;
  caption: string;
  likedBy?: string | undefined;
};

export type InstagramProfileData = {
  username: string;
  profileImageSrc: string;
  followers: number;
  followingCount: number;
  following: string[];
  description: string;
  posts: InstagramPost[];
};

export default function InstagramProfile({
  className,
  profile,
}: {
  profile: InstagramProfileData;
  className?: string | undefined;
}) {
  const [currentPost, setCurrentPost] = useState<InstagramPost | null>(null);
  const [showFollowing, setShowFollowing] = useState(false);
  return (
    <div className={clsx(className, "w-full h-full relative ")}>
      {currentPost && (
        <CurrentPost
          post={currentPost}
          profile={profile}
          onClick={() => setCurrentPost(null)}
        />
      )}
      {showFollowing && (
        <Following
          following={profile.following}
          onClick={() => setShowFollowing(false)}
        />
      )}

      <div className="overflow-y-auto relative h-full">
        <header className="w-full flex flex-col gap-4 p-6">
          <h3 className="font-semibold text-xl">{profile.username}</h3>

          <div className="flex w-full">
            <Image
              className="rounded-full border-[1px] border-gray-300 w-20 h-20 flex-shrink-0 bg-white hover:scale-105 transition-all cursor-pointer"
              src={profile.profileImageSrc}
              alt={"Profile picture"}
              width="100"
              height="100"
            />

            <div className="flex w-full justify-around items-center">
              <VerticalNumberText number={profile.posts.length} text="Posts" />
              <VerticalNumberText number={profile.followers} text="Followers" />
              <VerticalNumberText
                number={profile.followingCount}
                text="Following"
                onClick={() => setShowFollowing(true)}
              />
            </div>
          </div>

          <div>
            <h6 className="font-semibold text-md">{profile.username}</h6>
            <span className="opacity-50 text-sm font-light">
              Privates Profil
            </span>
          </div>

          <p className="whitespace-pre-wrap text-sm">{profile.description}</p>
        </header>

        <section className="grid grid-cols-3 grid-rows-3 gap-0.5 mt-8 p-1">
          {profile.posts.map((post, index) => (
            <div
              key={index}
              className="aspect-square hover:scale-105 transition-all cursor-pointer"
              onClick={() => setCurrentPost(post)}
            >
              <Image
                src={post.imageSrc}
                alt={post.caption}
                width="200"
                height="200"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

function VerticalNumberText({
  number,
  text,
  onClick,
}: {
  number: number;
  text: string;
  onClick?: () => void;
}) {
  return (
    <div
      className="inline-flex flex-col items-center hover:scale-105 transition-all cursor-pointer"
      onClick={onClick}
    >
      <span className="font-semibold text-xl">{number}</span>
      <span className="font-light">{text}</span>
    </div>
  );
}

function Following({
  following,
  onClick,
}: {
  following: string[];
  onClick: () => void;
}) {
  return (
    <div className="w-full h-full z-30 flex items-center absolute">
      <div className="p-5 z-30 h-full w-full flex items-center">
        <div className="bg-white p-2 pb-4 rounded-xl w-full h-full">
          <header className="flex p-2 justify-between">
            <span className="font-semibold">Following</span>
            <div
              onClick={onClick}
              className="hover:scale-105 transition-all cursor-pointer"
            >
              <CloseIcon />
            </div>
          </header>
          <div className="flex flex-col px-4 pt-4">
            {following.map((follower) => (
              <div
                key={follower}
                className="flex items-center py-4 border-b-[1px] last:border-0"
              >
                {/*<Image*/}
                {/*  src={"/passwort.png"} alt={"Profile picture"} width="50" height="50"/>*/}
                <div className="rounded-full border-[1px] border-gray-300 w-8 h-8 flex-shrink-0 bg-white mr-4 flex items-center justify-center">
                  <User weight="fill" className="opacity-30" />
                </div>
                <span>{follower}</span>
              </div>
            ))}
          </div>
          <span className="italic opacity-50 p-4 inline-block">
            Weitere Konten konnten nicht geladen werden.
          </span>
        </div>
      </div>
      <div className="absolute bg-black opacity-40 w-full h-full top-0"></div>
    </div>
  );
}

function CurrentPost({
  post,
  profile,
  onClick,
}: {
  post: InstagramPost;
  profile: InstagramProfileData;
  onClick: () => void;
}) {
  return (
    <div
      className="w-full h-full z-30 flex items-center absolute cursor-pointer"
      onClick={onClick}
    >
      <div className="p-5 z-30 h-full w-full flex items-center">
        <div className="bg-white p-2 pb-4 rounded-xl w-full">
          <div className="pb-2 px-1 flex items-center">
            <Image
              className="rounded-full border-[1px] border-gray-300 w-8 h-8 flex-shrink-0 bg-white mr-4"
              src={profile.profileImageSrc}
              alt={"Profile picture"}
              width="50"
              height="50"
            />
            <span className="font-medium pr-2">{profile.username}</span>
          </div>
          <Image
            src={post.imageSrc}
            alt={post.caption}
            width="400"
            height="400"
            className="w-full h-fit rounded-lg"
          />
          <div className="flex gap-4 px-2 pt-4 pb-3">
            <Heart className="flex-shrink-0" size="24" />
            <ChatCircle className="flex-shrink-0" size="24" />
            <PaperPlaneTilt className="flex-shrink-0" size="24" />
            <div className="w-full"></div>
            <BookmarkSimple className="flex-shrink-0" size="24" />
          </div>
          {post.likedBy && (
            <p className="mx-2 text-sm">
              Gefällt <span className="font-medium pr-2">{post.likedBy}</span>
            </p>
          )}
          <p className="whitespace-pre-wrap mx-2">
            <span className="font-medium pr-2">{profile.username}</span>
            {post.caption}
          </p>
        </div>
      </div>
      <div className="absolute bg-black opacity-40 w-full h-full top-0"></div>
    </div>
  );
}
