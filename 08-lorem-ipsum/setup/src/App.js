import React, { useState } from 'react';
import data from './data';
function App() {
  const [text, setText] = useState([])
  const [numOfParagraph, setNumOfParagraph] = useState(1)

  const paragraphDisplayed = text

  const generateText = (e) => {
    e.preventDefault();
    let num = parseInt(numOfParagraph)
    setText(data.slice(0, num))
  }

  return (
  <section className="section-center">
    <h3>tired of boring lorem ipsum?</h3>
    <form className="lorem-form" onSubmit={e => generateText(e)}>
      <label htmlFor="amount">paragraphs</label>
      <input type="number" name="amount" id="amount" min="1"
      step="1" max="8" value={numOfParagraph} onChange={(e)=>setNumOfParagraph(e.target.value)
      }
      />
      <button className="btn">generate</button>
      <article className="result">
        {text.map( paragraph => {
          return(
            <p>{paragraph}</p>
          )
        })}
      </article>
    </form>
  </section>
    )
}

export default App;
