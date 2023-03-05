import React, { useState } from 'react'
import './NewBeerForm.css'

function NewBeerForm() {

  const [name, setName] = useState('')
  const [tagline, setTagline] = useState('')
  const [description, setDescription] = useState('')
  const [firstBrewed, setFirstBrewed] = useState('')
  const [brewersTips, setBrewersTips] = useState('')
  const [attenuationLevel, setAttenuationLevel] = useState(0)
  const [contributedBy, setContributedBy] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const newBeer = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };

    try {
      const response = await fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBeer),
      });

      if (response.ok) {
        console.log('Beer created successfully')
        window.location.href = '/beers'
  
      } else {
        console.error('Failed to create beer')
      }
    } catch (error) {
      console.error(error)
    }
  };

  return (

    <form onSubmit={handleSubmit}>
          <h2> Add New Beer</h2>
        
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder='Name of the beer'/>
      </div>

      <div>
        <label htmlFor="tagline">Tagline</label>
        <input type="text" id="tagline" value={tagline} onChange={(event) => setTagline(event.target.value)} placeholder='Tagline'/>
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)} placeholder='Add a description'/>
      </div>

      <div>
        <label htmlFor="firstBrewed">First Brewed</label>
        <input type="text" id="firstBrewed" value={firstBrewed} onChange={(event) => setFirstBrewed(event.target.value)} placeholder='Frist brewed'/>
      </div>

      <div>
        <label htmlFor="brewersTips">Brewer's Tips</label>
        <textarea id="brewersTips" value={brewersTips} onChange={(event) => setBrewersTips(event.target.value)} placeholder='Tips for that beer'/>
      </div>

      <div>
        <label htmlFor="attenuationLevel">Attenuation Level</label>
        <input type="number" id="attenuationLevel" value={attenuationLevel} onChange={(event) => setAttenuationLevel(event.target.value)} min='0'/>
      </div>

      <div>
        <label htmlFor="contributedBy">Contributed By</label>
        <input type="text" id="contributedBy" value={contributedBy} onChange={(event) => setContributedBy(event.target.value)} placeholder='Your name here'/>
      </div>

      <button type="submit">Create Beer</button>
    </form>
  )
}

export default NewBeerForm
