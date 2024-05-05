import Link from "next/link";

export function UnlockMasterQuiz() {
  return (
    <div className="flex flex-col relative justify-start items-start space-y-2 min-w-[225px] h-[250px] bg-blue-contrast rounded-xl mx-auto p-4 scale-95">
      <h3 className="text-white text-lg">Master Quiz</h3>
      <span className="font-light text-sm opacity-35 text-white">
        Teste all deinen Wissen
      </span>
      <Link
        className="flex bg-orange-600  text-white w-20 h-5 p-5 rounded-xl justify-center items-center"
        href="/space/placeholder"
      >
        Start
      </Link>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 right-0"
        width="179"
        height="161"
        viewBox="0 0 179 161"
        fill="none"
      >
        <circle opacity="0.5" cx="123" cy="123" r="123" fill="#2A6F97" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-5 right-5"
        width="114"
        height="110"
        viewBox="0 0 114 110"
        fill="none"
      >
        <path
          d="M110.975 50.3223L88.1239 70.0406L95.086 99.5293C95.4701 101.13 95.3712 102.809 94.8017 104.353C94.2323 105.898 93.2178 107.239 91.8865 108.208C90.5551 109.176 88.9667 109.728 87.3217 109.794C85.6768 109.86 84.0492 109.437 82.6446 108.579L57 92.7957L31.3403 108.579C29.9358 109.432 28.3102 109.851 26.6681 109.783C25.026 109.714 23.4409 109.161 22.1123 108.194C20.7838 107.226 19.7712 105.887 19.2021 104.346C18.633 102.804 18.5328 101.128 18.9141 99.5293L25.9016 70.0406L3.05005 50.3223C1.80742 49.2483 0.908731 47.8321 0.466211 46.2504C0.0236904 44.6687 0.0569534 42.9917 0.561845 41.4288C1.06674 39.8659 2.02088 38.4864 3.30512 37.4626C4.58936 36.4387 6.14677 35.8159 7.78286 35.6719L37.7438 33.2547L49.3016 5.28439C49.9272 3.76002 50.992 2.45612 52.3605 1.53845C53.7291 0.620781 55.3396 0.130798 56.9874 0.130798C58.6351 0.130798 60.2456 0.620781 61.6142 1.53845C62.9827 2.45612 64.0475 3.76002 64.6731 5.28439L76.2258 33.2547L106.187 35.6719C107.826 35.8105 109.388 36.4299 110.677 37.4523C111.966 38.4747 112.924 39.8548 113.432 41.4196C113.94 42.9844 113.975 44.6643 113.533 46.2489C113.09 47.8334 112.19 49.2522 110.945 50.3274L110.975 50.3223Z"
          fill="#FFDB58"
        />
      </svg>
    </div>
  );
}
