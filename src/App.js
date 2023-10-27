import React, { useState, useEffect } from 'react'
import Menu from './components/Menu'
import NewsGrid from './components/NewsGrid'
import NavbarDark from './components/Navbar'
// import { computeHeadingLevel } from '@testing-library/react'

function App() {
const [items, setItems] = useState([])
const [active, setActive] = useState(1)
const [category, setCategory] = useState("general")

useEffect(() => {

  // fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=7329c421b0f2438aa169de0718b041ce`)
  fetch(`https://gnews.io/api/v4/top-headlines?country=us&max=1&category=${category}&apikey=20f4b17d78ba108bb6b9ff689b85090d`)
  .then(res => res.json())
  .then(data => setItems(data.articles))
  // .then(data => console.log(data.articles))

}, [category])

  return (
    <div className="App">
      <NavbarDark />
      <h1 className="title text-red-300">See The Latest News</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory}/>
      <NewsGrid items={items}/>
    </div>
  )
}

export default App
