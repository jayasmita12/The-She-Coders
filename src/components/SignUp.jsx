import React from 'react'
import {Link } from "react-router-dom"


const SignUp = () => {
  return (
    <div className='w-full  flex justify-center items-center p-5'>
      <form className='flex flex-col space-y-10' action="">
          <h3 className='font-bold text-white sm:text-black'>SIGN UP</h3>
          <div className='space-y-5'>
          <input type="text" placeholder='User name' className='border-b-2 text-white  placeholder:text-white sm:text-black placeholder:sm:text-black p-1 bg-transparent w-full focus:border-0'/>
          <input type="email" placeholder='Email' className='border-b-2 text-white sm:text-black placeholder:text-white placeholder:sm:text-black  p-1 bg-transparent w-full' />
          <input type="password" placeholder='Password' className='border-b-2 text-white sm:text-black placeholder:text-white placeholder:sm:text-black  p-1 bg-transparent w-full' />
          </div>
          <div className="text-gray-400">Already have an account ? <Link to="/" className='text-blue-600 underline'>Sign In</Link></div>
          <Link to="/dashboard"><button  className='w-full py-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white'>SIGN UP</button></Link>
          <div className='flex space-x-3'>
              <hr  className='w-full bg-black'/>
              <span>o</span>
              <hr  className='w-full bg-black'/>
          </div>
      </form>
    </div>
  )
}

export default SignUp
