import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [people, setPeople] = useState(data)
  const renderList = people.map(person => {
    return <List person={person} key={person.id}/>
  })

  return(
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        {people
        ? renderList
        : null}
        <button onClick={()=>setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App;
