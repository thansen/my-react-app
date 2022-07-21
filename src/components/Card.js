import React from "react"
import './Card.css'

const Card = props => (
    <div class="Card">
        <img alt="" src={props.image}/>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
)

export default Card