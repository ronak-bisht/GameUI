

import React from 'react'


import { redirect } from 'next/navigation';



 //login form page
const LoginForm = () => {


  //login form action to handle form data
  async function login(data) {
    "use server";
    
    const email = data.get("email");
    const password = data.get("password");

   
    if (email && password) {
      redirect("/dashboard");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <p className='text-center font-bold text-[#6b6b6b]'>Type any dummy email and password</p>
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Sign in to your account
          </h2>
        </div>



        {/* login form */}
        <form action={login} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none bg-gray-900 rounded-none relative block w-full px-3 py-2  placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-gray-700 focus:border-gray-700 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={'password'}
                required
                className="appearance-none mt-4 bg-gray-900 text-white rounded-none relative block w-full px-3 py-2  placeholder-gray-500 rounded-b-md focus:outline-none focus:ring-gray-700 focus:border-gray-700 focus:z-10 sm:text-sm pr-10"
                placeholder="Password"
              />
              {/* <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button> */}
            </div>
          </div>

         

          <div>
            <button
              type="submit"
              className="group  relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;