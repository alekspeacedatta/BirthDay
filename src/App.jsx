import './App.css'
import people from './data'
import React, { useState, useEffect } from 'react'
import ubraloses from "./images/ubraloses.jpg"
function App() {
  const [person, setPerson] = React.useState(people);
  return (
    
    <div className='list-parent'>
      <h2> {person.length} Birthdays Today </h2>
      <div className='list'>
          {person.map((person, index) => (
                <div key={index} className='person'>
                  <img src={person.img} alt={person.alt} />
                  <section>
                    <h2>{person.name}</h2>
                    <p>age: {person.age}</p>
                  </section>
                </div>
          ))}
      </div>
      <section className='btns'>
        <button onClick={() => {setPerson([])}}>remove all</button>
        <button onClick={() => {setPerson([...person, {name: "aleksandre", age: 20, img: ubraloses, alt: "aleksandres img"}])}}>add person</button>
      </section>
    </div>
    
  )
}

export default App
