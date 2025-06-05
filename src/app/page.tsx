<<<<<<< HEAD
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
=======
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  EnvelopeIcon, 
  PhoneIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  const [showContact, setShowContact] = React.useState(false)

  const projects = [
    {
      title: "Project 1",
      description: "A brief description of your first project.",
      url: "#"
    },
    {
      title: "Project 2",
      description: "A brief description of your second project.",
      url: "#"
    },
    {
      title: "Project 3",
      description: "A brief description of your third project.",
      url: "#"
    },
  ]

  return (
    <div className="space-y-16">
      {/* Header Section */}
      <section className="text-center space-y-6">
        <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="Preston Schlagheck"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold">Preston Schlagheck</h1>
        <p className="text-xl text-slate-300">
          Finance & Computer Science Student at University of South Carolina<br />
          Darla Moore School of Business
        </p>
        <div className="flex justify-center gap-4">
          <a href="/resume.pdf" className="btn-primary flex items-center gap-2">
            <ArrowDownTrayIcon className="w-5 h-5" />
            Resume
          </a>
          <a href="https://www.linkedin.com/in/preston-schlagheck/" className="btn-primary" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section>
        <h2 className="section-title">About Me</h2>
        <div className="bg-slate-800 p-6 rounded-xl">
          <p className="text-slate-300">
            I'm a Finance major and Computer Science minor at the University of South Carolina, actively involved in Sigma Phi Epsilon and Alpha Kappa Psi. With a background in the service industry and several internships, I've developed strong adaptability and problem-solving skills. I'm passionate about investments and aim to combine my interests in finance, AI, and coding to create innovative solutions in the field.
          </p>
        </div>
      </section>

      {/* Key Involvements Section */}
      <section>
        <h2 className="section-title">Key Involvements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Alpha Kappa Psi</h3>
            <p className="text-slate-300">Member, Beta Upsilon Chapter, since April 2025. Involved in professional development and networking activities.</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Sigma Phi Epsilon</h3>
            <p className="text-slate-300">Member since October 2024. Served as Graphic & Apparel Design Chair, Mental Health Chair, and ACE Chair. Active in Finance, Recruitment, Programming, and Communications committees.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              className="project-card group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-slate-300">{project.description}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <button
          onClick={() => setShowContact(!showContact)}
          className="btn-primary mb-4"
        >
          Contact Me
        </button>
        {showContact && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <a href="tel:9593330277" className="btn-primary flex items-center justify-center gap-2">
              <PhoneIcon className="w-5 h-5" />
              (959) 333-0277
            </a>
            <a href="mailto:prestonschlagheck@gmail.com" className="btn-primary flex items-center justify-center gap-2">
              <EnvelopeIcon className="w-5 h-5" />
              prestonschlagheck@gmail.com
            </a>
          </motion.div>
        )}
        <div className="flex justify-center gap-6 mt-8">
          <a href="https://www.linkedin.com/in/preston-schlagheck/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="https://github.com/your-username" className="social-icon" target="_blank" rel="noopener noreferrer">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/prestonschlagheck/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
} 
>>>>>>> 74c1024c777f223f6fe80db36b5f921d44ed95a0
