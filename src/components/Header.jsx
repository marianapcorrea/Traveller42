import React from 'react'

const Header = () => {
  return (
    <header className="flex flex-1 justify-center items-center flex-col bg-cyan-800	text-stone-100	" >
    <section className="flex flex-col justify-center items-center m-3 italic">
    <h1 className="mb-2 text-4xl font-bold font-mono uppercase">Traveller42</h1>
    <p className="text-xl font-semibold capitalize">Travel agency</p>
    </section >
    <section className="w-4/5 font-semibold ">
        <ul className="flex flex-row flex-1 justify-around items-center m-2 text-stone-200">
            <li className='hover:bg-cyan-600 px-4 py-2 rounded-lg'><a href="#">Home</a></li>
            <li className='hover:bg-cyan-600 px-4 py-2 rounded-lg'><a href="#">About Us</a></li>
            <li className='hover:bg-cyan-600 px-4 py-2 rounded-lg'><a href="#">Contacts</a></li>
        </ul>
        </section>
    </header>
  )
}

export default Header
