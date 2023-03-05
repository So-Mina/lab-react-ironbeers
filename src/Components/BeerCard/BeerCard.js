import React from 'react'
import { Link } from 'react-router-dom'
import './BeerCard.css'

const BeerCard = (props) => {
  const beer = props.beer

  return (
  <>
    <div className='BeerCard'> 
      <div className='CardImg'>
        <picture><img src={beer.image_url} alt={beer.name}/></picture>
        </div>
      <div className='CardInfos'>
        <h3><Link to={'/beer/' + beer._id}>{beer.name}</Link></h3>
        <p className='tagline'>{beer.tagline}</p>
        <p><b>Created by:</b>{beer.contributed_by}</p>
      </div>
    </div>
    <hr/>
  </>
  )
}

export default BeerCard