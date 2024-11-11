import React from 'react'
import "./AgentLandCard.css"


const AgentLandCard = ({ h1Text, pText }) => {
    return (
        <div className='box-card-main'>
            <article className='small-circless'>
                <img src={"./avatar.png"} alt="" />
            </article>
            <h3>{h1Text}</h3>
            <p>{pText}</p>

            <input type="radio" className='radio' />
        </div>
    )
}

export default AgentLandCard