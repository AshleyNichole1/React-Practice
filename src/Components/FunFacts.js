import React from 'react'

export default function FunFacts(props) {
    return (
        <section>
            <h2>{props.title}</h2>
            <p>Fav Tech:
                {props.tech}
                <br />
                Fav Food:
                {props.food}
                <br />
                Fav TV Show:
                {props.show}
                <br />
            </p>
        </section>
    )
}
