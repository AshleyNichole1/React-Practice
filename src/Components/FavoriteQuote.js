import React from 'react'


export default function FavoriteQuote(props) {
    return (
        <section>

            <p>{props.quote}
                <br />
                {props.credit}
            </p>
        </section>
    )
}
