import React from 'react'
import AuthHeader from './components/AuthHeader'
import AuthMain from './components/AuthMain'
import lighSvg  from '../../../public/Articles Right Lights.svg'
import circle from '../../../public/images/Group 52.png'
export default function Auth() {
  return (
      <div className='auth-page min-h-screen overflow-hidden'>
        <img src={lighSvg.src} alt="" className='absolute top-0 left-0 h-96 w-96 -z-0 opacity-65'/>
        <img src={lighSvg.src} alt="" className='absolute bottom-0 right-0 w-1/2 h-1/2 -z-0 opacity-65'/>
        <img src={circle.src} alt="" className='absolute top-0 right-0 w-72 h-72 -z-0 opacity-65'/>
        <img src={circle.src} alt="" className='absolute bottom-0 h-72 left-0 -z-0 opacity-65'/>
        <AuthHeader />
        <AuthMain />
      </div>
  )
}

