import React, { useState } from 'react'
import GameRun from './GameRun';
import Lobby from './Lobby';

function GameRoom() {
  const [gameStarted, setGameStarted] = useState(false);
  return (
    <>
      {gameStarted ? <GameRun /> : <Lobby />}
    </>
  )
}

export default GameRoom
