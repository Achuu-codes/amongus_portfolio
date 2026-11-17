import React from "react";
import Image from "next/image";

import GithubImage from "../../assets/github.svg";
import LinkedInImage from "../../assets/linkedin.svg";
import Leetcodeimage from "../../assets/leetcode.svg";
import { Red_Character } from "../../public/characters/Characters";

const stats = [
  { value: "8.75", label: "CGPA" },
  { value: "500+", label: "LeetCode" },
  { value: "AIR 13", label: "HRD (Adv.)" },
  { value: "1700", label: "Chess.com" },
];

function ProfileHero() {
  return (
    <section className="w-full text-white px-4 sm:px-6 md:px-10 lg:px-16 py-8 md:py-12">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-8 lg:gap-12">
        {/* Left - Character */}
        <div className="shrink-0 pt-6 md:pt-16">
          <Image
            src={Red_Character}
            alt="Among Us crewmate avatar"
            className="
              w-32
              sm:w-44
              md:w-48
              lg:w-52
              h-auto
              object-contain
              character-bob
            "
          />
        </div>

        {/* Right - Info */}
        <div className="w-full max-w-3xl flex flex-col gap-8">
          {/* Name + Socials */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <h1
                className="
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  tracking-widest
                  among-font
                  leading-tight
                  break-words
                  pt-10
                "
              >
                Shreyas R Achar
              </h1>

              <p className="text-base sm:text-lg md:text-xl font-light font-mono">
                Backend &amp; ML Engineer
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Achuu-codes"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Image
                  src={GithubImage}
                  className="
                    w-5 h-5
                    invert
                    hover:invert-0
                    hover:bg-zinc-100
                    rounded-full
                    hover:border
                    hover:border-zinc-100
                    transition-all
                    duration-200
                  "
                  alt="GitHub"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/shreyas-achar/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Image
                  src={LinkedInImage}
                  className="
                    w-5 h-5
                    hover:bg-zinc-100
                    hover:rounded-xs
                    transition-all
                    duration-200
                  "
                  alt="LinkedIn"
                />
              </a>

              <a
                href="https://leetcode.com/u/Shreyas_R_Achar1/"
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
              >
                <Image
                  src={Leetcodeimage}
                  className="
                    w-5 h-5
                    p-0.5
                    bg-zinc-100
                    rounded-xs
                    transition-transform
                    duration-200
                    hover:scale-110
                  "
                  alt="LeetCode"
                />
              </a>

              <a
                href="mailto:shreyasrock9999@gmail.com"
                aria-label="Email"
                className="
                  font-mono
                  text-xs
                  tracking-widest
                  uppercase
                  text-zinc-400
                  border
                  border-zinc-700
                  rounded-md
                  px-3
                  py-1
                  hover:text-white
                  hover:border-zinc-400
                  transition-colors
                  duration-200
                "
              >
                Email
              </a>
            </div>
          </div>

          {/* About */}
          <div className="w-full">
            <p className="font-mono text-lg sm:text-xl">About</p>

            <hr className="border-0.5 border-zinc-500 my-2" />

            <p
              className="
                font-mono
                text-sm
                sm:text-base
                md:text-md
                leading-relaxed
                text-justify
                text-zinc-200
              "
            >
              Hey, I&apos;m Shreyas. I&apos;m a Computer Science Engineering
              student at BMS College of Engineering, working across backend
              systems and machine learning. I like problems where the hard part
              is the engineering: resolving 22M+ multilingual business records
              with a LightGBM pairwise matcher, coordinating competing seat
              reservations through Redis-backed distributed locking, grounding
              an NLP assistant in a 701-verse corpus so every answer cites its
              source. I care about measurable results, reproducible pipelines
              and systems that stay correct under concurrency.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border border-zinc-800 rounded-xl px-4 py-3 bg-zinc-950/40"
              >
                <p className="among-font text-2xl sm:text-3xl text-zinc-100">
                  {stat.value}
                </p>
                <p className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileHero;
