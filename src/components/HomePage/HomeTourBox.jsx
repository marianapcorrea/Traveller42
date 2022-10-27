import React from 'react'
import FlightClass from './FlightClass'

const HomeTourBox = () => {
  return (
    <section id="tourBox" className="w-1/2 m-8  flex flex-col flex-1  justify-center items-center ">
    <div className=' flex justify-center flex-col items-center p-6  bg-cyan-800/80 h-fit rounded-2xl'>
    <h3 id="title" className="m-5 text-2xl font-extrabold font-mono ">Plan your dream travel!</h3>
    <form>
    <section id="origin" className="block my-3">
        <label for="" className="block text-stone-400 ">From:</label>
        <select id="" className="block bg-cyan-800 rounded-2xl p-3 text-md w-full  ">
            <option defaultValue  >Origin of your flight</option>
            <option value="tst" >Teste</option>
        </select>
    </section>
    <section id="destination" className="block my-3">
        <label for="" className="block text-stone-400 ">To:</label>
        <select id="" className="block bg-cyan-800 rounded-2xl p-3 text-md w-full  ">
            <option  defaultValue value="">Your destination</option>
            <option value="tst" >Teste</option>

        </select>
    </section>
    <section id="travelDate" className="flex my-3">
        <span id="departure" className='mr-2'>
        <label for=""  className="block text-stone-400 ">Departure:</label>
        <input type="date"id=""  className="block bg-cyan-800 rounded-2xl p-2 text-md w-full  "></input>
        </span>
        <span id="arrival">
        <label for=""  className="block text-stone-400 ">Arrival:</label>
        <input type="date"id="" className="block bg-cyan-800 rounded-2xl p-2 text-md w-full  "></input>
        </span>
    </section>    
    <section id="travellers"  className="flex my-4 text-stone-2 00 justify-between text-xl">
        <span id="adults">
            <label for="">Adults:</label>
        </span>
        <span id="children">
            <label for="">Children:</label>
        </span>
    </section>
    <FlightClass/>
    <section id="miles"  className="my-4 text-stone-200 ">
        <label for="" className="block mb-2">Use air miles:</label>
        <input type="range" className="accent-cyan-900 w-full accent-h-6"></input>
    </section>
    </form>
    <button type="button" className="flex flex-1 content-center justify-center mb-4 bg-cyan-800 p-4 rounded-2xl border-cyan-900 border-2 hover:border-4 active:bg-cyan-600">Search Flight</button>
    </div>
    </section>
  )
}

export default HomeTourBox
