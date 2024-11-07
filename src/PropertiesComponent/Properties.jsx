import React from 'react'
import "./Properties.css"
import Card from '../PropertieCardComponent/Card'
const Properties = () => {
  return (
    <div className='propertie-main-div'>
      <section className='exclusive-offer'></section>

      <section className='overview-property'>
        <p>Overview of all properties</p>

        <div className='edit-and-addProperty'></div>
      </section>

      <section className='search-property-div'></section>

      <section className='property-card-div'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  )
}

export default Properties