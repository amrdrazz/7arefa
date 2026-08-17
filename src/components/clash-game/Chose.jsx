import React, { useState } from 'react'

function Chose() {
    const [playerName, setPlayerName] = useState('');
  return (
    <div className='chose_player'>
      <div className='flex justify-between'>
        <div className="player_input">
          <input 
            type="text"

          />
        </div>

        <div className="player_preview">

        </div>
      </div>
    </div>
  )
}

export default Chose
