import React from 'react'

function Footer() {
  return (
    <footer className='bg-[#202938] flex items-center justify-evenly fixed bottom-0 left-0 right-0 p-3'>
      <p className='text-3xl max-sm:text-2xl font-bold text-white'><span className="accent bg-clip-text text-transparent">7</span>AREFA</p>
      <p className='text-xl max-sm:text-lg font-bold text-secondary'>
        By 
        
        <a 
            href="https://amr-mohamed-portfolio-one.vercel.app/" 
            target="_blank" 
            className='accent bg-clip-text text-transparent ml-2'
        >
            Amr Mohamed
        </a>
      </p>
    </footer>
  )
}

export default Footer
