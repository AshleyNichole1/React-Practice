import React from 'react'
import './Intro.css'

export default function Intro(props) {
    return (
        <article className="component-intro">

            <img src={props.image} alt={props.alt}></img>
            <div className="text">
                <p>{props.description} </p>
            </div>
        </article>
    )
}
