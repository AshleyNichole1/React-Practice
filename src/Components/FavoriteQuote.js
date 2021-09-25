import React from 'react'

export default function FavoriteQuote(props) {
    return (
        <section>
            <h2>{props.title}</h2>
            <p>{props.quote}
                <br />
                {props.credit}
            </p>
        </section>
    )
}
