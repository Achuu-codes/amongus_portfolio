import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Red_Character } from "../../public/characters/Characters";

function MyInfo() {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 select-text max-w-5xl mx-auto">
      {/* Top Section: Avatar & About */}
      <div className="text-zinc-700 font-mono flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
        <div className="flex-shrink-0 flex flex-col items-center gap-3">
          <Image
            src={Red_Character}
            className="h-64 sm:h-72 md:h-80 w-auto character-bob"
            alt="Shreyas R Achar"
          />
          <span className="text-xs tracking-[0.25em] text-zinc-500">
            CREWMATE
          </span>
        </div>

        <div className="flex-1 w-full px-2 md:px-0 text-center md:text-left">
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold">Shreyas R Achar</h1>
            <p className="text-base sm:text-lg text-gray-500 mt-1">
              backend &amp; ML engineer
            </p>
          </div>

          <div className="w-full">
            <p className="font-semibold">about</p>
            <hr className="border-t border-gray-400 my-2" />
            <p className="text-justify text-sm sm:text-base leading-relaxed">
              Hey, I&apos;m Shreyas. <br className="hidden sm:block" /> I&apos;m
              a Computer Science Engineering student at BMS College of
              Engineering who likes problems where the hard part is the
              engineering, not the framework. I work across backend systems and
              machine learning — REST APIs and concurrent booking flows on one
              side, entity-resolution pipelines and retrieval-augmented NLP on
              the other. Recent work includes resolving 22M+ multilingual
              business records with a LightGBM matcher, coordinating competing
              seat reservations with Redis-backed distributed locking, and
              grounding an NLP assistant in a 701-verse corpus. I care about
              measurable results, reproducible pipelines and code that holds up
              under load.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Details */}
      <div className="flex flex-col font-mono text-zinc-700 mt-8 sm:mt-12 space-y-8">
        {/* Skills */}
        <div className="flex flex-col">
          <p className="font-semibold">Skills</p>
          <hr className="border-t border-gray-400 my-2" />
          <div className="text-sm sm:text-base space-y-1">
            <p>
              <span className="font-semibold">Languages:</span> Python, C++,
              SQL, JavaScript, TypeScript, Bash
            </p>
            <p>
              <span className="font-semibold">Backend &amp; Systems:</span>{" "}
              Node.js, Express.js, FastAPI, REST APIs, Redis, Linux
            </p>
            <p>
              <span className="font-semibold">ML &amp; NLP:</span> PyTorch,
              Scikit-learn, LightGBM, SentenceTransformers, RAG, Embeddings
            </p>
            <p>
              <span className="font-semibold">Data &amp; Analytics:</span>{" "}
              Pandas, NumPy, DuckDB, Feature Engineering, Model Evaluation
            </p>
            <p>
              <span className="font-semibold">Databases:</span> PostgreSQL,
              MongoDB, MySQL
            </p>
            <p>
              <span className="font-semibold">Engineering:</span> Git, GitHub,
              Docker, GitHub Actions, pytest, Postman
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="flex flex-col">
          <p className="font-semibold">Experience</p>
          <hr className="border-t border-gray-400 my-2" />
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
            <p className="font-semibold text-base sm:text-lg">
              VikimediaTec{" "}
              <span className="font-light text-sm italic block sm:inline">
                SDE Intern
              </span>
            </p>
            <p className="mt-1 sm:mt-0 text-sm sm:text-base font-medium">
              Summer 2026
            </p>
          </div>
          <p className="text-sm sm:text-base mt-2 sm:mt-1">
            Developed and maintained backend REST APIs, debugged authentication
            and login failures by tracing frontend–backend interactions, and
            ran systematic API testing with Postman across authentication flows
            and error handling.
          </p>
        </div>

        {/* Education */}
        <div className="flex flex-col">
          <p className="font-semibold">Education</p>
          <hr className="border-t border-gray-400 my-2" />
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
            <p className="font-semibold text-base sm:text-lg">
              BMS College of Engineering{" "}
              <span className="font-light text-sm italic block sm:inline">
                Bengaluru, Karnataka
              </span>
            </p>
            <p className="mt-1 sm:mt-0 text-sm sm:text-base font-medium">
              2023 – Present
            </p>
          </div>
          <p className="text-sm sm:text-base mt-2 sm:mt-1">
            Bachelor of Engineering (B.E.) in Computer Science and Engineering —{" "}
            <span className="font-semibold break-words">CGPA: 8.75/10</span>
          </p>
          <p className="text-sm sm:text-base mt-3">
            Karkala Jnanasudha PU College — Class XII,{" "}
            <span className="font-semibold">96.66%</span> (2023)
          </p>
        </div>

        {/* Socials */}
        <div className="flex flex-col">
          <p className="font-semibold">Socials</p>
          <hr className="border-t border-gray-400 my-2" />
          <div className="flex flex-row gap-6 sm:gap-10 flex-wrap text-sm sm:text-base">
            <a
              href="https://www.linkedin.com/in/shreyas-achar/"
              className="underline hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Achuu-codes"
              className="underline hover:text-gray-900 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://leetcode.com/u/Shreyas_R_Achar1/"
              className="underline hover:text-yellow-600 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode
            </a>
            <a
              href="https://www.chess.com/"
              className="underline hover:text-emerald-700 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              Chess
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col">
          <p className="font-semibold">Contact</p>
          <hr className="border-t border-gray-400 my-2" />
          <p className="text-sm sm:text-base break-words">
            +91 99017 74190 <span className="hidden sm:inline mx-2">|</span>
            <span className="block sm:inline mt-1 sm:mt-0">
              shreyasrock9999@gmail.com
            </span>
          </p>
        </div>

        <Link href="/profile" className="text-black underline">
          Know more about me &gt;
        </Link>
      </div>
    </div>
  );
}

export default MyInfo;
