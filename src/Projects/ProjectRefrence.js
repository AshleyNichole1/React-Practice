import React from 'react'

export default function ProjectRefrence(props) {
    return (
        <article >
            <a className="btn btn-color" href={props.url} target='_blank' rel='noreferrer' >
                {props.projname}
            </a>
        </article>
    )
}
