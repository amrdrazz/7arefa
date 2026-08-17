import React, { useState } from 'react'

import {io} from 'socket.io-client'

import ClashPairing from '../components/clash-game/ClashPairing';
import GameRoom from '../components/clash-game/GameRoom';
import GameRun from '../components/clash-game/GameRun';

// const socket = io('http://localhost:3000');

function ClashGame() {
    const [paired, setPaired] = useState(false);
  return (
    <div className='clash_game '>
      {/* {paired ? <GameRoom /> : <ClashPairing socket={socket} />} */}
      <GameRun />
    </div>
  )
}

export default ClashGame
