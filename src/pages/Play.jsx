import React from 'react'

import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import GuessImg from '../imgs/hero.png';

function Play() {

    const games = [
        {
            title: 'GUESS',
            disc: 'Guess the footballer from the clues.',
            img: GuessImg,
            link: '/play/guess'
        }
    ]

  return (
    <div className='play flex flex-col items-center pt-5'>
        <div className="text flex flex-col items-center gap-4 mb-10">
            <h1 className='text-2xl text-green-500'>Play</h1>

            <h3 className='text-5xl max-sm:text-2xl text-white font-medium'>CHOOSE YOUR GAME</h3>
            <p className='text-secondary text-2xl max-sm:text-lg'>Challenge yourself with our fooball games.</p>
        </div>

        <div className="games flex justify-between gap-6 flex-wrap px-12  mb-3">
            {
                games.map((game, i) => (
                    <div key={i} className="card flex flex-col items-center gap-4 border-primary bg-secondary rounded-2xl p-5">
                        <div className="img max-w-48">
                            <img src={game.img} alt="" className='w-full' />
                        </div>

                        <div className="title">
                            <h2 className='text-white text-3xl font-bold'>{game.title}</h2>
                        </div>

                        <div className="disc max-w-48">
                            <p className='text-lg text-secondary'>{game.disc}</p>
                        </div>

                        <Link to={game.link} className='accent text-lg font-bold flex items-center gap-2 py-3 px-6 rounded-lg transition-all hover:scale-105'>
                            <FaArrowRight /> PLAY NOW <FaArrowRight />
                        </Link>
                    </div>
                ))
            }

            <div className="card flex flex-col items-center gap-4 border-primary bg-secondary rounded-2xl p-5">
                <div className="img max-w-48">
                    <img src={GuessImg} alt="" className='w-full' />
                </div>

                <div className="title">
                    <h2 className='text-white text-3xl font-bold'>COMMING</h2>
                </div>

                <div className="disc max-w-48">
                    <p className='text-lg text-secondary'>More exiting games are on th way.</p>
                </div>

                <Link to='/play' className='border-primary text-secondary text-lg font-bold flex items-center gap-2 py-3 px-6 rounded-lg cursor-default'>
                    COMMING SOON
                </Link>
            </div>

            <div className="card flex flex-col items-center gap-4 border-primary bg-secondary rounded-2xl p-5">
                <div className="img max-w-48">
                    <img src={GuessImg} alt="" className='w-full' />
                </div>

                <div className="title">
                    <h2 className='text-white text-3xl font-bold'>COMMING</h2>
                </div>

                <div className="disc max-w-48">
                    <p className='text-lg text-secondary'>More exiting games are on th way.</p>
                </div>

                <Link to='/play' className='border-primary text-secondary text-lg font-bold flex items-center gap-2 py-3 px-6 rounded-lg cursor-default'>
                    COMMING SOON
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Play
