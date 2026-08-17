import React, { useState } from 'react'
import Revel from './Revel';

function GameRun() {

  const [reveled, setReveled] = useState(false);
  return (
    <div className='game-run'>
      <h1>Highest (Pace) game</h1>
      <div className="round">
        <div className="round_config">
          <h2>Condition: Your player must be playing in Primeir league</h2>
          <h2>Position: Striker</h2>
        </div>

        <div className="round_body">
          { reveled ? <Revel /> : <Chose /> }
        </div>
      </div>
    </div>
  )
}

export default GameRun
