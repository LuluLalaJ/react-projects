import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import Question from './Question';
function App() {
  const [questions, setQuestions] = useState(data)

  const renderQuestions = questions.map( question => <Question key={question.id} {...question}/>)
  return(
    <main>
      <div className="container">
        <h3>Q&A</h3>
        <section className="info">
          {renderQuestions}
        </section>
      </div>
    </main>
  )
}

export default App;
