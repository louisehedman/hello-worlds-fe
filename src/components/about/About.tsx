import React from 'react';
import "./About.css";

const About: React.FC = () => {
    return (
        <div className="container my-3">
            <div className="card bg-black rounded mb-4 border border-success bg-opacity-75 text-center text-white">
                <div className="card-body w-75 m-auto">
                    <h2 className="card-title my-3">About Hello World(s)</h2>
                    <h3 className="card-subtitle mb-2 text-success">How It All Began</h3>
                    <p className="card-text">The idea was born one starry night when a swedish developer team of eight were lying looking at the stars. One of them suddenly said "Isn't it sad we are limited just to earth?". As developers, who are curious and inventive by nature, they had to figure out a way to let people explore space, and so they did! </p>
                    <p className="card-text">Many experts said that it's impossible to let people travel to the other planets within our galaxy. But the developers couldn't take it, their mantra was, and is, everything is possible. By time they found more and more experts and engineers specialized in different areas of space and rocket science who also believed that the idea was possible to convert to reality. They worked hard together day and night for some years and in september 3022 the first trip was arranged with 30 passengers. You can read about recent trips in our blog on start page!</p>
                    <img src={"/images/rocket.png"} className="img-fluid opacity-100" alt="Rocket launch" />
                    <h3 className="card-subtitle mb-2 text-success my-3">Our Vision</h3>
                    <p className="card-text">Our vision is to let people in a secure way explore our solar system and let our travelers compose their own dream trips. We will keep provide the fastest and most comfortable spacecrafts on the market, which will keep us being travelers first choice in space traveling. With many travelers we can realize many trips. As Neil Armstrong said over a thousand years ago: "It's one small step for a man. One giant leap for mankind". For thousands of years people have been dreaming unrealistic dreams about exploring space, people still dream them but with Hello World(s) they have become our new reality. We open the door to space for you, welcome to travel with us!</p>
                    <img src={"/images/astronaut.png"} className="img-fluid" alt="Astronaut walking on planet" />
                    <h3 className="card-subtitle mb-2 text-success my-3">Our Departments</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-dark text-white">Rocket Launch Team</li>
                        <li className="list-group-item bg-dark text-white">Space and Rocket Scientists and Engineers</li>
                        <li className="list-group-item bg-dark text-white">Customer Service Team</li>
                        <li className="list-group-item bg-dark text-white">Developer team Team Rocket</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;