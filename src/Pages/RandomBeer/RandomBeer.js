import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import OneRandomBeer from '../OneBeer/OneRandomBeer'


function RandomBeer () {
  const [randomBeer, setRandomBeer ] = useState(null)

  useEffect(() => {
    async function fetchRandomBeer() {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        // console.log('response.data', response.data)
        setRandomBeer(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchRandomBeer()
  }, [])

  if (!randomBeer) {
    return <div>Loading...</div>
  }

  return (
    <div className='RandomBeer'>
      <OneRandomBeer key={randomBeer._id} beer={randomBeer}/>
    </div>
  )
}

export default RandomBeer