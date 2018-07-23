import React, { Component } from 'react';
import HeroButton from './HeroButton.js';


class Hero extends React.Component {
    render() {
        return (
            <div id="hero" className="Hero" style={{ backgroundImage: 'url(https://image.ibb.co/eRfNmy/house_03.jpg)' }}>
                <div className="content">
                    <h1>Find a Property Manager anywhere in the world</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.</p>
                    <div className="button-wrapper">
                        <HeroButton primary={true} text="Explore Properties" />
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
        );
    }

}
export default Hero;
