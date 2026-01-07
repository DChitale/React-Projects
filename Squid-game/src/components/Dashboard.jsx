import React from 'react'

const Dashboard = () => {
  return (
    <div className='h-full w-full'>
    <div className=''>
        <img className='absolute top-0 left-15 h-200 w-200'src="https://ik.imagekit.io/dchitale/Squid%20Game/name%20logo.png" alt="" />
    </div>
    <div className=' absolute top-150 left-50 max-w-100 text-justify text-white'>
        <h3>
            Squid Game turns childhood games into a brutal test of survival. Drawn by debt and desperation, players risk everything for one final chance, where each round strips away innocence and reveals the true cost of hope.
        </h3>
    </div>
    <div>
        <img className='absolute w-150 right-40' src="https://ik.imagekit.io/dchitale/Squid%20Game/character-Photoroom.png" alt="" />
    </div>
    </div>
  )
}

export default Dashboard