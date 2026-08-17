import React, { useState } from 'react'

function ClashPairing({socket}) {

    const [name, setName] = useState('');
    const [roomCode, setRoomCode] = useState('');

    const createRoom = async () => {
        await socket.emit('create-room', name);

        console.log('room-created');
    }

    const joinRoom = async () => {
        await socket.emit('join-room', { name, roomCode });
        console.log('joined', roomCode);
    }

  return (
    <div className='h-screen flex flex-col gap-3 items-center justify-center'>
      <input 
        type="text"
        placeholder='Inter your name...'
        value={name}
        className='p-3 rounded-lg w-60 text-lg text-white border bg-secondary'
        onChange={(e) => {setName(e.target.value)}}
      />
      <button 
        onClick={createRoom}
        className='border bg-green-700 text-black text-xl rounded-xl p-3 cursor-pointer'
      >Create Room</button>

      <input 
        type="text"
        placeholder='Inter room code...'
        value={roomCode}
        className='p-3 rounded-lg w-60 text-lg text-white border bg-secondary'
        onChange={(e) => {setRoomCode(e.target.value)}}
      />

      <button 
        onClick={joinRoom}
        className='border bg-green-700 text-black text-xl rounded-xl p-3 cursor-pointer'
      >Join room</button>
    </div>
  )
}

export default ClashPairing
