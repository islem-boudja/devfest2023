'use client'
import React from 'react'
import { useState } from 'react';
import { handleSignUp } from '@/lib/api';
export default function SignupCard({toggleCard}: {toggleCard: any}) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const body = {
            fullname,
            password,
            username,
            email
          };
        const res = await handleSignUp(body);
        console.log(res);
        if(!res.ok){
            setError('Email or password is incorrect.');
        }
    }

  return (
    <div className={`sign-in-card sign-up-card rounded-xl w-1/2 min-h-90 bg-violet-900 px-16 pb-20`}>
        <h1 className='text-white font-bold mb-0'>Sign up</h1>
        <p>Sign up to enjoy the feature of Taleo</p>
        <form className='sign-in-form' onClick={(e:any) => handleSubmit(e)}>
            <input type="text" name="fullname" placeholder='Fullname' id='fullname' className='rounded-md p-2 my-3' onChange={(e) => setFullname(e.target.value)}/>
            <input type="password" name="password" placeholder='Password' className='rounded-md p-2 my-3' onChange={(e) => setPassword(e.target.value)}/>
            <input type="text" name="username" placeholder='Username' className='rounded-md p-2 my-3' onChange={(e) => setUsername(e.target.value)}/>
            <input type="email" name="email" placeholder='Email' className='rounded-md my-3 p-2' onChange={(e) => setEmail(e.target.value)}/>
            <button className='sign-in-btn rounded-md text-white font-semibold w-72 mt-3 py-1 px-4'>Sign Up</button>
        </form>
        <p>Already have an account ?? {' '}
            <button className='text-white font-semibold cursor-pointer' onClick={toggleCard}> Sign In</button>
        </p>
    </div>
  )
}
