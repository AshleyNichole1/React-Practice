import React from 'react'
import Banner from '../Banner'
import ProjectRefrence from './ProjectRefrence'
import './SupportingTech.css'

export default function Projects() {
    return (
        <section className="tech">
            <Banner
                heading="Porfolio Projecs" />
            <div className="techGallery">
                <ProjectRefrence
                    url='http://nursingadlib.ashleynichole.net/index.html'
                    projname="Fed1 Studio Project"
                />
            </div>
        </section>
    )
}
