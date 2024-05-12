"use client";

import { useState } from "react";
import { InputValidation } from "@/components/input-validation";
import { InlineNavigation } from "@/components/inline-navigation";
import Image from "next/image";
import Link from "next/link";

export default function Passwort() {
  return (
    <div className="flex flex-col max-w-[1100px] px-6 justify-start">
        <div className="hidden sm:block">
            <InlineNavigation/>
        </div>
        <div className="flex justify-start p-3 lg:p-5 sm:mt-10 lg:mt-1">
        <IntroductionText />
      </div>

      <div className="flex flex-row space-x-8 sm:mt-8 lg:mt-2">
        <div className="flex flex-col relative justify-start items-start space-y-2 min-w-[300px] h-auto bg-module-blue rounded-xl mx-auto lg:p-5 p-2 sm:p-10 scale-95 lg:mb-6 mb-14">
          <h3 className="text-blue-background text-2xl sm:text-3xl underline">
            Safety first
          </h3>
          <span className="font-light text-base text-blue-background">
            Lerne was ein gutes Passwort ausmacht
          </span>
          <Link
            className="flex bg-orange-600 text-white w-full sm:w-20 h-8 sm:h-10 p-2 sm:p-5 rounded-xl justify-center items-center"
            href="/space/passwort/quiz"
          >
            Start
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute lg:bottom-5 lg:right-6 rounded-br-xl lg:scale-125 md:scale-100 md:bottom-2 md:right-2 hidden lg:flex"
            width="179"
            height="161"
            viewBox="0 0 179 161"
            fill="none"
          >
            <circle opacity="0.5" cx="123" cy="123" r="123" fill="#2A6F97" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="163"
            height="103"
            viewBox="0 0 163 103"
            fill="none"
            className="absolute bottom-5 right-5 scale-75 hidden lg:flex"
          >
            <path
              d="M12.272 5.74996V97.25C12.272 98.5981 11.6342 99.8911 10.4988 100.844C9.36349 101.798 7.82364 102.333 6.21803 102.333C4.61242 102.333 3.07257 101.798 1.93723 100.844C0.80189 99.8911 0.164062 98.5981 0.164062 97.25V5.74996C0.164062 4.40178 0.80189 3.10881 1.93723 2.1555C3.07257 1.20219 4.61242 0.666626 6.21803 0.666626C7.82364 0.666626 9.36349 1.20219 10.4988 2.1555C11.6342 3.10881 12.272 4.40178 12.272 5.74996ZM81.8926 40.3802L66.7577 44.5104V31.1666C66.7577 29.8184 66.1199 28.5255 64.9845 27.5722C63.8492 26.6189 62.3093 26.0833 60.7037 26.0833C59.0981 26.0833 57.5583 26.6189 56.4229 27.5722C55.2876 28.5255 54.6498 29.8184 54.6498 31.1666V44.5104L39.5148 40.3802C37.9875 39.9589 36.3234 40.0643 34.8886 40.6732C33.4538 41.2821 32.3659 42.3447 31.8641 43.6271C31.3624 44.9096 31.4879 46.3069 32.2131 47.5116C32.9383 48.7164 34.2038 49.6299 35.7311 50.0512L50.866 54.1751L41.5278 64.9771C41.0343 65.5156 40.6743 66.1316 40.4692 66.7888C40.2641 67.446 40.2179 68.131 40.3335 68.8035C40.449 69.4759 40.7239 70.1221 41.142 70.7038C41.56 71.2855 42.1127 71.7909 42.7673 72.1902C43.4219 72.5895 44.1653 72.8746 44.9533 73.0286C45.7414 73.1826 46.5583 73.2023 47.3556 73.0867C48.1529 72.9711 48.9146 72.7224 49.5955 72.3554C50.2764 71.9885 50.8628 71.5106 51.3201 70.9501L60.6583 60.148L69.9966 70.9501C70.4538 71.5106 71.0402 71.9885 71.7211 72.3554C72.4021 72.7224 73.1637 72.9711 73.961 73.0867C74.7584 73.2023 75.5752 73.1826 76.3633 73.0286C77.1514 72.8746 77.8947 72.5895 78.5493 72.1902C79.204 71.7909 79.7566 71.2855 80.1747 70.7038C80.5927 70.1221 80.8676 69.4759 80.9832 68.8035C81.0987 68.131 81.0526 67.446 80.8474 66.7888C80.6423 66.1316 80.2823 65.5156 79.7888 64.9771L70.4506 54.1751L85.5855 50.0512C87.0454 49.5953 88.2398 48.6844 88.9204 47.508C89.601 46.3316 89.7154 44.9802 89.2399 43.7347C88.7643 42.4893 87.7353 41.4457 86.367 40.821C84.9986 40.1962 83.396 40.0383 81.8926 40.3802ZM162.108 43.6462C161.611 42.3754 160.539 41.32 159.122 40.7087C157.706 40.0973 156.06 39.9793 154.54 40.3802L139.405 44.5104V31.1666C139.405 29.8184 138.767 28.5255 137.632 27.5722C136.497 26.6189 134.957 26.0833 133.351 26.0833C131.746 26.0833 130.206 26.6189 129.07 27.5722C127.935 28.5255 127.297 29.8184 127.297 31.1666V44.5104L112.162 40.3865C110.635 39.9694 108.973 40.0789 107.542 40.6908C106.111 41.3027 105.027 42.3669 104.531 43.6494C104.034 44.9318 104.164 46.3275 104.893 47.5292C105.622 48.731 106.889 49.6405 108.417 50.0576L123.551 54.1814L114.213 64.9835C113.72 65.5219 113.36 66.1379 113.155 66.7951C112.949 67.4523 112.903 68.1374 113.019 68.8098C113.134 69.4823 113.409 70.1284 113.827 70.7102C114.245 71.2919 114.798 71.7973 115.453 72.1966C116.107 72.5959 116.851 72.881 117.639 73.0349C118.427 73.1889 119.244 73.2087 120.041 73.0931C120.838 72.9774 121.6 72.7288 122.281 72.3618C122.962 71.9948 123.548 71.5169 124.005 70.9564L133.344 60.1543L142.682 70.9564C143.139 71.5169 143.726 71.9948 144.407 72.3618C145.087 72.7288 145.849 72.9774 146.646 73.0931C147.444 73.2087 148.261 73.1889 149.049 73.0349C149.837 72.881 150.58 72.5959 151.235 72.1966C151.889 71.7973 152.442 71.2919 152.86 70.7102C153.278 70.1284 153.553 69.4823 153.669 68.8098C153.784 68.1374 153.738 67.4523 153.533 66.7951C153.328 66.1379 152.968 65.5219 152.474 64.9835L143.136 54.1814L158.271 50.0576C159.79 49.6324 161.047 48.719 161.766 47.5173C162.486 46.3156 162.608 44.9237 162.108 43.6462Z"
              fill="#A9D6E5"
            />
          </svg>
        </div>

        <Image
          src="/computer.svg"
          alt="Computer"
          height={400}
          width={400}
          className="justify-end hidden scale-100 lg:flex"
        />
      </div>
    </div>
  );
}

function IntroductionText() {
  return (
    <div className="flex justify-center items-center flex-col space-y-2">
      <h1 className="text-3xl lg:text-4xl text-blue-background">Passwortsicherheit</h1>
      <span className="text-base lg:text-xl sm:text-wrap md:text-wrap lg:text-center">
        Starke Passwörter sind wichtig, um deine personenbezogenen Daten <br />{" "}
        zu schützen. Je besser das Passwort, desto schwerer kann man dich <br />{" "}
        Hacken. Aber was sind eigentlich wichtige Bestandteile eines sicheren{" "}
        <br /> Passworts und was sollte ich eher vermeiden?
      </span>
    </div>
  );
}

function InputValidationModule() {
  const [input, setInput] = useState("");
  return (
    <div className="flex flex-col justify-start max-w-full space-y-5 p-10">
      <h1 className="text-xl lg:text-3xl text-blue-background ">
        Wähle ein sicheres Passwort!
      </h1>
      <input
        className="flex border-2 border-black rounded-xl text-xl md:text-2xl p-3 md:p-4 w-full h-14"
        onChange={(e) => setInput(e.target.value)}
        name="passwort-input"
      />
      <div className="space-y-2">
        <InputValidation input={input} />
      </div>
    </div>
  );
}
