import React from 'react'

const BodyTourBox = () => {
  return (
    <>
    <h1 id="title"></h1>
    <form>
    <section id="origin">
        <label for="">From:</label>
        <select id="">
            <option value=""></option>
        </select>
    </section>
    <section id="destination">
        <label for="">To:</label>
        <select id="">
            <option value=""></option>
        </select>
    </section>
    <section id="travelDate">
        <span id="departure">
        <label for="">Departure:</label>
        <input type="date"id=""></input>
        </span>
        <span id="arrival">
        <label for="">Arrival:</label>
        <input type="date"id=""></input>
        </span>
    </section>    
    <section id="travellers">
        <span id="adults">
            <label for="">Adults:</label>
        </span>
        <span id="children">
            <label for="">Children:</label>
        </span>
    </section>
    <section id="flighCategory">
        <span id="economic"></span>
        <span id="executive"></span>
    </section>
    <section id="miles">
        <label for="">Use air miles:</label>
        <input type="range"></input>
    </section>
    <button type="button">Search Flight</button>
    </form>
    </>
  )
}

export default BodyTourBox
