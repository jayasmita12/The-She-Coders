import React from 'react'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import backImg from "./assets/game-background-image.jpg";
import { useState } from 'react';
import {Outlet} from "react-router-dom"

const AuthSignInPage = ({setAccount}) => {
    
  return (
    <div className='p-4 sm:m-5 h-screen bg-[url("./assets/game-background-image.jpg")] sm:bg-none bg-cover  bg-no-repeat'>
    <div className="border-2  mx-auto rounded-tr-3xl rounded-bl-3xl w-full h-full  flex ">
      <div className="w-full hidden sm:flex">
        <img src={backImg} alt="" className="rounded-bl-3xl" />
      </div>
      {/* {setAccount ? <SignIn/> : <SignUp/>} */}
      <SignIn/>
      {/* <SignUp/> */}
    {/* <Outlet/> */}
    </div>
  </div>
  )
}

export default AuthSignInPage
