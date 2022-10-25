import React from 'react'
import HomeBodyTourBox from './HomeBodyTourBox'

const HomeBody = () => {
  return (
    <main className="h-3/4 flex flex-1 flex-row text-stone-200 items-center bg-[url('assets/plain.jpg')] bg-no-repeat	bg-cover">
    <section id="textArea" className="w-1/2 mx-2 flex flex-1 justify-center items-center p-6 bg-cyan-600/25 rounded-2xl">
        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam urna, ullamcorper et elit sed, iaculis egestas sapien. Fusce in mauris porta, venenatis quam eget, maximus libero. </p>
    </section>
        <HomeBodyTourBox/>
    </main>
  )
}

export default HomeBody
