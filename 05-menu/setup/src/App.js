import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
//interesting syntax, using Set class to create unique list
const categories = ['all', ...new Set(items.map(item => item.category))]


function App() {
  const [menu, setMenu] = useState(items)
  const [category, setCategory] = useState('all')

  const renderedMenuItems = menu.filter(item => {
    if (category === 'all') {
      return true
    } else {
      return item.category === category
    }
    // return (true || item.category === category)
  })

  const filterByCategory = (category) => {
    setCategory(category)
  }

  const renderMenu = renderedMenuItems.map(item => <Menu key={item.id} {...item}/>)

  return(
    <main>
      <section className="menu">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterByCategory={filterByCategory}/>
        {/* <div className="btn-container">
          <button type="button" className="filter-btn" onClick={(e)=>filterByCategory(e.target.textContent)}>all</button>
          <button type="button" className="filter-btn" onClick={(e)=>filterByCategory(e.target.textContent)}>breakfast</button>
          <button type="button" className="filter-btn" onClick={(e)=>filterByCategory(e.target.textContent)}>lunch</button>
          <button type="button" className="filter-btn" onClick={(e)=>filterByCategory(e.target.textContent)}>shakes</button>
        </div> */}
        <div className="section-center">
          {renderMenu}
        </div>
      </section>
    </main>
  )
}

export default App;
