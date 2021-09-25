import React from 'react'

export default function FunFacts(props) {
    return (
        <section>

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
