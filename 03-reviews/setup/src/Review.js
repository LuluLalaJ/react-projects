import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {name, job, image, text, id} = people[index]

  const nextReview = () => {
    const new_index = (index+1)%people.length
    setIndex(new_index)
  }

  const prevReview = () => {
    let new_index = 0
    if (index == 0) {
      new_index = 3
    } else {
      new_index = (index-1)%people.length
    }
    setIndex(new_index)
  }

  const randomReview = () => {
    const new_index = Math.floor(Math.random() * people.length)
    setIndex(new_index)
  }


  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon"><FaQuoteRight /></span>
      </div>
      <h4 className="author">{name}, {id}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevReview}><FaChevronLeft /></button>
        <button className="next-btn" onClick={nextReview}><FaChevronRight /></button>
      </div>
      <button className="random-btn" onClick={randomReview}>surprise me</button>
    </article>
  )
};

export default Review;
