import React from "react";
import Vent from "../Vent";
import SecurityRoom from "./SecurityRoom";
import {
  AmazonImage1,
  AmazonImage2,
  AmazonImage3,

  CollegeGramImage1,
  CollegeGramImage2,

  BookMyScreenImage1,
  BookMyScreenImage2,

  ArjunKrishnaImage1,
  ArjunKrishnaImage2,

  UidaiImage1,
  UidaiImage2,
} from "../../assets/projects/ProjectImages";
import MappedProjects from "./MappedProjects";

const projectsArray = [
  {
    name: "Amazon ML Challenge",
    content:
      "A multilingual entity-resolution pipeline matching business records across 3 independent data sources — 22M+ records resolved against 2.2M reference entities. A DuckDB multi-pass blocking strategy cuts an ~11-trillion-pair search space to 125M candidates, and a LightGBM pairwise classifier over 23 engineered similarity features scores them, reaching 0.854 macro F0.5 on a 442K-entity held-out validation set.",
    link: "https://github.com/Achuu-codes",
    githubLink: "https://github.com/Achuu-codes",
    tech: ["Python", "LightGBM", "DuckDB", "RapidFuzz", "Pandas", "NumPy"],
    images: [AmazonImage1, AmazonImage2, AmazonImage3],
  },
  {
    name: "CollegeGram",
    content:
      "A college-focused discussion platform supporting Q&A, social posts, threaded discussions and contribution-based leaderboards. REST APIs and persistence models cover posts, questions, answers, comments, profiles and voting, with feed-oriented retrieval for threaded conversations and leaderboard state maintained across MongoDB and Redis.",
    link: "https://github.com/Achuu-codes/CollegeGram",
    githubLink: "https://github.com/Achuu-codes/CollegeGram",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Redis"],
    images: [CollegeGramImage1, CollegeGramImage2],
  },
  {
    name: "BookMyScreen",
    content:
      "A concurrent ticket booking system built around seat allocation under contention. Redis-based distributed seat locking coordinates competing booking requests before anything reaches the database, while PostgreSQL holds durable booking state — the flow modelled explicitly around transaction boundaries, lock expiry and failure handling between temporary reservation and confirmation.",
    link: "https://github.com/Achuu-codes/BOOKMYSCREEN",
    githubLink: "https://github.com/Achuu-codes/BOOKMYSCREEN",
    tech: ["React", "TypeScript", "Express.js", "PostgreSQL", "Redis"],
    images: [BookMyScreenImage1, BookMyScreenImage2],
  },
  {
    name: "Arjun-Krishna",
    content:
      "An evidence-grounded retrieval-augmented NLP assistant over a corpus of 701 Bhagavad Gita verses. A preprocessing pipeline handles source validation, normalization, JSONL generation, embedding creation and metadata indexing; retrieval runs on SentenceTransformers embeddings with cosine similarity, and every response is grounded in the retrieved passages with metadata carried through for attribution.",
    link: "https://github.com/Achuu-codes/Arjun-Krishna",
    githubLink: "https://github.com/Achuu-codes/Arjun-Krishna",
    tech: ["Python", "FastAPI", "SentenceTransformers", "ChromaDB", "Docker"],
    images: [ArjunKrishnaImage1, ArjunKrishnaImage2],
  },
  {
    name: "Aadhaar Analytics",
    content:
      "A UIDAI Hackathon platform integrating heterogeneous Aadhaar datasets of 100K+ records. Pandas and NumPy workflows handle cleaning, transformation and exploratory analysis to surface distribution patterns, inconsistencies and relationships across demographic and enrollment data, exposed through a Flask interface backed by MongoDB.",
    link: "https://github.com/Achuu-codes",
    githubLink: "https://github.com/Achuu-codes",
    tech: ["Python", "Pandas", "NumPy", "MongoDB", "Flask"],
    images: [UidaiImage1, UidaiImage2],
  },
];

function ProjectsMain() {
  return (
    <main className="among-font min-h-screen w-full">
      <Vent path="/skills" side="right" open={true} className="w-15 h-15" />

      <div className="flex flex-col items-center pt-10">
        <p className="text-6xl">Projects</p>
      </div>

      {/* Responsive layout: row on desktop, column on mobile */}
      <div className="flex flex-col lg:flex-row w-full items-center gap-8 lg:gap-16 pr-0 lg:pr-12">
        <div className="flex-shrink-0">
          <SecurityRoom />
        </div>
        <div className="flex-1 flex justify-center py-4 lg:py-10 w-full">
          <MappedProjects projects={projectsArray} />
        </div>
      </div>
    </main>
  );
}

export default ProjectsMain;
