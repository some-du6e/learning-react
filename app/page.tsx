'use client';
import Image from "next/image"
import Counter from "./counter"

export default function Home() {
  return (
    <>
      <div className="border-pink-500 flex flex-col h-screen justify-center items-center border-pink-600 border-2 ">
        <div className="border-pink-500 flex flex-col  justify-center items-center border-2 p-20 rounded-xl">
          <h1 className="text-pink-600 text-3xl font-bold ">Counter.</h1>
        <Counter />
        </div>
      </div>
      
    </>
    
  )
}
