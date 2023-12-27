import React from 'react'

export const handleLogin = async (email: string, password: string) => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        const accessToken = data.accessToken;
        localStorage.setItem('accessToken', accessToken);
        return accessToken;
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
    } catch (error) {
      throw new Error('An error occurred during login.');
    }
  };


export async function handleSignUp({fullname, username, email, password}:{fullname:string, username:string, email:string, password: string}) {
    try {
      const response = await fetch('http://localhost:3000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullname, username, email, password }),
      });
      
      if (response.ok) {
        const res = await handleLogin(email,password);
        if (res.ok) {
          const data = await response.json();
          const accessToken = data.accessToken;
          localStorage.setItem('accessToken', accessToken);
          return accessToken;
        } else {
          const errorData = await response.json();
          throw new Error(errorData.error);
        }
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
    }  catch (err) {
      return err
    }
}