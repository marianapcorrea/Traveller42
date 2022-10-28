import React from 'react'
import FlightClass from './FlightClass'
import FlightInfo from './FlightInfo'
import Miles from './Miles'
import TravellersInfo from './TravellersInfo'

const HomeTourBox = () => {
  return (
    <section id="tourBox" className="w-1/2 m-8  flex flex-col flex-1  justify-center items-center ">
    <div className=' flex justify-center flex-col items-center p-6  bg-cyan-800/80 h-fit rounded-2xl'>
    <h3 id="title" className="m-5 text-2xl font-extrabold font-mono ">Plan your dream travel!</h3>
    <form>
    <FlightInfo/>
    <TravellersInfo/>
    <FlightClass/>
   <Miles/>
    </form>
    <button type="button" className="flex flex-1 content-center justify-center mb-4 bg-cyan-800 p-4 rounded-2xl border-cyan-900 border-2 hover:border-4 active:bg-cyan-600">Search Flight</button>
    </div>
    </section>
  )
}

export default HomeTourBox
