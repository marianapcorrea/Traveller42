import  { useEffect, useState } from 'react'

const FlightInfo = () => {
    const [data,setData]=useState([]);

    const getData = ()=> {
         fetch('countries.json',
         {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
         }
         ).then(function(response) {
           // console.log(response)
            return response.json();
         }).then(function(myJson) {
            //console.log(myJson);
            setData(myJson)
         });
        }
        useEffect(()=>{
            getData();
            //console.log(data)
        },[])

return (
    <>
        <section id="origin" className="block my-3">
        <label  className="block text-stone-400 ">From:</label>
        <select  className="block bg-cyan-800 rounded-2xl p-3 text-md w-full  ">
            <option defaultValue  >Origin of your flight</option>
            <option value="tst" >Teste</option>
        </select>
    </section>


    <section id="destination" className="block my-3">
        <label className="block text-stone-400 ">To:</label>
        <select  className="block bg-cyan-800 rounded-2xl p-3 text-md w-full  ">
            <option  defaultValue value="default">Your destination</option>
            <option value="tst" >Teste</option>

        </select>
    </section>
    <section id="travelDate" className="flex my-3">
        <span id="departure" className='mr-2'>
        <label className="block text-stone-400 ">Departure:</label>
        <input type="date"  className="block bg-cyan-800 rounded-2xl p-2 text-md w-full  "></input>
        </span>
        <span id="arrival">
        <label  className="block text-stone-400 ">Arrival:</label>
        <input type="date" className="block bg-cyan-800 rounded-2xl p-2 text-md w-full  "></input>
        </span>
    </section> 
    </>
  )
}

export default FlightInfo
