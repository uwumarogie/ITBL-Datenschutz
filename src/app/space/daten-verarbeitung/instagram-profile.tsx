import Image from "next/image";
import clsx from "clsx";

export type InstagramPost = {
  imageSrc: string,
  caption: string,
}

export type InstagramProfileData = {
  username: string,
  profileImageSrc: string,
  followers: number,
  following: number,
  description: string,
  posts: InstagramPost[]
}

export default function InstagramProfile({
  className,
  profile
}: { profile: InstagramProfileData, className?: string | undefined }) {
  return <div className={clsx(className, "w-full")}>

    <header className="w-full flex flex-col gap-4">

      <h3 className="font-semibold text-xl">{profile.username}</h3>

      <div className="flex w-full">
        <Image className="rounded-full border-[1px] border-gray-500 w-20 h-20 flex-shrink-0 bg-white"
               src={profile.profileImageSrc} alt={"Profile picture"} width="100" height="100"/>

        <div className="flex w-full justify-around items-center">
          <VerticalNumberText number={profile.posts.length} text="Posts"/>
          <VerticalNumberText number={profile.followers} text="Followers"/>
          <VerticalNumberText number={profile.following} text="Following"/>
        </div>
      </div>

      <div>
        <h6 className="font-semibold text-md">{profile.username}</h6>
        <span className="opacity-50 text-sm font-light">Privates Profil</span>
      </div>

      <p className="whitespace-pre-wrap text-sm">{profile.description}</p>
    </header>

    <section className="grid grid-cols-3 grid-rows-3 gap-0.5 mt-8">

      {
        profile.posts.map((post, index) => (
          <div key={index} className="aspect-square">
            <Image src={post.imageSrc} alt={post.caption} width="200" height="200" className="w-full h-full object-cover"/>
          </div>
        ))
      }

    </section>

  </div>
}

function VerticalNumberText({number, text}: {number: number, text: string}) {
  return <div className="inline-flex flex-col items-center">
    <span className="font-semibold text-xl">{number}</span>
    <span className="font-light">{text}</span>
  </div>
}