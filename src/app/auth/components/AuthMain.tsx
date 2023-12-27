'use client'
import React from 'react'
import SigninCard from './SigninCard'
import SignupCard from './SignupCard'
import { useState } from 'react';
export default function AuthMain() {
        const [showSignIn, setShowSignIn] = useState(true);
      
        const toggleCard = () => {
          setShowSignIn(!showSignIn);
        };
  return (
    <div className={`auth-main mx-auto mb-2 mt-1 rounded-xl prose prose-2xl flex relative z-10 ${showSignIn ? 'justify-start': 'justify-end'} `}>
        {showSignIn ? (
            <SigninCard toggleCard={toggleCard} />
        ) : (
            <SignupCard toggleCard={toggleCard} />
        )}
    </div>
  )
}
