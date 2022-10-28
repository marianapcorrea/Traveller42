import React from 'react'

const TravellersInfo = () => {
  return (
      <section id="travellers"  className="flex my-4 text-stone-2 00 justify-between items-center text-xl">
        <label for="">Adults:</label>
        <input type="number" name="adultsNumber" id="adultsNumber" min='0'  className="flex justify-center w-full bg-cyan-800 rounded-2xl p-2 m-2" >
        </input>
            <label for="">Children:</label>
        <input 
        type="number" 
        name="childrenNumber" id="childrenNumber" min='0' 

        className="flex justify-center w-full bg-cyan-800 rounded-2xl p-2 m-2">
        </input>
    </section>
  )
}

export default TravellersInfo
