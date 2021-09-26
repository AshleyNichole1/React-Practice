import React from 'react'
import Banner from '../Banner'
import ProjectRefrence from './ProjectRefrence'
import './SupportingTech.css'

export default function Projects() {
    return (
        <section className="projects" >
            <Banner
                heading="Porfolio Projecs" />
            <div >
                <ProjectRefrence
                    url='http://nursingadlib.ashleynichole.net/index.html'
                    projname="Fed1 Studio Project"
                />
            </div>
            <div >
                <ProjectRefrence
                    url='http://storefront.ashleynichole.net/'
                    projname="StoreFront MVC Application"
                />
            </div>
            <div >
                <ProjectRefrence
                    url='https://github.com/AshleyNichole1/React-Practice'
                    projname="React Profile"
                />
            </div>
            <div >
                <ProjectRefrence
                    url='http://https://github.com/AshleyNichole1/DungeonApp.ashleynichole.net/index.html'
                    projname="Dungeon C# Application"
                />
            </div>
        </section>
    )
}
