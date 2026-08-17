import React from 'react'

import { Link } from 'react-router-dom'

import { FaArrowRight } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";

function Home() {
  return (
    <header className='hero p-12'>
      <div className="content">
        <div className="h3 font-extrabold text-7xl text-white text-shadow-2xs flex flex-col">
          <span>Guess.</span>
          <span>Think.</span>
          <span className='accent bg-clip-text text-transparent'>Win.</span>
        </div>

        <p className="text-secondary text-2xl max-w-lg mt-5 mb-10">Test your football knowlage and prove you're a true football fan.</p>
      </div>

      <div className="btns flex gap-4">
        <Link to={'/play'} className='accent font-bold flex items-center gap-2 py-3 px-6 rounded-lg transition-all hover:scale-105'>
          PLAY NOW <FaArrowRight />
        </Link>

        <Link to={'/how-to-play'} className='flex items-center gap-2 py-3 px-6 rounded-lg font-bold text-white bg-secondary border-primary shadow transition-all hover:scale-105'>
          <FaRegQuestionCircle /> HOW TO PLAY
        </Link>
      </div>

      <div className="bottom_hero">

      </div>
    </header>
  )
}

export default Home
