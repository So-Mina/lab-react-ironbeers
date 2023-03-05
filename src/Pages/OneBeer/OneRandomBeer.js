import React from 'react'
import './OneBeer.css'

const OneRandomBeer = (props) => {
  const beer = props.beer

  return (
    <div className='OneRandomBeer'>
      <div className='RandomCardImg'>
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

export  default OneRandomBeer