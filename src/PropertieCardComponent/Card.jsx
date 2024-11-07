import React from 'react'
import "./Card.css"
import { LiaHouseDamageSolid } from 'react-icons/lia'
import { GoLocation } from 'react-icons/go'

const Card = () => {
    return (
        <div className='card-maain'>
            <div className='card-added-property'>
                <article>
                    <img src={"./rooms1.png"} alt="" />
                </article>
                <p style={{ marginTop: "8px" }}>The Ambiance 3 Smart Homes</p>

                <aside>
                    <GoLocation />
                    <p>Abraham adesanya, ijaye, Lagos</p>
                </aside>
                <aside>
                    <LiaHouseDamageSolid />
                    <p>2, Bedroom Tenance Duplex +BQ</p>
                </aside>
            </div>
        </div>
    )
}

export default Card