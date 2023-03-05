import React from 'react'
import { Link } from 'react-router-dom'

import beers from '../../assets/beers.png'
import randombeer from '../../assets/new-beer.png'
import newbeer from '../../assets/random-beer.png'

const HomePage = () => {
  return (
    <div className='HomePage'>

      <div className='AllBeers'>
        <picture><img src ={beers} alt='All Beers'/></picture>
        <Link to='/beers'>All Beers</Link>
        <p>See all the beers we have register here.</p>
      </div>

      <div className='RandomBeer'>
        <picture><img src={randombeer} alt='Random Beer'/></picture>
        <Link to='/random-beer'>Random Beer</Link>
        <p>Find a random beer.</p>
      </div>

      <div className='NewBeer'>
        <picture><img src={newbeer} alt='New Beer'/></picture>
        <Link to='/new-beer'>New Beer</Link>
        <p>Add a new beer that you like but didn't find here in the list.</p>
      </div>

    </div>
  )
}

export default HomePage