import './App.css'
import { Routes, Route } from "react-router-dom"

import HomePage from './Pages/HomePage/HomePage'
import BeersList from './Pages/BeersList/BeersList'
import Header from './Components/Header/Header'
import RandomBeer from './Pages/RandomBeer/RandomBeer'
import AddNewBeer from './Pages/AddNewBeer/AddNewBeer'
import OneBeer from './Pages/OneBeer/OneBeer'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route element={<Header />}>
          <Route path='/beers' element={<BeersList />} />
          <Route path='/beer/:id' element={<OneBeer />} />
          <Route path='/random-beer' element={<RandomBeer />} />
          <Route path='/new-beer' element={<AddNewBeer />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
