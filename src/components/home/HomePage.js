import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
    <div className="home-page">
        <h1>Home Page Administration</h1>
        <p>This is a React app for ultra-responsive web apps.</p>
        <Link to="root" className="app">
            Learn More
        </Link>


    </div>
);

export default HomePage;