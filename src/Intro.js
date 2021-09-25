import React from 'react'
import './Intro.css'

export default function Intro(props) {
    return (
        <section>
            <h2>{props.title}</h2>
            <img src={props.image} alt={props.alt}></img>
            <p>{props.description} </p>
        </section>
    )
}
