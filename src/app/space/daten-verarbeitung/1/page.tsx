import InstagramProfile, {InstagramProfileData} from "@/app/space/daten-verarbeitung/instagram-profile";
import Robot from "@/components/robot/robot";

const profile: InstagramProfileData = {
  username: "marie_magic1995",
  profileImageSrc: "/posts/profile_marie.png",
  followers: 215,
  following: 350,
  description: `I’m Marie ❤️
🏠️ Hometown Munich/Ro
🤰 Mother of 2 children
🚴‍♀️ Always on my bike!`,
  posts: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].map(i => ({
    imageSrc: "/posts/post_marie_1.jpg",
    caption: "Living my best live\n#freedome #nature"
  }))
}

export default function DataProcessing1() {
  return <div className="h-full relative flex">
    <div className="overflow-y-auto h-full w-1/2 max-w-sm flex-shrink-0 mx-10 py-10 box-border">
      <InstagramProfile profile={profile} className="w-full"/>
    </div>
    <div className="relative w-full h-full flex justify-center items-center flex-col gap-10">
        <p
          className="max-w-80 box-content w-full text-center px-8 py-6 bg-white shadow-lg rounded-2xl">
          Das ist Marie. Sie ist seit ca. 4 Jahren auf Instagram und hat uns einige Informationen hinterlassen. Schau dich einfach mal um und Tipp mich an, wenn du denkst, genug über Marie zu wissen.
        </p>
        <Robot expression="resting" className="w-48 h-48"/>
    </div>

  </div>;
}
