"use client";

import React from "react";
import { ListCheck, UserRound } from "lucide-react";

import { useFloatingCharacters } from "@/hooks/useFloatingCharacters";

import CircleButton from "../Buttons/CircleButton";
import BoxButton from "../Buttons/BoxButton";
import SoundButton from "../Buttons/SoundButton";
import LinkedInLogo from "../../assets/linkedin.svg";
import GithubLogo from "../../assets/github.svg";
import LeetCodeLogo from "../../assets/leetcode.svg";
import Image from "next/image";

const AMONG_US_IMAGES = [
  "/characters/among-us_blue_char.svg",
  "/characters/among-us_green_char.svg",
  "/characters/among-us_purple.svg",
  "/characters/Pink_among_us.svg",
  "/characters/red-among-us.svg",
  "/characters/yellow-among-us.svg",
];

function Main() {
  const floatingCharacters = useFloatingCharacters(AMONG_US_IMAGES, 15);

  const handleClick = (name: string) => {
    console.log(`${name} clicked`);
  };

  return (
    <main
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        text-white
      "
    >
      {/* Floating Among Us Characters */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {floatingCharacters}
      </div>

      {/* Main Content */}
      <div
        className="
          relative
          z-10
          min-h-screen
          w-full
          flex
          items-center
          justify-center
          px-5
        "
      >
        <div className="among-font w-full flex flex-col items-center">
          {/* Heading */}
          <h1
            className="
              text-center
              text-5xl
              sm:text-6xl
              md:text-7xl
              tracking-[2px]
              scale-x-[1.15]
              mb-16
            "
          >
            SHREYAS R ACHAR
          </h1>

          {/* Menu */}
          <div className="w-full max-w-[650px]">
            {/* Main Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <BoxButton text="PROJECTS" path="/projects" />

              <BoxButton text="ABOUT ME" path="/about" />

              <div className="col-span-2">
                <BoxButton text="CONTACT" path="/contact" small />
              </div>
            </div>

            {/* Circle Buttons */}
            <div
              className="
                flex
                items-center
                justify-center
                gap-5
                mt-7
                flex-wrap
              "
            >
              <SoundButton />

              <CircleButton
                label="Skills"
                href="/skills"
              >
                <ListCheck size={36} />
              </CircleButton>

              <CircleButton label="Profile" href="/profile">
                <UserRound size={34} />
              </CircleButton>

              <CircleButton
                label="Github"
                css=""
                href="https://github.com/Achuu-codes"
              >
                <Image
                  src={GithubLogo}
                  alt="Github Logo"
                  className="w-9 invert hover:invert-0"
                />
              </CircleButton>

              <CircleButton
                label="LinkedIn"
                href="https://www.linkedin.com/in/shreyas-achar/"
              >
                <Image src={LinkedInLogo} alt="LinkedIn Logo" className="w-9" />
              </CircleButton>

              <CircleButton
                label="LeetCode"
                href="https://leetcode.com/u/Shreyas_R_Achar1/"
              >
                <Image
                  src={LeetCodeLogo}
                  alt="LeetCode Logo"
                  className="w-8 bg-zinc-100 rounded-md p-1"
                />
              </CircleButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
