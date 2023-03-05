import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './OneBeer.css'

function OneBeer() {
  const { id } = useParams()
  const [beer, setBeer] = useState(null)

  useEffect(() => {
    async function fetchBeer() {
      try {
        const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        const data = await response.json()
        setBeer(data);
      } catch (error) {
        console.error(error)
      }
    }
    fetchBeer()
  }, [id]);

  if (!beer) {
    return <div>Loading...</div>
  }

  return (
    <div className='OneBeerCard'>
      <div className='OneBeerImg'>
        <picture><img src={beer.image_url} alt={beer.name} /></picture>
      </div>
     
      <div className='OneBeerInfos'>
        <p className='first'><span>{beer.name}</span>
        <span className='level'>{beer.attenuation_level}</span></p>

        <p className='second'><span className='tagline'>{beer.tagline}</span>
        <span>{beer.first_brewed}</span></p>
      </div>

      <div className='last'>
        <p>{beer.description}</p>
        <p className='contributor'>{beer.contributed_by}</p>
      </div>
    </div>
  )
}

export default OneBeer
