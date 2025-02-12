import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  const prevSlide = () => {
    setIndex(oldIndex => {
      const result = ((index-1 + people.length) % people.length)
      return result
    })
  }

  const nextSlide = () => {
    setIndex(oldIndex => {
      const result = ((index + 1) % people.length)
      return result
    })
  }

  useEffect(()=> {
    const autoslide = setInterval(() => {
      setIndex(index => (index + 1) % people.length)
    }, 3000)
    return () => {
      clearInterval(autoslide)
    }
  }, [index])

  return(
    <section className="section">
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map( (person, personIndex) => {
        const {id, image, name, title, quote} = person
        let position = "nextSlide"
        if (personIndex === index) {
          position = "activeSlide"
        } else if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
          ) {
          position = "lastSlide"
        }
        return(
          <article className={position}>
            <img src={image} alt={name} className="person-img" />
            <h5>{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            < FaQuoteRight className='icon'/>
          </article>
        )
      })}
        <button className='prev' onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App;
