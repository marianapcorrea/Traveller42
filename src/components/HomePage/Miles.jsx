import React from 'react'

const Miles = () => {
  return (
    <section id="miles"  className="my-4 text-stone-200 ">
    <label for="" className="block mb-2">Use air miles:</label>
    <input type="range" name="miles" id="miles" min="0" max="100000" defaultValue className="accent-cyan-900 w-full accent-h-6"></input>
</section>
  )
}

export default Miles
