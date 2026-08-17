import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

    const links = [
        { text: 'Play', link: '/play' },
        { text: 'About', link: '/about' },
        { text: 'How To Play', link: '/how-to-play' }
    ]
  return (
    <nav className='fixed top-0 right-0 left-0 w-full flex justify-between items-center p-3  pl-12 pr-12 bg-secondary z-50'>
      <div className="logo text-3xl font-bold text-white">
        <Link to={'/'}><span className='accent bg-clip-text text-transparent'>7</span>arefa</Link>
      </div>

      <ul className="nav-links flex justify-evenly gap-2 list-none text-xl w-2/3">
        {
          links.map(( link, index ) => (
            <li key={index} className='text-secondary hover:font-bold hover:text-white'>
              <a href={link.link}>{link.text}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Nav
