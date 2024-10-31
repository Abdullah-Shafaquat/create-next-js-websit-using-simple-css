// src/app/project/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import "../projects/project.css";

export default function Project() {
  return (
    <div className="container">
      <div className="heading">
        <h1>𝓜𝔂 𝓟𝓻𝓸𝓳𝓮𝓬𝓽𝓼</h1>
      </div>

      <div className="grid">
        {/* Project 1 */}
        <div className="projectCard">
          <h2 className="projectTitle">ATM Machine</h2>
          <Image src="/project1.png" alt="ATM Machine" className="projectImage" width={300} height={250} />
          <Link href="https://updated-atm.vercel.app/" target="_blank" rel="noopener noreferrer">
            Click here
          </Link>
        </div>

        {/* Project 2 */}
        <div className="projectCard">
          <h2 className="projectTitle">Simple Calculator</h2>
          <Image src="/project2.png" alt="Simple Calculator" className="projectImage" width={400} height={300} />
          <Link href="https://calculator-neon-five-60.vercel.app/" target="_blank" rel="noopener noreferrer">
            Click here
          </Link>
        </div>

        {/* Project 3 */}
        <div className="projectCard">
          <h2 className="projectTitle">Number Guessing Game</h2>
          <Image src="/project3.png" alt="Number Guessing Game" className="projectImage" width={400} height={300} />
          <Link href="https://number-game-bice.vercel.app/" target="_blank" rel="noopener noreferrer">
            Click here
          </Link>
        </div>

        {/* Project 4 */}
        <div className="projectCard">
          <h2 className="projectTitle">Quiz</h2>
          <Image src="/project4.png" alt="Quiz" className="projectImage" width={400} height={300} />
          <Link href="https://quize-sage.vercel.app/" target="_blank" rel="noopener noreferrer">
            Click here
          </Link>
        </div>

        {/* Project 5 */}
        <div className="projectCard">
          <h2 className="projectTitle">Word Counter</h2>
          <Image src="/project5.png" alt="Word Counter" className="projectImage" width={400} height={300} />
          <Link href="https://word-counter-eight-chi.vercel.app/" target="_blank" rel="noopener noreferrer">
            Click here
          </Link>
        </div>

        {/* Project 6 */}
        <div className="projectCard">
          <h2 className="projectTitle">To-Do List</h2>
          <Image src="/project6.png" alt="To-Do List" className="projectImage" width={400} height={300} />
          <Link href="https://todo-list-eta-ecru.vercel.app/" target="_blank" rel="noopener noreferrer">
            Click here
          </Link>
        </div>

        {/* Project 7 */}
        <div className="projectCard">
          <h2 className="projectTitle">My Bank</h2>
          <Image src="/project7.png" alt="My Bank" className="projectImage" width={400} height={300} />
          <Link href="https://my-bank-nu.vercel.app/" target="_blank" rel="noopener noreferrer">
            Click here
          </Link>
        </div>

        {/* Project 8 */}
        <div className="projectCard">
          <h2 className="projectTitle">Student Management System</h2>
          <Image src="/project8.png" alt="Student Management System" className="projectImage" width={400} height={300} />
          <Link href="https://student-manegment-system.vercel.app/" target="_blank" rel="noopener noreferrer">
            Click here
          </Link>
        </div>

        {/* Project 9 */}
        <div className="projectCard">
          <h2 className="projectTitle">Currency Converter</h2>
          <Image src="/project9.png" alt="Currency Converter" className="projectImage" width={400} height={300} />
          <Link href="https://currency-converter-tawny-zeta.vercel.app/" target="_blank" rel="noopener noreferrer">
            Click here
          </Link>
        </div>

        {/* Project 10 */}
        <div className="projectCard">
          <h2 className="projectTitle">Countdown Timer</h2>
          <Image src="/project10.png" alt="Countdown Timer" className="projectImage" width={400} height={300} />
          <Link href="https://countdown-timer-iota-neon.vercel.app/" target="_blank" rel="noopener noreferrer">
            Click here
          </Link>
        </div>

        {/* Project 11 */}
        <div className="projectCard">
          <h2 className="projectTitle">My Resume</h2>
          <Image src="/project11.png" alt="Dynamic Resume Builder" className="projectImage" width={300} height={250} />
          <Link href="https://milestone-1-sage.vercel.app/" target="_blank" rel="noopener noreferrer">
            Click here
          </Link>
        </div>

        {/* Project 12 */}
        <div className="projectCard">
          <h2 className="projectTitle">Resume Builder</h2>
          <Image src="/project12.png" alt="Editable Resume Builder" className="projectImage" width={300} height={250} />
          <Link href="https://milestone-5-eta-two.vercel.app/" target="_blank" rel="noopener noreferrer">
            Click here
          </Link>
        </div>
      </div>
    </div>
  );
}
