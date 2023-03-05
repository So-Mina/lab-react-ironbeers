import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"    
import BeerCard from '../../Components/BeerCard/BeerCard'
import { Divider } from 'antd'

function BeersList () {
  const [beers, setBeers ] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function fetchBeers() {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
        // console.log('response.data', response.data)
        setBeers(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchBeers()
  }, [])

  if (!beers) {
    return <div className="Loading">Loading...</div>
  }

  const handleSearch = async (event) => {
    const searchTerm = event.target.value
    setSearchTerm(searchTerm);

    if (searchTerm) {
      const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchTerm}`)
      const data = await response.json()
      setBeers(data)
    } else {
      const response = await fetch('https://ih-beers-api2.herokuapp.com/beers')
      const data = await response.json()
      setBeers(data)
    }
  }

  return (
    <div className='BeersList'>

    <Divider> Search </Divider>
      <div className='searchbar'><input type="text" placeholder="Search beers by name" value={searchTerm} onChange={handleSearch} /></div>

    <Divider> Beers List </Divider>
      {beers.map((beer) => {
        // console.log(beer)
        return (
          <BeerCard key={beer._id} beer={beer} />
        )
      })}
    </div>
  )
}

export default BeersList