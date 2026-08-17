import React, { useState } from 'react'

import { LuCopy, LuCopyCheck  } from "react-icons/lu";

function Lobby() {

  const [isCodeCopied, setIsCodeCopied] = useState(false);

  const handleCopy = () => {
    try{
      navigator.clipboard.writeText('E325QZ');
      setIsCodeCopied(true);
      setTimeout(() => {
        setIsCodeCopied(false);
      }, 3000);
    }catch(err){
      console.log(err);
      setIsCodeCopied(false);
    }
  }
  return (
    <div className='pre_room flex flex-col items-center gap-20 p-20'>
      <h1 className='text-4xl font-bold accent bg-clip-text text-transparent'>Amr's Room</h1>

      <div className="content flex justify-between w-1/2 text-white">
        <div className="players text-2xl flex flex-col gap-3">
          <p><span className='text-green-600'>Host: </span>Amr</p>
          <p><span className='text-green-600'>Guest: </span>Youssef</p>
        </div>

        <div className="room_code flex items-center gap-3 text-xl">
          <p><span className='text-green-600'>Room Code: </span>E325QZ</p>
          <button>{isCodeCopied ? <LuCopyCheck /> : <LuCopy onClick={handleCopy} className='cursor-pointer' />}</button>
        </div>
      </div>

      <div className="start_btn">
        <button className='accent font-bold flex items-center gap-2 py-3 px-6 rounded-lg cursor-pointer transition-all hover:scale-105'>Start Game</button>
      </div>
      
    </div>
  )
}

export default Lobby
