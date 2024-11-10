// app/actions/auth.js
'use server'

import { cookies } from 'next/headers'

export async function loginAction(prevState, formData) {
  // Validate the form data server-side
  const email = formData.get('email')
  const password = formData.get('password')
  const remember = formData.get('remember-me')

  // Basic validation
  if (!email || !password) {
    return {
      error: 'Email and password are required'
    }
  }

  if (password.length < 6) {
    return {
      error: 'Password must be at least 6 characters'
    }
  }

  try {
    // Here you would typically:
    // 1. Hash the password
    // 2. Check credentials against your database
    // 3. Create a session
    // This is a simulation for demo purposes
    await new Promise(resolve => setTimeout(resolve, 1000))

    if (remember) {
      // Set a cookie that lasts 30 days
      cookies().set('session', 'demo-session', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 30 // 30 days
      })
    }

    return { success: true }
  } catch (error) {
    console.error('Login error:', error)
    return {
      error: 'Invalid credentials'
    }
  }
}