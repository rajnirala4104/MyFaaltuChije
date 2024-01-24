import React, { useState } from 'react'
import { AnimationGif } from '../components'
import '../css/buttonAnimation.css'

export const Home = () => {

  const [myClass, setMyClass] = useState<string>("")
  const [positionValue, setPositionValue] = useState<number>(10)
  const randomNumber = Math.floor(Math.random() * 100)

  const hoverHandler = () => {
    setMyClass(`bg-red-500 translate-x-[${positionValue}rem] -translate-y-[${positionValue}rem]`)
    setPositionValue(0)
    console.log("hovered", randomNumber)
  }

  return (
    <React.Fragment>
      <section className='w-full h-screen bg-blue-400 flex justify-center items-center'>
        <div className="container flex justify-center items-center flex-col">
          <div className="title">
            <h1 className='text-4xl font-bold text-blue-900'>Do you wanna go out with me ?</h1>
          </div>
          <AnimationGif classes='my-6' srcPath="https://media.tenor.com/P5iiJiI_1tMAAAAi/please-begging.gif" />
          <div className='py-3 w-full flex justify-center items-center '>
            <span className='bg-blue-100 text-blue-950 text-2xl py-2 px-4 rounded-md cursor-pointer hover:bg-white font-semibold transition duration-400'>Yes</span>
            <span onMouseEnter={() => hoverHandler()} onClick={() => alert("Ooh!! no.. 😟")} className={`bg-blue-100 text-blue-950 text-2xl ${myClass} py-2 px-4 rounded-md mx-10 cursor-pointer  transition duration-400 font-semibold `}>No</span>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
