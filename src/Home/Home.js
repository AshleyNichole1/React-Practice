import React from "react";
import Intro from "../Intro";
// import Header from "../Header";
import "../App.css"
import FunFacts from "../Components/FunFacts";
import FavoriteQuote from "../Components/FavoriteQuote";
import "../Intro.css"
import image from "../images/Background.jpg"


export default function Home() {
    return (
        <section>
            <Intro
                title="Ashley Smith"
                image={image}
                alt="Blue and black cloud background image"
                description="Hello hello.
                I'm Ashley,
                I am a semi active person but I would like to do more like: Kayaking, hiking, skiing, traveling. etc. I enjoy reading, relaxing and Bob's Burgers.
                I decided to start my journey into IT because I've always been a logical thinker, and have had a great understanding for computers. I pick up on things quickly and I have a few family members in IT, which contributed to my decision. I'm excited to get out of my current bartending job and move into my new IT career."
            />
            <FunFacts
                title="Fun Facts"
                tech="React"
                food="Tacos!"
                show="TWD"
            />
            <FavoriteQuote
                title="Favorite Quote"
                quote="Believe you can and you're halfway there."
                credit="Theodore Roosevelt"
            />
        </section>

    )
}
