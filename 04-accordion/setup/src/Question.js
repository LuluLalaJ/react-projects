import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id, title, info}) => {
  const [isAnswerShown, setIsAnswerShown] = useState(false)

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={()=>setIsAnswerShown(!isAnswerShown)}>
          {isAnswerShown
        ? <AiOutlineMinus />
        : <AiOutlinePlus />}
        </button>
      </header>
      {/* {isAnswerShown
      ? <p>{info}</p>
      : null
      } */}
      {isAnswerShown && <p>{info}</p>}
    </article>
  )
};

export default Question;
